import React, { useEffect } from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width:200px;
    height:200px;    
    margin:20px;
`

const PostHolder = styled.div`
    display:flex;
    flex-wrap:wrap;     
    justify-content:center;
`
const Container = styled.div`
    display:flex;
    flex-wrap:wrap;    
    width:800px;           
`
/*

    we need array of images 
    https://source.unsplash.com/random/300x200?sig=Math.random() ?
*/

const ImageList = Array(40).fill(0).map(e => `https://source.unsplash.com/random/300x200?sig=${Math.random()*100}`);


function Posts(){
    return <PostHolder>
    <Container>
        {ImageList.map((imgUrl,index)=>{
            console.log(imgUrl);
            return <Image src={imgUrl} key={index} loading='lazy'/>
        })}
        </Container>
    </PostHolder>
}

export default Posts;