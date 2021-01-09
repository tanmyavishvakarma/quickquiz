import React,{Component} from 'react'

class Login extends Component{
    render(){
        return(
            <div>
                <section className="login">
                    <div className="loginContainer">
                        <div className="input-wrapper">
                            <label>
                            Your Answer
                            </label>
                            <input 
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
                            />
                            <div className="btnContainer">
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>
                        
                            </div>
                    </div>           
                </section>
            </div>
        );
    }
}

export default Login;