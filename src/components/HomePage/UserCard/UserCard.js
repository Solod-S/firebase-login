import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { getUserData } from 'redux/auth/authSelectors'
import { Container, ArtCard, UserInfo, CardBackGround, PhotoWrapper, Photo, Link, Widget, Item, EdutIcon } from './UserCard.styled'

const UserCard = ({ setShowUserCard }) => {
  const userData = useSelector(getUserData)
  const [user, setuser] = useState()

  useEffect(() => {
    setuser(userData)
  }, [user, userData])
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackGround />
          <a href="/LinkedInClone/home" className="disabled-link" target="_blank" rel="noopener noreferrer">
            <PhotoWrapper>
              <Photo photoURL={user?.photoURL} />
            </PhotoWrapper>
            <Link>Welcome, {user?.displayName ? user.displayName : 'Comrad!'}</Link>
          </a>
        </UserInfo>
        <Widget>
          <a href="/LinkedInClone/home" className="disabled-link">
            <div>
              <span>Subscription</span>
              <span>{user?.subscription}</span>
            </div>
            {/* <img src={widget} alt="widget icon" /> */}
          </a>
        </Widget>
        <Widget>
          <a href="/LinkedInClone/home" className="disabled-link">
            <div>
              <span>Gender</span>
              <span>{user?.gender}</span>
            </div>
          </a>
        </Widget>
        <Item onClick={() => setShowUserCard(false)}>
          <span>
            <EdutIcon size={18} />
            Edit Profile
          </span>
        </Item>
      </ArtCard>
    </Container>
  )
}

export default UserCard
