import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Row , AlignCenter } from '../styled';

const FeaturedCard = styled.div`
    position:relative;
    border-radius:18px;
    object-fit:cover;
    overflow:hidden;
    margin-top:30px;
    // width:60%;
`
const MiddleCard = styled.div`
    position:relative;
    border-radius:18px;
    object-fit:cover;
    overflow:hidden;
    margin-top:30px;
    // width:30%;
`
const LittleCard = styled.div`
    position:relative;
    border-radius:18px;
    object-fit:cover;
    overflow:hidden;
    margin-top:30px;
    // width:27%;
`
const FeatureBg = styled.div`
    border-radius:18px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: linear-gradient(38.52deg, rgba(3, 3, 3, 0.54) -3.66%, rgba(6, 6, 6, 0) 45.57%);
`
const Rating = styled.span`
    font-size: 18px;
    font-weight: 700;
    position:absolute;
    top:20px;
    left:20px;
    padding:2px 20px;
    background-color:#fff;
    border-radius:20px;
    color:#FF543D;
    box-shadow: 0px 4px 10px rgba(40, 40, 40, 0.12);
`
const Info = styled.div`
    position:absolute;
    left:30px;
    bottom:15px;
`
const InfoTitle = styled.h3`
    margin:20px 0;
    font-size:40px;
    color:#fff;    
`
const Profile = styled.img`
    border-radius:50%;
    width:30px;
    height:30px;
    overflow:hidden;
    object-fit:cover;
`
const Activity = styled.span`
    color:#fff;
    font-size:20px;
    margin-left:5px;
`
const FeatureMiddleBg =styled.div`
    border-radius:18px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0; 
    background: linear-gradient(357.11deg, rgba(30, 30, 30, 0.67) 11.64%, rgba(66, 66, 66, 0) 23.22%);   
`
const MiddleInfoTitle = styled.h3`
    margin:12px 0;
    font-size:24px;
    color:#fff;   
`
const MiddleProfile = styled.img`
    width:20px;
    height:20px;
    border-radius:50%;
`
const Activities = styled.span`
    font-size:14px;
    color:#fff;
    margin-left:5px;
`
const LittleInfoTitle = styled.h3`
    margin:6px 0;
    font-size:18px;
    color:#fff
`
const LittleProfile = styled.img`
    width:14px;
    height:14px;
    border-radius:50%
`
const LittleActivity = styled.span`
    font-size:10px;
    color:#fff;
    margin-left:5px
`


const Featured = () => {
    const {t} = useTranslation();
    return (
        <Row>
            <div>
                <FeaturedCard>
                    <img src="/assets/img/Barcelona.jpg" alt="barcelona"/>
                    <FeatureBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <InfoTitle>{t('tour1')}</InfoTitle>
                            <AlignCenter>
                                <Profile src="/assets/img/profile.jpg" alt="profile"/>
                                <Activity>196 {t('activity')}</Activity>
                            </AlignCenter>
                        </Info>
                    </FeatureBg>
                </FeaturedCard>
                <Row>
                    <MiddleCard>
                        <img src="/assets/img/London.jpg" alt="london"/>
                        <FeatureMiddleBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <MiddleInfoTitle>{t('tour2')}</MiddleInfoTitle>
                            <AlignCenter>
                                <MiddleProfile src="/assets/img/profile.jpg" alt="profile"/>
                                <Activities>196 {t('activity')}</Activities>
                            </AlignCenter>
                        </Info>
                        </FeatureMiddleBg>
                    </MiddleCard>
                    <MiddleCard>
                        <img src="/assets/img/Australia.jpg" alt="australia"/>
                        <FeatureMiddleBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <MiddleInfoTitle>{t('tour3')}</MiddleInfoTitle>
                            <AlignCenter>
                                <MiddleProfile src="/assets/img/profile.jpg" alt="profile"/>
                                <Activities>196 {t('activity')}</Activities>
                            </AlignCenter>
                        </Info>
                        </FeatureMiddleBg>
                    </MiddleCard>
                </Row>
            </div>
            <div>
                <LittleCard>
                    <img src="/assets/img/Australia-2.jpg" alt="australia"/>
                    <FeatureMiddleBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <LittleInfoTitle>{t('tour3')}</LittleInfoTitle>
                            <AlignCenter>
                                <LittleProfile src="/assets/img/profile.jpg" alt="profile"/>
                                <LittleActivity>196 {t('activity')}</LittleActivity>
                            </AlignCenter>
                        </Info>
                        </FeatureMiddleBg>
                </LittleCard>
                <LittleCard>
                    <img src="/assets/img/Japan.jpg" alt="japan"/>
                    <FeatureMiddleBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <LittleInfoTitle>{t('tour4')}</LittleInfoTitle>
                            <AlignCenter>
                                <LittleProfile src="/assets/img/profile.jpg" alt="profile"/>
                                <LittleActivity>196 {t('activity')}</LittleActivity>
                            </AlignCenter>
                        </Info>
                        </FeatureMiddleBg>
                </LittleCard>
                <LittleCard>
                    <img src="/assets/img/Japan-2.jpg" alt="japan"/>
                    <FeatureMiddleBg>
                        <Rating>3.5</Rating>
                        <Info>
                            <LittleInfoTitle>{t('tour4')}</LittleInfoTitle>
                            <AlignCenter>
                                <LittleProfile src="/assets/img/profile.jpg" alt="profile"/>
                                <LittleActivity>196{t('activity')}</LittleActivity>
                            </AlignCenter>
                        </Info>
                        </FeatureMiddleBg>
                </LittleCard>
            </div>
        </Row>
    )
}

export default Featured
