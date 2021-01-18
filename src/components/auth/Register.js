import React,{Component} from 'react'
import './Login.css'
import axios from 'axios'

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            username:'',
            password:''
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleUsernameChange=this.handleUsernameChange.bind(this)
        this.handlePasswordChange=this.handlePasswordChange.bind(this)
    }
     
    handleNameChange=(e)=>{
        this.setState({
            name:e.target.value,
        })
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
        const registered = {
            username:this.state.username,
            name:this.state.name,   
            password:this.state.password
        }
        axios.post('https://toycathon.herokuapp.com/api/register',registered)
            .then(response=>console.log(response.data))
            console.log(registered)
            this.props.history.push("/login")
            
    }
    render(){
        return(
            <div>
                <section className="notlogin">
                    <div className="lContainer">
                        <div class="heading">
                            Register
                        </div>
                        <label>
                            Name
                        </label>
                        <input 
                            type="text"
                            autoFocus
                            required
                            value={this.state.name}
                            onChange={this.handleNameChange}
                        />
                        <div>
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
                              
                        </div>
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
                            <button className="lbtn" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </div>           
                </section>
            </div>
        );
    }
}

export default Register;