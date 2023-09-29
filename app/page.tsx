import About from "@/components/About"
import Footer from "@/components/Footer"
import HeaderText from "@/components/HeaderText"
import NavBar from "@/components/NavBar"
import Projects from "@/components/Projects"
import Tech from "@/components/Tech"

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeaderText />
      <About />
      <Tech />
      <Projects />
      <Footer />
    </main>
  )
}
