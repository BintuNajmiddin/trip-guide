import styled from 'styled-components';
import { RatingNum, RatingDiv, Star} from '../styled';
import { Row } from '../styled';
import { useTranslation } from 'react-i18next';
import {GoStar} from 'react-icons/go';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import { FaHotel } from 'react-icons/fa';


const Percentage =styled.span`
    padding:0 5px;
    color:${(props)=> props.theme.bestCard};
`
const ExploreCard = styled.div`
    border:1px solid ${(props)=> props.theme.bellAfter};
    padding:15px 15px 20px;
    background-color:${(props)=>props.theme.headBgColor};
    border-radius:20px;
    &:hover{
        box-shadow: 0px 15px 45px rgba(102, 102, 102 0.1);
        border:none;
    }
`
const ExploreImg =styled.img`
    width:100%;
    border-radius:16px;
`
const ExploreName= styled.h4`
    margin:10px 0;
    font-size:20px;
    color:${(props=>props.theme.buttonColor)};
`
const ExplorePrice = styled.span`
    padding:4px 10px;
    border-radius:6px;
    font-sze:18px;
    font-weight:500;
    color:#316BFF;
    background-color:rgba(49, 107, 255, 0.2);
`
const DistanceSpan =styled.div`
    font-weight:500;
    color:${(props)=>props.theme.iconColor};
    font-size:14px;
`
const SpanInfo =styled.span`
    display:block;
    font-size:14px;
    margin-top:8px;
    color:${(props)=>props.theme.iconColor};
`

const Explore = ({image, title, rooms, radius, price, location}) =>{
    const {t} =useTranslation();
    return(
        <ExploreCard>
            <ExploreImg src={`/assets/img/${image}`} alt="explore"/> 
            <RatingDiv  style={{marginTop:'20px'}}>
                <Star>
                    <GoStar/>
                   </Star> 
                <Percentage>4.91</Percentage>
                <RatingNum>(147)</RatingNum>
            </RatingDiv>
            <Row>
                <ExploreName>{title}</ExploreName>
                <ExplorePrice>${price}</ExplorePrice>
            </Row>
            <DistanceSpan>{radius} {t('centerTour')} </DistanceSpan>
            <SpanInfo>
                <HiOutlineLocationMarker className="explore-icon"/>{location}
            </SpanInfo>
            <SpanInfo>
                <FaHotel className="explore-icon"/>
                {t('rooms')} :{rooms}</SpanInfo>
        </ExploreCard>
    );
}

export default Explore;