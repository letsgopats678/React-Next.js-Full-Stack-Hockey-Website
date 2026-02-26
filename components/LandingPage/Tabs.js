import React from "react";
import { useState } from "react";
//import { mockStandings } from "@/components/LandingPage/mockStandings";
import StandingsTable from "./Standings";

import styled from "styled-components";
import LeadersTable from "./Leaders";

import {mockLeaders} from "./mockLeaders";
import Games from "./Games";
import {mockGames} from "./mockGames";
import Scoreboard from "./Scoreboard";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("standings")
    console.log("mockStandings in Tabs:", mockLeaders);
    return(
        <MainTabs>
            <Header>
            <h1>Hockey Dashboard</h1>
            <p>NHL Stats, Teams, Standings, and Live and Upcoming Score Dashboard powered by the NHL API</p>
            <p>This project is done in React and Next.js and stored on Google Firebase. This is for Educational Purposes only.</p>
            </Header>



            <TopNav>
            <NavLinks>
                <NavSpan
                className={activeTab === "games" ? "active" : ""}
                onClick={() => setActiveTab("games")}
                >Games
                </NavSpan>
                
                {/*<span>Upcoming</span>*/}
                <NavSpan
                className={activeTab === "standings" ? "active" : ""}
                onClick={() => setActiveTab("standings")}
                >Standings</NavSpan>
                <NavSpan
                className={activeTab === "leaders" ? "active" : ""}
                onClick={() => setActiveTab("leaders")}
                >Leaders</NavSpan>
            </NavLinks>
            </TopNav>



        <div className="flex flex-col items-center gap-6">
            {/*<div className="flex gap-6 pb-2">
                <button onClick={() => setActiveTab("standings")}>
                    Standings
                </button>

                <button onClick={() => setActiveTab("leaders")}>
                    Leaders
                </button>

                <button onClick={() => setActiveTab("games")}>
                    Games
                </button>
    </div>*/}


            <div>
                {activeTab === "standings" && (<StandingsTable />)}
                {/*{activeTab === "leaders" && <div>Leaders Content</div>}*/}

                {/*activeTab === "leaders" && (<LeadersTable leaders={mockLeaders}/>)*/}

                
                {activeTab === "leaders" && (<LeadersTable/>)}

                {/*{activeTab === "games" && <div>Games Content</div>}*/}
                {/*activeTab === "games" && <Games games={mockGames}/>*/}
                {activeTab === "games" && <Scoreboard/>}

               
            </div>
       
          
        </div>

        <Footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800 mt-12">
        <div className="text-center text-gray-500 text-sm py-6">
            <p>© 2026 Joseph Olanya</p>
            <p className="mt-2">
                NHL team names, logos, and trademarks are property of the National Hockey League.
            </p>
            <p>
                This project is a full-stack portfolio application built for educational purposes only.
            </p>
            </div>
        </Footer>


        </MainTabs>

        

        

    );

};

const Header = styled.div`
    letter-spacing: 1px;
    text-transform: uppercase;


    
    h1 {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.5px;
        margin: 0;
        font-family: 'Inter', sans-serif;
    }

    p {
        margin-top: 10px;
        font-size: 15px;
        color: #9ca3af; /* gray-400 */
        font-weight: 400;
    }
`;

const Footer = styled.div`
    padding: 50px;
    font-size: 20px;
    font-family: arial, sans-serif;
    


`

const TopNav = styled.div`
    width: 100%;
    background-color: #000;
    border-bottom: 1px solid #1f2937;
    padding: 16px 60px;

    display: flex;
    align-items: center;
    justify-content: center;
`;
const NavLinks = styled.div`
    display: flex;
    gap: 50px;

    span {
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    color: #d1d5db;
    cursor: pointer;
    position: relative;
    transition: color 0.2s ease;

    &:hover {
        color: white;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 0%;
        height: 2px;
        background: white;
        transition: width 0.2s ease;
    }
    &:hover::after {
        width: 100%;
    }
    
    }
`;
///////
const NavSpan = styled.span`
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 2px;
  opacity: 0.6;
  padding-bottom: 6px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
    border-bottom: 2px solid #4ea1ff;
  }
`;
/** */

const MainTabs = styled.section`

button{
    padding: 16px 28px;
    font-size: 20px;
    border-radius: 999px;
    cursor: pointer;
    border: 2px solid #4b5563;
}

button:hover {
    background: #1f2937;
    color: white
}

button.active{
    background: #2563eb;
    border-color: #2563eb;
    color: white;
    box-shadow: 0 6px 18px rgba(0,0,0,0.4);
}


`;


export default Tabs;






