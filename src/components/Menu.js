import React from 'react';
import styled from 'styled-components';
import SvgComponent from './Icon.Svg';

const IconSet = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    flex-grow:1;
`;
const IconHolder = styled.div`
width:2rem;
height:2rem;
`

function Menu(){
    return <IconSet>
        <IconHolder>
            <SvgComponent />
        </IconHolder>
        
        <IconHolder>
            <SvgComponent />
        </IconHolder>
        
        <IconHolder>
            <SvgComponent />
        </IconHolder>
        
        <IconHolder>
            <SvgComponent />
        </IconHolder>

    </IconSet>
};

export default Menu;