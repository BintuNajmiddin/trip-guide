import { useTranslation } from "react-i18next";
import styled from "styled-components";

const TopTourCard = styled.div`
    position:relative;
    border-radius:16px;
    object-fit:cover;
    oveflow:hidden;
    text-align:left;
    width:369px
`
const TourNamespan= styled.span`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
    padding:12px 27px;
    color: #E9EBF3;
    background: rgba(20, 20, 22, 0.2);
    backdrop-filter: blur(4px);
    position:absolute;
    top:30px;
    left:35px;
    border-radius:50px;
`
const Info = styled.div`
    position:absolute;
    left:35px;
    bottom:30px;
`
const InfoTitle = styled.h3`
    margin:20px 0;
    font-size:40px;
    color:#fff;    
`
const TourPopPlce =styled.span`
    color:#fff;
    font-size:16px;
`
const TopImg = styled.img`
    border-radius:16px;
`

const TopTour = (props) =>{
    const {t} = useTranslation();
    return (
        <TopTourCard>
            <TopImg src={props.image} alt={props.city}/>
                <TourNamespan>{props.state}</TourNamespan>
                <Info>
                <InfoTitle>{props.city}</InfoTitle>
                <TourPopPlce>{props.pop} {t('popPlace')}</TourPopPlce>
                </Info>
        </TopTourCard>
    );
}

export default TopTour;