import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import Subscription from "../components/Subscription";
import Testimonials from "../components/Testimonials";
import TitleSections from "../components/TtileSections";
import Welcome from "../components/Welcome";
import "./Home.scss";
import Copyright from "../components/Copyright";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from "react";
import axios from "axios";



const Home = () => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seeGallery, setSeeGallery] = useState(false);
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.2,
    })

    const ligthBox = () => {
        setSeeGallery(true)
    }
    const close = () => {
        setSeeGallery(false)
    }

    

    

    useEffect(() => {
        axios.get("http://localhost:4000/gallery")
            .then(response => {
                console.log(response.data);
                setGallery(response.data)
                setLoading(false)
            })
    }, []);


    
    return loading ? <p>loading</p> : ( 
        <article className="wrapper">
            {/* controls the opacity */}
            { seeGallery ? <div className="wholeGallery" > 
                                {/* controls the closure of the ligthbox */}
                                <div onClick={close} className="semi-visible">

                                </div>
                                {/* full-visibility and fills only partly in the middle of the screen */}
                                <div className="full-visibility">
                                    {gallery.map((image) => {
                                        return <div className="galleryImage">
                                            <img src={image.asset.url} alt="" />
                                        </div>})}
                                </div>
                            </div> : null }
            <header className="hero">
                    <img className="hero_img" src={`/img/header${Math.floor(Math.random()*2 + 1)}.jpg`} alt="hero" />
                    <div className="logoWrapper">
                        <img className="logo" src="/svg/logo.svg" alt="logo" />
                        <div className="slide">
                            <p>HAVE A GOOD TIME</p>
                            <img src="/img/bottom_line.png" alt="bottom_line" />
                        </div>
                    </div>
            </header>
            <Nav/>
            <main className="mainWrapper">
                <TitleSections name="WELCOME IN NIGTH" span="CLUB"/>
                <div className="welComeCards">
                    <Welcome svg="/svg/bar.svg" title="Bar" img="/img/bar.jpg"/>
                    <Welcome svg="/svg/food.svg" title="Restaurant" img="/img/restaurant.jpg"/>
                    <Welcome  svg="/svg/disco.svg"title="Disco" img="/img/disco.jpg"/>
                </div>
            
                <TitleSections name="EVENTS OF THE MONTH"/>
                <Slider/>

                <TitleSections name="NIGHT CLUB GALLERY"/>
                <div onClick={ligthBox} ref={ref} className="galleryContainer">
                    {inView ? <Gallery/> : null}
                    
                </div> 

                <Testimonials/>
                <Subscription/>
            </main>
            
            <footer className="mainFooter">
                <Footer/>
                <Copyright/>
            </footer>
           


        </article>
        
     );
}
 
export default Home;