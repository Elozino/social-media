import React from 'react'
import { followers } from '../../Data/FollowersData'
import "./FollowersCard.css"

const FollowersCard = () => {
  return (
    <div className='followersCard'>
      <h3>Who is following you</h3>
      {followers.map((follower, id) => (
        <div key={id} className="followersCard__follower">
          <div>
            <img
              className='followerImg'
              src={follower.img} alt={follower.name} />
            <div className="name">
              <span>
                {follower.name}
              </span>
              <span>
                @{follower.username}
              </span>
            </div>
          </div>
          <button className='followersCard__btn'>
            Follow
          </button>
        </div>
      ))}
    </div>
  )
}

export default FollowersCard