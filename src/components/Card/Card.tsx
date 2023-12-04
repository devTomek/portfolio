import classNames from 'classnames';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  resetFlex?: boolean;
}

export default function Card({
  children,
  className,
  resetFlex = false,
}: CardProps) {
  return (
    <div
      className={classNames(
        'border border-black rounded-3xl p-6 items-center min-w-[230px]',
        !resetFlex && 'flex flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
}
