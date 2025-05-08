import { IBlurredImage } from "@/types";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

const BlurredImage = async ({
  src,
  alt = "Image",
  priority,
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
      className={className}
      priority={priority}
      fill
    />
  );
};

export default BlurredImage;
