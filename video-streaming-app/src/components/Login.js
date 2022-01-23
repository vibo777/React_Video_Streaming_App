import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
    
    let navigate = useNavigate();

    let user={};

    let [message,setMessage] = useState("Hello Vaibhav");
    let [boxVisible,setBoxVisible] = useState(false);


    // function to read value of input field
    function readvalue(property,value){
        user[property]=value; 
    }  

    // register
    function login(){

            fetch("http://localhost:8000/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then((response)=>response.json())
            .then((data)=>{
                
                if(data.success===true){

                    localStorage.setItem("vs_details",JSON.stringify({token:data.token,user_id:data.user_id}));
                    navigate("/videos");
                }   
                else{
                    setMessage(data.message); 
                    setBoxVisible(true);

                    setTimeout(()=>{
                    setBoxVisible(false);
                },3000)
                    
                }   

                

            })    
     
    }

    return(
        <section>
            <div className="main">

                <div className="message-bg">
            
                    {
                        boxVisible===true?(
                            <div className="message">
                            {message}
                            </div>    
                        ):null
                    }
                         
                </div>    

                <div className="account">
                    <h1 className="title">Log In</h1>
                    <input type="text" placeholder="Enter your username" onChange={(event)=>{readvalue("username",event.target.value)}}/>
                    <input type="password" placeholder="Enter your password" onChange={(event)=>{readvalue("password",event.target.value)}}/>
                    <button onClick={login}>Login</button>    
                </div>  
            </div>
        </section>
    )

}

export default Login;