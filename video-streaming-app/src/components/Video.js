/* eslint-disable jsx-a11y/alt-text */
function Videos(){

    return(
        <div className="bg">
            <h1 className="title">Videos</h1>        
            <div className="video-container">
                <div className="video-card">
                    <div className="video-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2tkrCP9lZxzQ9V4OHngvQGuUsEhot2qZwQ&usqp=CAU"/> 
                    </div>    
                    <div className="padd">
                        <h1>Money Heist</h1>
                        <p>
                            Action . Thriller . Drama
                        </p>    
                        <p>
                           IMDB : 9.2     
                        </p>
                        <button className="btn">Watch Now</button>


                    </div>





                </div>
            </div>
        
        </div>
    ) 

}
export default Videos;