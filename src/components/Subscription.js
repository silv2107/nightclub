import { useForm } from "react-hook-form";
import axios from "axios";
import { useState,useEffect } from "react";
import "./Subscription.scss";

const Subscription = () => {
    const { register, handleSubmit } = useForm()
    const [message, setMessage] = useState();

    // checking with a get request to see registered email in API
    useEffect(() => {
        axios("http://localhost:4000/newsletters")
        .then(response => {
            console.log(response.data)
        })
    }, []);

    const onSubmit = (data) => {
        console.log(data.email);
        if(data.email && data.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            setMessage("You email is registered");
            //registering valid emails in API 
            axios.post("http://localhost:4000/newsletters", data)
            .then(response => {               
                console.log(response.data)
            }
            )

        }
        else {
            setMessage("Enter a valid email");
        }
    }
    return ( 
        <div className="subscriptionWrapper">
            <h3>WANT THE LATEST NIGTH CLUB NEWS</h3>
            <p>Subscribe to our newsletter and never miss an <span>Event</span></p>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <input className="email" type="email" {...register("email")} placeholder="Enter Your Email"/>
                <button className="wrapperButton" type="submit">Subscribe</button>
                {message ? <p className="invalidMessage">{message}</p> : null}
            </form>
        </div>
     );
}
 
export default Subscription;