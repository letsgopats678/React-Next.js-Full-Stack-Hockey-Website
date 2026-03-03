import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '@/context/StateContext'
//import {login, isEmailInUse, loginUser} from '@/backend/Auth'
import {login} from '@/backend/Auth'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
const Login = () => {

  const { user, setUser } = useStateContext()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const router = useRouter()


  async function handleLogin(){
    try {
      const user = await login(email,password)
      router.push('/mainpage')
    } catch (err) {
      console.log('Login error:', err)
    }
  }

  return (
    <>
    {/*<Navbar/>*/}
    <Section>
    <Card>
        <Header>Login</Header>
        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        {/*<UserAgreementText>By signing in, you automatically agree to our <UserAgreementSpan href='/legal/terms-of-use' rel="noopener noreferrer" target="_blank"> Terms of Use</UserAgreementSpan> and <UserAgreementSpan href='/legal/privacy-policy' rel="noopener noreferrer" target="_blank">Privacy Policy.</UserAgreementSpan></UserAgreementText>*/}

        <MainButton onClick={handleLogin}>Login</MainButton>

        <SwitchText>
          Don’t have an account?{" "}
        <SwitchLink href="/auth/signup">Sign up</SwitchLink>
      </SwitchText>
      </Card>

    </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  background: #000;
  height: 100vh;
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
  gap: 16px;
  border: 1px solid #222;
  box-shadow: 0 0 40px rgba(0, 119, 255, 0.15);
`;

const Header = styled.h1`
  font-size: 24px; /* Adjusted for better scalability */
  color: white;
  font-family: 'arial', sans-serif;
  text-align: center;
  background: #111;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #333;
  background: #1a1a1a;
  color: white;

  &:focus {
    outline: none;
    border-color: #1a73e8;
  }

`;

const InputTitle = styled.label` /* Changed to label for semantics */
  font-size: 14px;
  background: #111;
  color: #gray;
  font-family: 'arial', sans-serif;
`;

const MainButton = styled.button`
  padding: 12px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  background: #1a73e8;
  color: white;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
/**
 * background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
 */

const UserAgreementText = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 20px;
  text-align: center;
`;

const UserAgreementSpan = styled(Link)`
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-of-type)::after {
    content: ', '; /* Adds comma between links */
  }
`;

const SwitchText = styled.p`
  font-size: 13px;
  color: #888;
  background: #111;
  text-align: center;
  font-family: 'arial', sans-serif;
`;

const SwitchLink = styled(Link)`
  color: #1a73e8;
  font-family: 'arial', sans-serif;
  &:hover {
    text-decoration: underline;
  }
`;


export default Login;