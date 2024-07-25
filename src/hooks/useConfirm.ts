const useConfirm = () => {
  /**
   * 입력한 메세지를 띄워주고 확인, 취소 버튼 클릭 시 해당 버튼에 정의한 함수를 동작시키는 함수
   * 
   * @param message : confirm창에 띄울 메시지
   * @param onConfirm : confirm창 내의 '확인' 버튼 클릭 시 동작 함수
   * @param onCancel : confirm창 내의 '취소' 버튼 클릭 시 동작 함수
   */
  const confirmAction = (message: string, onConfirm: () => void, onCancel: () => void): void => {
    if (!onConfirm || typeof onConfirm !== "function") {
      return;
    }
    if (onCancel && typeof onCancel !== "function") {
      return;
    }
    
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return {
    confirmAction,
  }
};

export default useConfirm;