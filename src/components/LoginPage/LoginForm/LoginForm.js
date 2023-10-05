import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { emailLogIn } from 'redux/auth/authOperation.js'

import {
  CloseBtn,
  CloseIcon,
  NameIcon,
  PasswordIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  Button,
  ErrorWrapper,
  Error,
} from './LoginForm.styled.js'

import { AuthSchema } from 'schemas'

const initialValues = {
  email: '',
  password: '',
}

function LoginForm({ onClose }) {
  const dispatch = useDispatch()

  const handleSubmit = async (values, actions) => {
    dispatch(emailLogIn(values))

    actions.setSubmitting(false)
    actions.resetForm()
    onClose()
  }

  return (
    <Formik
      validationSchema={AuthSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <CloseBtn aria-label="close window" onClick={onClose}>
            <CloseIcon size={19} color="black" />
          </CloseBtn>
          <Title>Login your account</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Error name="email" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input type="text" name="email" id="email" placeholder=" " />
                <NameIcon size={19} aria-label="Name icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Error name="password" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  type="text"
                  name="password"
                  id="password"
                  placeholder=" "
                />
                <PasswordIcon size={19} aria-label="Password icon" />
              </Wrapper>
            </FormField>
            <Button
              type="submit"
              aria-label="submit button"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  )
}

export default LoginForm
