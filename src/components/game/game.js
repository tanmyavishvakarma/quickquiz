import React, { Component } from 'react'
import './game.css'
import axios from 'axios'

class game extends Component{
    constructor(props){
        super(props);

        this.state={
            dataIsLoaded : false,
            answer:'',
            countries:[],
            index:0,
            links : [],
            submitimes:1
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
                this.setState({
                    links,
                    dataIsLoaded: true,
                    answer:''
                })
            })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.submitimes==3){
            window.location='/'
        }else{   
            if(this.state.answer==""){
                alert("Please enter Country Name before Submitting")
            }else{
                const answered={
                    answer:this.state.answer        
                }
                console.log("sndf=",this.state.answer)

                this.setState({
                    index: this.state.index + 1,
                    submitimes:this.state.submitimes+1,
                    answer:""
                })
                console.log('index=',this.state.index)
            
                axios.post('',answered)
                .then(response=>console.log(response.data))
            }
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
            </div>
        )
    }
}
export default game


