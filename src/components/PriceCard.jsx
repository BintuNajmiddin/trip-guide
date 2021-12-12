import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { Row, Checkbox, Label } from '../styled';
import {BsCalendarRange} from 'react-icons/bs';
import {IoIosArrowDown} from 'react-icons/io';
import { useState, useEffect } from 'react';
import apiCalls from '../config/api';


const Card = styled.div`
    flex: 1;
    background-color: ${(props) => props.theme.headerBgColor};
    padding: 20px 46px 30px;
    border-radius: 20px;
    margin-left: 90px;
`
const PriceNight = styled.span`
    font-weight: 600;
    font-size: 25px;
    color: ${(props) => props.theme.cityPrice};
`
const Price = styled.span`
    color: #B1B5C4;
    font-size: 18px;
    margin-left: 10px;
`
const Sale = styled.span`
    padding: 6px 10px;
    background: #145CE6;
    border-radius: 25px;
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
`
const ReceiptDate = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;
border-top: 1px solid ${(props) => props.theme.bellAfter}
`
const ReceiptTitle = styled.h3`
    color: ${(props) => props.theme.priceCardTitle};
    font-weight: 500;
    font-size: 16px;
    margin: 20px 0 11px;
`
const Receipt = styled.div`
    padding: 12px 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: ${(props) => props.theme.inpBg}
`
const DateIcon = styled.span`
    color: ${(props) => props.theme.dateIcon};
    font-size: 20px;
`
const DateText = styled.span`
    color: ${(props) => props.theme.bestCard};
    margin-left: 10px;
    font-size: 14px;
`
const Flex = styled.div`
    display: flex;
    align-items;
`
const NightText = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #84878B;
`
const PriceSum = styled.span`
    color: #B1B5C4;
    font-size: 14px;
    margin-left: 10px;
`
const ReceiptTotal = styled.div`
    padding: 1px 20px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.inpBg}
`
const ReceiptPrice = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.bestCard};
`
const TotalPrice = styled.span`
    font-weight: 500;
    color: ${(props) => props.theme.bestCard};
`
const BookNow = styled(Link)`
    padding: 11px 0;
    font-size: 20px;
    display: block;
    text-align: center;
    margin: 12px 0;
    color: #FFFFFF; 
    background: #316BFF;
    border-radius: 12px;
`
const Warning = styled.div`
    font-size: 14px;
    color: #777E91;
    text-align: center;
`

const PriceCard = (props) => {
    const { t } = useTranslation();

  
    return (
        <Card>
            <Row>
                <div>
                    <PriceNight>${props.price}.00<NightText>/night</NightText></PriceNight>
                    <Price>$184</Price>
                </div>
                <Sale>20% OFF</Sale>
            </Row>

            <ReceiptDate>
                <div>
                    <ReceiptTitle>{t('checkIn')}</ReceiptTitle>
                    <Receipt>
                        <DateIcon><BsCalendarRange/></DateIcon>
                        <DateText>May 15, 2021 </DateText>
                    </Receipt>
                </div>
                
                <div>
                    <ReceiptTitle>{t('checkOut')}</ReceiptTitle>
                    <Receipt>
                    <DateIcon><BsCalendarRange/></DateIcon>
                        <DateText>May 22, 2021 </DateText>
                    </Receipt>
                </div>
            </ReceiptDate>

            <ReceiptTitle>{t('guest')}</ReceiptTitle>
            <Receipt>
                <DateText>2 {t('adult')}, 1 {t('child')}</DateText>
                <DateText><IoIosArrowDown/></DateText>
            </Receipt>

            <ReceiptTitle>{t('extra')}</ReceiptTitle>
            <div>
                <Row className="mrg">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('allow')}</Label>
                    </Flex>
                    <PriceSum>$13</PriceSum>
                </Row>

                <Row className="mrg">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('Breakfast')}</Label>
                    </Flex>
                    <PriceSum>$10</PriceSum>
                </Row>

                <Row className="mrg">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('parking')}</Label>
                    </Flex>
                    <PriceSum>$6</PriceSum>
                </Row>

                <Row className="mrg">
                    <Flex>
                        <Checkbox type="checkbox" name="" id="" />
                        <Label htmlFor="">{t('extraPillow')}</Label>
                    </Flex>
                    <PriceSum>Free</PriceSum>
                </Row>
            </div>

            <ReceiptTitle>{t('price')}</ReceiptTitle>
            <ReceiptTotal>
                <Row className="mrg">
                    <ReceiptPrice>1 {t('nights')}</ReceiptPrice>
                    <ReceiptPrice>$500</ReceiptPrice>
                </Row >
                <Row className="mrg">
                    <ReceiptPrice>{t('discount')}</ReceiptPrice>
                    <ReceiptPrice>$200</ReceiptPrice>
                </Row>
                <Row className="mrg">
                    <ReceiptPrice>{t('Breakfast')}</ReceiptPrice>
                    <ReceiptPrice>$10</ReceiptPrice>
                </Row>
                <Row className="mrg">
                    <ReceiptPrice>{t('serviceFee')}</ReceiptPrice>
                    <ReceiptPrice>$5</ReceiptPrice>
                </Row>
            </ReceiptTotal>

            <Row>
                <ReceiptTitle>{t('totalPay')}</ReceiptTitle>
                <TotalPrice>$300</TotalPrice>
            </Row>

            <BookNow to={`/payment/${props.id}`}>{t('bookNow')}</BookNow>
            <Warning>{t('youWill')}</Warning>
        </Card>
    )
}
export default PriceCard;