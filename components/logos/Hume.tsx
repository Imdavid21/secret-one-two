import type { FC, ImgHTMLAttributes } from "react";

export type HumeLogoProps = ImgHTMLAttributes<HTMLImageElement>;

export default function HumeLogo(props: HumeLogoProps) {
  return (
    <img
      src="https://freeimage.host/i/dhQqfRe"
      alt="Logo"
      width="106"
      height="25"
      {...props}
    />
  );
}

