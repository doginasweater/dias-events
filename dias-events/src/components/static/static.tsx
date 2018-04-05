import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'components/common';
import { ScbwiForm } from './form';
import * as braintree from 'braintree-web';
import { getToken } from './staticredux';

declare const paypal: any;

interface IStaticState {
    paypalenv: string;
    braintreetoken: string;
}

interface ITokenResponse {
    env: string;
    token: string;
}

class StaticInternal extends React.Component<any, IStaticState> {
    constructor(props: any) {
        super(props);
    }

    public handleSubmit = (values: any) => {
        console.log('values', values);
    }

    public componentDidMount() {
        const { dispatch } = this.props;

        dispatch(getToken());
    }

    public render() {
        return (
            <Grid.PureG>
                <Grid.PureU1>
                    <a href="/" className="unstyled-link">
                        <h1>SCBWI June 2018</h1>
                    </a>
                </Grid.PureU1>
                <Grid.PureU1>
                    <Grid.PureU14>
                        <h2>Navigation</h2>
                        <ul>
                            <li>
                                <a href="https://www.scbwi.org/" target="_blank">
                                    SCBWI
                                </a>
                            </li>
                            <li>
                                <a href="https://florida.scbwi.org/" target="_blank">
                                    Florida SCBWI
                                </a>
                            </li>
                        </ul>
                    </Grid.PureU14>
                    <Grid.PureU34>
                        <h2>Register</h2>
                        <ScbwiForm onSubmit={this.handleSubmit} />
                    </Grid.PureU34>
                </Grid.PureU1>
            </Grid.PureG>
        );
    }
}

export const Static = connect((state: any) => ({ static: state.staticReducer }))(StaticInternal);
