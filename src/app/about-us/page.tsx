import React from 'react'
import Image from 'next/image'

import Navbar from '../components/navbar/navbar'
import TeamSliderTwo from '../components/team-slider-two'
import FooterTop from '../components/footer-top'
import Footer from '../components/footer'
import ScrollToTop from '../components/scroll-to-top'

export default function Page() {
    const data = [
        {
            icon:'fa-solid fa-unlock-keyhole text-primary',
            title:'Secure Transactions & Dedicated Support',
            desc:'Experience peace of mind with our robust security measures and round-the-clock support, always here for you.'
        },
        {
            icon:'fa-solid fa-handshake-simple text-primary',
            title:'Personalized Guidance & Expert Advice',
            desc:'Receive tailored insights and professional recommendations to navigate your property journey with confidence.'
        },
        {
            icon:'fa-solid fa-heart text-primary',
            title:'Passionate Professionals, Your Success is Our Goal',
            desc:'Our team is driven by a genuine love for real estate and a commitment to achieving your desired outcomes.'
        },
    ]

  return (
    <>
        <Navbar transparent={false}/>   

        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">About Real Estate One Stop Solutions</h2>
                        <span className="ipn-subtitle">Your Trusted Partner in Property Journeys</span>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <Image src='/img/sb.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="story-wrap explore-content">
                            <h2>Our Journey, Your Home</h2>
                            <p>At Real Estate One Stop Solutions, we believe finding your perfect property should be an exciting, seamless adventure. We started with a vision to simplify real estate, making it accessible and enjoyable for everyone.</p>
                            <p>From first-time buyers to seasoned investors, our mission is to empower your decisions with expert guidance and a personal touch. We're here to turn your property dreams into a beautiful reality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="sec-heading center">
                            <h2>Our Visionaries</h2>
                            <p>The Heartbeat of Our Success</p>
                        </div>
                    </div>
                </div>
            <TeamSliderTwo/>
            </div>
        </section> */}

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="sec-heading center">
                            <h2>Our Approach & Core Values</h2>
                            <p>Guiding Principles for Every Step</p>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        {data.map((item:any,index:number)=>{
                            return(
                                <div className="icon-mi-left" key={index}>
                                    <i className={item.icon}></i>
                                    <div className="icon-mi-left-content">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src="/img/vec-2.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <FooterTop bg="theme-bg"/>

        <Footer/>

        <ScrollToTop/>
    </>
  )
}
