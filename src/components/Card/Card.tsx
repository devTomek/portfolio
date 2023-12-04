import classNames from 'classnames';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        'border border-black rounded-3xl p-6 flex flex-col items-center',
        className,
      )}
    >
      {children}
    </div>
  );
}
