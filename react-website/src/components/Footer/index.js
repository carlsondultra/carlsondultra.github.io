import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'

const Footer = () => {
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
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
