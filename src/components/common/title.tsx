import React from "react"

interface TitleProps {
  className?: string
  mainTitle: string
}

const Title: React.FC<TitleProps> = ({ className, mainTitle }) => {
  return <h1>{mainTitle}</h1>
}
export default Title
