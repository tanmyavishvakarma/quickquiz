import React,{Component} from 'react'
import './Result.css'
import Game from '../game/game'
import axios from 'axios'
function Result(props){
    function handleSubmit(e) { 
        e.preventDefault();
        const leaderboard = {
            points:localStorage.getItem("points"),
            publisher:localStorage.getItem("publisher")
        }
        console.log(leaderboard)
        axios.post('https://toycathon.herokuapp.com/api/result',leaderboard)
            .then(response=>console.log(response.data))
            props.history.push('/')
          
    }
        const {score}=props.match.params;
        return(
            <div>
                <section className="result">
                    <div className="lContainer">
                        <div class="rheading">
                            Congratulation's your Score was:
                        </div >
                        <div className="points">{score}</div>
                    
                        <div className="rsbtnContainer">
                            <button className="rsbtn" onClick={handleSubmit}>Submit Score</button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

export default Result;