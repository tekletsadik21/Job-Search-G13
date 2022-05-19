import styled from "styled-components";

const Header = (props)=>{
    return(
        <Container>
            <Content>
                <Logo>
                    <a href={"/home"}>
                        <img src={"/assets/images/Home/home-logo.svg"} alt={""} width={'50px'}/>
                    </a>
                </Logo>
                <Search>
                    <SearchIcon>
                        <span><img src={"/assets/images/Home/icons8-search.svg"} alt={"search"} width={'30px'}/></span>
                    </SearchIcon>
                    <div className="form">
                        <input type="text" className="form-control form-input" placeholder="Search"/>
                    </div>
                </Search>
                <Nav>
                    <Navlistwraper>
                        <Navlist>
                            <a href="">
                                <img src={"/assets/images/Home/home-svgrepo-com.svg"} alt={""}/>
                                <span>Home</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a href="">
                                <img src={"/assets/images/Home/work-ui-job-svgrepo-com.svg"} alt={""}/>
                                <span>Jobs</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a href={""}>
                                <img src={"/assets/images/Home/resume-svgrepo-com.svg"} alt={""}/>
                                <span>Resume</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a href="">
                                <img src={"/assets/images/Home/message-27.svg"} alt={""}/>
                                <span>messages</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a href="">
                                <img src={"/assets/images/Home/notification-15.svg"} alt={""}/>
                            <span>notification</span>
                            </a>
                        </Navlist>
                        <Navlist>
                            <a href={""}><img src={"/assets/images/Home/person-17.svg"} alt={""}/>
                                <span>Profile</span>
                            </a>
                        </Navlist>
                    </Navlistwraper>

                </Nav>
                <Employers id={"Employers-Menu"}>
                    <a href={""}>
                        <span>Employers</span>
                    </a>
                </Employers>
            </Content>
        </Container>
    );
}

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0 ,0, 0.09);
  padding: 0 24px;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
  max-width: 1128px;
  margin: 0 auto;
`;

const Logo = styled.a`
  
`;
const Search = styled.div`
  display: flex;
  margin-left: 20px;
  opacity: 1;
  flex-grow: 1;
  height: 100%;
  max-width: 280px;
  input{
    border: none;
    outline: none;
    border-radius: 2px;
    box-shadow: none;
    width: 218px;
    height: 38px;
    color: rgba(0,0,0,0.9);
    background-color: #eef3f9;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-size: 14px;
  }
  @media(max-width: 768px){
    input{
      width: 70%;
    }
  }
`;
const SearchIcon = styled.span`
    z-index: 1;
    padding: 6px;
    position: absolute;   
    pointer-events: none;
    border-radius: 0 2px 2px 0;
    img{
      width: 30px;
      height: 20px;
    }
`;
const Nav = styled.div`
  display: block;
  margin-right: auto;
  @media(max-width: 910px){
    position: fixed;
    background-color: white;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;
const Navlistwraper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  margin-top: 1rem;
  align-items: center;
  @media(max-width: 910px){
    justify-content: center;
  }
`;
const Navlist = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    a{
        flex-direction: column;
        justify-content: center;
        font-weight: 400;
        line-height: 1.5px;
        position: relative;
        align-items: center;
        font-size: 12px;
        min-height: 60px;
        min-width: 68px;
        text-decoration: none;
        display: inline-block;
        cursor: pointer;
        span{
          display: flex;
          width: 100%;
          justify-content: center;
          padding-top: 10px;
          color: rgba(0, 0, 0, 0.6);
        }
        @media(max-width: 768px){
          min-width: 60px;
          font-size: 10px;
        }
        &:hover,&:active {
          color: #06113C;
        }
      
    }
    img{
        width: 100%;
        height: 25px;
    }
  
`;
const Employers = styled.button`
  background-color: white;
  margin: 20px;
  position: fixed;
  right: 0;
  height: 35px;
  border:none;
  border-left: 2px solid red;
  a{
    text-decoration: none;
    font-size: 1.1rem;
    &:hover,&:active {
      color: #06113C;
    }
  }
  @media(max-width: 768px){
    a{
      font-size: 12px;
    }
    margin: 0;
  }
`;
export default Header;