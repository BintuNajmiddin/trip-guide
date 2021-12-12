import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { RatingDiv, Star, Percentage, RatingNum, Row } from '../styled';
import {GoStar} from 'react-icons/go';
import {BsFlag} from 'react-icons/bs';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {BsCalendar4} from 'react-icons/bs';
import {BiWifi} from 'react-icons/bi';
import {RiParkingBoxLine} from 'react-icons/ri';
import {BsGlobe2} from 'react-icons/bs';
import {BiCoinStack} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {GiCommercialAirplane} from 'react-icons/gi';
import {BsWallet2} from 'react-icons/bs';

const CardItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.theme.bellAfter};
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 50px;
    text-align: left;
`
const CardTitle = styled.h3`
    margin: 30px 0 22px;
    font-size: 40px;
    letter-spacing: -0.005em;
    color: ${(props) => props.theme.titleColor};
`
const CardText = styled.div`
    padding: 0 26px; 
`
const Possibilities = styled.span`
    display: block;
    font-size: 14px;
    margin: 12px 0;
    color: ${(props) => props.theme.bestCard};
`
const Iconspan = styled.i`
    margin-right: 10px;
    color: ${(props) => props.theme.iconColor};
`
const FlexDiv = styled.div`
    display: flex;
`
const CardFlag = styled.span`
    margin-left: 20px;
    font-size: 14px;
    color: ${(props) => props.theme.iconColor};
`
const About = styled.span`
    color: ${(props) => props.theme.cardInfo};
    display: inline-block;
    line-height: 34px;
    &:nth-child(1) {
        margin-right: 10px;
    }
`
const Information = styled.div`
    margin: 30px 0;
`
const Price = styled.span`
    display: block;
    font-weight: bold;
    font-size: 28px;
    color: ${(props) => props.theme.cardPrice};
    padding: 10px 20px;
    background: ${(props) => props.theme.footerBg};
    border-radius: 37px;
    margin-bottom: 20px;
`
const ForPr = styled.span`
    color: #84878B;
    font-weight: 500;
    font-size: 16px;
`
const Booking = styled(Link)`
    padding: 10px 40px;
    background: #3B71FE;
    box-shadow: 0px 5px 20px rgba(20, 92, 230, 0.14);
    border-radius: 23px;
    border: none;
    font-size: 20px;
    color: #FFFFFF;
`
const Image= styled.div`
    width:420px;
    height:465px;
    overflow:hidden;
    object-fit:cover;
`

const HotelCard =(props)=>{
    const {t} = useTranslation();
    return(
        <CardItem key={props.id}>
            <Image>
            <img src={props.image} alt="hotellist"/>
            </Image>
            <CardText>
                <CardTitle>{props.name}</CardTitle>
                <FlexDiv>
                    <RatingDiv>
                        <Star><GoStar/></Star>
                        <Percentage>{props.rating}</Percentage>
                        <RatingNum>({props.reviews} {t('reviews')})</RatingNum>
                    </RatingDiv>
                    <CardFlag><BsFlag/>{props.name}</CardFlag>
                </FlexDiv>

                <Information>
                    <About><Iconspan><HiOutlineLocationMarker/></Iconspan>{props.location}</About>
                    <About><Iconspan><BsCalendar4/></Iconspan>15.05.2021-16.05.2021</About>
                    <About><Iconspan><GiCommercialAirplane/></Iconspan>Depature from zuich</About>
                </Information>

                <Row>
                    <div>
                        <Possibilities><Iconspan><BiWifi/></Iconspan>{t('wifi')}</Possibilities>
                        <Possibilities><Iconspan><RiParkingBoxLine/></Iconspan>{t('parking')}</Possibilities>
                        <Possibilities><Iconspan><BsWallet2/></Iconspan>{t('specoffer')}</Possibilities>
                        <Possibilities><Iconspan><BsGlobe2/></Iconspan>{t('website')} </Possibilities>
                        <Possibilities><Iconspan><BiCoinStack/></Iconspan>{t('measures')}</Possibilities>
                    </div>
                    <div>
                        <Price>$320<ForPr>For Two</ForPr></Price>
                        <Booking to={`/details/${props.id}`}>{t('bookNow')}</Booking>
                    </div>
                </Row>
            </CardText>
        </CardItem>
    );
}

export default HotelCard;