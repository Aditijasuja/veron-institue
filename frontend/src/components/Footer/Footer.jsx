import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logoimage from "../../assets/CClogo1.png";
function Footer()
{
    return(
        <div className="h-[350px] bg-[#85b6c8] px-10 py-3 ">
            <div><img src={logoimage} alt="logoimage" className="h-[100px] w-[200px] "/></div>
            <div className="border-b-2 border-[#6facc2] mb-5"></div>
            <div className="flex row justify-around">
                <div>
                    <h2 className="text-sky-700 font-semibold">Quick Link</h2>
                    <ul className="text-gray-500 drop-shadow-md mt-3 text-sm">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sky-700 font-semibold">Information</h2>
                    <ul className="text-gray-500  drop-shadow-md mt-3 text-sm">
                        <li>+91 9876543211</li>
                        <li>careconnect@mail</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sky-700 font-semibold">Our Location</h2>
                    <ul className="text-gray-500 mt-3 drop-shadow-md text-sm">
                        <li><a href="#">Grand Trunk Road, Amritsar</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-sky-700 font-semibold">Social Media</h2>
                    <div className="flex row gap-[8px] mt-3 text-sky-800 cursor-pointer">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <FontAwesomeIcon icon={faTwitter} />
                    </div>
                </div>
            </div>
            <div className="border-b-2 border-[#6facc2] mt-5"></div>
            <div className="flex justify-end text-sm text-gray-500 mt-[10px]">Copyright &copy; 2025 All rights reserved</div>
        </div>
    );
}
export default Footer;