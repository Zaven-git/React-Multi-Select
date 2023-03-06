import styled from "styled-components";

export const Wrapper = styled.main`
  list-style: none;
  margin: 5px 30px;
  cursor: pointer;
  
  .selected{
    display: flex;
    align-items: center;
    background: aquamarine;
    padding: 5px 10px;
    border-radius: 5px;
    svg{
      font-size: 15px;
    }
  }
`
