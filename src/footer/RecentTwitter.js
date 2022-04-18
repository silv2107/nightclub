import "./RecentTwitter.scss";


const RecentTwitter = ({ img, text, duration }) => {
    return ( 
        <div className="recentTwitterWrapper">
            <div className="twitterWrapper">
                <img src={img} alt="" style={{width:"10px", height:"10px"}} />
            </div>
            <div className="recentTextWrapper">
                <p>{text}</p>
                <p><span>{duration}</span></p>
            </div>
        </div>
     );
}
 
export default RecentTwitter;