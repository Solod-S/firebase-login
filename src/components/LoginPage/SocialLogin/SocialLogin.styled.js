import styled from 'styled-components'
import google from '../../../../src/img/login/login/google.svg'

export { google }

export const Form = styled.div`
  /* margin-top: 100px; */
  padding-left: 10px;
  max-width: 400px;
  @media (max-width: ${p => p.theme.breakpoints.tablet}) {
    padding-left: 0;
    margin-top: 20px;
  }
`
export const SocialBtn = styled.a`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background-color: ${p => p.theme.colors.thirdBgColor};
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: ${p => p.theme.radii.quarter};
  border: 1px solid black;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: 0;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgb(0 0 0, 0.6);
  cursor: pointer;
  img {
    margin-right: 5px;
  }
  &:hover {
    background-color: rgb(207, 207, 207, 0.25);
    color: rgb(0, 0, 0, 0.75);
  }
`
