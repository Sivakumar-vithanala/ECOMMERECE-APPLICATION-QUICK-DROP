import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className='profileContainer'>
        <div>
            {/* <img src="" alt="" /> */}
            <p>Siva Kumar</p>
        </div>
        <hr />
        <div>
            <span>Privicy and Polise</span>
            <span>Setting</span>
            <span><button>LogOut</button></span>
        </div>
    </div>
  )
}

export default Profile