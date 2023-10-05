import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'

import { updateUserData } from 'redux/auth/authOperation.js'
import { fetchSubscription } from 'redux/appData/appDataOperation.js'
import { getUserData } from 'redux/auth/authSelectors'
import { getAppData } from 'redux/appData/appDataSelectors.js'

import {
  NameIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  Select,
  Button,
  ErrorWrapper,
  Error,
} from './UserInfoForm.styled.js'

import { UserInfoSchema } from 'schemas'

function UserInfoForm() {
  const dispatch = useDispatch()
  const { email, displayName, gender, subscription } = useSelector(getUserData)
  const { subscriptions } = useSelector(getAppData)
  const [subscriptionTypes, setsubScriptionTypes] = useState([])

  const [userData, setUserData] = useState({
    displayName: '',
    gender: 'Other',
    subscription: 'Premium',
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    dispatch(fetchSubscription())

    setUserData({
      displayName: displayName || '',
      gender: gender || 'M',
      subscription: subscription || '',
    })
    setIsLoading(false)
  }, [dispatch, displayName, gender, subscription])

  useEffect(() => {
    setsubScriptionTypes(subscriptions)
  }, [subscriptions])

  const handleSubmit = async (values, actions) => {
    setIsSubmitting(true)
    setIsLoading(false)
    const data = { ...values, email: email }
    dispatch(updateUserData(data))
    actions.setSubmitting(false)
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
    // actions.resetForm()
  }

  return (
    <>
      {!isLoading && (
        <Formik
          validationSchema={UserInfoSchema}
          initialValues={userData}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange }) => (
            <>
              <Title>User Information</Title>
              <ForM>
                <FormField>
                  <ErrorWrapper>
                    <InputLabel htmlFor="displayName">Name</InputLabel>
                    <Error name="displayName" component="div" />
                  </ErrorWrapper>
                  <Wrapper>
                    <Input
                      type="text"
                      name="displayName"
                      id="displayName"
                      placeholder=" "
                      value={values.displayName}
                      onChange={handleChange}
                    />
                    <NameIcon size={19} aria-label="Name icon" />
                  </Wrapper>
                </FormField>
                <FormField>
                  <ErrorWrapper>
                    <InputLabel htmlFor="gender">Gender</InputLabel>
                    <Error name="gender" component="div" />
                  </ErrorWrapper>
                  <Wrapper>
                    <Select
                      name="gender"
                      value={values.gender}
                      onChange={e => handleChange(e)}
                      className={'select'}
                    >
                      <option value={'M'}>M</option>
                      <option value={'F'}>F</option>
                      <option value={'Other'}>Other</option>
                    </Select>
                  </Wrapper>
                </FormField>
                <FormField>
                  <ErrorWrapper>
                    <InputLabel htmlFor="subscription">Subscription</InputLabel>
                    <Error name="subscription" component="div" />
                  </ErrorWrapper>
                  <Wrapper>
                    <Select
                      name="subscription"
                      value={values.subscription}
                      onChange={e => handleChange(e)}
                      className={'select'}
                    >
                      {subscriptionTypes &&
                        subscriptionTypes.length > 0 &&
                        subscriptionTypes.map((option, index) => (
                          <option key={index} value={option.type}>
                            {option.type}
                          </option>
                        ))}
                      Этот код проверяет, существует ли subscriptionTypes, и
                      только после этой проверки выполняет отображение данных.
                      Это позволит избежать ошибки "Cannot read properties of
                      undefined".
                    </Select>
                  </Wrapper>
                </FormField>
                <div style={{ display: 'flex' }}>
                  <Button
                    type="submit"
                    aria-label="submit button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Loading...' : 'Save'}
                  </Button>
                  <Button
                    type="button"
                    aria-label="cancel button"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </ForM>
            </>
          )}
        </Formik>
      )}
    </>
  )
}

export default UserInfoForm
