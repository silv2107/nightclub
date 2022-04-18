import { Link } from "@reach/router";
import "./Nav.scss";
import Triangle from "./Triangle";


const Nav = () => {
    return ( 
        <article className="navWrapper">
            <Triangle />
            <Triangle angle="180deg" top="-.5px" left="0" />
            <div>
                <img src="/svg/logo2.svg" alt="logo" />
            </div>
            <ul className="nav" style={{color:"white"}}>
                    <li><Link to="/">HOME</Link></li>
                    {/* <li><Link to="/aboutUs">ABOUT US</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/events">EVENTS</Link></li>
                    <li><Link to="/gallery">GALLERY</Link></li> */}
                    <li><Link to="/booktable">BOOK TABLE</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
            </ul>
        </article>
     );
}
 
export default Nav;