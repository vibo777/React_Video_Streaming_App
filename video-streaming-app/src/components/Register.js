function Register(){

    return(
        <section>
            <div className="main">
                <div className="register">
                    <h1>Create an account</h1>
                    <input type="text" placeholder="Enter your name"/>
                    <input type="email" placeholder="Enter your Email"/>
                    <input type="text" placeholder="Enter your username"/>
                    <input type="password" placeholder="Enter your password"/>
                    <input type="password" placeholder="Confirm your password"/>
                    <button>Register</button>    
                </div>  
            </div>
        </section>
    )

}

export default Register;