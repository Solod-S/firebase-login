import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Formik } from 'formik'

import { updateUserData } from 'redux/auth/authOperation.js'
import { getUserData } from 'redux/auth/authSelectors'
import { fetchSubscription } from 'redux/appData/appDataOperation.js'
import { getAppData } from 'redux/appData/appDataSelectors.js'

import { UserInfoSchema } from 'schemas'
import { Container, Window, Content, NameIcon, Title, ForM, FormField, InputLabel, Wrapper, Input, Select, Button, ErrorWrapper, Error } from './UserCardEditor.styled'

const UserCardEditor = ({ setShowUserCard }) => {
  const dispatch = useDispatch()
  const { email, displayName, gender, subscription, photoURL } = useSelector(getUserData)
  const { subscriptions } = useSelector(getAppData)
  const [subscriptionTypes, setsubScriptionTypes] = useState([])

  const [userData, setUserData] = useState({
    displayName: '',
    gender: 'Other',
    subscription: 'Premium',
    photoURL: '',
  })

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    dispatch(fetchSubscription())

    setUserData({
      displayName: displayName || '',
      gender: gender || 'M',
      subscription: subscription || '',
      photoURL: photoURL || '',
    })
    setIsLoading(false)
  }, [dispatch, displayName, gender, subscription, photoURL])

  useEffect(() => {
    setsubScriptionTypes(subscriptions)
  }, [subscriptions])

  const handleSubmit = async (values, actions) => {
    setIsSubmitting(true)
    setIsLoading(false)
    const data = { ...values, email: email }

    if (data.displayName === userData.displayName && data.subscription === userData.subscription && data.gender === userData.gender && data.photoURL === userData.photoURL) {
      setShowUserCard()
    } else {
      dispatch(updateUserData(data))
      actions.setSubmitting(false)
      setTimeout(() => {
        setIsSubmitting(false)
      }, 1000)
      setShowUserCard()
    }
  }
  return (
    <Container>
      <Content>
        <Window>
          {' '}
          {!isLoading && (
            <Formik validationSchema={UserInfoSchema} initialValues={userData} onSubmit={handleSubmit}>
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
                        <Input type="text" name="displayName" id="displayName" placeholder=" " value={values.displayName} onChange={handleChange} />
                        <NameIcon size={19} aria-label="Name icon" />
                      </Wrapper>
                    </FormField>
                    <FormField>
                      <ErrorWrapper>
                        <InputLabel htmlFor="subscription">Subscription</InputLabel>
                        <Error name="subscription" component="div" />
                      </ErrorWrapper>
                      <Wrapper>
                        <Select name="subscription" value={values.subscription} onChange={e => handleChange(e)} className={'select'}>
                          {subscriptionTypes &&
                            subscriptionTypes.length > 0 &&
                            subscriptionTypes.map((option, index) => (
                              <option key={index} value={option.type}>
                                {option.type}
                              </option>
                            ))}
                        </Select>
                      </Wrapper>
                    </FormField>
                    <FormField>
                      <ErrorWrapper>
                        <InputLabel htmlFor="gender">Gender</InputLabel>
                        <Error name="gender" component="div" />
                      </ErrorWrapper>
                      <Wrapper>
                        <Select name="gender" value={values.gender} onChange={e => handleChange(e)} className={'select'}>
                          <option value={'M'}>M</option>
                          <option value={'F'}>F</option>
                          <option value={'Other'}>Other</option>
                        </Select>
                      </Wrapper>
                    </FormField>
                    <FormField>
                      <ErrorWrapper>
                        <InputLabel htmlFor="photoURL">photoURL</InputLabel>
                        <Error name="photoURL" component="div" />
                      </ErrorWrapper>
                      <Wrapper>
                        <Input type="text" name="photoURL" id="photoURL" placeholder=" " value={values.photoURL} onChange={handleChange} />
                        <NameIcon size={19} aria-label="Name icon" />
                      </Wrapper>
                    </FormField>
                    <div style={{ display: 'flex' }}>
                      <Button type="submit" aria-label="submit button" disabled={isSubmitting}>
                        {isSubmitting ? 'Loading...' : 'Save'}
                      </Button>
                      <Button type="button" aria-label="cancel button" disabled={isSubmitting} onClick={setShowUserCard}>
                        Cancel
                      </Button>
                    </div>
                  </ForM>
                </>
              )}
            </Formik>
          )}
        </Window>
      </Content>
    </Container>
  )
}

export default UserCardEditor
