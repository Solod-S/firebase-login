import { UserInfoForm } from '../../index'

import { Container, Window, Content } from '../MainSide/MainSide.styled'

const MainSide = () => {
  return (
    <Container>
      <Content>
        <Window>
          <UserInfoForm />
        </Window>
      </Content>
    </Container>
  )
}

export default MainSide
