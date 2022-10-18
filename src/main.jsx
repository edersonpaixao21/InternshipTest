import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import { Groups } from "./components/group/group";
import { Round } from "./components/rounds/rounds";
import { Classified } from "./components/classification/classification";
import logo from '../src/assets/logo.png'
import * as r from "./components/goal"
import * as c from "./components/punctuation"

export function Simulation() {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
            headers: {
                'git-user': 'edersonpaixao21'
            }
        })
            .then(({ data }) => {
                setTeams(data);
            });
    }, [])
    var lista = []
    for (const pais in teams["Result"]) {
        lista.push(teams["Result"][pais]["Name"])
    };

    var grupoA = [];
    var grupoB = [];
    var grupoC = [];
    var grupoD = [];
    var grupoE = [];
    var grupoF = [];
    var grupoG = [];
    var grupoH = [];

    var z = 0 
    while (z < 32) {
        var y = Math.floor(Math.random() * ((31 - z) - 0 + 1)) + 0
        if (z <= 3) {
            grupoA.push(lista[y])
        } else if (z > 3 && z <= 7) {
            grupoB.push(lista[y])
        } else if (z > 7 && z <= 11) {
            grupoC.push(lista[y])
        } else if (z > 11 && z <= 15) {
            grupoD.push(lista[y])
        } else if (z > 15 && z <= 19) {
            grupoE.push(lista[y])
        } else if (z > 19 && z <= 23) {
            grupoF.push(lista[y])
        } else if (z > 20 && z <= 27) {
            grupoG.push(lista[y])
        } else if (z > 27 && z <= 31) {
            grupoH.push(lista[y])
        }
        lista.splice(y, 1)
        z += 1
    }


    let classificacaoA = [
        { name: grupoA[0], pontos: c.pontosA1, sg: c.sg_A1 },
        { name: grupoA[1], pontos: c.pontosA2, sg: c.sg_A2 },
        { name: grupoA[2], pontos: c.pontosA3, sg: c.sg_A3 },
        { name: grupoA[3], pontos: c.pontosA4, sg: c.sg_A4 },
    ]
    classificacaoA.sort(function (a, b) {
        if (b.pontos !== a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg !== a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoB = [
        { name: grupoB[0], pontos: c.pontosB1, sg: c.sg_B1 },
        { name: grupoB[1], pontos: c.pontosB2, sg: c.sg_B2 },
        { name: grupoB[2], pontos: c.pontosB3, sg: c.sg_B3 },
        { name: grupoB[3], pontos: c.pontosB4, sg: c.sg_B4 },
    ]
    classificacaoB.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoC = [
        { name: grupoC[0], pontos: c.pontosC1, sg: c.sg_C1 },
        { name: grupoC[1], pontos: c.pontosC2, sg: c.sg_C2 },
        { name: grupoC[2], pontos: c.pontosC3, sg: c.sg_C3 },
        { name: grupoC[3], pontos: c.pontosC4, sg: c.sg_C4 },
    ]
    classificacaoC.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoD = [
        { name: grupoD[0], pontos: c.pontosD1, sg: c.sg_D1 },
        { name: grupoD[1], pontos: c.pontosD2, sg: c.sg_D2 },
        { name: grupoD[2], pontos: c.pontosD3, sg: c.sg_D3 },
        { name: grupoD[3], pontos: c.pontosD4, sg: c.sg_D4 },
    ]
    classificacaoD.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoE = [
        { name: grupoE[0], pontos: c.pontosE1, sg: c.sg_E1 },
        { name: grupoE[1], pontos: c.pontosE2, sg: c.sg_E2 },
        { name: grupoE[2], pontos: c.pontosE3, sg: c.sg_E3 },
        { name: grupoE[3], pontos: c.pontosE4, sg: c.sg_E4 },
    ]
    classificacaoE.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoF = [
        { name: grupoF[0], pontos: c.pontosF1, sg: c.sg_F1 },
        { name: grupoF[1], pontos: c.pontosF2, sg: c.sg_F2 },
        { name: grupoF[2], pontos: c.pontosF3, sg: c.sg_F3 },
        { name: grupoF[3], pontos: c.pontosF4, sg: c.sg_F4 },
    ]
    classificacaoF.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoG = [
        { name: grupoG[0], pontos: c.pontosG1, sg: c.sg_G1 },
        { name: grupoG[1], pontos: c.pontosG2, sg: c.sg_G2 },
        { name: grupoG[2], pontos: c.pontosG3, sg: c.sg_G3 },
        { name: grupoG[3], pontos: c.pontosG4, sg: c.sg_G4 },
    ]
    classificacaoG.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

    let classificacaoH = [
        { name: grupoH[0], pontos: c.pontosH1, sg: c.sg_H1 },
        { name: grupoH[1], pontos: c.pontosH2, sg: c.sg_H2 },
        { name: grupoH[2], pontos: c.pontosH3, sg: c.sg_H3 },
        { name: grupoH[3], pontos: c.pontosH4, sg: c.sg_H4 },
    ]
    classificacaoH.sort(function (a, b) {
        if (b.pontos != a.pontos) {
            return (b.pontos - a.pontos)
        } else if (b.sg != a.sg) {
            return (b.sg - a.sg)
        } else {
            return (b.pontos - a.pontos)
        }
    })

  
    let class_oitavas = []

    function Octaves(time1, time2, golTime1, golTime2, penaltiTime1, penaltiTime2) {
        if (golTime1 !== golTime2) {
            return (
                <table>
                    <tr>
                        <td align="right">{time1.name}                    
                        </td>
                        <img class="flagPais" src={`../imgs/${time1.name}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="center">{golTime1}x{golTime2}</td>
                        <img class="flagPais" src={`../imgs/${time2.name}.png`} style={{paddingLeft: '0', marginRight: '10px'}} />
                        <td align="left">{time2.name}</td>
                       
                    </tr>
                </table>
            )
        } else if (golTime1 === golTime2) {
            return (
                <table>
                    <tr>
                        <td align="right">{time1.name}</td>
                        <td align="center">{golTime1} ({penaltiTime1}) x ({penaltiTime2}) {golTime2}</td>
                        <td align="left">{time2.name}</td>
                    </tr>
                </table>
            )
        }
    }

    function PassaFase(time1, golTime1, penaltiTime1, time2, golTime2, penaltiTime2) {
        if ((golTime1 + penaltiTime1) > (golTime2 + penaltiTime2)) {
            class_oitavas.push(time1.name)
        } else {
            class_oitavas.push(time2.name)
        }
    }

    PassaFase(
        classificacaoA[0],
        r.gol_1A,
        r.penaltiA1,
        classificacaoB[1],
        r.gol_2B,
        r.penaltiB2
    )

    PassaFase(
        classificacaoC[0],
        r.gol_1C,
        r.penaltiC1,
        classificacaoD[1],
        r.gol_2D,
        r.penaltiD2
    )

    PassaFase(
        classificacaoE[0],
        r.gol_1E,
        r.penaltiE1,
        classificacaoF[1],
        r.gol_2F,
        r.penaltiF2
    )

    PassaFase(
        classificacaoG[0],
        r.gol_1G,
        r.penaltiG1,
        classificacaoH[1],
        r.gol_2H,
        r.penaltiH2
    )

    PassaFase(
        classificacaoB[0],
        r.gol_1B,
        r.penaltiB1,
        classificacaoA[1],
        r.gol_2A,
        r.penaltiA2
    )

    PassaFase(
        classificacaoD[0],
        r.gol_1D,
        r.penaltiD1,
        classificacaoC[1],
        r.gol_2C,
        r.penaltiC2
    )

    PassaFase(
        classificacaoF[0],
        r.gol_1F,
        r.penaltiF1,
        classificacaoE[1],
        r.gol_2E,
        r.penaltiE2
    )

    PassaFase(
        classificacaoH[0],
        r.gol_1H,
        r.penaltiH1,
        classificacaoG[1],
        r.gol_2G,
        r.penaltiG2
    )
    

    // Quartas de final:
    let class_quartas = []
    function QuarterFinals(time1, golTime1, penaltiTime1, time2, golTime2, penaltiTime2) {
        if (golTime1 != golTime2) {
            return (
                <table>
                    <tr>
                        <td align="right">{time1}</td>
                        <img class="flagPais" src={`../imgs/${time1}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="center">{golTime1}x{golTime2}</td>
                        <img class="flagPais" src={`../imgs/${time2}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="left">{time2}</td>
                    </tr>
                </table>
            )
        } else if (golTime1 === golTime2) {
            return (
                <table>
                    <tr>
                        <td align="right">{time1}</td>
                        <td align="center">{golTime1} ({penaltiTime1}) x ({penaltiTime2}) {golTime2}</td>
                        <td align="left">{time2}</td>
                    </tr>
                </table>
            )
        }
    }

    function PassQuarter(time1, golTime1, penaltiTime1, time2, golTime2, penaltiTime2) {
        if ((golTime1 + penaltiTime1) > (golTime2 + penaltiTime2)) {
            class_quartas.push(time1)
        } else { class_quartas.push(time2) }
    }

    PassQuarter(
        class_oitavas[0],
        r.gol_O11,
        r.penaltiO11,
        class_oitavas[1],
        r.gol_O12,
        r.penaltiO12
    )

    PassQuarter(
        class_oitavas[2],
        r.gol_O21,
        r.penaltiO21,
        class_oitavas[3],
        r.gol_O22,
        r.penaltiO22
    )

    PassQuarter(
        class_oitavas[4],
        r.gol_O31,
        r.penaltiO31,
        class_oitavas[5],
        r.gol_O32,
        r.penaltiO32
    )

    PassQuarter(
        class_oitavas[6],
        r.gol_O41,
        r.penaltiO41,
        class_oitavas[7],
        r.gol_O42,
        r.penaltiO42
    )


    let class_semi = []
    function Semi(time1, golTime1, penaltiTime1, time2, golTime2, penaltiTime2) {
        if (golTime1 != golTime2) {
            return (
                <table>
                    <tr>
                        <td align="right">{time1}</td>
                        <img class="flagPais" src={`../imgs/${time1}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="center">{golTime1}x{golTime2}</td>
                        <img class="flagPais" src={`../imgs/${time2}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="left">{time2}</td>
                    </tr>
                </table>
            )
        } else if (golTime1 === golTime2) {
            return (
                <table>
                    <tr>
                        <td align="right">{time1}</td>
                        <td align="center">{golTime1} ({penaltiTime1}) x ({penaltiTime2}) {golTime1}</td>
                        <td align="left">{time2}</td>
                    </tr>
                </table>
            )
        }
    }
    
    function Finalist(time1, golTime1, penaltiTime1, time2, golTime2, penaltiTime2) {
        if ((golTime1 + penaltiTime1) > (golTime2 + penaltiTime2)) {
            class_semi.push(time1)
        } else { class_semi.push(time2) }
    }

    Finalist(
        class_quartas[0],
        r.gol_S11,
        r.penaltiS11,
        class_quartas[1],
        r.gol_S12,
        r.penaltiS12
    )

    Finalist(
        class_quartas[2],
        r.gol_S21,
        r.penaltiS21,
        class_quartas[3],
        r.gol_S22,
        r.penaltiS22
    )

    let campeao = []
    function Final() {
        if (r.golsA != r.golsB) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_semi[0]}</td>
                        <img class="flagPais" src={`../imgs/${class_semi[0]}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="center">{r.golsA}x{r.golsB}</td>
                        <img class="flagPais" src={`../imgs/${class_semi[1]}.png`} style={{paddingLeft: '0', marginLeft: '10px'}} />
                        <td align="left">{class_semi[1]}</td>
                    </tr>
                </table>
            )
        } else if (r.golsA === r.golsB) {
            return (
                <table>
                    <tr>
                        <td align="right">{class_semi[0]}</td>
                        <td align="center">{r.golsA} ({r.penaltisA}) x ({r.penaltisB}) {r.golsB}</td>
                        <td align="left">{class_semi[1]}</td>
                    </tr>
                </table>
            )
        }
    }
    if ((r.golsA + r.penaltisA) > (r.golsB + r.penaltisB)) {
        campeao.push(class_semi[0])
    } else { campeao.push(class_semi[1]) }


    const sendPostApi = [
        {
            "equipeA": class_semi[0],
            "equipeB": class_semi[1],
            "golsEquipeA": r.golsA,
            "golsEquipeB": r.golsB,
            "golsPenaltyTimeA": r.penaltisA,
            "golsPenaltyTimeB": r.penaltisB,
        }
    ]

    useEffect(() => {
        axios.post('https://estagio.geopostenergy.com/WorldCup/InsertFinalResult',
        sendPostApi,
            {
                headers: {
                    'git-user': 'edersonpaixao21'
                }
            }).then(console.log("success"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Fragment>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div>
                    <img className="logo" src={logo} alt="logo da copa do mundo 2022" />
                    <h1 className="title">Grupos Sorteados:</h1>
                    <div>
                        <Groups
                            title="Grupo A:"
                            team1={grupoA[0]}
                            team2={grupoA[1]}
                            team3={grupoA[2]}
                            team4={grupoA[3]}
                        />
                        <Groups
                            title="Grupo B:"
                            team1={grupoB[0]}
                            team2={grupoB[1]}
                            team3={grupoB[2]}
                            team4={grupoB[3]}
                        />
                        <Groups
                            title="Grupo C:"
                            team1={grupoC[0]}
                            team2={grupoC[1]}
                            team3={grupoC[2]}
                            team4={grupoC[3]}
                        />
                        <Groups
                            title="Grupo D:"
                            team1={grupoD[0]}
                            team2={grupoD[1]}
                            team3={grupoD[2]}
                            team4={grupoD[3]}
                        />
                        </div>

                        <div>
                        <Groups
                            title="Grupo E:"
                            team1={grupoE[0]}
                            team2={grupoE[1]}
                            team3={grupoE[2]}
                            team4={grupoE[3]}
                        />
                        <Groups
                            title="Grupo F:"
                            team1={grupoF[0]}
                            team2={grupoF[1]}
                            team3={grupoF[2]}
                            team4={grupoF[3]}
                        />
                        <Groups
                            title="Grupo G:"
                            team1={grupoG[0]}
                            team2={grupoG[1]}
                            team3={grupoG[2]}
                            team4={grupoG[3]}
                        />
                        <Groups
                            title="Grupo H:"
                            team1={grupoH[0]}
                            team2={grupoH[1]}
                            team3={grupoH[2]}
                            team4={grupoH[3]}
                        />
                        </div>
                </div>
                <div>
                    <h1 className="title">Resultado das Rodadas</h1>
                    <table>                 
                        <div>
                            <Round
                                title="Grupo A"
                                team1={grupoA[0]}
                                team2={grupoA[1]}
                                team3={grupoA[2]}
                                team4={grupoA[3]}
                            />
                            <Round
                                title="Grupo B"
                                team1={grupoB[0]}
                                team2={grupoB[1]}
                                team3={grupoB[2]}
                                team4={grupoB[3]}
                            />
                            <Round
                                title="Grupo C"
                                team1={grupoC[0]}
                                team2={grupoC[1]}
                                team3={grupoC[2]}
                                team4={grupoC[3]}
                            />
                            <Round
                                title="Grupo D"
                                team1={grupoD[0]}
                                team2={grupoD[1]}
                                team3={grupoD[2]}
                                team4={grupoD[3]}
                            />
                        </div>
                            <Round
                                title="Grupo E"
                                team1={grupoE[0]}
                                team2={grupoE[1]}
                                team3={grupoE[2]}
                                team4={grupoE[3]}
                            />
                            <Round
                                title="Grupo F"
                                team1={grupoF[0]}
                                team2={grupoF[1]}
                                team3={grupoF[2]}
                                team4={grupoF[3]}
                            />
                            <Round
                                title="Grupo G"
                                team1={grupoG[0]}
                                team2={grupoG[1]}
                                team3={grupoG[2]}
                                team4={grupoG[3]}
                            />
                            <Round
                                title="Grupo H"
                                team1={grupoH[0]}
                                team2={grupoH[1]}
                                team3={grupoH[2]}
                                team4={grupoH[3]}
                            />
                        
                    </table>
                </div>
                <div className="GroupClassification">
                    <h1 className="title">Classificação dos Grupos</h1>
                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo A"
                                time1={classificacaoA[0]}
                                time2={classificacaoA[1]}
                                time3={classificacaoA[2]}
                                time4={classificacaoA[3]}
                            />
                        </div>

                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo B"
                                time1={classificacaoB[0]}
                                time2={classificacaoB[1]}
                                time3={classificacaoB[2]}
                                time4={classificacaoB[3]}
                            />
                        </div>

                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo C"
                                time1={classificacaoC[0]}
                                time2={classificacaoC[1]}
                                time3={classificacaoC[2]}
                                time4={classificacaoC[3]}
                            />
                        </div>

                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo D"
                                time1={classificacaoD[0]}
                                time2={classificacaoD[1]}
                                time3={classificacaoD[2]}
                                time4={classificacaoD[3]}
                            />
                        </div>
                        
                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo E"
                                time1={classificacaoE[0]}
                                time2={classificacaoE[1]}
                                time3={classificacaoE[2]}
                                time4={classificacaoE[3]}
                            />
                        </div>

                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo F"
                                time1={classificacaoF[0]}
                                time2={classificacaoF[1]}
                                time3={classificacaoF[2]}
                                time4={classificacaoF[3]}
                            />
                        </div>

                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo G"
                                time1={classificacaoG[0]}
                                time2={classificacaoG[1]}
                                time3={classificacaoG[2]}
                                time4={classificacaoG[3]}
                            />
                        </div>

                        <div className="classifiedGroup">
                            <Classified
                                group="Grupo H"
                                time1={classificacaoH[0]}
                                time2={classificacaoH[1]}
                                time3={classificacaoH[2]}
                                time4={classificacaoH[3]}
                            />
                        </div>
                </div>
                <div className="finals">
                    <h1 className="title">Oitavas de Final</h1>
                    <table className="qualifiers">
                        <td>{Octaves( 
                            classificacaoA[0], 
                            classificacaoB[1], 
                            r.gol_1A, 
                            r.gol_2B, 
                            r.penaltiA1, 
                            r.penaltiB2 )}
                            
                        </td>

                        <td>{Octaves( 
                            classificacaoC[0], 
                            classificacaoD[1], 
                            r.gol_1C, 
                            r.gol_2D, 
                            r.penaltiC1, 
                            r.penaltiD2
                        )}
                        </td>
                    </table>
                    <table className="qualifiers">
                        <td>{Octaves(
                            classificacaoE[0],
                            classificacaoF[1],
                            r.gol_1E,
                            r.gol_2F,
                            r.penaltiE1,
                            r.penaltiF2
                        )}</td>
                        <td>{Octaves(
                            classificacaoG[0],
                            classificacaoH[1],
                            r.gol_1G,
                            r.gol_2H,
                            r.penaltiG1,
                            r.penaltiH2
                        )}
                        </td>
                    </table>
                    <table className="qualifiers">
                        <td>{Octaves(
                            classificacaoB[0],
                            classificacaoA[1],
                            r.gol_1B,
                            r.gol_2A,
                            r.penaltiB1,
                            r.penaltiA2
                        )}</td>
                        <td>{Octaves(
                            classificacaoD[0],
                            classificacaoC[1],
                            r.gol_1D,
                            r.gol_2C,
                            r.penaltiD1,
                            r.penaltiC2
                        )}
                        </td>
                    </table>
                    <table className="qualifiers">
                        <td>{Octaves(
                            classificacaoF[0],
                            classificacaoE[1],
                            r.gol_1F,
                            r.gol_2E,
                            r.penaltiF1,
                            r.penaltiE2
                        )}</td>
                        <td>{Octaves(
                            classificacaoH[0],
                            classificacaoG[1],
                            r.gol_1H,
                            r.gol_2G,
                            r.penaltiH1,
                            r.penaltiG2
                        )}
                        </td>                   
                    </table>
                </div>
                <div class="finals">
                <h1 className="title">Quartas de Final</h1>
                    <table class="qualifiers">
                        <td>
                        {QuarterFinals(
                            class_oitavas[0],
                            r.gol_O11,
                            r.penaltiO11,
                            class_oitavas[1],
                            r.gol_O12,
                            r.penaltiO12
                        )}
                        </td>
                        <td>
                        {QuarterFinals(
                            class_oitavas[2],
                            r.gol_O21,
                            r.penaltiO21,
                            class_oitavas[3],
                            r.gol_O22,
                            r.penaltiO22
                        )}
                        </td>
                        </table>
                        <table class="qualifiers">
                        <td>
                        {QuarterFinals(
                            class_oitavas[4],
                            r.gol_O31,
                            r.penaltiO31,
                            class_oitavas[5],
                            r.gol_O32,
                            r.penaltiO32
                        )}
                        </td>
                        <td>
                        {QuarterFinals(
                            class_oitavas[4],
                            r.gol_O41,
                            r.penaltiO41,
                            class_oitavas[5],
                            r.gol_O42,
                            r.penaltiO42
                        )}
                        </td>
                    </table>
                </div>
                <div className="finals">
                <h1 className="title">Semi-final</h1>
                    <table className="qualifiers">
                    <td>
                    {Semi(
                        class_quartas[0],
                        r.gol_S11,
                        r.penaltiS11,
                        class_quartas[1],
                        r.gol_S12,
                        r.penaltiS12
                    )}
                    </td>
                    <td>
                    {Semi(
                        class_quartas[2],
                        r.gol_S21,
                        r.penaltiS21,
                        class_quartas[3],
                        r.gol_S22,
                        r.penaltiS22
                    )}
                    </td>
                    </table>
                </div>
                <div className="final">
                    <h1 className="titleFinal">Final</h1>
                    <table className="qualifiersFinal">
                        <td>{Final()}</td>
                    </table>
                </div>
                <div className="champion">
                    <p className="championFinal">
                        Campeão da Copa do Mundo Qatar 2022 é
                    </p>
                    <img class="flag-champion" src={`../imgs/${campeao[0]}.png`} />
                    <p className="finalchampion">{campeao[0]}</p>
                </div>
            </div>
        </Fragment>
    )
}
