import { Fragment } from "react"
import * as r from "../goal"
import "./styles.css"

export const Round = ({title, team1, team2, team3, team4}) => (
    <Fragment>
        <div className="rounds">
            <h3>{title}</h3>

            <div className="round">
                <div className="groups">
                <h6>Rodada 1</h6>
                <p>{team1} {r.gAt1r1} x {r.gAt2r1} {team2}</p> 
                <p>{team3} {r.gAt3r1} x {r.gAt4r1} {team4}</p>
                </div>

                <div className="groups">
                <h6>Rodada 2</h6>
                <p>{team1} {r.gAt1r2} x {r.gAt3r2} {team3}</p>
                <p>{team2} {r.gAt2r2} x {r.gAt4r2} {team4}</p>
                </div>

                <div className="groups">
                <h6>Rodada 3</h6>
                <p>{team1} {r.gAt1r3} x {r.gAt4r3} {team4}</p>
                <p>{team2} {r.gAt2r3} x {r.gAt3r3} {team3}</p>
                </div>
                
            </div>
        </div>
    </Fragment>
)