import Hero from "../../components/HomeComponents/Hero";
import Logos from "../../components/HomeComponents/Logos";
import MaskBackground from "../../components/HomeComponents/MaskBackground";
import About from "../../components/HomeComponents/About";
import Projects from "../../components/HomeComponents/Projects";

import Layout from "../../utils/Transition/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="relative min-h-screen w-screen overflow-x-hidden">
        <div className="p-[2.5rem] max-tablet:p-[1rem]">
          <Hero />
        </div>

        <MaskBackground />
        <Logos />
        <div className="bg-background3 m-[2.5rem] rounded-[5rem] max-tablet:m-[1rem] max-tablet:rounded-[2rem]">
          <About />
          <Projects />
        </div>
      </section>

    </Layout>
  )
}

export default Home;