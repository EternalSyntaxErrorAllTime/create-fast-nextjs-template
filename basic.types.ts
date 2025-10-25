import type { FC, ReactNode } from "react";

/** TypeLayout — React functional component type for layout components. */
export type TypeLayout = FC<{ children: Readonly<ReactNode> }>;

/** LayoutPropsServer — type definition for Next.js server layout components. */
export type LayoutPropsServer<P = object> = {
  children: ReactNode;
  params: Promise<P>;
};
