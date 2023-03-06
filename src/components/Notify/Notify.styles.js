import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  width: 20%;
  top: 83%;
  left: 73%;
  z-index: 5;
  padding: 20px;
`
export const NotifyBlock = styled.div`
  background: ${({background}) => background};
  width: 100%;
  padding: 20px;
  color: #FFF;
  border-radius: 5px;
  margin-right: 20px;
`