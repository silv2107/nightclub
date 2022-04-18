import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Slider.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import "./Testimonials.scss";
import { Link } from '@reach/router';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        axios.get("http://localhost:4000/testimonials")
            .then(response => {
                console.log(response.data);
                setTestimonials(response.data)
                setLoading(false)
            })
    }, []);
    return loading ? <p>loading</p> : ( 
        <div className='sliderTestimonialWrapper'>
             <AliceCarousel>
            {/* mappes over array og der hivises to img i en div med to images bliver trukket ud af api'et */}
            {testimonials.map((testimonial)=> {
                return  <div className='sliderTestimonials'>
                            <img src={testimonial.asset.url} alt="" />
                            <p className='testimonialName'>{testimonial.name}</p>
                            <p>{testimonial.content}</p>
                            <div className='soMe'>
                                <Link className='soMeLink' to="/facebook"><img src="/svg/facebook.svg" alt="" /></Link>
                                <Link className='soMeLink' to="/twitter"><img src="/svg/twitter.svg" alt="" /></Link>
                                <Link className='soMeLink' to="/google"><img src="/svg/google.svg" alt="" /></Link>
                            </div>
                        </div>
            })}
           
           
            </AliceCarousel>    
        </div>
     );
}
 
export default Testimonials;