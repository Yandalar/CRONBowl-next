import { ReactNode } from "react";
import { Header } from "./Header";
import classes from "./Layout.module.css";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div className={classes.background} />
      <Header />
      {children}
    </>
  );
};
