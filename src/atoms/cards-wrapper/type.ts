import * as React from "react";

export interface ICardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * for testing purpose, adds border
   */
  test?: boolean;
  bg?: string;
}
