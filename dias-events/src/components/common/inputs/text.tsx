import * as React from 'react';
import { connect } from 'react-redux';
import { Field, IReduxProps } from 'types';
import { focus } from 'reducers/formreducer';

interface IInputProps extends Field<string> {
    type: 'text' | 'email' | 'phone';
    name: string;
    placeholder?: string;
}

class BaseInput extends React.Component<IInputProps & IReduxProps, {}> {
    constructor(props: any) {
        super(props);
    }

    public handleFocus = (event: React.FocusEvent<HTMLInputElement>): void => {
        const { dispatch, name } = this.props;

        dispatch(focus(name));
    }

    public render() {
        const { type, name, id, placeholder, initialValue, value } = this.props;

        return (
            <div className={this.props.size}>
                <label htmlFor={id}>{this.props.label}</label>
                <input
                    id={id}
                    type={type}
                    name={id}
                    placeholder={placeholder}
                    value={value || initialValue || ''}
                />
            </div>
        );
    }
}

export const Input = BaseInput;
