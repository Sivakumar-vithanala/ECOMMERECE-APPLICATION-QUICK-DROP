import './Footer.css'
import { useState } from 'react'
function Footer() {

    return (
        <>
            <div className="footer-main-div">
                <div className='footer-row-row-0'>
                    <div className='row-0-logo-div'>
                        <img src="/HeaderImg/ChatGPT Image Apr 5, 2025, 04_18_49 PM.png" alt="" />
                    </div>
                    <div className='row-0-social-div'>
                        <img src="/FooterImg/linkedin-svgrepo-com.svg" alt="" />
                        <img src="/FooterImg/instagram-svgrepo-com.svg" alt="" />
                        <img src="/FooterImg/facebook-svgrepo-com.svg" alt="" />
                        <img src="/FooterImg/twitter-3-svgrepo-com.svg" alt="" />
                        <h6><span>© QuickDrop </span> Technologies Private Limited</h6>
                    </div>
                </div>
                <div className="footer-row-row-1">
                    <span>Home</span>
                    <span>Delivery Areas</span>
                    <span>Careers</span>
                    <span>Customer Support</span>
                    <span>Press</span>
                </div>
                <div className="footer-row-row-2">
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                    <span>Responsible Disclosure Policy</span>
                    <span>Mojo-a QuickDrop Blog</span>
                </div>

                <div className="footer-row-row-3">
                    <h3>Download App</h3>
                    <div className='footer-row-row-3-btn'>

                       <div className='footer-row-row-3-btn-img'>
                        <img src="/FooterImg/playstore-svgrepo-com.svg" alt="" />
                        <button>Get it on play store</button>
                       </div>
                        
                        <div className='footer-row-row-3-btn-img'>
                            <img src="/FooterImg/app-store-svgrepo-com.svg" alt="" />
                            <button>Get it on app store</button>
                        </div>
                    </div>
                </div>
            </div>
            

           
        </>
    );
}

export default Footer;
