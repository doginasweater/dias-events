import * as React from 'react';

interface IChildrenProps {
    children: any;
    props?: any;
}

const makeComponent = (c: string) => ({ children, props }: IChildrenProps) => <div className={c} {...props}>{children}</div>;

export const PureG = makeComponent('pure-g');
export const PureU1 = makeComponent('pure-u-1');
export const PureU12 = makeComponent('pure-u-1-2');
export const PureU13 = makeComponent('pure-u-1-3');
export const PureU14 = makeComponent('pure-u-1-4');
export const PureU23 = makeComponent('pure-u-2-3');
export const PureU34 = makeComponent('pure-u-3-4');
