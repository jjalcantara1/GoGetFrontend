import React, { useEffect, useState } from 'react'; // Import React and useState
import {
  Container,
  SignUpContainer,
  SignInContainer,
  AuthForm,
  Title,
  Input,
  AuthButton,
  GhostButton,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel
} from '../components/loginComponents'; // Import named exports individually
import './LoginPage.css'
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/loginActions';


const LoginPage=() =>{
  const [signIn, toggle] = useState(true);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const location = useLocation()

  const adminLogin = useSelector(state => state.login)
  const { error, loading, loginInfo} = adminLogin
  const redirect = location.search ? location.search.split('=')[1] : '/admin'


  let navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (loginInfo) {
      navigate('/admin')
    }
  }, [loginInfo, redirect, dispatch, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }

  return (
    <Container className="app-container">
      <div className="image-overlay"></div>
      <SignInContainer signinIn={signIn}>
        <Form onSubmit={submitHandler}>
          
          <Title className='titleText'>Log in</Title>
          <Form.Group className='titleText' controlId='username'>
           
            <Form.Control 
              type='username'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          <Form.Group className='titleText' controlId='password'>
            
            <Form.Control
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
            </Form.Control>
          </Form.Group>
          <AuthButton className='titleText' type='submit'>Login</AuthButton>
        </Form>

      </SignInContainer>
      <OverlayContainer signinIn={signIn}>
        <Overlay signinIn={signIn}>
          <LeftOverlayPanel signinIn={signIn}>
            <div> <i className="fa-solid fa-hotel"></i> </div>
        
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signinIn={signIn}>

          <Title className='hotelName'>GoGet</Title>
            <Title className='subText'>(a room)</Title>
            
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default LoginPage;

