import { NavLink } from "react-router-dom"
import './Footer.css'
import { BsLinkedin ,BsFacebook ,BsTwitter , BsInstagram   } from "react-icons/bs";



const Footer = () => {

    return(
            <div className="footer">
                <div className="row1">
                    <div className="col1">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink className="nav-link-footer">Web design</NavLink></li>
                            <li><NavLink className="nav-link-footer">Development</NavLink></li>
                            <li><NavLink className="nav-link-footer">Hosting</NavLink></li>
                        </ul>
                    </div>
                    <div className="col1">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink className="nav-link-footer">Company</NavLink></li>
                            <li><NavLink className="nav-link-footer">Team</NavLink></li>
                            <li><NavLink className="nav-link-footer">Careers</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="Row2">
                        <h3>Travel</h3>
                        <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                </div>
                <div className="row3">
                    <BsFacebook className="iconFooter"/>
                    <BsLinkedin className="iconFooter"/>
                    <BsTwitter className="iconFooter"/>
                    <BsInstagram className="iconFooter"/>
                </div>
                <p >Travel © 2023</p>
            </div>
        
    )
}

export default Footer;