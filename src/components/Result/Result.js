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
                        
                        {console.log("points",score)}
                    </div>
                    <div className="rbtnContainer">
                        <button className="lbtn" onClick={handleSubmit}>Submit Score</button>
                    </div>
                </section>
            </div>
        );
    }

export default Result;