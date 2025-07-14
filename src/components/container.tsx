import { PropsWithChildren } from "react";

function Container({ children }: PropsWithChildren) {
  return <div className="container mx-auto px-4">{children}</div>;
}

export default Container;
