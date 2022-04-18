import "./RecentImg.scss";


const RecentImg = ({ img, text, date }) => {
    return ( 
        <div className="recentImgWrapper">
            <div className="imageWrapper">
                <img className="recentImg" src={img} alt="event" />
            </div>
            <div className="recentTextWrapper">
                <p>{text}</p>
                <p><span>{date}</span></p>
            </div>
        </div>
     );
}
 
export default RecentImg;