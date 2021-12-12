import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {GrWifi} from 'react-icons/gr';
import {BiBath} from 'react-icons/bi';
import {ImSpoonKnife} from 'react-icons/im';
import {FaBed} from 'react-icons/fa';
import {BsArrowRepeat} from 'react-icons/bs';
import {MdComputer} from 'react-icons/md';
import {HiOutlineDesktopComputer} from 'react-icons/hi';
import {FaPizzaSlice} from 'react-icons/fa';
import {MdOutlineKeyboardHide} from 'react-icons/md';
import {MdApartment} from 'react-icons/md'

const AboutSelected = styled.div`
    flex: 2;
`
const SelectedTit = styled.h2`
    font-size: 40px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.detailsTitle};
    margin: 0 0 10px;
`
const CityName = styled.span`
    font-weight: 500;
    font-size: 24px;
    color: ${(props) => props.theme.detailsCity};
`
const DivTab = styled.div`
    margin-top: 30px;
    padding: 30px 0;
    border-top: 1px solid ${(props) => props.theme.searchBr};
    border-bottom: 1px solid ${(props) => props.theme.searchBr};
`
const AboutTab = styled.span`
    color: ${(props) => props.theme.tabColor};
    font-weight: 500;
    margin-right: 42px;
    .react-tabs__tab.react-tabs__tab--selected &{
        color: #145CE6;
    }
`
const SelectedText = styled.p`
    line-height: 24px;
    color: ${(props) => props.theme.detailText};
    margin: 20px 0;
`
const Feature = styled.h3`
    color: ${(props) => props.theme.detailsTitle};
    margin: 38px 0 25px;
`
const FeatureIcons = styled.div`
    padding-bottom: 62px;
    border-bottom: 1px solid ${(props) => props.theme.searchBr};
`
const Icon = styled.span`
    color: ${(props) => props.theme.detailText};
    margin-right: 45px;
    & i {
        margin-right: 10px;
    }
`
const Comforts = styled.div`
    padding-top: 60px;
    display: flex; 
    align-items: flex-end;
`
const Icons = styled.div`
    margin-left: 120px;
`
const ComfortsTitle = styled.h3`
    margin: 0 0 28px;
    font-size: 24px;
    color: ${(props) => props.theme.detailsTitle};
`
const Comfort = styled.div`
    margin-bottom: 26px;
`
const More = styled.button`
    padding: 10px 30px;
    margin-top: 30px;
    color: #FFFFFF;
    background: #3B71FE;
    border-radius: 47px;
    border: none;
    font-size: 16px;
`

const SelectedList = (props) => {
    const { t } = useTranslation()
    return (
        <AboutSelected>
            <SelectedTit>{t('exclusive')}</SelectedTit>
            <CityName>{props.location}</CityName>
            <DivTab>
                <Tabs>
                    <TabList>
                        <Tab><AboutTab>{t('description')}</AboutTab></Tab>
                        <Tab><AboutTab>{t('features')}</AboutTab></Tab>
                        <Tab><AboutTab>{t('room&price')}</AboutTab></Tab>
                        <Tab><AboutTab>{t('review')}</AboutTab></Tab>
                    </TabList>
                </Tabs>
            </DivTab>
            <SelectedText>{t('detailText')}</SelectedText>
            <Feature>{t('hotelFeatures')}</Feature>
            <FeatureIcons>
                <Icon><GrWifi/> Wi-fi</Icon>
                <Icon><BiBath/> {t('bathup')}</Icon>
                <Icon><ImSpoonKnife/> {t('breakFast')}</Icon>
                <Icon><FaBed/> {t('kinsBed')}</Icon>
                <Icon><BsArrowRepeat/> 4m - 6m</Icon>
            </FeatureIcons>
            <Comforts>
                <div>
                    <ComfortsTitle>{t('amenities')}</ComfortsTitle>
                    <Comfort><Icon><GrWifi/> {t('FreeWifi')} 24/7</Icon></Comfort>
                    <Comfort><Icon><MdComputer/> {t('freeCom')}</Icon></Comfort>
                    <Comfort><Icon><HiOutlineDesktopComputer/> {t('FreeWifi')} 24/7</Icon></Comfort>
                    <Comfort><Icon><HiOutlineDesktopComputer/> {t('FreeWifi')} 24/7</Icon></Comfort>
                </div>
                <Icons>
                    <Comfort><Icon><BiBath/> {t('freeClean')}</Icon></Comfort>
                    <Comfort><Icon><FaPizzaSlice/> {t('incBreakfast')}</Icon></Comfort>
                    <Comfort><Icon><MdOutlineKeyboardHide/> {t('atm')}</Icon></Comfort>
                    <Comfort><Icon><MdApartment/> {t('nearby')}</Icon></Comfort>
                </Icons>
            </Comforts>
            <More>{t('moreDet')}</More>
        </AboutSelected>
    )
}
export default SelectedList;