import { IBlurredImage } from "@/types";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const BlurredImage = async ({
  src,
  alt = "Image",
  width = 500,
  height = 500,
  fill = false,
  priority = false,
  className,
}: IBlurredImage) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      className={className}
    />
  );
};

export default BlurredImage;
