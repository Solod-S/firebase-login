import { Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { emailSignUp } from 'redux/auth/authOperation.js'

import {
  CloseBtn,
  CloseIcon,
  PasswordIcon,
  NameIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  Button,
  ErrorWrapper,
  Error,
} from './RegistrationForm.styled.js'

import { AuthSchema } from 'schemas'

const initialValues = {
  email: '',
  password: '',
}

function RegistrationForm({ onClose }) {
  const dispatch = useDispatch()

  const handleSubmit = async (values, actions) => {
    dispatch(emailSignUp(values))

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
          <Title>Sign in</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="name">Email</InputLabel>
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
              Sign in
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  )
}

export default RegistrationForm
