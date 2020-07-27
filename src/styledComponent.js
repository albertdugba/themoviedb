import styled from "styled-components";

const mediaQueries = {
  mediumSize: `(max-width:723px)`,
  smallSize: `(max-width:499px)`,
};

export const MovieDetailsContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: -1;

  @media ${mediaQueries.mediumSize} {
  }
`;

export const MovieCard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  opacity: 0.8;
  z-index: 1;
  padding: 1rem;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  padding: 1.4rem;

  @media ${mediaQueries.smallSize} {
    display: none;
  }
`;

export const MovieDetailsCard = styled.div`
  width: 100%;
  max-width: 75%;
  margin: 20px auto;
`;

export const MovieCardContent = styled.div`
  flex: 1.2;
  color: white;
  padding: 1rem;
  margin-left: 12px;
`;
