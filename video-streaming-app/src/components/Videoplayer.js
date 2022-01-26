import { useEffect,useRef,useState} from 'react';
import {useParams} from 'react-router-dom'

function Videoplayer(){

    const params = useRef(useParams());
    console.log(params);

    let [video,setVideo]=useState({});
    let token = useRef(JSON.parse(localStorage.getItem("vs_details")).token);
    useEffect(()=>{

        fetch("http://localhost:8000/videos/"+params.current.video_id,{
            headers:{
                "Authorization": `Bearer ${token.current}` 
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setVideo(data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    return(
        <div className="bg">
            <h1>Welcome to Video player</h1>
        </div>
    )

}

export default Videoplayer;