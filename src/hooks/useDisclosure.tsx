import { useCallback, useState } from "react";

function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, handleClose, handleOpen };
}

export default useDisclosure;
