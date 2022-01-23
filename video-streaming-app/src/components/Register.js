import {useState} from 'react';


function Register(){
    
    let user={};
    let [message,setMessage] = useState("Hello Vaibhav");
    let [boxVisible,setBoxVisible] = useState(false);


    // function to read value of input field
    function readvalue(property,value){
        user[property]=value; 
    }  

    // register
    function register(){
        if(user.cpassword===user.password){
            delete user.cpassword;
            
            fetch("http://localhost:8000/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then((response)=>response.json())
            .then((data)=>{
                 
                setMessage(data.message); 
                setBoxVisible(true);

                setTimeout(()=>{
                    setBoxVisible(false);
                },3000)

            })    
            .catch((err)=>{console.log(err)})   
        } 
        else{
            console.log("Password don't match");
        }
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

                <div className="register">
                    <h1 className="title">Create an account</h1>
                    <input type="text" placeholder="Enter your name" onChange={(event)=>{readvalue("name", event.target.value)}}/>
                    <input type="email" placeholder="Enter your Email" onChange={(event)=>{readvalue("email",event.target.value)}}/>
                    <input type="text" placeholder="Enter your username" onChange={(event)=>{readvalue("username",event.target.value)}}/>
                    <input type="password" placeholder="Enter your password" onChange={(event)=>{readvalue("password",event.target.value)}}/>
                    <input type="password" placeholder="Confirm your password" onChange={(event)=>{readvalue("cpassword",event.target.value)}}/>
                    <button onClick={register}>Register</button>    
                </div>  
            </div>
        </section>
    )

}

export default Register;