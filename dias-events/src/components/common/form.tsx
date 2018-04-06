import * as React from 'react';
import { connect } from 'react-redux';

class FormInternal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <form />
        );
    }
}

export const Form = FormInternal;
