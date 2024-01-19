import React from 'react'
import loginComponents from '../components/loginComponents';


function Login() {
    const [signIn, toggle] = React.useState(true);
    return(


        <loginComponents.Container className="app-container" > 
          
           <div className="image-overlay"></div>

           <loginComponents.SignUpContainer signinIn={signIn}>
                 <loginComponents.Form>
                     <loginComponents.Title>Create Account</loginComponents.Title>
                     <loginComponents.Input type='text' placeholder='Name' />
                     <loginComponents.Input type='email' placeholder='Email' />
                     <loginComponents.Input type='password' placeholder='Password' />
                     <loginComponents.Button>Sign Up</loginComponents.Button>
                 </loginComponents.Form>
             </loginComponents.SignUpContainer>

             <loginComponents.SignInContainer signinIn={signIn}>
                  <loginComponents.Form>
                      <loginComponents.Title>Log in</loginComponents.Title>
                      <loginComponents.Input type='email' placeholder='Username' />
                      <loginComponents.Input type='password' placeholder='Password' />
                      <loginComponents.Anchor href='#'>Don't have an account? Sign up</loginComponents.Anchor>
                      <loginComponents.Button>Login</loginComponents.Button>
                  </loginComponents.Form>
             </loginComponents.SignInContainer>

             <loginComponents.OverlayContainer signinIn={signIn}>
                 <loginComponents.Overlay signinIn={signIn}>

                 <loginComponents.LeftOverlayPanel signinIn={signIn}>
                   <div> <i class="fa-solid fa-hotel"></i> </div>
                 <loginComponents.Title>GoGet</loginComponents.Title>
                       <loginComponents.Title>(a room)</loginComponents.Title>
                     <loginComponents.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </loginComponents.GhostButton>
                     </loginComponents.LeftOverlayPanel>

                     <loginComponents.RightOverlayPanel signinIn={signIn}>
                       <loginComponents.Title>GoGet</loginComponents.Title>
                       <loginComponents.Title>(a room)</loginComponents.Title>
                           <loginComponents.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </loginComponents.GhostButton> 
                     </loginComponents.RightOverlayPanel>
 
                 </loginComponents.Overlay>
             </loginComponents.OverlayContainer>

         </loginComponents.Container>
   
    )

}

export default Login