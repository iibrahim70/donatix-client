export interface IBlurredImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean | undefined;
  priority?: boolean | undefined;
  className?: string | undefined;
}
