import DataCard from './DataCard'
import React,{useState,useEffect} from 'react';

function PageContent(){
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('rickandmorty.json',
            {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div class="container-fluid py-3">
            <div class="row">

                {data.map(function (characters, idx) {
                    return (
                        <div key={idx} class="col-md-4 mb-4">
                            <DataCard charactersData={characters}/>
                        </div>
                    )
                })}
                               
            </div>
        </div>
    )
}

export default PageContent
