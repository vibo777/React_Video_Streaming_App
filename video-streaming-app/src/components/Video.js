import {useEffect,useState,useRef} from 'react';  

function Videos(){

    let [videos,setVideos] = useState([]);
    
    let token = useRef(JSON.parse(localStorage.getItem("vs_details")).token);

    useEffect(()=>{


        fetch("http://localhost:8000/videos",{
            headers:{
                "Authorization":`Bearer ${token.current}`
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setVideos(data);    
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    return(
        <div className="bg">
            {/* <h1 className="title">Videos</h1>        
            <div className="video-container">
                <div className="video-card">
                    <div className="video-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2tkrCP9lZxzQ9V4OHngvQGuUsEhot2qZwQ&usqp=CAU"/> 
                    </div>    
                    <div className="padd">
                        <h1 className="movie-title">Money Heist</h1>
                        <p>
                            Action . Thriller . Drama
                        </p>    
                        <p>
                           IMDB : 9.2     
                        </p>
                        <button className="btn">Watch Now</button>


                    </div>





                </div>
            </div> */}
        
        </div>
    ) 

}
export default Videos;