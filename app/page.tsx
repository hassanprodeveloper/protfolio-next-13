import * as React from "react"

import Footer from "./components/footer"
import Header from "./components/header"
import LandingSection from "./views/landing-section"

const Home: React.FC = () => {
  return (
    <main>
      <Header />

      <LandingSection />

      <Footer />
    </main>
  )
}

export default Home
