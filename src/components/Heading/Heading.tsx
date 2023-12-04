import classNames from 'classnames';
import { ElementType, ReactNode } from 'react';

interface HeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  resetFontSize?: boolean;
}

export default function Heading({
  as: As = 'h1',
  children,
  className,
}: HeadingProps) {
  return (
    <As
      className={classNames(
        'font-bold',
        (As === 'h1' || As === 'h2') && 'text-3xl lg:text-4xl',
        className,
      )}
    >
      {children}
    </As>
  );
}
