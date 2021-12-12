import React from 'react'
import styled from 'styled-components';

const GridImages = styled.div`
    display: flex;
    overflow: hidden;
    border-radius: 20px;
    justify-content: space-between;
`
const BigImg = styled.img`
    width: 60%;
`
const MIniImg = styled.img`
    width: 100%;
    &:nth-child(2) {
        margin: 16px 0;
    }
`
const MiniImages = styled.div`
    margin-left: 15px;
`

export const GridDetail = () => {
    return (
        <GridImages>
            <BigImg src="/assets/img/grid2.jpg" alt="" />
            <MiniImages>
                <MIniImg src="/assets/img/grid1.jpg" alt="" />
                <MIniImg src="/assets/img/grid3.jpg" alt="" />
                <MIniImg src="/assets/img/grid4.jpg" alt="" />
            </MiniImages>
        </GridImages>
    )
}