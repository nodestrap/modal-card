// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
compositionOf, mainComposition, 
// styles:
style, imports, 
// rules:
rule, variants, 
//combinators:
children, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, useExcitedState, } from '@nodestrap/basic';
import { 
// styles:
usesResponsiveContainerGridLayout, } from '@nodestrap/container';
import Button from '@nodestrap/button';
import CloseButton from '@nodestrap/close-button';
import { Card, } from '@nodestrap/card';
import { 
// react components:
Popup, } from '@nodestrap/popup';
import { 
// styles:
usesModalElementLayout, usesModalElementStates, usesModalLayout, usesModalVariants, usesModalStates, ModalElement, Modal, } from '@nodestrap/modal';
export const useModalCardVariant = (props) => {
    return {
        class: props.modalCardStyle ? props.modalCardStyle : null,
        style: {
            [cssDecls.horzAlign]: props.horzAlign,
            [cssDecls.vertAlign]: props.vertAlign,
        },
    };
};
// styles:
export const usesModalCardElementLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesModalElementLayout(),
        ]),
        ...style({
            // layouts:
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'nowrap',
            // children:
            ...children('*', {
                // customize:
                ...usesGeneralProps(usesPrefixedProps(cssProps, 'card')), // apply general cssProps starting with card***
            }),
        }),
    });
};
export const usesModalCardElementVariants = () => {
    return style({
        ...variants([
            rule(':not(.scrollable)>&', {
                // sizes:
                flex: [[0, 0, 'auto']],
                boxSizing: 'content-box',
                inlineSize: 'max-content',
                blockSize: 'max-content', // forcing the Card's height follows the Card's items height
            }),
            rule('.scrollable>&', {
                // sizes:
                flex: [[1, 1, 'auto']],
                // children:
                ...children(['&', '*'], {
                    // sizes:
                    boxSizing: 'border-box',
                    inlineSize: 'auto',
                    maxInlineSize: '100%',
                    blockSize: 'auto',
                    maxBlockSize: '100%',
                    overflow: 'hidden', // force the Card to scroll
                }),
            }),
        ]),
    });
};
export const usesModalCardElementStates = () => {
    return style({
        ...imports([
            // states:
            usesModalElementStates(),
        ]),
    });
};
export const usesActionBarLayout = () => {
    return style({
        // layouts:
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        // children:
        ...children('*', {
            // only one child:
            ...rule(':first-child:last-child', {
                marginInlineStart: 'auto',
            }),
        }),
    });
};
export const useModalCardElementSheet = createUseSheet(() => [
    mainComposition(rule('&&', {
        ...imports([
            // layouts:
            usesModalCardElementLayout(),
            // variants:
            usesModalCardElementVariants(),
            // states:
            usesModalCardElementStates(),
        ]),
    })),
    compositionOf('actionBar', imports([
        usesActionBarLayout(),
    ])),
], /*sheetId :*/ 'ifh5e9blw5'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesModalCardLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesModalLayout(),
        ]),
        ...style({
            // layouts:
            // display      : 'grid',             // already defined in `usesResponsiveContainerGridLayout()`. We use a grid for the layout, so we can align the Card both horizontally & vertically
            // child default sizes:
            justifyItems: cssProps.horzAlign,
            alignItems: cssProps.vertAlign,
            // children:
            ...children('*', {
                // layouts:
                gridArea: 'content',
            }),
            //#region psedudo elm for filling the end of horz & vert scroll
            ...children(['::before', '::after'], {
                // layouts:
                content: '""',
                display: 'block',
                // sizes:
                // fills the entire grid area:
                justifySelf: 'stretch',
                alignSelf: 'stretch',
                // appearances:
                visibility: 'hidden',
            }),
            ...children('::before', {
                // layouts:
                gridArea: 'inlineEnd',
            }),
            ...children('::after', {
                // layouts:
                gridArea: 'blockEnd',
            }),
            //#endregion psedudo elm for filling the end of horz & vert scroll
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
        ...imports([
            // layouts:
            usesResponsiveContainerGridLayout(), // applies responsive container functionality using css grid
        ]),
    });
};
export const usesModalCardVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesModalVariants(),
            // layouts:
            sizes(),
        ]),
        ...variants([
            rule(':not(.scrollable)', {
                // scrolls:
                // scroller at ModalCard's layer
                overflow: 'auto', // enable horz & vert scrolling on Modal (backdrop)
            }),
        ]),
    });
};
export const usesModalCardStates = () => {
    return style({
        ...imports([
            // states:
            usesModalStates(),
        ]),
    });
};
export const useModalCardSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesModalCardLayout(),
        // variants:
        usesModalCardVariants(),
        // states:
        usesModalCardStates(),
    ])),
], /*sheetId :*/ 'j3ol5k9hzm'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        // positions:
        horzAlign: 'center',
        vertAlign: 'center',
    };
}, { prefix: 'mdlcrd' });
export function ModalCardElement(props) {
    // styles:
    const sheet = useModalCardElementSheet();
    // states:
    const excitedState = useExcitedState(props);
    // rest props:
    const { 
    // essentials:
    elmRef, // moved to Card
    // accessibilities:
    active, // from accessibilities, moved to Popup
    inheritActive, // from accessibilities, moved to Popup
    tabIndex = -1, // from ModalElement   , moved to Card
    // actions:
    onActiveChange, onExcitedChange, 
    // children:
    header, footer, ...restProps } = props;
    // handlers:
    const handleClose = onActiveChange && ((e) => {
        if (!e.defaultPrevented) {
            onActiveChange(false, 'ui');
            e.preventDefault();
        } // if
    });
    // jsx fn props:
    const headerFn = (() => {
        // default (unset) or string:
        if ((header === undefined) || (typeof header === 'string'))
            return (React.createElement("h5", { 
                // classes:
                className: sheet.actionBar },
                header,
                React.createElement(CloseButton
                // variants:
                , { 
                    // variants:
                    size: props.size, 
                    // actions:
                    onClick: handleClose })));
        // other component:
        return header;
    })();
    const footerFn = (() => {
        // default (unset) or string:
        if ((footer === undefined) || (typeof footer === 'string'))
            return (React.createElement("p", { 
                // classes:
                className: sheet.actionBar },
                footer,
                React.createElement(Button
                // variants:
                , { 
                    // variants:
                    size: props.size, 
                    // actions:
                    onClick: handleClose }, "Close")));
        // other component:
        return footer;
    })();
    // jsx:
    return (React.createElement(Popup, { ...{
            active,
            inheritActive,
        }, 
        // appearances:
        nude: true, 
        // classes:
        classes: [
            sheet.main, // inject ModalCardElement class
        ], stateClasses: [...(props.stateClasses ?? []),
            excitedState.class,
        ], 
        // events:
        onAnimationEnd: (e) => {
            // states:
            excitedState.handleAnimationEnd(e);
        } },
        React.createElement(Card, { ...restProps, 
            // essentials:
            elmRef: elmRef, ...{
                tabIndex,
            }, 
            // children:
            header: headerFn, footer: footerFn })));
}
ModalCardElement.prototype = ModalElement.prototype; // mark as ModalElement compatible
export function ModalCard(props) {
    // styles:
    const sheet = useModalCardSheet();
    // variants:
    const modalCardVariant = useModalCardVariant(props);
    // jsx:
    return (React.createElement(Modal, { ...props, 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            modalCardVariant.class,
        ], 
        // styles:
        style: { ...(props.style ?? {}),
            // variants:
            ...modalCardVariant.style,
        } },
        React.createElement(ModalCardElement, { ...props })));
}
export { ModalCard as default };
