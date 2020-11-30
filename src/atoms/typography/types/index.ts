import * as React from "react";

export interface ITypoProps {
  color?: string;
  m?: string;
  mt?: string;
  mr?: string;
  ml?: string;
  mb?: string;
}

export interface IHeadingProps
  extends ITypoProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {}

export interface ITextProps
  extends ITypoProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {}
