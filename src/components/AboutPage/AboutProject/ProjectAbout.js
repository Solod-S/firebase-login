import { Container, Window, Content, heroImg } from './ProjectAbout.styled'

const ProjectAbout = ({ setShowUserCard }) => {
  return (
    <Container>
      <Content>
        <Window>
          <h1 style={{ marginBottom: '15px' }}>Welcome to Firebase Authentication🔒</h1>
          <img style={{ maxWidth: '80%', height: 'auto', borderRadius: '5px', marginBottom: '20px' }} alt="hero" src={heroImg} />

          <p>Welcome to my authentication project powered by Firebase! 🚀</p>
          <p style={{ marginBottom: '20px' }}>
            The Firebase Authentication project offers a convenient authentication system using React, Redux, and Firebase. Users can log in through two methods: via email and
            password or by quick authentication using a Google account. Additionally, the project provides functionality for users to edit their profile data, allowing them to
            modify their name, gender, subscription and avatar.
          </p>
        </Window>
      </Content>
    </Container>
  )
}

export default ProjectAbout
