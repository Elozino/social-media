import React, { useState, useRef } from 'react'
import "./PostShare.css"
import ProfileImage from "../../assets/images/profileImg.jpg"
import * as Icon from "@iconscout/react-unicons"


const PostShare = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage({
        imageSelected: URL.createObjectURL(img)
      })
    }
  }
  return (
    <div className='PostShare'>
      <img src={ProfileImage} alt="profile-image" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className='postOptions'>
          <div
            onClick={() => imageRef.current.click()}
            className='option'>
            <Icon.UilScenery />
            Photo
          </div>
          <div className='option'>
            <Icon.UilPlayCircle />
            Video
          </div>
          <div className='option'>
            <Icon.UilLocationPoint />
            Location
          </div>
          <div className='option'>
            <Icon.UilSchedule />
            schedule
          </div>
          <button className='postShare__btn'>
            Share
          </button>
          <div>
            <input type="file" name="myImage"
              ref={imageRef}
              id=""
              hidden
              onChange={onImageChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <Icon.UilTimes onClick={() => setImage(null)} />
            <img src={image.imageSelected} alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostShare
