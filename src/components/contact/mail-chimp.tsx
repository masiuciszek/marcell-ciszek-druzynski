import React, { useCallback, useMemo } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "@emotion/styled"
import StrokeWrapper from "../common/stroke-wrapper"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import { above } from "@/styles/media-query"
import { elements, elevations, sizes } from "@/styles/styled-record"
import { css } from "@emotion/css"
import Debugger from "./debugger"
import { isDev, re } from "@/util"
import { motion } from "framer-motion"
import useForm from "@/hooks/form"

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
const SubmitButton = styled(motion.button)`
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

const ErrorDisplay = styled.p`
  padding: ${pxToRem(1.5)} 0;
  position: relative;
  line-height: ${pxToRem(10)};
  &::after {
    content: "";
    position: absolute;
    top: ${pxToRem(8)};
    height: ${pxToRem(8)};
    opacity: 0.4;
    background-color: ${elements.fillerStroke};
    width: 56%;
    left: 0;
  }
`

const MailChimp = () => {
  const { getPropField, ...state } = useForm({
    values: useMemo(() => ({ name: "", email: "" }), []),
    validate: useCallback((values: Record<string, string>) => {
      const errors: Record<string, string> = {}
      if (values.name.length <= 1) {
        errors.name = "Please fill in a valid name"
      }
      if (!values.email || !re.test(values.email)) {
        errors.email = "please enter a valid email address"
      }
      return errors
    }, []),
    onSubmit: useCallback(async (values: Record<string, string>) => {
      await addToMailchimp(values.email, { FNAME: values.name })
    }, []),
  })
  const { errors, touched, handleSubmit } = state

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
          {errors.name && touched.name && <ErrorDisplay>{errors.name}</ErrorDisplay>}
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
          />
          {errors.email && touched.email && <ErrorDisplay>{errors.email}</ErrorDisplay>}
        </FormGroup>
        <SubmitButton
          type="submit"
          whileHover={{ scale: 1.05, rotate: 1, backgroundColor: elements.background }}
        >
          Submit
        </SubmitButton>
      </Form>
    </>
  )
}

export default MailChimp
