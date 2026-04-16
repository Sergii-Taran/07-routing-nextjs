import { ReactNode } from 'react';
import css from './layout.module.css';

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode; // 👈 ДОДАЄМО
}

export default function NotesLayout({ children, sidebar, modal }: Props) {
  return (
    <div className={css.wrapper}>
      {/* Sidebar */}
      <aside className={css.sidebar}>{sidebar}</aside>
      {/* Main content */}
      <main className={css.content}>{children}</main>
      {/* Modal slot */}
      {modal} {/* 👈 ОСЬ ТУТ МАГІЯ */}
    </div>
  );
}
