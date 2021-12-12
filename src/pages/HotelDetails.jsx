import React from 'react'
import { GridDetail } from '../components/GridDetail';
import {IoIosArrowForward} from 'react-icons/io';
import {FiMapPin} from 'react-icons/fi';
import {AiFillStar} from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { BreadCrumb, Container, Row, CurrentPage } from '../styled'
import { RatingDiv, Star, Percentage, RatingNum } from '../styled'
import SelectedList from '../components/SelectedList';
import {GoStar} from 'react-icons/go';
import PriceCard from '../components/PriceCard';
import { useState, useEffect } from 'react';
import apiCalls from '../config/api';
import { useParams } from 'react-router-dom';

const SectionDetail = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor};
`
const Map = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.iconColor};
    margin-left: 20px;
`
const Icon = styled.i`
    margin-right: 10px;
    color: ${(props) => props.theme.iconColor};
`
const Flex = styled.div`
    display: flex;
    margin-bottom: 40px;
`
const Information = styled.div`
    margin: 40px 0;
`
const Rating = styled.span`
    padding: 5px 6px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span1Bg};
    color: ${(props) => props.theme.span1Color};
`
const Perfect = styled.span`
    padding: 5px 9px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span2Bg};
    color: ${(props) => props.theme.span2Color};
`
const Hotels = styled.span`
    padding: 5px 15px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span3Bg};
    color: ${(props) => props.theme.span3Color};
`
const Build = styled.span`
    padding: 5px 20px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span4Bg};
    color: ${(props) => props.theme.span4Color};
`
const Value = styled.span`
    padding: 5px 18px;
    margin-right: 17px;
    font-size: 14px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.span5Bg};
    color: ${(props) => props.theme.span5Color};
`
const RatingStar = styled.span`
    margin-right: 10px;
    &:not(:last-child) {
        color: #F9CB62;
    }
    &:last-child {
        color: #C4C4C4;
    }
`
const DetailName = styled.h2`
    margin: 30px 0;
    font-size: 48px;
    letter-spacing: -0.005em; 
    color: ${(props) => props.theme.cityName}
`

const HotelDetails = () => {
    const { t } = useTranslation()

    const [hotel, setHotel] = useState({})
    const {id} =useParams()

    useEffect(()=>{
        apiCalls.getHotelDetails(id).then(data =>{
            setHotel(data)

            })
    },[id])

    
    return (
        <SectionDetail>
            <Container>
                <BreadCrumb to="/">{t('page1')} <IoIosArrowForward/></BreadCrumb>
                <BreadCrumb to="/hotelist">{t('page2')} <IoIosArrowForward/></BreadCrumb>
                <CurrentPage>{t('page3')}</CurrentPage>
                <DetailName>{hotel.name}</DetailName>
                
                <Flex>
                    <RatingDiv>
                        <Star><AiFillStar/></Star> 
                        <Star><GoStar/></Star>
                        <Percentage>{hotel.rating}</Percentage> 
                        <RatingNum>({hotel.reviews} {t('reviews')})</RatingNum>
                    </RatingDiv>
                    <Map><Icon><FiMapPin/></Icon>{t('address')}</Map>
                </Flex>
                <img src={`/assets/img/${hotel.photo}`} alt='img'/>
                <Information>
                    <Rating>5.0</Rating>
                    <Perfect>{t('perfect')}</Perfect>
                    <Hotels>{t('hotels')}</Hotels>
                    <Build>{t('building')}</Build>
                    <Value>{t('topValue')}</Value>
                    <span>
                        <RatingStar><AiFillStar/></RatingStar>
                        <RatingStar><AiFillStar/></RatingStar>
                        <RatingStar><AiFillStar/></RatingStar>
                        <RatingStar><AiFillStar/></RatingStar>
                        <RatingStar><AiFillStar/></RatingStar>
                    </span>
                </Information>
                <Row>
                    <SelectedList location={hotel.location} />
                    <PriceCard price={hotel.price} id={hotel.id}/>
                </Row>
            </Container>
        </SectionDetail>
    )
}

export default HotelDetails;