import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)

const MaskBackground = () => {
    useGSAP((() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'start start',
                end: '+=1500 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        })

        clipAnimation.to('.image-background', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })


        clipAnimation.to('.background-text ', {
            scale: '1.5',
            opacity: 1
        })

    }))


    return (
        <div className='min-h-screen w-screen px-[2.5rem] flex items-center justify-center' id='about'>
            <div className="w-screen h-dvh" id='clip'>
                <div className="image-background absolute left-1/2 top-0 z-20 h-[100vh] origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]"
                    style={{ width: '100%' }}>
                    <img className="img-bg absolute top-0 left-0 size-full object-cover" src="/bg.jpg" alt="" />
                </div>

                <div className="background-text absolute left-1/2 top-1/2 z-20 -translate-x-1/2 opacity-0">
                    <h1 className='text-color text-center text-[3rem] font-[400] tracking-[-1px] leading-[1]'>Unlocking Potential</h1>
                </div>
            </div>
        </div>
    )
}
export default MaskBackground