import {useParams} from 'react-router-dom'
import { useEffect,useRef,useState} from 'react';

function Videoplayer(){

    const params = useRef(useParams());
    // console.log(params);

    let [video,setVideo]=useState({});
    let token = useRef(JSON.parse(localStorage.getItem("vs_details")).token);
    let user_id = useRef(JSON.parse(localStorage.getItem("vs_details")).user_id);

    let vid;

    useEffect(()=>{

        fetch("http://localhost:8000/videos/"+params.current.video_id+"/"+user_id.current,{
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

    function handleVideoElement(ele){
        vid=ele;
    }

    function closePlayer(){
        console.log(vid?.currentTime);
    }


    return(
        <div className="bg">
            <h1 className='title'>{video.originalTitle}</h1>

            <button onClick={ closePlayer}>close</button>
            <div className='video_area'>

                {
                    video.videoPath!==undefined ? 
                    (
                        <video width="100%" controls ref={handleVideoElement}>
                            <source src={'http://localhost:8000/stream/'+video.videoPath}/> 
                        </video>

                    ):
                    null    
                }
                

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
                                    <p key={index}>
                                        <span>{genre}.</span>    
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
                                   <p key={index}>
                                       <span >{actor}.</span> 
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