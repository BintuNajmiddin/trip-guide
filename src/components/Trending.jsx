import styled from 'styled-components';
import {GoStar} from 'react-icons/go';
import { RatingNum } from '../styled';
import { useTranslation } from 'react-i18next';

const TrendingCard = styled.div`
    border-radius:20px;
    background-color:${(props) => props.theme.headBgColor};
    padding:24px;
    text-align:left;
    width:47%;
    margin-top:35px;
    display:flex;

`
const RatingDiv =styled.div`
    margin:12px 0 22px;
    font-weight:500;
    font-size:14px;
`
const Star = styled.span`
    color:#FFD166;
`
const Percentage =styled.span`
    padding:0 5px;
    color:${(props)=> props.theme.bestCard};
`
const TrendingImg =styled.img`
    border-radius:15px;
`
const TrendBookBtn =styled.button`
    border-radius:6px;
    background: #316BFF;
    color:#fff;
    padding:8px 16px;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    border:none;
    display:block;
    margin-top:24px;
`
const TrendNight =styled.span`
    font-weight:500;
    font-size:16px;
    line-height:18px;    
    color:#92929AFF;
`
const TrendingPrice =styled.span`
    font-weight:600;
    font-size:25px;
    line-height:18px;
    color: ${(props)=>props.theme.cityPrice};
`
const TrendingTitle = styled.h4`
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 12px;
    color:${(props)=>props.theme.cityName}
`
const TrendingInfo = styled.div`
    margin-left:30px;
`


const Trending = ({i, photo, name, rating, price}) =>{
    const { t } =useTranslation();
    return (
        <TrendingCard key={i}>
            <TrendingImg src={`/assets/img/${photo}`} alt="trending"/>
            <TrendingInfo>
                <TrendingTitle>{name}</TrendingTitle>
                <RatingDiv>
                <Star><GoStar/></Star> 
                <Percentage>{rating}</Percentage>
                {/* <RatingNum>(147)</RatingNum> */}
            </RatingDiv>
            <TrendingPrice>${price}.00<TrendNight>/night</TrendNight></TrendingPrice>
            <TrendBookBtn>{t('booking')}</TrendBookBtn>
            </TrendingInfo>
        </TrendingCard>
    );
}

export default Trending;

