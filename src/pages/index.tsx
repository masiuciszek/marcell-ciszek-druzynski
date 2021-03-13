import * as React from "react"

interface Person {
  name: string
  age: number
}

const HomePage = () => {
  const person: Person = {
    name: "Marcell",
    age: "2",
  }

  return (
    <h1>
      {person.name} {person.age}{" "}
    </h1>
  )
}

export default HomePage
