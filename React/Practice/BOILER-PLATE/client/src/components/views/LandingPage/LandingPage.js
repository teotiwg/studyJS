import React,{useEffect, userEffect} from 'react'
import axios from 'axios';

function LandingPage(){

    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    return(
        <div>
            Landing Page
        </div>
    )
}

export default LandingPage