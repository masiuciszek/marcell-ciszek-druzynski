import React, { useReducer, useState, Reducer, useEffect, useCallback, useMemo } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "@emotion/styled"
import StrokeWrapper from "./common/stroke-wrapper"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import { above } from "@/styles/media-query"
import { elements, elevations, sizes } from "@/styles/styled-record"
import { css } from "@emotion/css"
import Debugger from "./debugger"

const isDev = () => process.env.NODE_ENV === "development"

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${pxToRem(10)};
  padding: ${pxToRem(10)};
  border-radius: ${elements.borderRadiusS};
  margin: 0 auto ${pxToRem(16)} auto;
  background-color: ${elements.bgShadow};
  color: ${elements.background};

  @media ${above.tablet} {
    grid-template-columns: repeat(6, 1fr);
  }
  margin-bottom: ${pxToRem(16)};
`
const Content = styled.div`
  p {
    font-size: ${sizes.h5};
  }
  @media ${above.tablet} {
    grid-column: 1/6;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${pxToRem(10)};
  @media ${above.tablet} {
    &:nth-of-type(2) {
      grid-column: span 3;
    }
    &:nth-of-type(3) {
      grid-column: span 3;
    }
  }
`

const Label = styled.label`
  span {
    margin-left: ${pxToRem(8)};
  }
`

const Input = styled.input`
  height: ${pxToRem(40)};
  border: 1px solid ${elements.p};
  border-radius: ${elements.borderRadiusS};
  box-shadow: ${elevations.shadowM};
  outline: none;
  font-size: ${pxToRem(16)};
  padding-left: ${pxToRem(8)};
  &:focus {
    box-shadow: 0 0 0 1px ${elements.stroke};
  }
  &::placeholder {
    padding-left: ${pxToRem(8)};
  }
`
const SubmitButton = styled.button`
  ${buttonResetStyles};
  @media ${above.tablet} {
    grid-column: span 6;
    width: 20rem;
    margin: 0 auto;
  }
  color: ${elements.p};
  height: ${pxToRem(40)};
  margin-bottom: ${pxToRem(16)};
  border: 1px solid ${elements.p};
  border-radius: ${elements.borderRadiusS};
  box-shadow: ${elevations.shadowM};
  font-size: ${pxToRem(16)};
  background-color: ${elements.fillerStroke};
`
const strokeStyles = css`
  color: ${elements.fillerStroke};
  &::after {
    background-color: ${elements.fillerStroke};
  }
`

interface State {
  values: Record<string, string>
  errors: Record<string, string>
  touched: Record<string, boolean>
  isSubmitting: boolean
}

const SET_FIELD_VALUE = "SET_FIELD_VALUE"
const SET_FIELD_TOUCHED = "SET_FIELD_TOUCHED"
const SET_FIELD_ERRORS = "SET_FIELD_ERRORS"
const SUBMIT_ATTEMPT = "SUBMIT_ATTEMPT"

type Action =
  | { type: typeof SET_FIELD_VALUE; payload: Record<string, string> }
  | { type: typeof SET_FIELD_TOUCHED; payload: Record<string, boolean> }
  | { type: typeof SET_FIELD_ERRORS; payload: Record<string, string> }
  | { type: typeof SUBMIT_ATTEMPT }

const reducer: Reducer<State, Action> = (state: State, action: Action) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      }
    case SET_FIELD_TOUCHED:
      return {
        ...state,
        touched: {
          ...state.touched,
          ...action.payload,
        },
      }
    case SET_FIELD_ERRORS:
      return {
        ...state,
        errors: action.payload,
      }
    case SUBMIT_ATTEMPT:
      return {
        ...state,
        isSubmitting: true,
      }
    default:
      throw new Error(`could not parse action.type`)
  }
}

interface InitialValues {
  values: {
    [key: string]: string
  }
  validate: (values: Record<string, string>) => Record<string, string>
  onSubmit: (values: Record<string, string>) => Promise<void>
}

const useForm = ({ values, validate, onSubmit }: InitialValues) => {
  const [state, dispatch] = useReducer(reducer, {
    values,
    errors: {},
    touched: {},
    isSubmitting: false,
  })

  useEffect(() => {
    if (validate) {
      const errors = validate(state.values)
      dispatch({ type: "SET_FIELD_ERRORS", payload: errors })
    }
  }, [state.values, validate])

  const getPropField = (fieldName: string) => ({
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    onBlur: handleBlur(fieldName),
  })

  const handleChange =
    (fieldName: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({ type: "SET_FIELD_VALUE", payload: { [fieldName]: event.target.value } })
    }

  const handleBlur =
    (fieldName: string) =>
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      event.persist()
      dispatch({ type: "SET_FIELD_TOUCHED", payload: { [fieldName]: true } })
    }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // onSubmit()
  }

  return { getPropField, handleSubmit, ...state }
}

const MailChimp = () => {
  const { getPropField, ...state } = useForm({
    values: useMemo(() => ({ name: "", email: "" }), []),
    validate: useCallback((values: Record<string, string>) => {
      const errors: Record<string, string> = {}
      if (values.name.length <= 1) {
        errors.name = "Please fill in a valid name"
      }
      if (!values.email || values.email.length < 10) {
        errors.email = "email must be filled in"
      }
      return errors
    }, []),
    onSubmit: useCallback(async (values: Record<string, string>) => {
      await addToMailchimp(values.email, { FNAME: values.name })
    }, []),
  })
  const { errors, touched, handleSubmit } = state
  console.log({ state, errors })

  return (
    <>
      {isDev() && <Debugger data={state} />}
      <Form onSubmit={handleSubmit}>
        <Content>
          <p>
            Want to read more about <StrokeWrapper className={strokeStyles}>React</StrokeWrapper>,{" "}
            <StrokeWrapper className={strokeStyles}>Javascript</StrokeWrapper> and other cool dev
            topics
          </p>
          <p>
            Sign up for my <StrokeWrapper className={strokeStyles}>newsletter</StrokeWrapper>
          </p>
        </Content>
        <FormGroup>
          <Label htmlFor="name">
            <span>Your name</span>
          </Label>
          <Input id="name" type="text" name="name" placeholder="you" {...getPropField("name")} />
          {errors.name && touched.name && <p>{errors.name}</p>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            <span>Your email</span>
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="you@example.com"
            {...getPropField("email")}
            autoComplete="email"
          />
          {errors.email && touched.email && <p>{errors.email}</p>}
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </>
  )
}

export default MailChimp
