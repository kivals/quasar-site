import { PropsWithChildren, RefAttributes, SVGProps } from "react";

export type SVGElementAttributes = RefAttributes<SVGSVGElement> &
  Partial<SVGProps<SVGSVGElement>>;

export type PropsWithClassName<P = unknown> = P & { className?: string };

export type PropsWithChildrenAndClassName<P = unknown> =
  PropsWithChildren<P> & {
    className?: string;
  };

export const gameTypes = ["cs2", "dota2"] as const;

export type GameType = (typeof gameTypes)[number];
