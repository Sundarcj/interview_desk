import React,{useEffect,useState} from 'react';
import styled from 'styled-components';

const LOADING = 1;
const SUCCESS  = 2;
const ERROR = 3;

function useAPI(url){
    const [data,setData] = useState(null);
    const [status,setStatus] = useState(LOADING);
    useEffect(()=>{
        fetch(url).then(response=>{        
            if(!response.ok){
                setStatus(ERROR);
                setData(null);
            }
            return response.json();            
        }).then(data=>{
            setStatus(SUCCESS);
            setData(data);
        });
    },[url]);
    return [status,data];
}

const URL = 'https://random-data-api.com/api/users/random_user';

const UserContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const Avatar = styled.div`

`

const UserInfo = styled.div`
padding:5px;
width:60%;
padding:10px;
`

const Loading = styled.div`
   background:#eee;
   font-size:12px;
   width:90%: 
`;

const Image = styled.img`
border-radius:50%;
width:150px;
height:150px;
background:#e9e9e9;
`


function UserContent(){
    const [status,data] = useAPI(URL);    
    console.log({data});
    if(status===LOADING)
        return <Loading>Loading...</Loading>
    const {first_name,gender,email,date_of_birth,avatar} = data;
    return <UserContainer>                
                <Image src={avatar} />                
                <UserInfo>                             
                        <h1>{first_name}</h1>
                        <h2>{gender}</h2>
                        <h3>{email}</h3>
                        <h3>{date_of_birth}</h3>
                </UserInfo>
    </UserContainer>
};

export default UserContent;