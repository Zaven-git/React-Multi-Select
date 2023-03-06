import * as S from './Modal.styles'
import {useEffect, useRef, useState} from "react";
import {FiXCircle} from "react-icons/fi";
import PropTypes from 'prop-types';

function Modal({children, heading, isOpen, handleAccept}) {
  const modalContainer = useRef(null)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen, heading])

  function closeModal() {
    setOpen(false)
  }

  function handleClickOutside(event) {
    if (modalContainer.current && !modalContainer.current.contains(event.target)) {
      closeModal()
    }
  }

  function handleOk() {
    handleAccept()
  }

  window.addEventListener('mousedown', handleClickOutside)

  return (
    <S.ModalContainer display={open ? 'flex' : 'none'}>
      <S.ModalBody ref={modalContainer}>
        <header>{heading} <FiXCircle onClick={closeModal}/></header>
        <S.Section>
          {children}
        </S.Section>
        <footer>
          <S.Accept onClick={handleOk}>{heading}</S.Accept>
          <S.Cancel onClick={closeModal}>Cancel</S.Cancel>
        </footer>
      </S.ModalBody>
    </S.ModalContainer>
  );
}

Modal.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  isOpen: PropTypes.bool,
  handleAccept: PropTypes.func,
}
export default Modal