import classNames from 'classnames';
import { IconType } from 'react-icons';

interface IconProps {
  as: IconType;
  className?: string;
}

export default function Icon({ as: As, className }: IconProps) {
  return <As className={classNames('w-10 h-10', className)} />;
}
