import React from 'react';
import styled from 'styled-components';
import { debounce } from '../Utils';
import SvgComponent from './Icon.Svg';

const DivContainer  = styled.div`
    width:20%;
    height:4rem;
    background:#eee;
    border-radius: 8px;
    padding: 5px;
    box-sizing: border-box;
    display:flex;
    align-items:center;
`
const SearchInput = styled.input`
    border:none;
    background:transparent;
    width:90%;
    flex-shrink:0;
    outline:none;   
    text-indent:12px;
`
const SearchIcon = styled.div`
    height:2rem;
    width:2rem;
    display:flex;
    align-items:center;
    justify-content:center;    
`

function SearchBox({onSearchComplete=()=>{}}={}){
    return <DivContainer >
            <SearchIcon>
                <SvgComponent/>
            </SearchIcon>
            <SearchInput type='text' placeholder='Search' onChange={debounce(onSearchComplete,200)}/>            
    </DivContainer>
};

//TODO: useCallback can be used here.

export default SearchBox;