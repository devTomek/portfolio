import { ReactNode } from 'react';

export const containerClassName = 'max-w-screen-2xl mx-auto px-3 lg:px-10';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className={containerClassName}>{children}</div>;
}
