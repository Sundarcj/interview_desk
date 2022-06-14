import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import SearchBox from './SearchBox';

const Container = styled.div`
display:flex;
width:100%;
height:70px;
border-bottom:1px solid #e9e9e9;
align-items:center;
justify-content:center;
`

const Title = styled.div`
    font-weight:800;
    font-size:3rem;
    width:20%;
`

function Header(){
    return <Container>
        <Title >Instagram</Title>
        <SearchBox/>
        <div style={{marginLeft:'20px'}}>
         <Menu/>
        </div>
    </Container>
};

export default Header;