import React,{Component} from 'react'
import axios from 'axios'
import './Leaderboard.css'
class Leaderboard extends Component{
    constructor(props){
        super(props);
        this.state={
            persons:[],
            result:[],
            publisher:[],
        }
    }
    
    componentDidMount(){
    
        axios.get('https://toycathon.herokuapp.com/api/leaderboard')
            .then(res=>{
                this.setState({
                    persons:res.data
                })
                console.log(res.data)
                let result=[]
                this.state.persons.map(person=>
                    result.push(person.points)
                )
                let publisher=[]
                this.state.persons.map(person=>
                    publisher.push(person.publisher)
                )
                console.log(result)
                this.setState({
                    result,
                    publisher,
                })

            })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.history.push('/game')
    }

    render(){
        return(
            <div>
                <div>
                    <section className="login">
                        <div className="loginContainer">
                            <div className="heading">
                                Leaderboard
                            </div>
                            
                            <h4>{this.state.publisher[0]}</h4><h4>{this.state.result[0]}</h4>
                            <h4>{this.state.publisher[1]}</h4><h4>{this.state.result[1]}</h4>
                            <h4>{this.state.publisher[2]}</h4><h4>{this.state.result[2]}</h4>
                            <div className="lbtnContainer">
                            <button className="lbtn" onClick={this.handleSubmit}>Go Back</button>
                        </div>
                        </div>    

                    </section>
                </div>
            </div>
        );
    }
}
export default Leaderboard;