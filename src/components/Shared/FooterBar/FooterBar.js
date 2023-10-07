import {
  Footer,
  FooterWrapper,
  FlexWrapper,
  ContactWrapper,
  Logo,
  Address,
  Street,
  AdressList,
  AdressItem,
  AdressLink,
  SocialWrapper,
  SociaTitle,
  SociaList,
  SociaItem,
  SociaLink,
  TelegramIcon,
  SiteIcon,
  FacebookIcon,
  LinkedinInIcon,
} from './FooterBar.styled'

const socialItems = [
  {
    id: 's1',
    title: 'Site',
    link: 'https://solod.netlify.app/',
    icon: <SiteIcon size={20} color="white" />,
  },
  {
    id: 's2',
    title: 'Telegram',
    link: 'https://t.me/sergey_nicol',
    icon: <TelegramIcon size={20} color="white" />,
  },
  {
    id: 's3',
    title: 'Facebook',
    link: 'https://www.facebook.com/sergsolik',
    icon: <FacebookIcon size={20} color="white" />,
  },
  {
    id: 's4',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/serhii-solod-557991256/',
    icon: <LinkedinInIcon size={20} color="white" />,
  },
]

function Social({ link, icon }) {
  return (
    <SociaItem>
      <SociaLink href={link} target="_blank" rel="noopener noreferrer nofollow">
        {icon}
      </SociaLink>
    </SociaItem>
  )
}

function FooterBar() {
  return (
    <Footer className="footer-bar">
      <FooterWrapper className="container">
        <FlexWrapper>
          <ContactWrapper>
            <Logo>
              <span className="accentColor">Dev</span>Solod
            </Logo>
            <Address>
              <Street>Kiev, Ukrainka </Street>
              <AdressList>
                <AdressItem>
                  <AdressLink href="mailto:info@devstudio.com">solodsn098@gmail.com</AdressLink>
                </AdressItem>
                <AdressItem>
                  <AdressLink href="tel:+380937717070">+38 093 771 70 70</AdressLink>
                </AdressItem>
              </AdressList>
            </Address>
          </ContactWrapper>
          <SocialWrapper>
            <SociaTitle>Find me here</SociaTitle>
            <SociaList>{socialItems.length > 0 && socialItems.map(({ link, icon, id }) => <Social key={id} link={link} icon={icon} />)}</SociaList>
          </SocialWrapper>
        </FlexWrapper>
      </FooterWrapper>
    </Footer>
  )
}

export default FooterBar
