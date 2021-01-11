import React,{Component} from 'react'
import './Result.css'
import Game from '../game/game'

function Result(props){
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
                </section>
            </div>
        );
    }

export default Result;