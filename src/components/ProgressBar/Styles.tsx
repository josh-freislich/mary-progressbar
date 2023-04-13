import styled, { css } from "styled-components";

export const ProgressBarStyled = styled.div<{ progress: number }>`
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  color: #333;
  position: relative;
  &:after {
    content: "${(props) => props.progress}%";
    position: relative;
    z-index: 10;
  }
  &:before {
    transition: all 0.3s;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #bbbbff;
    ${(props) =>
      props.progress <= 0 &&
      css`
        width: 0;
      `}
    ${(props) =>
      props.progress >= 100 &&
      css`
        width: 100%;
      `}
	${(props) =>
      props.progress < 100 &&
      props.progress > 0 &&
      css`
        width: ${props.progress}%;
      `}
  }
  ${(props) =>
    props.progress > 100 &&
    css`
      &:before {
        background: #ff5555;
      }
    `}
`;
