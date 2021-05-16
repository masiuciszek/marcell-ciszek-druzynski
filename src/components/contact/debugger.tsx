import useToggle from "@/hooks/toggle"
import { buttonResetStyles } from "@/styles/css-utils"
import { elements } from "@/styles/styled-record"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import React from "react"

interface DebuggerProps {
  data: {
    values: Record<string, string>
    errors?: Record<string, string>
    touched?: Record<string, boolean>
    isSubmitting?: boolean
  }
}

const debugStyles = css`
  background-color: ${elements.bgShadow};
  color: ${elements.background};
  width: 30rem;
  margin-bottom: 3rem;
`

const Pre = styled.pre``

const Button = styled.button`
  ${buttonResetStyles};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border: 2px solid ${elements.p};
  width: 6em;
  height: 6em;
  border-radius: 50%;
  cursor: pointer;
`

const Debugger: React.FC<DebuggerProps> = ({ data }) => {
  const { state, toggle } = useToggle()

  return (
    <div className={debugStyles}>
      <Button onClick={toggle} aria-pressed={state} type="button">
        {state ? "hide " : "show "} Debug
      </Button>
      {state && <Pre data-testid="pre-debug">{JSON.stringify(data, null, 4)}</Pre>}
    </div>
  )
}
export default Debugger
