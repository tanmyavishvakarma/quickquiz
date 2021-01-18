import React, { Component } from 'react'
import './game.css'
import axios from 'axios'
import Result from '../Result/Result'
import {Redirect} from 'react-router-dom'

class game extends Component{
    constructor(props){
        super(props);

        this.state={
            dataIsLoaded : false,
            answer:'',
            countries:[],
            index:0,
            links : [],
            submitimes:1,
            countriesnames:[],
            score:0,
            temp:0
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleSkip=this.handleSkip.bind(this);
        this.handleHint=this.handleHint.bind(this);
    }

    componentDidMount(){
        if(this.state.dataIsLoaded===false)
        this.fetchData();
    }

    fetchData = async () => {
        await axios.get('https://peaceful-temple-16111.herokuapp.com/https://salty-cove-08526.herokuapp.com/api/countries?format=json')
            .then(res => {
                console.log("fetched data")
                this.setState({ countries: res.data });
                let links = []
                this.state.countries.map(country =>
                    links.push(country.photo)
                )
                let countriesnames=[]
                this.state.countries.map(country=>
                    countriesnames.push(country.name)
                )
                console.log(countriesnames)
                this.setState({
                    links,
                    countriesnames,
                    dataIsLoaded: true,
                    answer:''
                })
            })
    }

    handleSubmit=(e)=>{
        
        e.preventDefault();  

            if(this.state.answer===""){
                alert("Please enter Country Name before Submitting")
            }else{
                if(this.state.countriesnames[this.state.index].toLowerCase()==this.state.answer.toLowerCase()){
                    this.setState({
                        score:this.state.score + 1
                    })
                    if(this.state.submitimes==3){
                        this.setState({
                            temp:this.state.temp+1
                      
                        })
                    }
                }
                console.log("userinput=",this.state.answer)

                this.setState({
                    index: this.state.index + 1,
                    submitimes:this.state.submitimes+1,
                    answer:""
                })
                console.log('index=',this.state.index)
                console.log('times=',this.state.submitimes)
            }
            
        if(this.state.submitimes===3){
            {console.log("beforelaert",this.state.score)}
            {console.log("temp",this.state.temp)}
            alert("Game Ended")
            {console.log("afteralert",this.state.score)}
            if(this.state.temp==1){
                this.setState({
                    score:this.state.score+1
                })
            }
            const point=this.state.score
            localStorage.setItem("points",point.toString())
            
            // const leaderboard = {
            //     points:this.state.score.toString(),
            //     publisher:localStorage.getItem("publisher")
            // }
         
            // axios.post('http://localhost:5000/',leaderboard)
            //     .then(response=>console.log(response.data))
            //     console.log(leaderboard)
             {this.props.history.push('/result/'+point.toString())}
        }
    }

    handleChange=(e)=>{
        this.setState({
            answer:e.target.value,
        })
    }

    handleSkip=(e)=>{
        this.setState({
            index:this.state.index+1,
            answer:""
        })
    }
    
    handleHint=(e)=>{

    }

    render(){
        let {countries} = this.state
     
        return (
            <div>
                <section className="login">
                    <div className="loginContainer">
                        <div className="heading">
                            Guess the Country
                        </div>
                      
                        <div className="img-wrapper"> 
                            <img width="250px"src={this.state.links[this.state.index]}/>
                            {console.log('file : ', this.state.links[this.state.index])}
                            {console.log('links : ', this.state.links)}
                        </div>
                        <div className="input-wrapper">
                             <label>
                            Your Answer
                            </label>
                            <input 
                                id="answer"
                                name="answer"
                                type="text"
                                autoFocus
                                required
                                value={this.state.answer}
                                onChange={this.handleChange}
                            />
                            <div className="btnContainer">
                                <button onClick={this.handleSubmit}>Submit</button>
                            </div>
                            <div className="skip">
                            <button className="hintbtn" onClick={this.handleHint}>Hint</button>
                            <div className="divider">dividerdividerdividerdividerdividerdivider</div>
                            <button  className="skipbtn" onClick={this.handleSkip}>Skip</button>
                            </div>
                            
                        </div>
                    </div>            
                </section>
                <div>
             
                </div>
            </div>
        )
    }
}
export default game


