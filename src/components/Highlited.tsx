import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

const Highlited = ({ children }: Props) => {
  return <span className="text-app-color">{children}</span>;
};

export default Highlited;
