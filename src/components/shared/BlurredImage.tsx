import { IBlurredImage } from "@/types";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

const BlurredImage = async ({
  src,
  alt,
  width = 500,
  height = 500,
  fill = false,
  className,
}: IBlurredImage) => {
  let base64 = "";

  try {
    const buffer = await fetch(src)?.then(async (res) => {
      return Buffer?.from(await res?.arrayBuffer());
    });

    const result = await getPlaiceholder(buffer);
    base64 = result?.base64;
  } catch (error) {
    console.error("Faile to generate blurDataURL", error);
  }

  return (
    <Image
      src={src}
      alt={alt}
      placeholder={base64 ? "blur" : "empty"}
      blurDataURL={base64}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
    />
  );
};

export default BlurredImage;
