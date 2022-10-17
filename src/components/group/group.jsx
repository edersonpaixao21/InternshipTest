import './styles.css'

export const Groups = ({title, team1, team2, team3, team4}) => (
    <>

        <div className="group">
            <h3>{title}</h3>
            <div className="flag">
                <img class="flagPais" src={`../imgs/${team1}.png`} /> <span>{team1}</span>
            </div>
            <div className="flag">
                <img class="flagPais" src={`../imgs/${team2}.png`} /> <span>{team2}</span>
            </div>
            <div className="flag">
                <img class="flagPais" src={`../imgs/${team3}.png`} /> <span>{team3}</span>
            </div>
            <div className="flag">
                <img class="flagPais" src={`../imgs/${team4}.png`} /> <span>{team4}</span>
            </div>
        </div>
    </>
)