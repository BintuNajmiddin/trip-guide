import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 86.732%;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const AlignCenter = styled.div`
    display: flex;
    align-items: center;
`
export const Logo = styled.span`
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.LogoCol}
`
export const Star = styled.span`
    color: #FFD166;
`
export const Percentage = styled.span`
    padding: 0 5px;
    color: ${(props) => props.theme.bestCard};
`
export const RatingNum = styled.span`
    color: ${(props) => props.theme.iconColor};
`
export const Aroundrow = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
`
export const RatingDiv =styled.div`
    // margin:20px 0 2px;
    font-weight:500;
    font-size:14px;
`
export const BreadCrumb = styled(Link)`
    color:${(props)=>props.theme.bestCard};
    align-items:center;
    margin-right:10px;
    font-size:14px;
    & span {
        font-size:10px;
    }
`
export const CurrentPage= styled.span`
    font-size:14px;
    color:${(props)=>props.theme.page}
`
 export const Checkbox =styled.input`
    width:20px;
    height:20px;
`
export const Label =styled.label`
margin-left:12px;
font-size:14px;
color:${(props)=>props.theme.filterTitle};
`

export const DarkTheme = {
    bgColor: '#141416',
    headBgColor: '#222529',
    linkHover: '#3539454d',
    bestCard: '#E7ECF3',
    Destination: '#777E90',
    headText: '#E7ECF3',
    LogoCol: '#fff',
    bellAfter: '#3B3E44',
    buttonColor: '#FCFCFD',
    titleColor: '#F4F5F6',
    inpBg: '#3B3E44',
    inpBorder: '#4A4E54',
    iconColor: '#B1B5C4',
    arrowBg: '#42464B',
    arrowColor: '#F4F5F6',
    modulBorder: '1px solid #3B3E44',
    modulAge: '#FCFCFD',
    sectionBg: '#18191B',
    cityName: '#FCFCFD',
    cityPrice: '#F4F5F6',
    footBg: '#222529',
    themeBg: '#3B3E44',
    themeBr: '#464950',
    LightBtn: 'transparent',
    darkBtn: '#474A52',
    lightColor: '#84878B',
    darkColor: '#E7ECF3',
    filterTitle: '#fff',
    page:'#84878B',
    searchBr:"#222529",
    rangeColor:"#316BfF",
    span1Bg: '#3B3E44',
    span2Bg: '#3B3E44',
    span3Bg: '#3B3E44',
    span4Bg: '#3B3E44',
    span5Bg: '#3B3E44',
    span1Color: '#F4F5F6',
    span2Color: '#F4F5F6',
    span3Color: '#F4F5F6',
    span4Color: '#F4F5F6',
    span5Color: '#F4F5F6',
    cardInfo:'#FCFCFD',
    cardPrice:'#fff',
    tabColor: '#E7ECF3',
    detailsCity: '#84878B',
    detailsTitle: '#F4F5F6',
    detailText: '#B1B5C4',
    priceCardTitle: '#FCFCFD',
    dateIcon: '#B1B5C4',
    confirmTit: '#E7ECF3',
    creadit: '#23262f66',
    cardBr: 'none',
    tourTitle: '#B1B5C4',
    tourText: '#777E91',
    inpLabel: '#E7ECF3',
    numInpBg: 'transparent',
    inpText: '#84878B',
    inpBr: '#222529',
    Book: '#fff',
    conTitle: '#B1B5C4',
    infoBr: '#3B3E44',
    reserveBr: 'none'
};

export const LightTheme = {
    bgColor: '#FBFBFB',
    headBgColor: '#fff',
    linkHover: '#F4F5F6',
    bestCard: '#3B3E44',
    Destination: '#84878B',
    headText: '#84878B',
    LogoCol: '#222529',
    bellAfter: '#E7ECF3',
    buttonColor: '#3B3E44',
    titleColor: '#23262F',
    inpBg: '#F4F5F7',
    inpBorder: '#E7E8EshchqattA',
    iconColor: '#84878B',
    arrowBg: '#fff',
    arrowColor: '#B1B5C4',
    modulBorder: 'none',
    modulAge: '#777E91',
    sectionBg: '#F5F5F5',
    cityName: '#282832',
    cityPrice: '#3B3E44',
    footBg: '#F4F5F6',
    themeBg: '#fff',
    themeBr: '#EFEFEF',
    LightBtn: '#FCFCFD',
    darkBtn: 'transparent',
    lightColor: '#3B3E44',
    darkColor: '#868B90',
    filterTitle: '#141416',
    page:'#B1B5C4',
    searchBr:"#E7ECF3",
    rangeColor:"#0A2541",
    span1Bg: '#38b3451a',
    span2Bg: '#fd97041a',
    span3Bg: '#EAEEFA',
    span4Bg: '#FCEBF1',
    span5Bg: '#FBEEE8',
    span1Color: '#38B345',
    span2Color: '#FD9704',
    span3Color: '#0B3BA7',
    span4Color: '#E96594',
    span5Color: '#DC6E3D',
    cardInfo: '#141416',
    cardPrice:'#23262F',
    tabColor: '#23262F',
    detailsCity: '#777E91',
    detailsTitle: '#23262F',
    detailText: '#353945',
    priceCardTitle: '#84878B',
    dateIcon: '#777E91',
    confirmTit: '#141416',
    creadit: '#fff',
    cardBr: '0.5px solid #E6E6E6',
    tourTitle: '#141416',
    tourText: '#84878B',
    inpLabel: '#353945',
    numInpBg: '#F4F5F6',
    inpText: '#4F4F4F',
    inpBr: '#EAEAEA',
    Book: '#333',
    conTitle: '#3B3E44',
    infoBr: '#F1F2F4',
    reserveBr: '1px solid #F0EFEF'
};

