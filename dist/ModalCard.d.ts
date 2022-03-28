import { default as React } from 'react';
import type { Prop } from '@cssfn/css-types';
import type { ElementProps } from '@nodestrap/element';
import { OrientationName, OrientationVariant, CardProps } from '@nodestrap/card';
import { BackdropStyle, BackdropVariant, ModalCloseType, DialogProps, ModalProps } from '@nodestrap/modal';
export declare type ModalCardStyle = 'scrollable';
export interface ModalCardVariant {
    modalCardStyle?: ModalCardStyle;
    horzAlign?: Prop.JustifyItems;
    vertAlign?: Prop.AlignItems;
}
export declare const useModalCardVariant: ({ modalCardStyle, horzAlign, vertAlign }: ModalCardVariant) => {
    class: "scrollable" | null;
    style: {
        [x: string]: "-moz-initial" | "inherit" | "initial" | "revert" | "unset" | "center" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "left" | "legacy" | "normal" | "right" | "stretch" | (string & {}) | undefined;
    };
};
export declare const usesCardDialogLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardDialogVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesCardDialogStates: () => import("@cssfn/cssfn").Rule;
export declare const usesActionBarLayout: () => import("@cssfn/cssfn").Rule;
export declare const useCardDialogSheet: import("@cssfn/types").Factory<import("jss").Classes<"main" | "actionBar">>;
export declare const usesCardBackdropLayout: () => import("@cssfn/cssfn").Rule;
export declare const usesCardBackdropVariants: () => import("@cssfn/cssfn").Rule;
export declare const usesCardBackdropStates: () => import("@cssfn/cssfn").Rule;
export declare const useCardBackdropSheet: import("@cssfn/types").Factory<import("jss").Classes<"main">>;
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
export interface CardDialogProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType> extends DialogProps<TElement, TCloseType>, CardProps<TElement>, ModalCardVariant {
    card?: React.ReactComponentElement<any, ElementProps>;
}
export declare function CardDialog<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType>(props: CardDialogProps<TElement, TCloseType>): JSX.Element;
export interface ModalCardProps<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType> extends ModalProps<TElement, TCloseType>, CardDialogProps<TElement, TCloseType> {
}
export declare function ModalCard<TElement extends HTMLElement = HTMLElement, TCloseType = ModalCardCloseType>(props: ModalCardProps<TElement, TCloseType>): JSX.Element;
export { ModalCard as default };
export type { OrientationName, OrientationVariant };
export type { BackdropStyle, BackdropVariant };
