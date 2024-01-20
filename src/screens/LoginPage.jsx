import React, { useState } from 'react'; // Import React and useState
import {
  Container,
  SignUpContainer,
  SignInContainer,
  Form,
  Title,
  Input,
  Button,
  GhostButton,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
} from '../components/loginComponents'; // Import named exports individually
import './LoginPage.css'


const LoginPage=() =>{
  const [signIn, toggle] = useState(true);

  return (
    <Container className="app-container">
      <div className="image-overlay"></div>
      <SignInContainer signinIn={signIn}>
        <Form>
          <Title className='titleText'>Log in</Title>
          <Input type='email' placeholder='Username' />
          <Input type='password' placeholder='Password' />
          <Button>Login</Button>
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