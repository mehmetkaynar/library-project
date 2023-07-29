// Home Style
import styled from "styled-components";
import Flex from "../../styles/Flex";

export const HomeContainer = styled(Flex)`
  flex-direction: column;
`;

export const HomeImage = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem;
  img {
    width: 95%;
    height: 450px;
    border-radius: 1rem;
  }
`;

export const CardContainer = styled(Flex)``;
