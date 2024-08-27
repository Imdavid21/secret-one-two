import type { FC, ImgHTMLAttributes } from "react";

export type HumeLogoProps = ImgHTMLAttributes<HTMLImageElement>;

export default function HumeLogo(props: HumeLogoProps) {
  return (
    <img
      src="https://iili.io/dhQqfRe.th.png"
      alt="Logo"
      width="1060"
      height="250"
      {...props}
    />
  );
}

