import "./styles.css"

export const Classified = ({group, time1, time2, time3, time4}) => (
    <>
        <table id="grupo A" className="classGroup">
            <thead>
                <th>{group}</th>
                <th>Pontos</th>
                <th>Saldos de gols</th>
            </thead>
            <tbody>
                <tr className="classified">
                    <td>{time1.name}</td>
                    <td>{time1.pontos}</td>
                    <td>{time1.sg}</td>
                </tr>
                <tr className="classified">
                    <td>{time2.name}</td>
                    <td>{time2.pontos}</td>
                    <td>{time2.sg}</td>
                </tr>
                <tr className="disqualified">
                    <td>{time3.name}</td>
                    <td>{time3.pontos}</td>
                    <td>{time3.sg}</td>
                </tr>
                <tr className="disqualified">
                    <td>{time4.name}</td>
                    <td>{time4.pontos}</td>
                    <td>{time4.sg}</td>
                </tr>
            </tbody>
        </table>
    </>
)