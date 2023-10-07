import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { UserCardEditor, UserCard } from 'components'
import { Container, Section, Layout } from './HomeMain.styled'

const HomeMain = () => {
  const [showUserCard, setShowUserCard] = useState(false)
  const hamdleShowOptions = () => {
    setShowUserCard(!showUserCard)
  }
  return (
    <Container aria-label="home-page">
      <>
        <Section>
          <h5>
            <a href="https://www.linkedin.com/in/serhii-solod-557991256/" target="_blank" rel="noopener noreferrer">
              Have some suggestions?
            </a>
          </h5>
          <p> We're delighted to have you here with us. Your presence is greatly appreciated, and we hope you find everything you need.</p>
        </Section>
        <Layout>{showUserCard ? <UserCard setShowUserCard={hamdleShowOptions} /> : <UserCardEditor setShowUserCard={hamdleShowOptions} />}</Layout>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    </Container>
  )
}

export default HomeMain
