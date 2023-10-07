import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.85);
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    text-align: center;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin: 0 auto;
    font-style: normal;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`

export const FooterWrapper = styled.div`
  /* @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    // display: flex;
  } */
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`

export const FlexWrapper = styled.div`
  width: 100%;
  @media screen and (max-width: ${p => p.theme.breakpoints.tablet}) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`

export const ContactWrapper = styled.div`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    margin-bottom: 60px;
  }
  /* @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    // margin-right: 165px;
  } */
`

export const Logo = styled(NavLink)`
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-right: 88px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    font-size: ${p => p.theme.fontSizes.xl};
    margin-right: 90px;
  }
  margin-bottom: 20px;
  display: block;
  color: ${p => p.theme.colors.primaryBgColor};

  font-family: ${p => p.theme.fontFamily.raleway};
  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.2;
  letter-spacing: 0.03em;
`

export const Address = styled.address`
  font-style: normal;
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: 1.7;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryBgColor};
`

export const Street = styled.p`
  color: ${p => p.theme.colors.primaryBgColor};
  margin-bottom: 8px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-bottom: 20px;
  }
`

export const AdressList = styled.ul``

export const AdressItem = styled.li`
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    :not(:last-child) {
      margin-bottom: 9px;
    }
  }
`

export const AdressLink = styled.a`
  :focus {
    color: ${p => p.theme.colors.primaryAccentColor};
    fill: ${p => p.theme.colors.primaryAccentColor};
  }
  :hover {
    color: ${p => p.theme.colors.primaryAccentColor};
    fill: ${p => p.theme.colors.primaryAccentColor};
  }
  color: rgba(255, 255, 255, 0.6);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    display: inline-block;
  }
`

export const SocialWrapper = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    margin-left: 70px;
  }
`

export const SociaTitle = styled.p`
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: calc(16 / 14);
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: ${p => p.theme.colors.primaryWhiteColor};
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    text-align: center;
  }
`

export const SociaList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SociaItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    &:not(:last-child) {
      margin-right: 9px;
    }
  }
`

export const SociaLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    background-color: ${p => p.theme.colors.primaryAccentColor};
  }
  &:hover {
    background-color: ${p => p.theme.colors.primaryAccentColor};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: ${p => p.theme.radii.round};

  padding: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const FacebookIcon = styled(FaFacebookF)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${p => p.theme.colors.primaryWhiteColor};
  }
`
export const TelegramIcon = styled(FaTelegramPlane)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${p => p.theme.colors.primaryWhiteColor};
  }
`
export const SiteIcon = styled(TbWorldWww)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${p => p.theme.colors.primaryWhiteColor};
  }
`
export const LinkedinInIcon = styled(FaLinkedinIn)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: ${p => p.theme.colors.primaryWhiteColor};
  }
`
