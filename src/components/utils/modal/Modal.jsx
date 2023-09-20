import MuiModal from "@mui/material/Modal";
import styled from "styled-components";

const Modal = ({ children, open, onClose }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent>
        <div className="close_btn">
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
        {children}
      </ModalContent>
    </MuiModal>
  );
};

export default Modal;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 80rem;
  max-height: 100vh;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  overflow-y: auto;

  .close_btn {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0;
    background-color: var(--bg-primary);
    position: sticky;
    top: 0;
    z-index: 100;
    svg {
      cursor: pointer;
      margin: 0 2rem;
    }
  }
`;
