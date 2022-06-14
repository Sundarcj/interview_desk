import React,{useState,useEffect} from 'react';
import { LOADING,SUCCESS,ERROR } from './Constants';

export function useAPI(url){
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