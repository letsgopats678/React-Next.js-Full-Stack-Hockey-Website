
import React from "react";
import mockGames from "./mockGames";
import styled from 'styled-components';

const teamLogos = {
  PIT: "/logos/pit_logo.png",
  NYI: "/logos/nyi_logo.png"
};



const Games = (games = []) => {

  return (

    <Card>
      <PageWrapper>
        <Title>Games</Title>

            {mockGames.map((game) => (
                <GameRow key = {game.id}>

                    <Matchup>
                        <Team>
                          {/*<img

                            src = {teamLogos[game.awayTeam.abbrev]}
                            alt = {game.awayTeam.abbrev}
                            style = {{ width: "auto", height: "50px"}}
                          />*/}
                          <Logo
                            src={teamLogos[game.awayTeam.abbrev]}
                            alt={game.awayTeam.abbrev}
                          />

                          <Score>{game.awayScore}</Score>
                        </Team>
                          <Score> - </Score>

                          <Team>
                            <Score> {game.homeScore}</Score>
                              {/*<img

                                src = {teamLogos[game.homeTeam.abbrev]}
                                alt = {game.homeTeam.abbrev}
                                style = {{width: "auto", height: "50px" }}
                              />*/}
                              <Logo
                                src={teamLogos[game.homeTeam.abbrev]}
                                alt={game.homeTeam.abbrev}
                              />

                          </Team>

                    </Matchup>

                    <DateText>{game.date}</DateText>

                </GameRow>



            ))



            }

      </PageWrapper>
      </Card>

 
    
  );




  
};


/*const GameCard = styled.section`
font-family: 'Arial', sans-serif;

th, td{
    padding: 10px;
}

style={{
  background: "#1f2937",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "16px",
  maxWidth: "700px"
}}
`;*/
const Logo = styled.img`
  height: 48px;
  width: auto;
  display: block;
  background: #1f2937;
`;

const Card = styled.div`
  background: #1f2937;

`;
const PageWrapper = styled.section`
  font-family: Arial, sans-serif;
  padding: 24px;
  color: white;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
`;

const GameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1f2937;
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 12px;
  max-width: 700px;
`;

const Matchup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  background: #1f2937;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #1f2937;
`;

const Score = styled.span`
  font-size: 20px;
  font-weight: bold;
  background: #1f2937;
`;

const DateText = styled.div`
  color: #9ca3af;
  font-size: 14px;
  background: #1f2937;
`;

/*const GameCard = styled.section`
  font-family: Arial, sans-serif;
  padding: 24px;
  color: white;
`;

const GameRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1f2937;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 12px;
  max-width: 700px;
`;

const Matchup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Team = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;*/

export default Games;