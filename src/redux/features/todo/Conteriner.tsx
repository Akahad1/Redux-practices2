import { ReactNode } from "react";

type TContinerProps = {
  children: ReactNode;
};

const Conteriner = ({ children }: TContinerProps) => {
  return <div className=" h-screen w-full max-w-7xl mx-auto">{children}</div>;
};

export default Conteriner;
