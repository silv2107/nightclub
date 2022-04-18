import "./Triangle.scss";

const Triangle = ({  angle, top, left, bottom, opacity }) => {
    return ( 
        <div className="triangleContainer" style={{ transform:`rotate(${angle})`, top:top, left:left, bottom:bottom, opacity:opacity}}>
            <div className="triangle" >

            </div>
        </div>
     );
}
 
export default Triangle;