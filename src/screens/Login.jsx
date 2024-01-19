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
  Anchor,
  OverlayContainer,
  Overlay,
  LeftOverlayPanel,
  RightOverlayPanel,
} from '../components/loginComponents'; // Import named exports individually

function Login() {
  const [signIn, toggle] = useState(true); // Use useState instead of React.useState
  return (
    <Container className="app-container">
      <div className="image-overlay"></div>
      <SignUpContainer signinIn={signIn}>
        <Form>
          <Title>Create Account</Title>
          <Input type='text' placeholder='Name' />
          <Input type='email' placeholder='Email' />
          <Input type='password' placeholder='Password' />
          <Button>Sign Up</Button>
        </Form>
      </SignUpContainer>
      <SignInContainer signinIn={signIn}>
        <Form>
          <Title>Log in</Title>
          <Input type='email' placeholder='Username' />
          <Input type='password' placeholder='Password' />
          <Anchor href='#'>Don't have an account? Sign up</Anchor>
          <Button>Login</Button>
        </Form>
      </SignInContainer>
      <OverlayContainer signinIn={signIn}>
        <Overlay signinIn={signIn}>
          <LeftOverlayPanel signinIn={signIn}>
            <div> <i className="fa-solid fa-hotel"></i> </div>
            <Title>GoGet</Title>
            <Title>(a room)</Title>
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>
          <RightOverlayPanel signinIn={signIn}>
            <Title>GoGet</Title>
            <Title>(a room)</Title>
            <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default Login;
