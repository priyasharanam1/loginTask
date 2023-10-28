import styled from "styled-components";
import Button from "./components/Button";
import Input from "./components/Input";
import image from "./photo.jpg"


const App = () => {
  return (
    <Outer>
  
    <Image>
      <img src={image} alt="login" width={600} height={600}></img>
    </Image>
    <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </InputContainer>

      <ForgotPassword>Forgot Password ?</ForgotPassword> 

      <Check>
      <Remember>
        <input type="checkbox"></input>
        Remember Me
      </Remember>

      <Remember>
        <input type="checkbox"></input>
        Agree to
        <Terms> Terms & Conditions</Terms>
      </Remember>
      </Check>

      <ButtonContainer>
        <Button content="Sign In" />
      </ButtonContainer>

      <LoginWith>Don't have an account ? <InnerLogin>Sign Up</InnerLogin></LoginWith>

    </MainContainer>

    </Outer>
  );
}

const Outer = styled.div`
display: flex;
align-items:center;
justify-content:center;
position: relative;
`;



const Image = styled.div`
flex: 1;
margin-top: 50px;


@media screen and (max-width: 1024px){
  img{
    display: none;
  }
}

`;

const MainContainer = styled.div`
flex: 1;
  display: flex;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  height: 32rem;
  min-width: 26rem;
  background: linear-gradient(-45deg, #95bdfe71 0%, #3185e6a9 79%);
  box-shadow: 0 8px 20px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid #95BEFE;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  position: relative;


  @media screen and (max-width:1024px){
    min-width: 24rem;
    min-height: 32rem;
    align-items: center;
  }

`;

const WelcomeText = styled.h2`
  margin: 3.5rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap:1rem;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 2rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Check = styled.div`
display: flex;
flex-direction: column;
margin-right: 3rem;
margin-top: 3rem;
`;

const Remember = styled.div`
   display: flex;
   gap:0.5rem;
   margin-left: 1rem;
   margin-top: 1rem;
   letter-spacing: 0.6px;
`;

const Terms = styled.span`
color: blue;
cursor: pointer;
`;


const LoginWith = styled.p`
  font-size: 1rem;
  letter-spacing: 0.6px;
`;

const InnerLogin = styled.span`
color: blue;
cursor: pointer;
`;


const ForgotPassword = styled.h5`
  cursor: pointer;
  margin-top: 1rem;
  color: blue;
  font-size: 12px;
  letter-spacing: 0.8px;
  position: absolute;
  top: 13.5rem;
  right: 3.2rem;
`;

export default App;