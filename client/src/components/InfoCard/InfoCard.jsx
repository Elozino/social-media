import React, { useState } from 'react'
import "./InfoCard.css"
import { UilPen } from "@iconscout/react-unicons"
import ProfileModal from '../ProfileModal/ProfileModal'

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='InfoCard'>
      <div className="InfoCard__head">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpen(true)} />
          <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
      <div className="InfoCard__info">
        <span><b>Lives in </b></span>
        <span>In Relationship</span>
      </div>
      <div className="InfoCard__info">
        <span><b>Lives in </b></span>
        <span>Lagos</span>
      </div>
      <div className="InfoCard__info">
        <span><b>Works at </b></span>
        <span>CodeMeDotCom</span>
      </div>
      <button className='InfoCard__btn'>
        Logout
      </button>
    </div>
  )
}

export default InfoCard