import Triangle from "./Triangle";
import "./Welcome.scss";
const Welcome = ({ img, title, svg }) => {
    return ( 
        <div className="cardWrapper">
            <img className="frontImg" src={img} alt="card" />
            <div className="welcomeContent">
                <div style={{width:"90px", height:"90px", border:"3px #ff2a70 solid", padding:"15px"}}><img src={svg} alt={title}/></div>
                <h4 className="welcomeTitle">{title}</h4>
                <p className="welcomeText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae eum eveniet, unde aliquam totam eligendi magnam aspernatur! Recusandae quos cupiditate adipisci, aliquam ea autem? Repellendus vitae quibusdam deserunt asperiores ullam.</p>
                <Triangle  angle="180deg" top="-.5px" left="0"/>
                <Triangle />
            </div>
        </div> 
        
     );
}
 
export default Welcome;