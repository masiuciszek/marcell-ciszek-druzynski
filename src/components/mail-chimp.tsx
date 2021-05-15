import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import styled from "@emotion/styled"
import StrokeWrapper from "./common/stroke-wrapper"
import { buttonResetStyles, pxToRem } from "@/styles/css-utils"
import { above } from "@/styles/media-query"
import { elements, elevations, sizes } from "@/styles/styled-record"
import { css } from "@emotion/css"

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
// TODO: Useform hook for validation
// const useForm = () => {}

const strokeStyles = css`
  color: ${elements.fillerStroke};
  &::after {
    background-color: ${elements.fillerStroke};
  }
`

const MailChimp = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await addToMailchimp(email, { FNAME: name })
  }

  return (
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
        <Input
          id="name"
          type="text"
          value={name}
          name="name"
          placeholder="you"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">
          <span>Your email</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          name="email"
          placeholder="you@example.com"
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
      </FormGroup>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  )
}

export default MailChimp
