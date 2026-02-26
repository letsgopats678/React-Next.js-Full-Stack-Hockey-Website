
import React from "react";
//import mockLeaders from "./mockLeaders";
import styled from 'styled-components';
import { useEffect, useState} from "react";




const LeadersTable = () =>  {

    //const [leaders, setLeaders] = useState([]);
    const [goalLeaders, setGoalLeaders] = useState([]);
    
    const [pointLeaders, setPointLeaders] = useState([]);

    const [savePctLeaders, setSavePctLeaders] = useState([]);

    const [activeTab, setActiveTab] = useState("goals");

    /*useEffect(() => {
        fetch("/api/goalleaders")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setLeaders(data.goals);
          })
          .catch(err => console.error(err));
      }, []);*/
      useEffect(() => {
        fetch("/api/goalleaders")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setGoalLeaders(data.goals);
          })
          .catch(err => console.error(err));
      }, []);

      useEffect(() => {
        fetch("/api/pointleaders")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setPointLeaders(data.points);
          })
          .catch(err => console.error(err));
      }, []);

      useEffect(() => {
        fetch("/api/tenderleaders")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setSavePctLeaders(data.savePctg);
          })
          .catch(err => console.error(err));
      }, []);


    return (

        
        <div className = "text-white">

            <StatTab>
            <div className="flex gap-6 pb-2">
                <button onClick={() => setActiveTab("goals")}>
                    Goals
                </button>

                <button onClick={() => setActiveTab("points")}>
                    Points
                </button>

                <button onClick={() => setActiveTab("goalies")}>
                    Goalie Leaders
                </button>
            </div>
            </StatTab>

        

            {activeTab === "goals" && (
            <Goals>
                <Head>
                <h2 className = "text-2xl mb-4"> Goal Leaders</h2>
                </Head>
            <Table className = "w-full text-center">
                <THead>
                    <TRow>
                        <Th></Th>
                        <Th>Player</Th>
                        <Th>team</Th>
                        <Th>goals</Th>
                    
                    </TRow>
                </THead>

                <tbody>
                    {goalLeaders.map((leader) => (
                    <TRow key={leader.id}>
                        

                        <Td>
                            <img src = {leader.headshot} width = "90" />
                        </Td>

                         
                        <Td>{leader.firstName.default} {leader.lastName.default}</Td>

                    
          
                        <Td>
                        <TeamLogo>
                        {leader.teamAbbrev} <img src = {leader.teamLogo} width = "50" alt={leader.teamAbbrev}/> 
                        </TeamLogo>
                        </Td>
             
                

                        <Td>{leader.value}</Td>
        
                    </TRow>

                    ))}
                </tbody>

            </Table>
            </Goals>)}
           
        {activeTab === "points" && (
            <Points>
                <Head>
                <h2 className = "text-2xl mb-4"> Point Leaders</h2>
                </Head>
                {/*<h1>testing</h1>*/}
                <Table className = "w-full text-center">
                <THead>
                    <TRow>
                        <Th></Th>
                        <Th>Player</Th>
                        <Th>team</Th>
                        <Th>points</Th>
                    
                    </TRow>
                </THead>

                <tbody>
                    {pointLeaders.map((leader) => (
                    <TRow key={leader.id}>
                        

                        <Td>
                            <img src = {leader.headshot} width = "90" />
                        </Td>

                         
                        <Td>{leader.firstName.default} {leader.lastName.default}</Td>
                        {/*<Td>{leader.teamAbbrev}</Td>*/}

                        <Td>
                        <TeamLogo>
                        {leader.teamAbbrev} <img src = {leader.teamLogo} width = "50" alt={leader.teamAbbrev}/> 
                        </TeamLogo>
                        </Td>

                        <Td>{leader.value}</Td>
        
                    </TRow>

                    ))}
                </tbody>

            </Table>
            </Points>
        )}

        {activeTab === "goalies" && (
            <Goalies>
                <Head>
                <h2 className = "text-2xl mb-4"> {"Goalie Leaders (Save Percetange)"}</h2>
                </Head>

                <Table className = "w-full text-center">
                <THead>
                    <TRow>
                        <Th></Th>
                        <Th>Player</Th>
                        <Th>team</Th>
                        <Th>SV%</Th>
                    
                    </TRow>
                </THead>

                <tbody>
                    {savePctLeaders.map((leader) => (
                    <TRow key={leader.id}>
                        

                        <Td>
                            <img src = {leader.headshot} width = "90" />
                        </Td>

                         
                        <Td>{leader.firstName.default} {leader.lastName.default}</Td>
                        {/*<Td>{leader.teamAbbrev}</Td>*/}

                        <Td>
                        <TeamLogo>
                        {leader.teamAbbrev} <img src = {leader.teamLogo} width = "50" alt={leader.teamAbbrev}/> 
                        </TeamLogo>
                        </Td>

                        <Td>{leader.value.toFixed(3)}</Td>
        
                    </TRow>

                    ))}
                </tbody>

            </Table>

           
            </Goalies>
        )}

    
          
    </div>


    );

};

/*const TeamLogo = styled.td`
    text-align: center;
    vertical-align: middle;
    white-space: nowrap; 

`;
const TeamLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;
  img {
    width: 26px;
    height: auto;
    display: block; 
  }

  
`;*/

const TeamLogo = styled.div`
    img {
        width: 50px;
        height: auto;
        position: relative;
        top: 9px;   /* move logo down 2px */
    }

`;


const Goals = styled.section`
font-family: 'Arial', sans-serif;

th, td{
    padding: 10px;
}

`;

const Table = styled.table`

  width: 80%;
  border-collapse: collapse;
  
`;

const THead = styled.thead`
  border-bottom: 1px solid #2d2d2d;
`;

const Th = styled.th`
  padding: 18px 8px;
  font-weight: 500;
  color: #9ca3af;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: .5em;
  text-align: center;


`;

const TRow = styled.tr`
  transition: background 0.2s ease;


`;

const Td = styled.td`
  padding: 18 12px;
  text-align: center;
`;


const Points = styled.section`
font-family: 'Arial', sans-serif;

th, td{
    padding: 10px;
}

`;

const Goalies = styled.section`
font-family: 'Arial', sans-serif;

th, td{
    padding: 10px;
}

`;

const StatTab = styled.div`
display: flex;
gap: 10px;
margin-top: 10px;

button {
  padding: 4px 10px !important;
  font-size: 20px !important;
  border-radius: 20px;
  border: 1px solid #374151;
  background: transparent;
  color: #d1d5db;
  cursor: pointer;
}


 
    
`;
const Head = styled.h2`
    padding: 30px;

`;

export default LeadersTable;