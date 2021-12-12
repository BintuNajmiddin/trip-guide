import React from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { Container, BreadCrumb, CurrentPage } from '../styled'
import { Confirm } from '../components/Confirm';
import { Booked } from '../components/Booked';
import {IoIosArrowForward} from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiCalls from '../config/api';


const Section = styled.section`
    padding: 40px 0 250px;
    background-color: ${(props) => props.theme.bgColor}
`
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 50px;
`

const HotelPayment = () => {
    const { t } = useTranslation()

    const [hotel, setHotel] = useState({})
    const {id} =useParams()

    useEffect(()=>{
        apiCalls.getHotelDetails(id).then(data =>{
            setHotel(data)

            })
    },[id])

    

    return (
        <Section>
            <Container>
                <BreadCrumb to="/">{t('page1')} <IoIosArrowForward/></BreadCrumb>
                <BreadCrumb to="/hotelist">{t('page2')} <IoIosArrowForward/></BreadCrumb>
                <BreadCrumb to="/details">{t('page3')} <IoIosArrowForward/></BreadCrumb>
                <CurrentPage>{t('page4')}</CurrentPage>

                <Flex>
                    <Confirm id={hotel.id}/>
                    <Booked image={hotel.photo} rating={hotel.rating} reviews={hotel.reviews} name={hotel.name} price={hotel.price}/>
                </Flex>
            </Container>
        </Section>
    )
}

export default HotelPayment;