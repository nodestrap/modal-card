// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// compositions:
composition, compositionOf, mainComposition, imports, 
// layouts:
layout, children, 
// rules:
variants, rule, } from '@cssfn/cssfn'; // cssfn core
import { 
// hooks:
createUseSheet, } from '@cssfn/react-cssfn'; // cssfn for react
import { createCssConfig, 
// utilities:
usesGeneralProps, usesPrefixedProps, usesSuffixedProps, overwriteProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import { 
// hooks:
usesSizeVariant, usesExcitedState, useExcitedState, } from '@nodestrap/basic';
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
usesModalElementLayout, usesModalLayout, usesModalVariants, usesModalStates, ModalElement, Modal, } from '@nodestrap/modal';
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
    return composition([
        imports([
            // layouts:
            usesModalElementLayout(),
        ]),
        layout({
            // layouts:
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            flexWrap: 'nowrap',
            // children:
            ...children('*', [
                layout({
                    // customize:
                    ...usesGeneralProps(usesPrefixedProps(cssProps, 'card')), // apply general cssProps starting with card***
                }),
            ]),
        }),
    ]);
};
export const usesModalCardElementVariants = () => {
    return composition([
        variants([
            rule(':not(.scrollable)>&', [
                layout({
                    // sizes:
                    flex: [[0, 0, 'auto']],
                    boxSizing: 'content-box',
                    inlineSize: 'max-content',
                    blockSize: 'max-content', // forcing the Card's height follows the Card's items height
                }),
            ]),
            rule('.scrollable>&', [
                layout({
                    // sizes:
                    flex: [[1, 1, 'auto']],
                    boxSizing: 'border-box',
                    inlineSize: 'auto',
                    maxInlineSize: '100%',
                    blockSize: 'auto',
                    maxBlockSize: '100%',
                    overflow: 'hidden',
                    // children:
                    ...children('*', [
                        layout({
                            boxSizing: 'inherit',
                            inlineSize: 'inherit',
                            maxInlineSize: 'inherit',
                            blockSize: 'inherit',
                            maxBlockSize: 'inherit',
                        }),
                    ]),
                }),
            ]),
        ]),
    ]);
};
export const usesModalCardElementStates = () => {
    // dependencies:
    // states:
    const [excited] = usesExcitedState();
    return composition([
        imports([
            // states:
            excited(),
        ]),
    ]);
};
export const usesActionBarLayout = () => {
    return composition([
        layout({
            // layouts:
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
            // children:
            ...children('*', [
                variants([
                    // only one child:
                    rule(':first-child:last-child', [
                        layout({
                            marginInlineStart: 'auto',
                        }),
                    ]),
                ]),
            ]),
        }),
    ]);
};
export const useModalCardElementSheet = createUseSheet(() => [
    mainComposition([
        variants([
            rule('&&', [
                imports([
                    // layouts:
                    usesModalCardElementLayout(),
                    // variants:
                    usesModalCardElementVariants(),
                    // states:
                    usesModalCardElementStates(),
                ]),
            ]),
        ]),
    ]),
    compositionOf('actionBar', [
        imports([
            usesActionBarLayout(),
        ]),
    ]),
]);
export const usesModalCardLayout = () => {
    return composition([
        imports([
            // layouts:
            usesModalLayout(),
            usesResponsiveContainerGridLayout(), // applies responsive container functionality using css grid
        ]),
        layout({
            // layouts:
            // display      : 'grid',             // already defined in `usesResponsiveContainerGridLayout()`. We use a grid for the layout, so we can align the Card both horizontally & vertically
            // child default sizes:
            justifyItems: cssProps.horzAlign,
            alignItems: cssProps.vertAlign,
            // children:
            ...children('*', [
                layout({
                    // layouts:
                    gridArea: 'content',
                }),
            ]),
            //#region psedudo elm for filling the end of horz & vert scroll
            ...children(['::before', '::after'], [
                layout({
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
            ]),
            ...children('::before', [
                layout({
                    // layouts:
                    gridArea: 'inlineEnd',
                }),
            ]),
            ...children('::after', [
                layout({
                    // layouts:
                    gridArea: 'blockEnd',
                }),
            ]),
            //#endregion psedudo elm for filling the end of horz & vert scroll
            // customize:
            ...usesGeneralProps(cssProps), // apply general cssProps
        }),
    ]);
};
export const usesModalCardVariants = () => {
    // dependencies:
    // layouts:
    const [sizes] = usesSizeVariant((sizeName) => composition([
        layout({
            // overwrites propName = propName{SizeName}:
            ...overwriteProps(cssDecls, usesSuffixedProps(cssProps, sizeName)),
        }),
    ]));
    return composition([
        imports([
            // variants:
            usesModalVariants(),
            // layouts:
            sizes(),
        ]),
        variants([
            rule(':not(.scrollable)', [
                layout({
                    // scrolls:
                    // scroller at ModalCard's layer
                    overflow: 'auto', // enable horz & vert scrolling
                }),
            ]),
        ]),
    ]);
};
export const usesModalCardStates = () => {
    return composition([
        imports([
            // states:
            usesModalStates(),
        ]),
    ]);
};
export const useModalCardSheet = createUseSheet(() => [
    mainComposition([
        imports([
            // layouts:
            usesModalCardLayout(),
            // variants:
            usesModalCardVariants(),
            // states:
            usesModalCardStates(),
        ]),
    ]),
]);
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
    onActiveChange, onExcitedChange, // not implemented
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
            return (<h5 
            // classes:
            className={sheet.actionBar}>
                {header}
                <CloseButton 
            // variants:
            size={props.size} 
            // actions:
            onClick={handleClose}/>
            </h5>);
        // other component:
        return header;
    })();
    const footerFn = (() => {
        // default (unset) or string:
        if ((footer === undefined) || (typeof footer === 'string'))
            return (<p 
            // classes:
            className={sheet.actionBar}>
                {footer}
                <Button 
            // variants:
            size={props.size} 
            // actions:
            onClick={handleClose}>
                    Close
                </Button>
            </p>);
        // other component:
        return footer;
    })();
    // jsx:
    return (<Popup 
    // accessibilities:
    {...{
        active,
        inheritActive,
    }} 
    // appearances:
    nude={true} 
    // classes:
    classes={[
            sheet.main, // inject ModalCardElement class
        ]} stateClasses={[...(props.stateClasses ?? []),
            excitedState.class,
        ]} 
    // events:
    onAnimationEnd={(e) => {
            // states:
            excitedState.handleAnimationEnd(e);
        }}>
            <Card 
    // other props:
    {...restProps} 
    // essentials:
    elmRef={elmRef} 
    // accessibilities:
    {...{
        tabIndex,
    }} 
    // children:
    header={headerFn} footer={footerFn}/>
        </Popup>);
}
ModalCardElement.prototype = ModalElement.prototype; // mark as ModalElement compatible
export function ModalCard(props) {
    // styles:
    const sheet = useModalCardSheet();
    // variants:
    const modalCardVariant = useModalCardVariant(props);
    // jsx:
    return (<Modal 
    // other props:
    {...props} 
    // classes:
    mainClass={props.mainClass ?? sheet.main} variantClasses={[...(props.variantClasses ?? []),
            modalCardVariant.class,
        ]} 
    // styles:
    style={{ ...(props.style ?? {}),
            // variants:
            ...modalCardVariant.style,
        }}>
            <ModalCardElement 
    // other props:
    {...props}/>
        </Modal>);
}
export { ModalCard as default };
