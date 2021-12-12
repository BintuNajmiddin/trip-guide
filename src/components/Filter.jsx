import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {BsSearch} from 'react-icons/bs';
import {Row} from '../styled';
import { useState } from 'react';
import React from 'react'


const FilterDiv = styled.aside`
    flex: 1;
`
const SearchTitle = styled.h4`
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.theme.filterTitle};
    margin: 0;
`
const SearchDiv = styled.div`
    margin-top: 13px;
    display: inline-block;
    background: ${(props) => props.theme.headBgColor};
    border: 1px solid ${(props) => props.theme.searchBr};
    border-radius: 10px;
`
const SearchInp =styled.input`
    padding:16px 20px 13px;
    font-size:16px;
    outline:none;
    border:none;
    background-color:transparent;
`
const SearchButton =styled.button`
    padding:15px;
    font-size:16px;
    border:none;
    background-color:transparent;
    color:#DADADA;
`
const Checkings =styled.div`
    padding:30px 0 15px;
    &:not(:last-child){
        border-bottom:1px solid ${(props)=>props.theme.inpBg};
    }
`
const DispFlex =styled.div`
    display:flex;
    align-items:center;
`
const Checkbox =styled.input`
    width:20px;
    height:20px;
`
const Label =styled.label`
    margin-left:12px;
    font-size:14px;
    color:${(props)=>props.theme.filterTitle};
`
const SeeMore = styled.span`
font-weight:500;
color:#145CE6;

`
const FilterPrice = styled.span`
    font-weight:500;
    color:${(props)=>props.theme.cityPrice}
`
const Sum = styled.span`
    color: #84878B;
`
const RangeInput = styled.input`
    padding: 7px 10px;
    outline: none;
    width: 65px;
    margin-left: 17px;
    border: 2px solid #316BFF;
    color: ${(props) => props.theme.rangeColor};
    border-radius: 9px;
    background-color: transparent;
`

const Filter = () =>{
    const {t} = useTranslation();
    const [range, setRange] = useState(0)
    return (
        <FilterDiv>
        <SearchTitle>{t('searchtitle')}</SearchTitle>
        
        <SearchDiv>
            <SearchInp type="text" placeholder={t('searchtitle')} />
            <SearchButton><BsSearch/></SearchButton>
        </SearchDiv>

        <Checkings>
        <SearchTitle>{t('filterPop')}</SearchTitle>

        <DispFlex className="mrg">
            <Checkbox type="checkbox" name="" id=""/>
            <Label htmlFor="">{t('hotels')}</Label>
        </DispFlex>
        
        <DispFlex className="mrg">
            <Checkbox type="checkbox" name="" id=""/>
            <Label htmlFor="">{t('breakfast')}</Label>
        </DispFlex>

        <DispFlex className="mrg">
            <Checkbox type="checkbox" name="" id=""/>
            <Label htmlFor="">{t('cancel')}</Label>
        </DispFlex>

        <DispFlex className="mrg">
            <Checkbox type="checkbox" name="" id=""/>
            <Label htmlFor="">{t('prepay')}</Label>
        </DispFlex>
        
        <SeeMore href="#">{t('seeMore')}</SeeMore>
        </Checkings>

        <Checkings>
        <SearchTitle>{t('priceRange')}</SearchTitle>
        <Row className="mrg">
            <input style={{width: '65%'}} type="range" onChange={(e) => setRange(e.target.value)} />
            <RangeInput type="number" value={range}/>
        </Row>
        <Row>
            <FilterPrice>$50</FilterPrice>
            <FilterPrice>$150</FilterPrice>
        </Row>
        </Checkings>

        <Checkings>
            <SearchTitle>{t('property')}</SearchTitle>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id=""/>
                    <Label htmlFor="">{t('hotels')}</Label>
                </div>
                <Sum>108</Sum>
            </Row>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id=""/>
                    <Label htmlFor="">{t('apartment')}</Label>
                </div>
                <Sum>141</Sum>
            </Row>
            <Row className="mrg">
            <div>
                <Checkbox type="checkbox" name="" id=""/>
                <Label htmlFor="">{t('resort')}</Label>
            </div>
            <Sum>108</Sum>
            </Row>
            <SeeMore href="#">{t('seeMore')}</SeeMore>
        </Checkings>

        <Checkings>
                <SearchTitle>{t('budget')}</SearchTitle>
                <DispFlex className="mrg">
                    <Checkbox type="checkbox" name="budget" id="lessBudget"  />
                    <Label htmlFor="lessBudget">{t('Price1')}</Label>
                </DispFlex>

                <DispFlex className="mrg">
                    <Checkbox type="checkbox" name="budget" id="miniBudget" />
                    <Label htmlFor="miniBudget">{t('Price2')}</Label>
                </DispFlex>

                <DispFlex className="mrg">
                    <Checkbox type="checkbox" name="budget" id="midBudget" />
                    <Label htmlFor="midBudget">{t('Price3')}</Label>
                </DispFlex>

                <DispFlex className="mrg">
                    <Checkbox type="checkbox" name="budget" id="bigBudget" />
                    <Label htmlFor="bigBudget">{t('Price4')}</Label>
                </DispFlex>

                <DispFlex className="mrg">
                    <Checkbox type="checkbox" name="budget" id="passBudget" />
                    <Label htmlFor="passBudget">{t('Price5')}</Label>
                </DispFlex>
                
        </Checkings>

        <Checkings>
            <SearchTitle>{t('facilities')}</SearchTitle>

            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('outdoor')}</Label>
                </div>
                <Sum>108</Sum>
            </Row>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('berbeque')}</Label>
                </div>
                <Sum>141</Sum>
            </Row>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('living')}</Label>
                </div>
                <Sum>108</Sum>
            </Row>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('roomSer')}</Label>
                </div>
                <Sum>108</Sum>
            </Row>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('swimming')}</Label>
                </div>
                <Sum>141</Sum>
            </Row>
            <Row className="mrg">
                <div>
                    <Checkbox type="checkbox" name="" id="" />
                    <Label htmlFor="">{t('spa')}</Label>
                </div>
                <Sum>108</Sum>
            </Row>
            
            <SeeMore href="#">{t('seeMore')}</SeeMore>
        </Checkings>

        </FilterDiv>
    );
}

export default Filter;
