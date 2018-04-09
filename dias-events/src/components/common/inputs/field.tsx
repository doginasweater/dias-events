import * as React from 'react';
import { IReduxProps } from 'types';

export abstract class Field<T> extends React.Component<T & IReduxProps> {
    constructor(props: T & IReduxProps) {
        super(props);
    }
}
