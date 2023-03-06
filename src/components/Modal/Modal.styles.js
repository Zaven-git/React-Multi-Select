import styled from "styled-components";

export const ModalContainer = styled.div`
  display: ${({display})=>display};
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgba(0,0,0,0.4); 
  justify-content: center;
  align-items: center;
`

export const ModalBody = styled.div`
  width: 40%;
  height: 40%;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 1px #000000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header{
    padding: 15px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    svg{
      font-size:20px ;
      cursor: pointer;
    }
  }
  footer{
    border-top: 1px solid #eee;;
    padding: 15px;
    display: flex;
    justify-content: flex-end;
  }
`


export const Section = styled.div`
  padding: 20px;
  input{
    padding: 20px 15px;
    width: 88%;
    outline: none;
  }
`
export const Accept = styled.button`
  text-transform: capitalize;
  background-color: #fff;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`

export const Cancel = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`
