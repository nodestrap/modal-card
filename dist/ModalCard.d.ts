/// <reference types="react" />
import type { Prop } from '@cssfn/css-types';
import { TogglerExcitedProps } from '@nodestrap/basic';
import { OrientationName, OrientationVariant, CardProps } from '@nodestrap/card';
import { ModalStyle, ModalVariant, ModalCloseType, ModalElementProps, ModalProps } from '@nodestrap/modal';
export declare type ModalCardStyle = 'scrollable';
export interface ModalCardVariant {
    modalCardStyle?: ModalCardStyle;
    horzAlign?: Prop.JustifyItems;
    vertAlign?: Prop.AlignItems;
}
export declare const useModalCardVariant: (props: ModalCardVariant) => {
    class: "scrollable" | null;
    style: {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {}) | undefined;
    };
};
export declare const usesModalCardElementLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesModalCardElementVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesModalCardElementStates: () => import("@cssfn/cssfn").Rule;
export declare const usesActionBarLayout: () => import("@cssfn/cssfn").Rule;
export declare const useModalCardElementSheet: import("@cssfn/types").Factory<import("jss").Classes<"main" | "actionBar">>;
export declare const usesModalCardLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesModalCardVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesModalCardStates: () => import("@cssfn/cssfn").Rule;
export declare const useModalCardSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
export declare const cssProps: import("@cssfn/css-config").Refs<{
    horzAlign: string;
    vertAlign: string;
}>, cssDecls: import("@cssfn/css-config").Decls<{
    horzAlign: string;
    vertAlign: string;
}>, cssVals: import("@cssfn/css-config").Vals<{
    horzAlign: string;
    vertAlign: string;
}>, cssConfig: import("@cssfn/css-config").CssConfigSettings;
export declare type ModalCardCloseType = 'ui' | ModalCloseType;
export interface ModalCardElementProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType> extends ModalElementProps<TElement, TCloseType>, CardProps<TElement>, TogglerExcitedProps, ModalCardVariant {
}
export declare function ModalCardElement<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType>(props: ModalCardElementProps<TElement, TCloseType>): JSX.Element;
export declare namespace ModalCardElement {
    var prototype: any;
}
export interface ModalCardProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType> extends ModalProps<TElement, TCloseType>, ModalCardElementProps<TElement, TCloseType> {
}
export declare function ModalCard<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType>(props: ModalCardProps<TElement, TCloseType>): JSX.Element;
export { ModalCard as default };
export type { OrientationName, OrientationVariant };
export type { ModalStyle, ModalVariant };
