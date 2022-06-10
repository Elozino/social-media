import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core"

const ProfileModal = ({ modalOpen, setModalOpen }) => {
  const theme = useMantineTheme()
  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpen}
      size="55%"
      onClose={() => setModalOpen(false)}
    >
      <form className='InfoCard'>
        <h3>Your Info</h3>
        <div className='InfoCard__input'>
          <input
            type="text"
            className="infoInput"
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="LastName"
            placeholder="Last Name"
          />
        </div>
        <div className='InfoCard__input'>
          <input
            type="text"
            className="infoInput"
            name="worksAt"
            placeholder="Works At"
          />
        </div>
        <div className='InfoCard__input'>
          <input
            type="text"
            className="infoInput"
            name="livesIn"
            placeholder="Lives In"
          />
          <input
            type="text"
            className="infoInput"
            name="Country"
            placeholder="Country"
          />
        </div>
        <div className='InfoCard__input'>
          <input type="text" className='infoInput' placeholder='Relationship Status' />
        </div>
        <div className='InfoCard__input'>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className='InfoCard__btn'>Update</button>
      </form>
    </Modal>
  )
}

export default ProfileModal