import React from "react";
import { useState } from "react";
//import { mockStandings } from "@/components/LandingPage/mockStandings";
import StandingsTable from "./Standings";
import {mockStandings} from "./mockStandings";
import styled from "styled-components";
import LeadersTable from "./Leaders";

import {mockLeaders} from "./mockLeaders";
import Games from "./Games";
import {mockGames} from "./mockGames";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("standings")
    console.log("mockStandings in Tabs:", mockLeaders);
    return(
        <MainTabs>
        <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6 pb-2">
                <button onClick={() => setActiveTab("standings")}>
                    Standings
                </button>

                <button onClick={() => setActiveTab("leaders")}>
                    Leaders
                </button>

                <button onClick={() => setActiveTab("games")}>
                    Games
                </button>
            </div>


            <div>
                {activeTab === "standings" && (<StandingsTable />)}
                {/*{activeTab === "leaders" && <div>Leaders Content</div>}*/}

                {/*activeTab === "leaders" && (<LeadersTable leaders={mockLeaders}/>)*/}

                
                {activeTab === "leaders" && (<LeadersTable/>)}

                {/*{activeTab === "games" && <div>Games Content</div>}*/}
                {activeTab === "games" && <Games games={mockGames}/>}
            </div>
          
        </div>
        </MainTabs>

    );

};

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






