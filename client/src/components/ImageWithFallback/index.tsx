/* eslint-disable jsx-a11y/alt-text */
import { Image, ImageProps } from 'antd';
import { CSSProperties } from 'react';

// strongly recommended: fallbackSrc to be local image and not a url

interface ImageWithFallbackProps extends ImageProps {
	src: string;
	fallbackSrc: string;
	styles?: CSSProperties;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, preview, styles, ...props }) => {
	return (
		<Image
			src={src}
			preview={preview}
			placeholder={
				<Image src={fallbackSrc} style={{ ...styles, filter: 'blur(2px)' }} preview={false} {...props} />
			}
			fallback={fallbackSrc}
			style={{ ...styles }}
			{...props}
		/>
	);
};

export default ImageWithFallback;
