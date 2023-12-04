import classNames from 'classnames';
import { ElementType, ReactNode } from 'react';

interface HeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export default function Heading({
  as: As = 'h1',
  children,
  className,
}: HeadingProps) {
  return (
    <As className={classNames('text-3xl lg:text-4xl font-bold', className)}>
      {children}
    </As>
  );
}
