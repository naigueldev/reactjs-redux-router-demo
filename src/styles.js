import styled from "styled-components";

export const Title = styled.h1`
  color: #1c8ef9;
  font-size: ${(props) => `${props.fontSize}px`};
  text-align: center;

  span {
    font-size: 12px;
    color: #000;
  }
`;

export const Subtitle = styled(Title)`
  color: #f00;
  font-size: ${(props) => `${props.fontSize}px`};
`;
