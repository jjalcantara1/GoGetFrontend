import styled from 'styled-components';



export const Container = styled.div`
    background-color: #E7F1F1;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position : absolute;
    margin-left : 100px;
    overflow: hidden;
    width: 1100px;
    min-height: 800px;
`;

export const SignUpContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
    ${props => props.signinIn !== true ? `
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
    ` 
 : null}
`;

export const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
`;

export const AuthForm = styled.form`
    background-color: #001f3f;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin: 10;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    background-color: #D6F9FF;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;


export const AuthButton = styled.button`
   border-radius: 20px;
   border: 1px solid #ffffff;
   background-color: #ffffff;
   color: black;
   font-size: 12px;
   font-weight: bold;
   padding: 12px 45px;
   letter-spacing: 1px;
   text-transform: uppercase;
   transition: transform 80ms ease-in;
   &:active{
       transform: scale(0.95);
   }
   &:focus {
       outline: none;
   }
   margin-bottom: 10px;
   margin-left: 300px;
`;
export const GhostButton = styled(AuthButton)`
    background-color: transparent;
    border-color: black;
    color: black;
    margin: 0 auto;
`;

export const Anchor = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`;
export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
${props =>
 props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ffffff;
  background: -webkit-linear-gradient(to right, #ffffff, #ffffff);
  background: linear-gradient(to right, #ffffff, #ffffff);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  left: 0;
  transform: translateX(-20%);
  background-color: #D5F3FE;
  ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    background-color: #001f3f;
    ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px
`;
