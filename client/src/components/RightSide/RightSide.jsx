import React, { useState } from 'react'
import "./RightSide.css"
import Home from "../../assets/images/home.png"
import Noti from "../../assets/images/noti.png"
import Comment from "../../assets/images/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'


const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='RightSide'>
      <div className="RightSide__navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className='RightSide__btn' onClick={() => setModalOpen(true)}>
        Share
      </button>
      <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  )
}

export default RightSide