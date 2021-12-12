import HotelCard from '../components/HotelCard'
import { Container, Row } from '../styled';
import Filter from '../components/Filter';
import Search from '../components/Search';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components'
import { BreadCrumb, CurrentPage } from '../styled';
import {IoIosArrowForward} from 'react-icons/io';
import {BiLoaderAlt} from 'react-icons/bi';
import { useEffect, useState } from 'react';
import apiCalls from '../config/api';
import Loader from '../components/Loader';


const BigSec = styled.section`
    padding:40px 0 250px;
    background-color:${(props)=>props.theme.bgColor};
`
const BigCont = styled.div`
    max-width:98%;
    margin:0 auto;
    padding:70px 0 0;
`
const HotelItem = styled.div`
    flex:3;
    margin-left:50px;
    text-align:center;
`
const Flex = styled.div`
    display: flex;
`
const ViewAll = styled.button`
    color:${(props)=>props.theme.filterTitle};
    padding:10px 40px;
    border:1px solid #B1B5C4;
    border-radius:47px;
    background-color:transparent;
`
const Link = styled.div`
    margin: 0 55px 60px;
`


const HotelList = () => {
    const { t } = useTranslation();

    const [list , setList] = useState([]);
    const [err, setErr] = useState('');
    const [loader, setLoader] = useState(true);
    

    useEffect(()=>{
        apiCalls.getHotels().then(data=>{
            setList(data);
            setLoader(false);
        }).catch(err =>{
            setErr(err.message);
        });
    }, [])



    return (
        <BigSec>
            <Link>
                <BreadCrumb to="/">{t('page1')}<IoIosArrowForward/></BreadCrumb>
                <CurrentPage>{t('page2')}</CurrentPage>
            </Link>
            <Search/>
            <BigCont style={{maxWidth: '90%', margin: '0 auto', padding: '70px 0 0' }}>
                <Flex style={{display: 'flex'}}>
                    <Filter/>
                    <HotelItem style={{flex: '3', marginLeft: '50px', textAlign: 'center'}}>
                        
                            {err || loader ? <Loader/> : list.map(el=>(
                                <HotelCard id={el.id} image={`/assets/img/${el.photo}`} name={el.name} price={`$${el.price}`} rating={el.rating} reviews={el.reviews} location={el.location}/>
                            ))}

                        <ViewAll><BiLoaderAlt/> {t('viewAll')}</ViewAll>
                    </HotelItem>
                </Flex>
            </BigCont>
        </BigSec>
    );
}
export default HotelList;
