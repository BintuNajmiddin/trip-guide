import styled from "styled-components";
import {GoStar} from 'react-icons/go';
import { Star  } from '../styled';

const TravelCard = styled.div`
    position:relative;
    width:23%;
`
const TravelImg = styled.img`
    width:100%;
    border-radius:15px;
`
const TravelBg = styled.div`
    position:absolute;
    top:0;
    bottom:4px;
    right:0;
    left:0;
    border-radius:15px;
    background: linear-gradient(5.24deg, rgba(22, 22, 22, 0.48) 16.31%, rgba(35, 35, 35, 0) 35.48%);
`
const TravelInfo =styled.div`
    position:absolute;
    bottom:21px;
    left:30px;
`
const TravelTitle = styled.h4`
    font-weight:600;
    margin:8px 0;
    font-size:24px;
    color:#fff;
 `
const Percent= styled.span`
    font-size:14px;
    color:#fff;
`
const Travel = ({image, title})=>{
    return (
        <TravelCard>
            <TravelImg src={image} alt="travel"/>
            <TravelBg></TravelBg>
            <TravelInfo>
                <TravelTitle>{title}</TravelTitle> 
                <Percent><Star><GoStar/></Star>4.8 (122 reviews)</Percent>
            </TravelInfo>
        </TravelCard>
    );
}

export default Travel;