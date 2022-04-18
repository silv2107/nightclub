import "./Address.scss";

const Address = ({ title, text }) => {
    return ( 
        <div className="addressWrapper">
            <h3 style={{color:"#ff2a70"}}>{title}</h3>
            <p>{text}</p>
        </div>
     );
}
 
export default Address;
