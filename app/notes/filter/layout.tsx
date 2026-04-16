import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function FilterLayout({ children }: Props) {
  return <>{children}</>;
}
