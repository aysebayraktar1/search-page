import React from "react";
import {
  ModalStyled,
  ModalTitleStyled,
  ModalContentStyled,
  ButtonStyled,
  ApprovalButtonStyled,
  DeclineButtonStyled,
  ModalContent,
  DividerStyled,
} from "./styled";

const Modal = () => {
  return (
    <ModalStyled>
      <ModalContent>
        <ModalTitleStyled>
          Ürünü silmek istediğinize emin misiniz?
        </ModalTitleStyled>
        <DividerStyled />
        <ModalContentStyled>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentiall....
        </ModalContentStyled>
        <ButtonStyled>
          <ApprovalButtonStyled>EVET</ApprovalButtonStyled>
          <DeclineButtonStyled>HAYIR</DeclineButtonStyled>
        </ButtonStyled>
      </ModalContent>
    </ModalStyled>
  );
};

export default Modal;
