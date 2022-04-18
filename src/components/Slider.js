import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Slider.scss";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Triangle from './Triangle';
import OverlayTextEvent from "./OverlayTextEvent";
import BookNow from './BookNow';

const Slider = () => {
    
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {

        axios.get("http://localhost:4000/events")
            .then(response => {
                console.log(response.data);
                setEvents(response.data)
                setLoading(false)
            })
    }, []);
    return loading ? <p>loading</p> : ( 
        <div className='sliderWrapper'>
             <AliceCarousel >
            {/* mappes over array og der hivises to img i en div med to images bliver trukket ud af api'et */}
            <div className='slider'>
                <div className='sliderContainer'>
                    <div className="bookNowWrapper">
                        <BookNow/>
                    </div>
                    <div className="textEventWrapper">
                        <OverlayTextEvent/>
                    </div>
                    <div className="triangleWrapper">
                        <Triangle />
                    </div>
                    
                    <div className="triangleWrapper2">
                        <Triangle  angle="180deg" top="0" left="0" />
                    </div>
                    <div className="eventWrapper">
                    </div>
                    <img src={events[0].asset.url} alt=""/>
                    <div className="sliderDescription">{ events[0].date.slice(0,9) } { events[0].date.slice(11,16) } { events[0].location }</div>
                </div>
                <div className='sliderContainer'>
                    <div className="bookNowWrapper">
                        <BookNow/>
                    </div>
                    <div className="textEventWrapper">
                        <OverlayTextEvent/>
                    </div>
                    <div className="triangleWrapper">
                        <Triangle />
                    </div>
                    <div className="triangleWrapper2">
                        <Triangle  angle="180deg" top="0" left="0" />
                    </div>
                    <div className="eventWrapper">
                    </div>
                    <img src={events[1].asset.url} alt=""/>
                    <div className="sliderDescription">{ events[1].date.slice(0,9) } { events[1].date.slice(11,16) } {events[1].location}</div>
                </div>
                
            </div>
            <div className='slider'>
                <div className='sliderContainer'>                    
                    <div className="bookNowWrapper">
                        <BookNow/>
                    </div>
                    <div className="textEventWrapper">
                        <OverlayTextEvent/>
                    </div>
                    <div className="triangleWrapper">
                        <Triangle />
                    </div>
                    <div className="triangleWrapper2">
                        <Triangle  angle="180deg" top="0" left="0" />
                    </div>
                    <div className="eventWrapper">
                    </div>
                    <img src={events[2].asset.url} alt=""/>
                    <div className="sliderDescription">{ events[2].date.slice(0,9) } { events[2].date.slice(11,16) } {events[2].location}</div>
                </div>
                <div className='sliderContainer'>
                    <div className="bookNowWrapper">
                        <BookNow/>
                    </div>
                    <div className="textEventWrapper">
                        <OverlayTextEvent/>
                    </div>
                    <div className="triangleWrapper">
                        <Triangle />
                    </div>
                    <div className="triangleWrapper2">
                        <Triangle  angle="180deg" top="0" left="0" />
                    </div>
                    <div className="eventWrapper">
                        
                    </div>
                    <img src={events[3].asset.url} alt=""/>
                    <div className="sliderDescription">{ events[3].date.slice(0,9) } { events[3].date.slice(11,16) } {events[3].location}</div>
                </div>
            </div>
            <div className='slider'>
                <div className='sliderContainer'>
                    <div className="bookNowWrapper">
                        <BookNow/>
                    </div>
                    <div className="textEventWrapper">
                        <OverlayTextEvent/>
                    </div>
                    <div className="triangleWrapper">
                        <Triangle />
                    </div>
                    <div className="triangleWrapper2">
                        <Triangle  angle="180deg" top="0" left="0" />
                    </div>
                    <div className="eventWrapper">
                    </div>
                    <img src={events[4].asset.url} alt=""/>
                    <div className="sliderDescription">{ events[4].date.slice(0,9) } { events[4].date.slice(11,16) } {events[4].location}</div>
                </div>
                <div className='sliderContainer'>
                    <div className="bookNowWrapper">
                        <BookNow/>
                    </div>
                    <div className="textEventWrapper">
                        <OverlayTextEvent/>
                    </div>
                    <div className="triangleWrapper">
                        <Triangle />
                    </div>
                    <div className="triangleWrapper2">
                        <Triangle  angle="180deg" top="0" left="0" />
                    </div>
                    <div className="eventWrapper">
                    </div>
                    <img src={events[5].asset.url} alt=""/>
                    <div className="sliderDescription">{ events[5].date.slice(0,9) } { events[5].date.slice(11,16) } {events[5].location}</div>
                </div>
            </div>
           
            </AliceCarousel>    
        </div>
     );
}
 
export default Slider;