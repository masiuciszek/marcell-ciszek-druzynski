import { elements } from "@/styles/styled-record"
import styled from "@emotion/styled"
import React from "react"

interface DebuggerProps {
  data: {
    values: Record<string, string>
    errors: Record<string, string>
    touched: Record<string, boolean>
    isSubmitting: boolean
  }
}

const Pre = styled.pre`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${elements.bgShadow};
  width: 30rem;
`

const Debugger: React.FC<DebuggerProps> = ({ data }) => {
  console.log(data)
  return <Pre>{JSON.stringify(data, null, 4)}</Pre>
}
export default Debugger
