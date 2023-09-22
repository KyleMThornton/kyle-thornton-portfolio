"use client"

import Footer from "@/components/Footer"
import HeaderText from "@/components/HeaderText"
import NavBar from "@/components/NavBar"
import Projects from "@/components/Projects"
import Projects2 from "@/components/Projects2"

export default function Home() {
  return (
    <main>
      <HeaderText />
      <NavBar />
      <Projects />
      <Projects2 />
      <Footer />
    </main>
  )
}
