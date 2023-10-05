import styled from 'styled-components'

export const Container = styled.div`
  grid-area: mainside;
`

export const Card = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: ${p => p.theme.colors.thirdBgColor};
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%);
`

export const Window = styled(Card)`
  padding: 45px;
  margin: 0 0 8px;
  overflow: visible;
`

export const Content = styled.div`
  text-align: center;
  & > img {
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    z-index: 99;
    max-width: 400px;
  }
`
