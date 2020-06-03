import { useState } from 'react';

type Modal = {
  hideModal: () => void;
  isModalVisible: boolean;
  showModal: () => void;
};

export function useModal(): Modal {
  const [isVisible, setIsVisible] = useState(false);
  return {
    hideModal: () => setIsVisible(false),
    isModalVisible: isVisible,
    showModal: () => setIsVisible(true),
  };
}
