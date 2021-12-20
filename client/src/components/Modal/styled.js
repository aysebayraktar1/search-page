import styled from "styled-components";

export const ModalContent = styled.div`
  width: 400px;
  margin: auto;
  background-color: white;
`;
export const ModalStyled = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
  align-items: center;
  justifycontent: center;
`;
export const ModalTitleStyled = styled.div`
  padding: 20px;
  font-weight: bold;
  font-size: 14px;
`;
export const DividerStyled = styled.div`
  border: 1px solid #cdcdcd;
`;
export const ModalContentStyled = styled.div`
  padding: 20px;
  font-size: 12px;
  line-height: 140%;
`;

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;
export const ApprovalButtonStyled = styled.button`
  border-radius: 4px;
  background: #90d659;
  border: none;
  color: white;
  height: 26px;
  min-width: 70px;
`;
export const DeclineButtonStyled = styled(ApprovalButtonStyled)`
  background: #d65959;
  margin-left: 10px;
`;
