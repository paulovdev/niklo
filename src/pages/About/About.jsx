import Layout from '../../utils/Transition/Layout'
import Hero from '../../components/AboutComponents/Hero';
import Image from '../../components/AboutComponents/Image';
import Paragraph from '../../components/AboutComponents/Paragraph'
import Partners from '../../components/AboutComponents/Partners';
import Services from '../../components/AboutComponents/Services';

const About = () => {
    return (
        <Layout>
            <section className='mx-auto my-0 w-full h-full bg-background4'>

                <div className="p-[2.5rem]">
                    <Hero />
                    <Image />
                </div>

                <div className="max-w-[1200px] mx-auto my-0">
                    <Paragraph />
                </div>


                <div className="p-[2.5rem]">
                    <Partners />
                    <Services />
                </div>

            </section>

        </Layout>
    )
}

export default About;