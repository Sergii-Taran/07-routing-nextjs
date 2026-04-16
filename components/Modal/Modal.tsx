// 'use client';

// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';

// import css from './Modal.module.css';

// interface ModalProps {
//   children: React.ReactNode;
//   onClose: () => void;
// }

// export default function Modal({ children, onClose }: ModalProps) {
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === 'Escape') onClose();
//     };

//     window.addEventListener('keydown', handleEsc);

//     document.body.style.overflow = 'hidden';

//     return () => {
//       window.removeEventListener('keydown', handleEsc);

//       document.body.style.overflow = '';
//     };
//   }, [onClose]);

//   return createPortal(
//     <div className={css.backdrop} onClick={onClose}>
//       <div className={css.modal} onClick={(e) => e.stopPropagation()}>
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// }

'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import css from './Modal.module.css';

interface Props {
  children: ReactNode;
  onClose?: () => void; // 👈 нове
}

export default function Modal({ children, onClose }: Props) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose(); // для create modal
    } else {
      router.back(); // для intercepting modal
    }
  };

  // 🔒 scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // ⌨️ ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 🖱 backdrop
  const handleBackdropClick = () => {
    handleClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal} onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
}
