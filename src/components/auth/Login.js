import React,{Component} from 'react'
import './Login.css'
import axios from 'axios'
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }
    
    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value,
        })
    }
    handlePasswordChange=(e)=>{
        this.setState({
            password:e.target.value,
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const logindata = {
            username:this.state.username,
            password:this.state.password
        }

        axios.post('https://toycathon.herokuapp.com/api/login',logindata)
            .then(response=>{
                console.log(response.data)
                if(response.data.login==="Successfully Authenticated"){
                    localStorage.setItem("publisher",response.data.publisher?response.data.publisher:"Anonymouse")
                    this.props.history.push("/game")    
                } 
                else{
                    this.props.history.push("/login")
                    alert("Invalid Username or Password")
                    this.setState({
                        username:'',
                        password:''
                    })
                }
            })
    }
    render(){
        return(
            <div>
                <section className="notlogin">
                    <div className="lContainer">
                        <div class="heading">
                            Login
                        </div>
                        <label>
                            Username
                        </label>
                        <input 
                            type="text"
                            autoFocus
                            required
                            value={this.state.username}
                            onChange={this.handleUsernameChange}
                        />
                        <div className="pass">
                            <label>
                                Password
                            </label>
                            <input 
                                type="password"
                                autoFocus
                                required
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <div className="lbtnContainer">
                            <button className="lbtn" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>           
                </section>
            </div>
        );
    }
}

export default Login;