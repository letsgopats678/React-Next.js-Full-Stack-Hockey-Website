
import React from "react";
import { useEffect, useState} from "react";
import styled from 'styled-components';






const Scoreboard = () => {
    const [scores, setScores] = useState([]);
    const [showMap, setShowMap] = useState(null);

    useEffect(() => {
        //fetch("https://api-web.nhle.com/v1/standings/now")
        fetch("/api/scoreboard")
          .then(res => res.json())
          .then(data => {
            //console.log(data);
            const allGames = data.gamesByDate.flatMap(day => day.games);
            setScores(allGames);
            
            //setScores(data.);
            //setScores(gamesByDate[0].games);
      
   
          })
          .catch(err => console.error(err));
      }, []);

  return (
    

    <PageWrapper>
    
      <Title>Games</Title>

      {scores.map((game) => {
       
        

        
        
        const venue = game.venue.default;
        
        const awayWin = game.awayTeam.score > game.homeTeam.score;
        const homeWin = game.homeTeam.score > game.awayTeam.score;


        const isFuture = game.gameState === "FUT";
        const isFinal = game.gameState === "OFF";
        const isLive = game.gameState === "LIVE";

        

        const networks = game.tvBroadcasts
          ?.map(b => b.network)
          .join(" , " );

     
        /*
        if (isFuture) {
          status = "Upcoming";
        } else if (isFinal) {
          status =
            game.periodDescriptor?.periodType === "OT"
              ? "Final (OT)"
              : "Final";
        } else if (isLive) {
          status = `${game.period} ${game.periodDescriptor?.periodType}`;
        }*/
        let status;

        if (isFuture) {
          status = "Upcoming";
        } 
        else if (isFinal) {
          status =
            game.periodDescriptor?.periodType === "OT"
              ? "Final (OT)"
              : "Final";
        } 
        else if (isLive) {
          const periodType = game.periodDescriptor?.periodType;
          const periodNumber = game.periodDescriptor?.number;
          const clock = game.clock;

          if (clock?.inIntermission) {
            status = `End of Period ${periodNumber}`;
          } else if (periodType === "OT") {
            status = `OT - ${clock?.timeRemaining}`;
          } else if (periodType === "SO") {
            status = "Shootout";
          } else {
            status = `Period ${periodNumber} -  ${clock?.timeRemaining}`;
          }
        }

        const recordMap = {};

        
        

 
        return (
          <GameRow key={game.id}>
            <Middle>{status}</Middle>

            

            {/*<button
              onClick={() =>
                setShowMap(showMap === game.id ? null : game.id)
              }
            >
              {showMap === game.id ? "Hide Map" : "View Map"}
            </button>*/}
            
            {showMap === game.id && (
              <VenueMap venue={venue} />
            )}

            <TeamsRow>
            <TeamSection>
              <TeamName>{game.awayTeam.name.default}</TeamName>

              <LogoScore>
                <img
                  src={game.awayTeam.logo}
                  alt={game.awayTeam.name.default}
                  width="70"
                />
                
                <Score style={{ fontWeight: awayWin ? "800" : "400" }}>
                  {game.awayTeam.score ?? "-"}
                </Score>
              </LogoScore>
              {game.awayTeam.record ?? ""}
          
            </TeamSection>
           
            <AtSymbol>@</AtSymbol>
            

            <TeamSection>
              <TeamName>{game.homeTeam.name.default}</TeamName>

              <LogoScore>
              <Score style={{ fontWeight: homeWin ? "800" : "400" }}>
                  {game.homeTeam.score ?? "-"}
                </Score>
                <img
                  src={game.homeTeam.logo}
                  alt={game.homeTeam.name.default}
                  width="70"
                />
               
              </LogoScore>
              {game.homeTeam.record ?? ""}
            </TeamSection>
            </TeamsRow>

            <GameMetaData>
              {/*<Venue>{venue}</Venue>*/}
              <Venue>{venue}</Venue>
              <Networks>{networks}</Networks>
            </GameMetaData>




          </GameRow>
        );
      })}

    </PageWrapper>



  


       
    
  );





  
};
const GameMetaData = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  opacity: 0.7;
  margin-top: 10px;
  gap: 4px;
`;
const Venue = styled.div`
`;

const Networks = styled.div`
`;

const GameRow = styled.div`
  margin: 0 auto 20px auto;


  display: flex;
  flex-direction: column;
  border: 1px solid #2b2b2b;
  padding: 24px 32px;
  margin-bottom: 20px;
  border-radius: 16px;
  max-width: 750px;
  justify-content: center;
  
`;
/*
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  border: 1px solid #2b2b2b;
  padding: 24px 32px;
  margin-bottom: 20px;
  border-radius: 16px;
  max-width: 750px;
*/

const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

`;

const TeamsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamName = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const LogoScore = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
 
`;

const Score = styled.div`
  font-size: 32px;
  font-weight: 700;
  padding: 30px;
`;

const AtSymbol = styled.div`
  font-size: 20px;
  opacity: 0.7;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const LogoScoreRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;


const Middle = styled.div`
  font-size: 22px;
  font-weight: 500;
  opacity: .8;
  text-align: center;
  width: 100%;
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


export default Scoreboard;