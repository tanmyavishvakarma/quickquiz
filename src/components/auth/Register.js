import React,{Component} from 'react'
import './Login.css'

class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                <section className="notlogin">
                
                    <div className="lContainer">
                    <div class="heading">

                    </div>
                            <label>
                                Name
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
                            />
                            <label>
                                Username
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
                            />
                              
                            
                            <div className="pass">
                             <label>
                                Password
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
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