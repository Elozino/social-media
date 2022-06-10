import React from 'react'
import "./ProfileCard.css"
import Cover from "../../assets/images/cover.jpg"
import Profile from "../../assets/images/profileImg.jpg"

const ProfileCard = () => {

  const ProfilePage = true;
  return (
    <div className='profileCard'>
      <div className="profileCard__profileImages">
        <img src={Cover} alt="cover-image" />
        <img src={Profile} alt="profile-image" />
      </div>
      <div className="profileCard__profileName">
        <span>Big Zee</span>
        <span>Senior UI Developer</span>
      </div>
      <div className="profileCard__followStatus">
        <hr />
        <div>
          <div className="profileCard__follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="profileCard__verticalLine"></div>
          <div className="profileCard__follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="profileCard__verticalLine">
              </div>
              <div className="profileCard__follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ?
        "" :
        <span>My Profile</span>
      }
    </div>
  )
}

export default ProfileCard
