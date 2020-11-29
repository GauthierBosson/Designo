import * as React from "react";
import styled from "styled-components";
import NextImage from "next/image";

export type IImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = styled(NextImage)<IImageProps>``;

export default Image;
