import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Container} from '../styled';
import Search from '../components/Search';

const IntroSec = styled.div`
    position:relative;
    background-repeat:no-repeat;
    background-position:center;
    background-size:cover;
`
const IntroBg = styled.div`
    padding:140px 0 200px;
    background: linear-gradient(110.89deg, rgba(207, 241, 255, 0.8) 30.76%, rgba(255, 255, 255, 0) 63.61%);
`
const IntroTitle = styled.h3`
    font-size: 64px;
    letter-spacing: -0.005em;
    width:43%;
    height:240px;
    margin:0;
    color: #3B3E44;
    text-shadow: 0px 8px 16px rgba(51, 51, 51, 0.08);
`
const SearchCard= styled.div`
    position:absolute;
    bottom:-78px;
    width:100%;
`


const Intro = () =>{
    const { t } = useTranslation();
    return (
        <IntroSec style={{backgroundImage:'url(/assets/img/intro-bg.jpg)'}}>
            <IntroBg>
                <Container>
                    <IntroTitle>{t('intro-title')}</IntroTitle>
                </Container>
            </IntroBg>
            <SearchCard>
                <Search/>
            </SearchCard>

        </IntroSec>
    );
}

export default Intro;