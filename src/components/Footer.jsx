import styled, { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";
import { Container, AlignCenter, Logo } from "../styled";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {BsFillSunFill} from 'react-icons/bs';
import {HiOutlineMoon} from 'react-icons/hi';
import Offers from "./Offers";

const FooterDiv = styled.footer`
    position:relative;
    padding:225px 0 150px;
    background:${(props)=>props.theme.footBg};
`
const FootRow = styled.div`
    display:flex;
    justify-content:space-evenly;
`
const FooterText = styled.p`
    width:250px;
    line-height:24px;
    color:${(props)=>props.theme.headText};
`
const ThemeBtnLight =styled.button`
    padding:5px 22px;
    font-size:18px;
    border:none;
    box-shadow:0 2px 2px rgba(67, 67, 67, 0.1);
    border-radius:8px;
    background-color:${(props)=>props.theme.LightBtn};
    color:${(props)=>props.theme.lightColor};
`
const ThemeDiv =styled.div`
    display:inline-block;
    padding:4px;
    border-radius:10px;
    border: 0.5px solid ${(props)=>props.theme.themeBr};
    background-color: ${(props)=>props.theme.themeBg};
`
const ThemeBtnDark =styled.button`
    padding:7px 22px;
    font-size:16px;
    border:none;
    border-radius:8px;
    background-color:${(props)=>props.theme.darkBtn};
    color:${(props)=>props.theme.darkColor};
`
const LinkTitle =styled.h3`
    margin:0 0 22px;
    color:${(props)=>props.theme.LogoCol};
`
const FooterLink = styled.a`
    display:block;
    font-weight:500;
    margin-bottom:16px;
    color:${(props)=>props.theme.headText};
`

const Footer = () =>{
    const {theme , toggleTheme} = useContext(ThemeContext);
    const {t} = useTranslation();
    return(
        <FooterDiv>
            <Container>
                <Offers/>
                <FootRow>
                    <div>
                        <Link to="/">
                            <AlignCenter>
                                <img src="/assets/img/tripGuideLogo.svg" alt="logo" />
                                <Logo>TripGuide</Logo>
                            </AlignCenter>
                        </Link>
                        <FooterText>{t('footText')}</FooterText>
                        <ThemeDiv>
                            <ThemeBtnLight onClick={()=>{toggleTheme('light')}}><BsFillSunFill/></ThemeBtnLight>
                            <ThemeBtnDark  onClick={()=>{toggleTheme('dark')}}><HiOutlineMoon/></ThemeBtnDark>
                        </ThemeDiv>
                    </div>
                    <div>
                        <LinkTitle>{t('services')}</LinkTitle>
                        <FooterLink href="#">{t('services1')}</FooterLink>
                        <FooterLink href="#">{t('services2')}</FooterLink>
                        <FooterLink href="#">{t('services3')}</FooterLink>
                        <FooterLink href="#">{t('services4')}</FooterLink>
                        <FooterLink href="#">{t('services5')}</FooterLink>
                    </div>
                    <div>
                    <LinkTitle>{t('support')}</LinkTitle>
                        <FooterLink href="#">{t('support1')}</FooterLink>
                        <FooterLink href="#">{t('support2')}</FooterLink>
                        <FooterLink href="#">{t('support3')}</FooterLink>
                        <FooterLink href="#">{t('support4')}</FooterLink>
                        <FooterLink href="#">{t('support5')}</FooterLink>
                    </div>
                    <div>
                    <LinkTitle>{t('business')}</LinkTitle>
                        <FooterLink href="#">{t('business1')}</FooterLink>
                        <FooterLink href="#">{t('business2')}</FooterLink>
                        <FooterLink href="#">{t('business3')}</FooterLink>
                        <FooterLink href="#">{t('business4')}</FooterLink>
                        <FooterLink href="#">{t('business5')}</FooterLink>
                    </div>
                </FootRow>
            </Container>
        </FooterDiv>
    );
}

export default Footer;