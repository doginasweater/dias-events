import * as React from 'react';
import { connect } from 'react-redux';

interface ITextProps {
    type: string;
    name: string;
    value?: string;
    placeholder?: string;
    required?: boolean;
}

class TextInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <input type="text" name={this.props.name} placeholder={this.props.placeholder} />
        );
    }
}

export const Text = TextInput;
