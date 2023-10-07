import { useDispatch } from 'react-redux'

import { logOut } from 'redux/auth/authOperation'
import { clearSubscription } from '../../../redux/appData/appDataSlice'

import { Header, Navigation, MenuLink, MenuList, MenuItem, SignOut } from './AppBar.styled'

const AppBar = () => {
  const handleLogOut = () => {
    dispatch(logOut())
    dispatch(clearSubscription())
  }
  const dispatch = useDispatch()
  return (
    <Header className="header">
      <Navigation className="container">
        <MenuList>
          <MenuItem>
            <MenuLink to="/">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/about">About</MenuLink>
          </MenuItem>
        </MenuList>
        <SignOut onClick={() => handleLogOut()}>Sign Out</SignOut>
      </Navigation>
    </Header>
  )
}

export default AppBar
