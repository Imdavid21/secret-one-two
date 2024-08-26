import type { FC, ImgHTMLAttributes } from "react";

export type HumeLogoProps = ImgHTMLAttributes<HTMLImageElement>;

export default function HumeLogo(props: HumeLogoProps) {
  return (
    <img
      src="https://as2.ftcdn.net/v2/jpg/04/85/76/47/1000_F_485764777_m7Mz1HJDEFVHfIwIZ4dBtNzbOc2Kuewq.jpg"
      alt="Hume Logo"
      width="106"
      height="25"
      {...props}
    />
  );
}
