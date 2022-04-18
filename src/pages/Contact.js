import Nav from "../components/Nav";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState,useEffect } from "react";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import TitleSections from "../components/TtileSections";
import Square from "../components/Square";


const Contact = () => {
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState();

    // checking with a get request to see registered email in API
    useEffect(() => {
        axios("http://localhost:4000/contact_messages")
        .then(response => {
            console.log(response.data)
        })
    }, []);

    const onSubmit = (data) => {
        console.log(data.name.length);
        if(!data.name || data.name.length < 4 || !data.name.match(/\s/g)) {
            setMessage("Enter a valid First and Lastname");
        }
        else if(!data.email && !data.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            setMessage("Enter a valid Email");

        }
        else if(data.content.length < 20){
            setMessage("You message is to short");
        }
        else {
            setMessage("Thank you for your message");
            axios.post("http://localhost:4000/contact_messages", data)
            .then(response => {               
                console.log(response.data)
            }
            )
        }
    }

    return ( 
        <div className="contactWrapper">
            <header className="navigationWrapper">
                <Nav/>
            </header>
            <main className="mainContact">
                <div style={{padding:"65px 0"}}>
                    <TitleSections name="Contact Us" />
                </div>
                <section className="formWrapper">
                    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                        <input className="name" type="text" {...register("name")} placeholder="Enter Your Name"/>
                        <input className="email" type="email" {...register("email")} placeholder="Enter Your Email"/>
                        <input className="website" type="email" {...register("website")} placeholder="Enter Your Website"/>
                        <textarea name="/" id="" cols="30" rows="10" {...register("content")} placeholder="Your Comment"></textarea>
                        <button className="wrapperButton" type="submit">Submit</button>
                        {message ? <p style={{color:"white"}}>{message}</p> : null}
                    </form>
                    <div className="contactInfo">
                        <Square/>
                        <div className="infoFirstColumn">
                            <div>
                                <img className="contactIcons" src="/svg/map.svg" alt="map" />
                                <p>04, A Agroha Neaga, Agra Mumbai National Highway No.3, Dewas # 455001 India.</p>
                            </div>
                            <div>
                                <img className="contactIcons" src="/svg/phone.svg" alt="phone" />
                                <p>+61 8 7804 6310</p>
                            </div>
                       </div>
                        <div className="infoSecondColumn">
                            <div>
                                <img className="contactIcons" src="/svg/email.svg" alt="email" />
                                <p>@Hsoft.com</p>
                            </div>
                            <div>
                                <img className="contactIcons" src="/svg/web.svg" alt="web" />
                                <p>www.Hsoft.com</p>
                            </div>
                       </div>
                    </div>
                </section>
            </main>
            <footer className="mainFooter" style={{background:"black"}}>
                <Footer/>
                <Copyright/>
            </footer>
        </div>
     );
}
 
export default Contact;