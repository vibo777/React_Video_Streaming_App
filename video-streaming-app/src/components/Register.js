function Register(){
    

    let user={};
    // function to read vlaue of input field
    function readvalue(property,value){
        user[property]=value; 
    }  

    // register
    function register(){
        if(user.cpassword===user.password){
            delete user.cpassword;
            console.log(user);
        } 
        else{
            console.log("Password don't match");
        }
    }

    return(
        <section>
            <div className="main">
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