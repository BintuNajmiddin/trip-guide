import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Container, Row } from '../styled';
import {FaBed} from 'react-icons/fa';
import {MdFlightTakeoff} from 'react-icons/md';
import {RiCarFill} from 'react-icons/ri';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {IoIosArrowDown} from 'react-icons/io';
import { Navigate, useNavigate } from 'react-router-dom';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {CgArrowsExchange} from 'react-icons/cg';
import Select from 'react-select';
import { useRef } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const SearchDiv = styled.div`
    padding:30px 60px;
    border-radius:20px;
    background: ${(props) => props.theme.headBgColor};
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
`
const SearchRow = styled.div`
    align-items:flex-start;
    border-bottom: 1px solid ${(props) => props.theme.bellAfter};
    display:flex;
    justify-content:space-between;
    width:80%;
    padding-bottom:26px;
`
const Services = styled.span`
    position:relative;
    display:flex;
    align-items:center;
    margin-right:30px;
    color:#84878B;
    &.react-tabs__tab--selected{
        color:${(props)=>props.theme.buttonColor};
    }
`
const PassengerDiv = styled.div`
    margin-left:25px;
    position:relative;
    display:inline-block;
`
const ArrowBottom= styled.span`
    display:inline-block;
    font-size:10px;
    color:${(props)=>props.theme.iconColor};
    transform:rotate(0deg);
`
const Info=styled.div`
    display:none;
    position:absolute;
    top:-250px;
    width:350px;
    padding:10px 30px;
    left:0;
    background:${(props)=>props.theme.headBgColor};
    box-shadow: 0px 12px 60px rgba(89, 89, 89, 0.1);
    border:${(props)=>props.theme.modulBorder};
    border-radius:16px;
`
const Currency = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:12px 0 10px;
    &:nth-child(2){
        border-top:1px solid ${(props)=>props.theme.bellAfter};
        border-bottom:1px solid ${(props)=> props.theme.bellAfter};
    }
`
const InfoText =styled.span`
    display:block;
    margin-bottom:6px;
    font-weight:500;
    color:${(props)=>props.theme.modulAge};
`
const InfoAge = styled.span`
    font-size:14px;
    color:#B1B5C4;
`
const UserNum =styled.span`
    font-size:14px;
    margin:0 12px;
    color:#777E91;
`
const SearchBtn = styled.button`
    background:#3B71FE;
    border-radius:10px;
    padding:22px 42px;
    font-size:20px;
    margin-left:35px;
    color:#fff;
    border:none;
`
const SearchCard = styled.div`
    width:25%;
    position:relative;
    background:${(props)=>props.theme.inpBg};
    padding:10px 20px;
    border:1px solid ${(props)=>props.theme.inpBorder};
    border-radius:8px;
    &:nth-child(1){
        width:31%;
    }
    & input {
        border: none;
        color: ${(props) => props.theme.page};
        outline: none;
        background-color: transparent;
    }
    &:active{
        background-color:#E8EFFF;
    }
    & .css-qc6sy-singleValue {
        color: ${(props) => props.theme.page};
    }
`
const ArrowIcon = styled.div`
    position:absolute;
    left:-22px;
    top:24%;
    padding:8px 8px 4px;
    font-size:20px;
    border-radius:50%;
    color:${(props)=>props.theme.arrowColor};
    background-color:${(props)=>props.theme.arrowBg};
`
// const CheckInput =styled.input`
//     width:200px;
//     border:none;
//     outline:none;
//     background-color:transparent;
//     padding:0;
// `
const SearchName= styled.label`
    display:block;
    margin:0 0 6px;
    font-weight:500;
    font-size:18px;
    color:${(props)=> props.theme.buttonColor};
`
const Form = styled.form`
    margin-top:28px;
`
const InfoBtn = styled.button`
    border:1px solid #E6E8EC;
    padding:10px;
    border-radius:50%;
    font-size:12px;
    background-color:transparent;
    color:#E6E8EC;
`


