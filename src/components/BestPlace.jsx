import { useTranslation } from "react-i18next";
import styled from "styled-components";

const BestPlaceCard = styled.div`
    padding:28px 30px 25px;
    border: 1px solid #E7ECF3;
    border-radius: 10px;
    color:${(props) => props.theme.bestCard};
    width:23%;
    background-color:transparent;
    margin-top:30px;
    text-align:left;
    &:hover{
        background-color:${(props)=> props.theme.headBgColor};
        box-shadow: 0px 20px 51px rgba(96, 96, 96, 0.1);
        border:none
    }
`
const BestPlaceImg = styled.img`
    width:70px;
    border-radius:10px
`
const DestNum = styled.span`
    font-size: 14px;
    font-weight: 500;
    color:${(props) => props.theme.Destination} ;
`
const BestPlace = ({image, title}) =>{
    const {t} =useTranslation();
    return(
        <BestPlaceCard>
            <BestPlaceImg src={image} alt="best-place"/>
            <h3>{title}</h3>
            <DestNum>86 {t('destinations')}</DestNum>
        </BestPlaceCard>
    )
}
export default BestPlace;