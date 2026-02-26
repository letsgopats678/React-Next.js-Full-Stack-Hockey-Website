
import React from "react";
import mockStandings from "./mockStandings";
import styled from 'styled-components';
import { useEffect, useState} from "react";



//const StandingsTable = ({teams = []}) => {
const StandingsTable = () => {

    const [teams, setTeams] = useState([]);

    const [activeTab, setActiveTab] = useState("league");

    

    useEffect(() => {
        //fetch("https://api-web.nhle.com/v1/standings/now")
        fetch("/api/standings")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setTeams(data.standings);
          })
          .catch(err => console.error(err));
      }, []);


    const groupedByDivision = teams.reduce((acc, team) => {
        const division = team.divisionName;

        if(!acc[division]){
            acc[division] = [];
        }

        acc[division].push(team);

        return acc;

    }, {});

     Object.keys(groupedByDivision).forEach(div => {
        groupedByDivision[div].sort((a, b) => b.points - a.points);
      });


    return(

        
        <Stand>
        <StatTab>
        <button onClick={() => setActiveTab("league")}>
            League
        </button>
        <button onClick={() => setActiveTab("division")}>
            Divisions
        </button>
        <button onClick={() => setActiveTab("conference")}>
            Conferences
        </button>
        </StatTab>

        {activeTab === "league" && (
          <>
          
          <SectionTitle>
            
            <div> League Standings </div>
            
            </SectionTitle>


            <CardTable>
                
                


        

            <Thead>
                <tr className = "border-b border-gray-700 text-gray-400">
                    <Th></Th>
                    <Th className = "p-4"> Team </Th>
                    <Th className = "p-4">GP</Th>
                    <Th className = "p-4"> W </Th>
                    <Th className = "p-4"> L </Th>
                    <Th className = "p-4"> OTL </Th>

                    <Th className = "p-4"> PTS </Th>
                </tr>
            </Thead>


        <tbody>
            {teams.map((team) => (
                <tr key = {team.teamAbbrev.default}>
                    <Td>
                        <img src = {team.teamLogo} width = "70" />
                    </Td>

                    {/*<td> {team.teamCommonName.default}</td>*/}
                    <Td> {team.teamName.default}</Td>
                    <Td>{team.wins+ team.losses + team.otLosses}</Td>
                    <Td>{team.wins}</Td>
                    <Td>{team.losses}</Td>
                    <Td>{team.otLosses}</Td>
                    <Td>{team.points}</Td>
                </tr>
            ))}
            </tbody>

            </CardTable>
       
            </>
        )}


        {activeTab === "division" && (
          <DivisionGrid>

             
            {Object.entries(groupedByDivision).map(([division, divisionTeams]) => (

       
                <DivisionCard key={division}>
                    
                    <DivisionTitle>{division} Division</DivisionTitle>

                <CardTable>
                    <Thead>
                        <tr className = "border-b border-gray-700 text-gray-400">
                            <Th></Th>
                            <Th> Team </Th>
                            <Th> W </Th>
                            <Th> L </Th>
                            <Th> OTL </Th>
                            <Th>Pts</Th>
                        </tr>
                    </Thead>
                    

                    {divisionTeams.map((team) => (
                        <tr key={team.teamAbbrev.default}>
                            <Td>
                            <img src={team.teamLogo} width="70" />
                            </Td>
                            <Td>{team.teamName.default}</Td>
                            <Td>{team.wins}</Td>
                            <Td>{team.losses}</Td>
                            <Td>{team.otLosses}</Td>
                            <Td>{team.points}</Td>
                        </tr>
                    ))}
                    </CardTable>
                </DivisionCard>
                
                        
            ))}
          
          </DivisionGrid>
        )}

        {activeTab === "conference" && (


            <h1>testing2</h1>
             
   

        )}
        </Stand>


            



    );
};

const Stand = styled.section`
font-family: 'Arial', sans-serif;


`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    max-width: 1100px;
   
    margin: 40px auto;
`

const Thead = styled.thead`
    border-bottom: 1px solid #333;
    color: #888;
`
const Th = styled.th`
    padding: 20px;
    text-align: center;
    &:nth-child(2) {
        text-align: left;
      }
    
`;

const Td = styled.td`
    padding: 20px;
    text-align: center;
    &:nth-child(2) {
        text-align: left;
      }
    
`;

const LeagueHeader = styled.h1`
border-bottom: 1px solid #333;
    color: #888;

`;

/*
const DivisionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;*/
const DivisionGrid = styled.div`
width: 100%;
border-collapse: collapse;
max-width: 1100px;

margin: 40px auto;
`;

const DivisionCard = styled.div`
  background: #111;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-6px);
  }
`;

const DivisionTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: white;
`;

const CardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: white;

  th {
    
    font-size: 0.9rem;
    color: #aaa;
    padding-bottom: 10px;
  }

  td {
    padding: 10px 0;
  }

  tr {
    border-bottom: 1px solid #222;
  }

  tr:hover {
    background: #1a1a1a;
  }

  .points {
    font-weight: bold;
  }
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 30px 0 20px 0;
  padding: 30px;
`;

const StatTab = styled.div`
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

export default StandingsTable;



