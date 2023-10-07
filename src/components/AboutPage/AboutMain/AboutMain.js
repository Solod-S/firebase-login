import { ToastContainer } from 'react-toastify'

import ProjectAbout from '../AboutProject/ProjectAbout'
import { Container, Layout } from './AboutMain.styled'

const AboutMain = () => {
  return (
    <Container aria-label="home-page">
      <>
        <Layout>
          <ProjectAbout />
        </Layout>
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

export default AboutMain
