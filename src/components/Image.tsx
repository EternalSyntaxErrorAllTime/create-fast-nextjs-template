import type { FC } from "react";
import type { ImageProps } from "next/image";

import ImageNext from "next/image";

/**
 * Image — a wrapper around Next.js Image component with default optimization props:
 * - Sets a default blurred placeholder using `blurDataURL`;
 * - Uses lazy loading by default `loading="lazy"`;
 * - Sets `sizes="100%"` by default.
 */
const Image: FC<ImageProps> = (props) => {
  const defaultProps: Partial<ImageProps> = {
    blurDataURL: "/image/blur.webp",
    placeholder: "blur",
    loading: "lazy",
    sizes: "100%",
  };

  return <ImageNext {...defaultProps} {...props} />;
};

export default Image;
