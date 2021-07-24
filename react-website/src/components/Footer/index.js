import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
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
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> This is Footer </FooterLinkTitle>
                                <FooterLink to="/signin">This is footer number 2</FooterLink>
                                <FooterLink to="/signin">This is footer number 3</FooterLink>
                                <FooterLink to="/signin">This is footer number 4</FooterLink>
                                <FooterLink to="/signin">This is footer number 5</FooterLink>
                                <FooterLink to="/signin">This is footer number 6</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> This is Footer </FooterLinkTitle>
                                <FooterLink to="/signin">This is footer number 2</FooterLink>
                                <FooterLink to="/signin">This is footer number 3</FooterLink>
                                <FooterLink to="/signin">This is footer number 4</FooterLink>
                                <FooterLink to="/signin">This is footer number 5</FooterLink>
                                <FooterLink to="/signin">This is footer number 6</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> This is Footer </FooterLinkTitle>
                                <FooterLink to="/signin">This is footer number 2</FooterLink>
                                <FooterLink to="/signin">This is footer number 3</FooterLink>
                                <FooterLink to="/signin">This is footer number 4</FooterLink>
                                <FooterLink to="/signin">This is footer number 5</FooterLink>
                                <FooterLink to="/signin">This is footer number 6</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> This is Footer </FooterLinkTitle>
                                <FooterLink to="/signin">This is footer number 2</FooterLink>
                                <FooterLink to="/signin">This is footer number 3</FooterLink>
                                <FooterLink to="/signin">This is footer number 4</FooterLink>
                                <FooterLink to="/signin">This is footer number 5</FooterLink>
                                <FooterLink to="/signin">This is footer number 6</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'onClick={toggleHome}>Logo</SocialLogo>
                        <WebsiteRights>Carlson Dultra © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
