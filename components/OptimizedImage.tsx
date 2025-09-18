import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  layout?: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width = 640,
  height = 480,
  className = '',
  layout = 'responsive',
  priority = false
}) => {
  // 处理相对路径和绝对路径
  const imageSrc = src.startsWith('http') ? src : `/game/${src}`;
  
  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        priority={priority}
        quality={85}
        loading={priority ? 'eager' : 'lazy'}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
      />
    </div>
  );
};

export default OptimizedImage;