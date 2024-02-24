import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { ModalWindow, LoginForm, RegistrationForm, SocialLogin } from 'components'
import { logo, hero, Container, Nav, Link, Joint, SignIn, SocialSignIn, Section, Hero } from './LoginMain.styled'

const LoginMain = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(<div></div>)

  const handleForm = form => {
    setForm(form)
    setIsOpen(true)
  }

  useEffect(() => {
    isOpen !== false ? document.querySelector('body').classList.add('no-scroll') : document.querySelector('body').classList.remove('no-scroll')
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(false)
    setForm(<div></div>)
  }

  return (
    <Container data-testid="root" aria-label="login-page">
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
      <Nav>
        <Link path="/">{/* <img src={logo} alt="logo" width="100" /> */}</Link>
        <div>
          <Joint onClick={() => handleForm(<RegistrationForm onClose={closeModal} />)}>Joint now</Joint>
          <SignIn onClick={() => handleForm(<LoginForm onClose={closeModal} />)}>Login</SignIn>
          <SocialSignIn href="#social_login">Social login</SocialSignIn>
        </div>
      </Nav>
      <Section>
        <ModalWindow isOpen={isOpen} onClose={closeModal} component={form} />
        <Hero>
          {/* <h1>Welcome to my Firebase auth project.</h1> */}
          <img style={{ maxWidth: '100%' }} src={hero} alt="hero" />
        </Hero>
        <SocialLogin />
      </Section>
    </Container>
  )
}

export default LoginMain
