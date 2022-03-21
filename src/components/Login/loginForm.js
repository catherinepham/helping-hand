import React, {useState} from 'react';

function LoginForm ({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""}); 
    
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="header">
                <h1><img src={require('../../hand.png')} height={30} width={40}/> Welcome to Helping Hand <img src={require('../../hand.png')} height={30} width={40}/></h1>
            </div> 
            <div className="form-inner">
                <h2>Faculty Login</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor='name'>Name:</label>
                <input type="test" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} values={details.name}/>
            </div>
            <div className="form-group">
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} values={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} values={details.password}/>
            </div>
            <input type="submit" value="LOGIN"/>
            </div>
        </form>
    )
}
export default LoginForm;
