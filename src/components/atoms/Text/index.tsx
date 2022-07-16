import styles from "./index.module.scss";
import { ReactNode } from "react";
import classNames from "classnames/bind";

type Props = {
  textAlign?: Align;
  bold?: boolean;
  children: ReactNode;
};

type Align = "left" | "center" | "right";

const cx = classNames.bind(styles);

export default function Text({
  children,
  textAlign = "center",
  bold = false,
}: Props) {
  const classes = cx({
    container: true,
    ["align-left"]: textAlign === "left",
    ["align-center"]: textAlign === "center",
    ["align-right"]: textAlign === "right",
    ["dk-text"]: bold,
  });
  return <div className={classes}>{children}</div>;
}
