import * as React from 'react';
import { Field } from 'redux-form';

interface IChildrenProps {
    children: any;
    props?: any;
}

const makeComponent = (c: string) => ({ children, props }: IChildrenProps) => (
    <div className={c} {...props}>
        {children}
    </div>
);

export const PureG = makeComponent('pure-g');
export const PureU1 = makeComponent('pure-u-1');
export const PureU12 = makeComponent('pure-u-1-2');
export const PureU13 = makeComponent('pure-u-1-3');
export const PureU14 = makeComponent('pure-u-1-4');
export const PureU23 = makeComponent('pure-u-2-3');
export const PureU34 = makeComponent('pure-u-3-4');

type ControlGroupProps = {
    htmlFor: string;
    type?: string;
    label: string;
};

export const PureControlGroup = ({ htmlFor, type = 'text', label }: ControlGroupProps) => (
    <div className="pure-control-group">
        <label htmlFor={htmlFor}>{label}</label>
        <Field name={htmlFor} component="input" type={type} />
    </div>
);

type PureRadioItem = {
    label: string;
    value: string;
};

type PureRadioGroup = {
    groupName: string;
    groupLabel?: string;
    values: PureRadioItem[];
    newLine?: boolean;
};

export const PureRadioGroup = ({ groupName, groupLabel, values, newLine = true }: PureRadioGroup) => {
    const buttons = values.map((item, index) => (
        <PureU1 key={index}>
            <label>
                <Field name={groupName} component="input" type="radio" value={item.value} /> {item.label}
            </label>
        </PureU1>
    ));

    return (
        <>
            <div>{groupLabel}</div>
            {buttons}
        </>
    );
};

type PureControlYesNo = {
    htmlFor: string;
    label: string;
};

export const PureControlYesNo = ({ htmlFor, label }: PureControlYesNo) => (
    <div className="pure-control-group">
        <div>{label}</div>
        <PureU12>
            <PureU12>
                <label>
                    <Field name={htmlFor} component="input" type="radio" value="yes" /> Yes
                </label>
            </PureU12>
            <PureU12>
                <label>
                    <Field name={htmlFor} component="input" type="radio" value="no" /> No
                </label>
            </PureU12>
        </PureU12>
    </div>
);
