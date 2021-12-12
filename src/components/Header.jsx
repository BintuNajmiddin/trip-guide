import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from "styled-components";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { AlignCenter, Logo } from '../styled';
import { VscSignIn } from 'react-icons/vsc';
import { BsPersonCircle } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsBell } from 'react-icons/bs';

const TopHeader = styled.header`
    display:flex;
    padding:20px 40px;
    align-items:center;
    background-color: ${(props) => props.theme.headBgColor};
    justify-content:space-between
`
const DropDownDiv = styled.div`
    min-width:160px;
    z-index:1;
    border-radius:16px;
    border:1px solid ${(props) => props.theme.bellAfter};
    display:none;
    position:absolute;
    left: -50px;
    background-color: ${(props) => props.theme.headBgColor};
    box-shadow: 0px 32px 60px -32px rgba(0, 0, 0, 0.1);
`
const DropDown = styled.div`
    position:relative;
    &:hover ${DropDownDiv}{
        display:block;
    }
`
const DropButton = styled.button`
    cursor:pointer;
    text-transform:uppercase;
    border:none;
    background-color:transparent;
    color: ${(props) =>props.theme.headText}
`
const DropLink = styled (Link)`
    border-radius:8px;
    padding:10px 20px;
    text-decoration:none;
    display:flex;
    color:${(props) => props.theme.bestCard};
    &:hover {
        background: ${(props) => props.theme.linkHover}
    }
`
const Flags = styled.div`
    border-radius:50%;
    height:20px;
    width:20px;
`
const Bell = styled.div`
    position:relative;
    margin:0 38px 0 17px;
    &:after{
        content:'';
        position:absoulte;
        width:1px;
        height:32px;
        top:-4px;
        right:-17px;
        background-color:${(props) => props.theme.bellAfter};
    }
`
const BellIcon = styled.span`
    color: ${(props) =>props.theme.headText};
    font-size:18px;
`
const BellCount = styled.span`
    position:absolute;
    padding:2px 5px;
    top:-3px;
    right:-7px;
    border-radius:50%;
    color:#fff;
    background-color:#EB5757;
    font-size:8px;
    font-weight:500;
`
const User = styled.button`
    border:none;
    padding:0;
    margin-left:10px;
    background-color:transparent;
    color:${(props) => props.theme.buttonColor}
`
const Header = () => {
    const { t } = useTranslation();
    const [lang, setLang] = useState(t('lang'));
    const [valut, setValut] = useState('USD');

return (
  <TopHeader>
    <Link to="/">
      <AlignCenter>
        <img src="/assets/img/tripGuideLogo.svg" alt="logo" />
        <Logo>TripGuide</Logo>
      </AlignCenter>
    </Link>


    <AlignCenter>
      <DropDown>
        <DropButton>{valut}</DropButton>
        <DropDownDiv>
          <DropLink to="/" onClick={(el) => {setValut(el.target.innerText)}}>USD</DropLink>
          <DropLink to="/" onClick={(el) => {setValut(el.target.innerText)}}>RUBL</DropLink>
          <DropLink to="/" onClick={(el) => {setValut(el.target.innerText)}}>SUM</DropLink>
        </DropDownDiv>
      </DropDown>

<DropDown>
    <DropButton>
    <Flags>
        <img style={{width:'100%'}} src={`/assets/img/${lang}.png`} alt="language" />
    </Flags>
    </DropButton>

    <DropDownDiv>
            <DropLink to="/" onClick={() => {i18next.changeLanguage('en') && setLang('en')}}>
                <Flags>
                    <img style={{width: '100%'}} src={`/assets/img/en.png`} alt="language" />
                </Flags> English (us)</DropLink>
            <DropLink to="/" onClick={() => {i18next.changeLanguage('ru') && setLang('ru')}}>
                <Flags>
                    <img style={{width: '100%'}} src={`/assets/img/ru.png`} alt="language" />
                </Flags> Russian</DropLink>
            <DropLink to="/" onClick={() => {i18next.changeLanguage('uz') && setLang('uz')}}>
                <Flags>
                    <img style={{width: '100%'}} src={`/assets/img/uz.png`} alt="language" />
                </Flags> Uzbek</DropLink>
    </DropDownDiv>
      </DropDown>

    <Bell>
        <BellIcon><BsBell/></BellIcon>
        <BellCount>1</BellCount>
    </Bell>

    <img style={{borderRadius:'50%'}} src="/assets/img/user.jpg" alt="" />
    <DropDown>
    <User>Delowar<IoMdArrowDropdown/></User>
    <DropDownDiv>
        <DropLink to="/profile"><BsPersonCircle/> My Profile</DropLink>
        <DropLink to="/">
            <VscSignIn /> Sign out</DropLink>
    </DropDownDiv>
    </DropDown>
    </AlignCenter>
    </TopHeader>
    );
}

export default Header;
