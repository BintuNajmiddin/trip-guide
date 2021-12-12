import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Intro from '../components/Intro';
import BestPlace from '../components/BestPlace'; 
import { Container, Row , Aroundrow} from '../styled';
import { useTranslation } from 'react-i18next';
import Featured from '../components/Featured';
import TopTour from '../components/TopTour';
import { Swiper, SwiperSlide } from 'swiper/react';
import Explore from '../components/Explore';
import Trending from '../components/Trending';
import Travel from '../components/Travel';
import apiCalls from '../config/api';
import Loader from '../components/Loader';
import SwiperCore, {Navigation} from 'swiper';
import {GrNext} from 'react-icons/gr';
import {GrPrevious} from 'react-icons/gr';


const BestSec = styled.section`
    background-color:${(props)=> props.theme.bgColor};
    padding:150px 0 80px;
    text-align:center;
`
const SectionTitle = styled.h2`
    font-size: 48px;
    letter-spacing: -0.005em;
    color: ${(props)=>props.theme.titleColor};
    margin:0 0 12px;
`
const SectionText =styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #84878B;
`
const FeatureSec =styled.section`
    padding-bottom:70px;
    background-color:${(props)=> props.theme.bgColor}
`
const TopTourSec = styled.section`
    padding-bottom:70px;
    background-color:${(props)=> props.theme.bgColor}
`
const ExploreSec= styled.section`
    background-color:${(props)=> props.theme.bgColor};
    padding-bottom:70px;
`
const TrendSec = styled.section`
    background-color:${(props)=> props.theme.sectionBg};
    padding:60px 0;
    text-align:center;
`
const TravelSec = styled.div`
    padding:70px 0 244px;
    background-color:${(props)=>props.theme.bgColor};
`
const SliderBtn = styled.button`
    padding: 13px 15px;
    border-radius: 50%;
    border: none;
    margin-left: 10px;
    font-size: 10px;
    background-color: ${(props) => props.theme.bellAfter};
    color: ${(props) => props.theme.headText};
`


const Home = () => {
    const { t } = useTranslation();
    const [tour, setTour] = useState([]);
    const [explore, setExplore] = useState([]);
    const [trending, setTrending] = useState([]);
    const [error,setError] =useState('');
    const [tourLoader, setTourLoader] = useState();
    const [exploreLoader, setExploreLoader] = useState();
    const [trendingLoader, setTrendingLoader] = useState();


    SwiperCore.use([Navigation]);


    useEffect(()=>{
        apiCalls.getTours().then(data=>{
            setTour(data);
            setTourLoader(false);
        }).catch(err=>{
            setError(err.message);
        });

        apiCalls.getExplore().then((data) => {
            setExplore(data);
            setExploreLoader(false);
        }).catch(err => {
            setError(err.message);
        })

        apiCalls.getCities().then((data) => {
            setTrending(data);
            setTrendingLoader(false);
        }).catch(err => {
            setError(err.message);
        })
    },[]);


    return (
        <div>
            <Intro/>
            <BestSec>
                <SectionTitle>{t('bestPlaceTitle')}</SectionTitle>
                <SectionText>{t('bestPlaceText')}</SectionText>
            <Container>
            <Row>
            <BestPlace image="/assets/img/best-place1.jpg" title="Batu, East Java"/>    
            <BestPlace image="/assets/img/best-place2.jpg" title="Kuta"/>    
            <BestPlace image="/assets/img/best-place3.jpg" title="Surabaya, East Java"/>    
            <BestPlace image="/assets/img/best-place4.jpg" title="Malang, East Java"/>    
            <BestPlace image="/assets/img/best-place4.jpg" title="Malang, East Java"/>    
            <BestPlace image="/assets/img/best-place3.jpg" title="Surabaya, East Java"/>    
            <BestPlace image="/assets/img/best-place2.jpg" title="Kuta"/>    
            <BestPlace image="/assets/img/best-place1.jpg" title="Batu, East Java"/> 
            </Row>  
            </Container>
            </BestSec> 

            <FeatureSec>
                <Container>
                <SectionTitle>{t('featureTitle')}</SectionTitle>
                <SectionText>{t('featureText')}</SectionText>
                <Featured/>
                </Container>
            </FeatureSec>


            <TopTourSec>
                <Container>
                    <Row>
                    <div>
                <SectionTitle>{t('topTour')}</SectionTitle>
                <SectionText>{t('topText')}</SectionText>
                </div>
                <div>
                    <SliderBtn className='prev'><GrPrevious/></SliderBtn>
                    <SliderBtn className='next'><GrNext/></SliderBtn>
                </div>
                </Row>
                <Swiper 
                    slidesPerView={3} 
                    spaceBetween={30} 
                    style={{marginTop:'60px'}} 
                    navigation={{nextEl:'.next', prevEl:'.prev'}}>
                        {error || tourLoader ? <Loader/> : tour.map(e => (
                            <SwiperSlide key={e.id}>
                                <TopTour image={`/assets/img/${e.photo}`} state={e.name} city={e.country} pop={e.place_count}/>
                            </SwiperSlide>
                        ))}
                </Swiper>
                </Container>
            </TopTourSec>

            <ExploreSec>
                <Container>
                    <Row>
                    <div>
                <SectionTitle>{t('ExploreTitle')}</SectionTitle>
                <SectionText>{t('exploreText')}</SectionText>
                </div>
                <div>
                    <SliderBtn className='last'><GrPrevious/></SliderBtn>
                    <SliderBtn className='first'><GrNext/></SliderBtn>
                </div>
                </Row>
                <Swiper 
                    slidesPerView={4} 
                    spaceBetween={30}
                    style={{marginTop:'50px'}}
                    navigation={{nextEl:'.first', prevEl:'.last'}}>
                        {error || exploreLoader ? <Loader/> : explore.map(el =>(
                        <SwiperSlide key={el.id}>
                        <Explore image={el.image} title={el.title} rooms={el.rooms} radius={el.radius} price={el.price} location={el.location}/>
                        </SwiperSlide>  
                        ))}
                </Swiper>
                </Container>
            </ExploreSec>
            
            <TrendSec>
                <SectionTitle>{t('trendTitle')}</SectionTitle>
                <SectionText>{t('trendText')}</SectionText>
                <Container>
                    <Aroundrow>
                        {error || trendingLoader ? <Loader/> : 
                        trending.map(e => (
                            <Trending i={e.id} photo={e.photo} name={e.name} rating={e.rating} price={e.price} />
                        ))}
                    </Aroundrow>
                </Container>
            </TrendSec>

            <TravelSec>
                <Container>
                <SectionTitle>{t('travelTitle')}</SectionTitle>
                <SectionText>{t('travelText')}</SectionText>
                <Row>
                    <Travel image="/assets/img/travel1.jpg" title="Beach Hobby" />
                    <Travel image="/assets/img/travel2.jpg" title="City Tours" />
                    <Travel image="/assets/img/travel3.jpg" title="Hiking Trips" />
                    <Travel image="/assets/img/travel4.jpg" title="Sports Trips" />
                </Row>
                </Container>
            </TravelSec>

         
        </div>
    );
}

export default Home;
