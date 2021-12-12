import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const OffersDiv = styled.div`
    border-radius:16px;
    padding:62px 90px;
    display:flex;
    justify-content:space-between;
    background-repeat:no-repeat;
    background-size:cover;
    align-items:flex-end;
    position:absolute;
    top:-125px;
    width:86.7%;
`
const OfferInfo = styled.div`
    color:#fff;
    width:371px
`
const OfferTitle = styled.h3`
    font-weight: 800;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: -0.5px;
    margin:0 0 16px;
`
const OfferText = styled.span`
    font-size: 16px;
    line-height: 28px;
    opacity: 0.88;
`
const OfferInput = styled.input`
    background: #FCFCFD;
    box-shadow: 10px 16px 60px -7px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    color: #B1B5C4;
    font-size: 16px;
    line-height: 19px;
    padding:26px 0 26px 22px;
    width:488px;
    border:none;
`
const OfferBtn = styled.button`
    position:absolute;
    top:8px;
    right:8px;
    background: #353945;
    box-shadow: 0px 12px 20px -5px rgba(23, 23, 126, 0.1);
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color:#fff;
    padding:18px 30.5px;
    border:none;
`
const OfferSubscribe = styled.div`
    position:relative;
`


const Offers = () =>{
    const {t} = useTranslation();

    const mail = useRef(null);

    const handleMail = (e) => {
        e.preventDefault();
        console.log(mail.current.value);
    }
    return (
        <OffersDiv style={{backgroundImage:'url(/assets/img/offerbg.jpg)'}}>
            <OfferInfo>
                <OfferTitle>{t('offertitle')}</OfferTitle>
                <OfferText>{t('offertext')}</OfferText>
            </OfferInfo>
            <OfferSubscribe>
                <OfferInput placeholder={t('email')} ref={mail}/>
                <OfferBtn onClick={handleMail} type="button">{t('subscribe')}</OfferBtn>
            </OfferSubscribe>
        </OffersDiv>
    );
}


export default Offers;

