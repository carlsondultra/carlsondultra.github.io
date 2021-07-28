import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia,
SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'onClick={toggleHome}>Carlson Dultra</SocialLogo>
                        <WebsiteRights>Carlson Dultra © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/carlsondultra/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/carlsondultra" target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="mailto:carlson.dultra@ryerson.ca" target="_blank" aria-label="Email">
                                <FaEnvelope />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
