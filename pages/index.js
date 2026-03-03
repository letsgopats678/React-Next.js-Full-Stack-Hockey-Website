import Hero from "@/components/LandingPage/Hero"
import { styled } from 'styled-components'
import Navbar from "@/components/Dashboard/Navbar"
import Tabs from "@/components/LandingPage/Tabs"
import StandingsTable from "@/components/LandingPage/Standings"
import LeadersTable from "@/components/LandingPage/Leaders"
import Signup from "./auth/signup"
import Dashboard from "./dashboard"
import { useRouter } from "next/router";



 
export default function Home() {
  const router = useRouter();
  return (
    <>
        {/*<Navbar/>*/}
        {/*<Hero text={'TO MY CLASS'} /> */}
       {/* <Hero />*/}
        {/*<Tabs> </Tabs>*/}
        {/*<Signup></Signup>*/}
        <Wrapper>
      <Card>
        <Title>Hockey Dashboard</Title>

        <Button onClick={() => router.push("/auth/login")}>
          Log In
        </Button>

        <Button secondary onClick={() => router.push("/auth/signup")}>
          Sign Up
        </Button>
      </Card>
    </Wrapper>
        
   
   
    </>
  )
}



const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #111;
  padding: 50px 40px;
  border-radius: 16px;
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  color: white;
  background: #111;
  font-family: 'arial', sans-serif;
  text-align: center;
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.secondary ? "#333" : "#1a73e8")};
  color: white;
`;
