import styled from "styled-components";

export const BackgroundLayout = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: not-allowed;
`;

const Modal = () => {
  return (
    <BackgroundLayout>

    </BackgroundLayout>
  );
};

export default Modal;