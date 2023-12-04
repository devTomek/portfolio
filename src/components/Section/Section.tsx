import classNames from 'classnames';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={classNames(
        'flex flex-col items-center justify-center my-24 lg:my-60',
        className,
      )}
    >
      {children}
    </section>
  );
}
