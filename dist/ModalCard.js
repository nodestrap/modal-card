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
usesDialogLayout, usesDialogStates, usesBackdropLayout, usesBackdropVariants, usesBackdropStates, Modal, } from '@nodestrap/modal';
export const useModalCardVariant = ({ modalCardStyle, horzAlign, vertAlign }) => {
    return {
        class: modalCardStyle ? modalCardStyle : null,
        style: {
            [cssDecls.horzAlign]: horzAlign,
            [cssDecls.vertAlign]: vertAlign,
        },
    };
};
// styles:
export const usesCardDialogLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesDialogLayout(),
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
export const usesCardDialogVariants = () => {
    return style({
        ...variants([
            rule(':not(.scrollable)>&', {
                // sizes:
                flex: [[0, 0, 'auto']],
                boxSizing: 'content-box',
                inlineSize: 'max-content',
                blockSize: 'max-content', // forcing the <Card>'s height follows the <Card>'s items height
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
                    overflow: 'hidden', // force the <Card> to scroll
                }),
            }),
        ]),
    });
};
export const usesCardDialogStates = () => {
    return style({
        ...imports([
            // states:
            usesDialogStates(),
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
export const useCardDialogSheet = createUseSheet(() => [
    mainComposition(rule('&&', {
        ...imports([
            // layouts:
            usesCardDialogLayout(),
            // variants:
            usesCardDialogVariants(),
            // states:
            usesCardDialogStates(),
        ]),
    })),
    compositionOf('actionBar', imports([
        usesActionBarLayout(),
    ])),
], /*sheetId :*/ 'ifh5e9blw5'); // an unique salt for SSR support, ensures the server-side & client-side have the same generated class names
export const usesCardBackdropLayout = () => {
    return style({
        ...imports([
            // layouts:
            usesBackdropLayout(),
        ]),
        ...style({
            // layouts:
            // display      : 'grid',             // already defined in `usesResponsiveContainerGridLayout()`. We use a grid for the layout, so we can align the <Card> both horizontally & vertically
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
export const usesCardBackdropVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => style({
        // overwrites propName = propName{SizeName}:
        ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
    }));
    return style({
        ...imports([
            // variants:
            usesBackdropVariants(),
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
export const usesCardBackdropStates = () => {
    return style({
        ...imports([
            // states:
            usesBackdropStates(),
        ]),
    });
};
export const useCardBackdropSheet = createUseSheet(() => [
    mainComposition(imports([
        // layouts:
        usesCardBackdropLayout(),
        // variants:
        usesCardBackdropVariants(),
        // states:
        usesCardBackdropStates(),
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
export function CardDialog(props) {
    // styles:
    const sheet = useCardDialogSheet();
    // states:
    const excitedState = useExcitedState(props);
    // rest props:
    const { 
    // essentials:
    elmRef, // moved to <Card>
    // accessibilities:
    isModal, // moved to <Popup>
    isVisible, // moved to <Popup>
    tabIndex = -1, // moved to <Card>
    active, // moved to <Popup>
    inheritActive, // moved to <Popup>
    // actions:
    onActiveChange, // implemented
    onExcitedChange, // not implemented
    // children:
    header, // changed the default
    footer, // changed the default
    ...restProps } = props;
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
    return (React.createElement(Popup, { 
        // semantics:
        semanticTag: props.semanticTag ?? 'dialog', semanticRole: props.semanticRole ?? 'dialog', "aria-modal": isModal, ...{
            open: isVisible,
        }, 
        // accessibilities:
        active: active, inheritActive: inheritActive, 
        // layouts:
        nude: true, 
        // classes:
        classes: [
            sheet.main, // inject CardDialog class
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
export function ModalCard(props) {
    // styles:
    const sheet = useCardBackdropSheet();
    // variants:
    const modalCardVariant = useModalCardVariant(props);
    // rest props:
    const { 
    // components:
    dialog = React.createElement(CardDialog, null), 
    // ModalCardVariant:
    modalCardStyle, horzAlign, vertAlign, 
    // children:
    header, footer, children, ...restBackdropProps } = props;
    // jsx:
    const defaultDialogProps = {
        // ModalCardVariant:
        modalCardStyle,
        horzAlign,
        vertAlign,
        // children:
        header,
        footer,
        children,
    };
    return (React.createElement(Modal, { ...restBackdropProps, 
        // components:
        dialog: React.cloneElement(React.cloneElement(dialog, defaultDialogProps), dialog.props), 
        // classes:
        mainClass: props.mainClass ?? sheet.main, variantClasses: [...(props.variantClasses ?? []),
            modalCardVariant.class,
        ], 
        // styles:
        style: { ...(props.style ?? {}),
            // variants:
            ...modalCardVariant.style,
        } }));
}
export { ModalCard as default };
