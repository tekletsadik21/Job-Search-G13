import styled from "styled-components";


const Login = (props)=>{
    return (
        <Container>
            <Nav>
                <a href="/"><img id={"main-logo"} src="/assets/images/main-logo.svg" alt=""/></a>
                <div>
                    <ForCompanies>
                        For Companies
                    </ForCompanies>
                </div>
                <div>
                    <ForJobSeekers>
                        For Job Seekers
                    </ForJobSeekers>
                </div>
                <div id={"main-btn"}>
                    <Join>
                        Join Us
                    </Join>
                    <SignIn>
                        Sign In
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>welcome to Arbaminch professional community</h1>
                    <img src={"/assets/images/omotic-hero.svg"} alt={"hero image"}/>
                </Hero>
                <Form>
                    <Google>
                        <img src={"/assets/images/google-icon.svg"} alt={""}/>
                        sign in with Google.
                    </Google>
                    <Facebook>
                        <img src={"/assets/images/facebook-icon.svg"} alt={""}/>
                        sign in with Facebook.
                    </Facebook>
                    <Twitter>
                        <img src={"/assets/images/twitter-icon.svg"} alt={""}/>
                        sign in with Twitter.
                    </Twitter>
                </Form>
            </Section>
        </Container>
    );
}
const Container = styled.div`
  margin: 0;
  padding: 0;
`;
const Nav = styled.nav`
  font-family: Georgia,serif;
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 12px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  
  #main-logo{
    width:160px;
    height:90px;
  }
  
  @media (max-width:760px){
    padding: 0 5px;
  }
`;
const ForCompanies = styled.a`
  font-size: 16px;
  padding: 10px 14px;
  text-decoration: none;
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    color: #06113C
  }
  @media (max-width:760px){
    display: none;
  }
`;
const ForJobSeekers = styled.a`
  font-size: 16px;
  padding: 10px 14px;
  text-decoration: none;
  display: inline-block;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  &:hover {
    color: #06113C;
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
const Join = styled.a`
  font-size: 16px;
  line-height: 40px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 2px;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px ;
  text-decoration: none;
  border-radius: 24px;
  transition-duration: 170ms;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: #0a66c2;
    text-decoration: none;
  }
`;
const Section = styled.section`
  margin: auto;
  display: flex;
  align-content: start;
  min-height: 700px;
  position: relative;
  flex-wrap: wrap;
  padding: 50px 0;
  width: 100%;
  max-width: 1128px;
  @media(max-width: 760px){
    margin: auto;
    min-height: 0;
  }
`;
const Hero = styled.div`
  width: 100%;

  h1 {
    padding-bottom: 0;
    width: 50vw;
    font-size: 2.5rem;
    font-weight: 200;
    color: #251D3A;
    line-height: 3rem;
  }
  img{
    width: 70vw;
    height: 80vh;
    position: absolute;
    bottom: 200px;
    right: -180px;
  }
  @media(max-width: 768px){
    h1{
      text-align: center;
      font-size: 1.5rem;
      width: 100%;
      line-height: 1.5rem;
    }
    img{
      top: 230px;
      width: 100%;
      height: initial;
      position: initial;
      justify-content: center;
    }
  }
`;
const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  width: 408px;
  @media(max-width: 768px){
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
  }
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  padding: 10px;
  font-size: 1.3rem;
  text-align: center;
  height: 56px;
  border-radius: 28px;
  width: 100%;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%),inset 0 0 0 2px rgb(0 0 0 /0),inset 0 0 0 1px rgb(0 0 0 /0);
  color: #333;
  vertical-align: middle;
  img{
    width: 30px;
    height: 30px;
    padding-right: 10px;
  }
  &:hover{
    background-color: rgba(207, 207, 207,0.3);
    color:#000;
  }
`;
const Facebook = styled.button`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  align-content: space-between;
  border-radius: 28px;
  justify-content: center;
  font-size: 1.3rem;
  height: 56px;
  color: #333;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%),inset 0 0 0 2px rgb(0 0 0 /0),inset 0 0 0 1px rgb(0 0 0 /0);
  vertical-align: middle;
  width: 100%;
  img{
    width: 25px;
    height: 25px;
    padding-right: 10px;
  }
  &:hover{
    background-color: rgba(207, 207, 207,0.3);
    color:#000;
  }
`;
const Twitter = styled.button`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 28px;
  justify-content: center;
  font-size: 1.3rem;
  height: 56px;
  color: #333;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%),inset 0 0 0 2px rgb(0 0 0 /0),inset 0 0 0 1px rgb(0 0 0 /0);
  vertical-align: middle;
  width: 100%;
  img{
    width: 25px;
    height: 25px;
    padding-right: 10px;
  }
  &:hover{
    background-color: rgba(207, 207, 207,0.3);
    color:#000;
  }
`;


export default Login;
