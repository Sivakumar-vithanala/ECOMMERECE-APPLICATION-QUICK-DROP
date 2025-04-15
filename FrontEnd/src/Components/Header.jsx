import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
    const [location, setLocation] = useState("Fetching location...");
    const [profile,setProfile] = useState(false)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
                        const data = await response.json();
                        setLocation(data.address.suburb || data.address.city || data.display_name);
                    } catch (error) {
                        console.error("Error getting address:", error);
                        setLocation("Unable to fetch location");
                    }
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setLocation("Location access denied");
                }
            );
        } else {
            setLocation("Geolocation not supported");
        }
    }, []);

    const handleChange = () => { 
        setProfile(true)
        if (error) {
            console.log(error);
        } else {
            console.log('.......');
        }
        
        
    }

    return (
        <nav>
            <div className="logo-div">
                <img src="/HeaderImg/Logo(2).png" alt="Logo" />
                {/* <h5 className="logo-name">QuickCart</h5> */}
            </div>

            <div className="location-div" onClick={() => window.location.href = "/location"}>
                <h4>
                    Delivery in <span className="highlight">10 Minutes</span>
                </h4>
                <div className="location-clickable">
                    <p>{location}</p>
                    <img src="/HeaderImg/map-location-svgrepo-com.svg" alt="Dropdown Icon" className="dropdown-icon" />
                </div>
            </div>

            <div className="search-container">
                <input type="search" id="search" placeholder="Search for..." />
                <img src="/HeaderImg/search-alt-svgrepo-com.svg" alt="Search Icon" className="search-icon" />
            </div>
    
            <div className="profile-div">
                <img src="/HeaderImg/profile-user-svgrepo-com.svg" alt="Profile" onClick={handleChange}/>
                <span>Profile</span>
            </div>

            <div className="cart-div">
                <img src="/HeaderImg/cart-large-svgrepo-com.svg" alt="Cart" />
                <span>Cart</span>
            </div>
        </nav>
    );
}

export default Header;
