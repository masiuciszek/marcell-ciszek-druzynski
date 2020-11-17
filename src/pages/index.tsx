import React from "react"
import { PageProps } from "gatsby"

import Title from "@/components/Title"
import Apa from "@/components/Apa"

const Home: React.FC<PageProps> = () => (
  <main>
    <Title />

    <Apa />
  </main>
)

export default Home
