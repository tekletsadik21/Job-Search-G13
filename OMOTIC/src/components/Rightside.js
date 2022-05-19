import styled from "styled-components";

const Rightside = (props) => {
    return (
        <Container>
            <Topicscard>
                <Title>
                    <h2>Your Topics</h2>
                    <img src="" alt="" />
                </Title>
            </Topicscard>

        </Container>
    );
};

const Container = styled.div`
  grid-area: rightside;
`;

const Topicscard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;


export default Rightside;
