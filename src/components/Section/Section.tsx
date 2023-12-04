import classNames from 'classnames';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={classNames(
        'flex flex-col lg:flex-row items-center justify-center my-24 lg:my-48',
        className,
      )}
    >
      {children}
    </section>
  );
}
