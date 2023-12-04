import classNames from 'classnames';
import { ImageProps, default as NextImage } from 'next/image';

export default function Image({ alt, src, className, priority }: ImageProps) {
  return (
    <NextImage
      alt={alt}
      src={src}
      className={classNames(
        'w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-3xl object-cover',
        className,
      )}
      width={200}
      height={200}
      sizes={`(max-width: 1024px) 50vw, 30vw`}
      priority={priority}
      style={{
        objectPosition: '0 -20px',
      }}
    />
  );
}
