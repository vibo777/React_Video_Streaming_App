import {useParams} from 'react-router-dom'
import { useEffect,useRef,useState} from 'react';

function Videoplayer(){

    const params = useRef(useParams());
    // console.log(params);

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
            console.log(data[0]);
            setVideo(data[0]);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])


    return(
        <div className="bg">
            <h1 className='title'>{video.originalTitle}</h1>

            <div className='video_area'>

                <video width="100%" controls>

                </video>

                <div className='content'>

                    <div className='storyline'>
                        <h1 className='title'>Storyline</h1>
                        {video.storyline}
                    </div>

                    <div className='rating'> 
                        <h1 className='title'>IMDB Rating</h1>
                        {video.imdbRating} 
                    </div>

                    <div className='genre'>
                    <h1 className='title'>Genre</h1>    
                        {
                            video.genres?.map((genre,index)=>{
                                return(
                                    <p>
                                        <span key={index}>{genre}.</span>    
                                    </p>
                                )
                            })
                        }     
                    </div>    

                    <div className='actors'>
                    <h1 className='title'>Actors</h1>    
                        {
                            video.actors?.map((actor,index)=>{
                                return(
                                   <p>
                                       <span key={index}>{actor}.</span> 
                                   </p> 
                                       
                                )
                            })
                        }     
                    </div>    

                    <div className='duration'> 
                        <h1 className='title'>Duration</h1>
                        {video.duration} miniutes 
                    </div>


 
                </div>

            </div>



        </div>
    )

}

export default Videoplayer;