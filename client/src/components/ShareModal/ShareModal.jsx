import React from 'react'
import { Modal, useMantineTheme } from "@mantine/core"
import PostShare from '../PostShare/PostShare'

const ShareModal = ({ modalOpen, setModalOpen }) => {
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
      <PostShare />
    </Modal>
  )
}

export default ShareModal