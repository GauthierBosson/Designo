import * as React from "react";
import styled from "styled-components";

export type IImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const Image = styled.img<IImageProps>``;

export default Image;