const Search = () => {
    const [user, setUser] = useState(0);
    const [child, setChild] = useState(0);
    const [city, setCity] = useState('');
    const [infant, setInfant] = useState(0);
    
    let history = useNavigate();

    const { t } = useTranslation()

    const all = user + child + infant;



    const handleActive = (el) => {
        if(el.target.className === "total"){
            el.target.className = "total active"
        }else if(el.target.className === 'total active'){
            el.target.className="total"
        }
    }

    const cities = [
        {value:"Madina", label:"Madina"},
        {value:"Makka", label:"Makka"},
        {value:"Sharja", lebel:"Sharja"},
        {value:"Italy", label:"Italy"},
        {value:"Germany", label:"Germany"},
        {value:"England", label:"England"},
        {value:"Turkey", label:"Turkey"},
        {value:"Poland", label:"Poland"},
        {value:"Japan", label:"Japan"},
        {value:"France", label:"France"}
    ]

    const handleSearch = (el) => {
        el.preventDefault();
        history('/hotellist');
        console.log(country.current.controlRef.innerText)
        console.log(dateIn.current.state.value)
        console.log(dateOut.current.state.value)
    }

    const handleCities = (newValue) =>{
        setCity(newValue.value)
        // console.log(newValue.value)
    }

    const dateIn = useRef(null);
    const country = useRef(null);
    const dateOut = useRef(null);

    return (
    <Container>
        <SearchDiv>
            <SearchRow>
                <Row>
                <Tabs>
                    <TabList>
                    <Tab><Services><FaBed className="service-icon"/>{t('hotel')}</Services></Tab>
                    <Tab><Services><MdFlightTakeoff className="service-icon"/>{t('flight')}</Services></Tab>
                    <Tab><Services><RiCarFill className="service-icon"/>{t('carRental')}</Services></Tab>
                    </TabList>
                </Tabs>
                </Row>
                <PassengerDiv>
                    <button onClick={handleActive} className="total">{all} {t('passenger')}<ArrowBottom><IoIosArrowDown className="arrow-bottom"/></ArrowBottom></button>
                <Info className="info">
                    <Currency>
                        <div>
                            <InfoText>{t('adult')}</InfoText>
                            <InfoAge>{t('adultage')}</InfoAge>
                        </div>
                        <div>
                            <InfoBtn onClick={() => {setUser(user > 0 ? user - 1 : 0)}}> <AiOutlineMinus/></InfoBtn>
                            <UserNum>{user}</UserNum>
                            <InfoBtn onClick={()=>{setUser(user + 1)}}><AiOutlinePlus/></InfoBtn>
                            
                        </div>
                    </Currency>
                    <Currency>
                        <div>
                            <InfoText>{t('child')}</InfoText>
                            <InfoAge>{t('childage')}</InfoAge>
                        </div>
                        <div>
                            <InfoBtn onClick={()=>{setChild(child > 0 ? child - 1 : 0)}}> <AiOutlineMinus/></InfoBtn>
                            <UserNum>{child}</UserNum>
                            <InfoBtn onClick={()=>{setChild(child + 1)}}><AiOutlinePlus/></InfoBtn>
                        </div>
                    </Currency>
                    <Currency>
                        <div>
                            <InfoText>{t('infant')}</InfoText>
                            <InfoAge>{t('infantage')}</InfoAge>
                        </div>
                        <div>
                            <InfoBtn onClick={() => {setInfant(infant > 0 ? infant - 1 : 0)}}> <AiOutlineMinus/></InfoBtn>
                            <UserNum>{infant}</UserNum>
                            <InfoBtn onClick={() => {setInfant(infant + 1)}}><AiOutlinePlus/></InfoBtn>
                        </div>
                    </Currency>
                </Info>
                </PassengerDiv>
            </SearchRow>

            <Form>
                <Row>
                    <SearchCard>
                        <SearchName>{t('location')}</SearchName>
                        <Select options={cities} placeholder={t('inpPlace')} onClick={handleCities} ref={country}/>
                    </SearchCard>
                    <SearchCard>
                        <SearchName>{t('checking')}</SearchName>
                        <DayPickerInput placeholder={t('addDate')} ref={dateIn}/>
                        <ArrowIcon><CgArrowsExchange/></ArrowIcon>
                    </SearchCard>
                    <SearchCard>
                        <SearchName>{t('checkout')}</SearchName>
                        <DayPickerInput placeholder={t('addDate')} ref={dateOut}/>
                        <ArrowIcon><CgArrowsExchange/></ArrowIcon>
                    </SearchCard>
                    <SearchBtn onClick={handleSearch}>{t('search')}</SearchBtn>
                </Row>
            </Form>
        </SearchDiv>
    </Container>
)
}

export default Search;
