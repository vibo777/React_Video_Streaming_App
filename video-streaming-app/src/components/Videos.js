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
            // console.log(data);
            setVideos(data);    
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    return(
        <div className="bg">
            <h1 className="title">Videos</h1>        
            <div className="video-container">

                {
                    videos.map((video,index)=>{
                        return(
                            <div className="video-card" key={index}>
                            <div className="video-img">
                                <img className='video-image' src={video.posterurl} alt={video.originalTitle}/> 
                            </div>    
                            <div className="padd">
                                <h1 className="movie-title">{video.originalTitle}</h1>
                                <p>
                                    {
                                        video.genres.map((genre,index)=>{
                                            return(
                                                <span key={index}>{genre}.</span>    
                                            )
                                        })
                                    } 
                                </p>    
                                <p>
                                   IMDB : {video.imdbRating}    
                                </p>
                                <button className="btn">Watch Now</button>
                            </div>
                        </div>

                        )
                    })   

                }






            
            </div>
        
        </div>
    ) 

}
export default Videos;