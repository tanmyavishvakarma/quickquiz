import React,{Component} from 'react'
import './Result.css'

class Result extends Component{
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
                <section className="result">
                    <div className="lContainer">
                        <div class="rheading">
                            Congratulation's your Score was:
                        </div >
                        <div className="points">3</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Result;