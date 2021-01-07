import React, { Component } from 'react'
import './form.css'
import axios from 'axios'




class form extends Component{
    constructor(props){
        super(props);

        this.state={
            answer:'',
            countries:[],
            index:0
          
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
       
    }

    componentDidMount(){
        axios.get('https://salty-cove-08526.herokuapp.com/api/countries?format=json')
            .then(res=>{

                let arr=[]
                res.data.map(obj=>{
                    arr.push(obj)
                }

                )
                this.setState({ countries:arr});
            
            })
    }


    

    handleSubmit=(e)=>{
        const answered={
            answer:this.state.answer    
        }

    
        axios.post('http://localhost:4000/api/answer',answered)
        .then(response=>console.log(response.data))
 
    }

    handleChange=(e)=>{
        this.setState({
            answer:e.target.value,
        })

       
    }



   
    render(){
 
        return (
            <div>
                <section className="login">
                    <div className="loginContainer">
                        <div className="heading">
                            Guess the countries
                        </div>
                      
                        <div className="img-wrapper"> 
                        {this.state.countries[0].map(country => 
                            <img width="100px"src={country.photo}/>
                            )}



                     {/* <img width="100px"src={this.state.countries}/> */}

                            {console.log(this.state.countries[0])}
                            {console.log('country=',typeof(this.state.countries[0]))}
                        </div>
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
                            <div className="skip">
                            <button className="skipbtn" onClick={this.handleSubmit}>Hint</button>
                            <div className="divider">dividerdivider</div>
                            <button  onClick={this.handleSubmit}>Skip</button>
                            </div>
                        </div>
                    </div>            
                </section>
            </div>
        )
    }
}
export default form
