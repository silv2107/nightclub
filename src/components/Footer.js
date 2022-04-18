import Address from "../footer/Address";
import RecentImg from "../footer/RecentImg";
import RecentTwitter from "../footer/RecentTwitter";
import "./Footer.scss";

const Footer = () => {
    return ( 
        <div className="footerContainer">
            <div className="firstColumn" style={{color:"white"}}>
                <h2><img src="/svg/logo2.svg" alt="logo" /></h2>
                <div className="addressContainer">
                    <Address title="LOCATION" text="PO Box 16122 Collin Street West Victoria 8007 Australia"/>
                    <Address title="OPENING HOURS" text="MON-FRI 9 AM TO 10 PM"/>
                    <Address title="LOCATION" text="MON-FRI 9 AM TO 10 PM"/>
                </div>
            </div>
            <div className="secondColumn" style={{color:"white"}}>
                <h3 style={{color:"#ff2a70"}}>Recent Post</h3>
                <RecentImg img="/img/disco.jpg" text="Lorem ipsum is simply dummy text of the printing and typesetting" date="April 17"/>
                <RecentImg img="/img/restaurant.jpg" text="Lorem ipsum is simply dummy text of the printing and typesetting" date="April 17"/>
            </div>
            <div className="thirdColumn" style={{color:"white"}}>
                <h3 style={{color:"#ff2a70"}}>Recent Posts</h3>
                <RecentTwitter img="/svg/twitter1.svg" text="Lorem ipsum is simply dummy text of the printing and typesetting" duration="5 Hours"/>
                <RecentTwitter img="/svg/twitter1.svg" text="Lorem ipsum is simply dummy text of the printing and typesetting" duration="5 Hours"/>
            </div>
        </div>
     );
}
 
export default Footer;