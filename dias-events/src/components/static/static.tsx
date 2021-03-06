import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'components/common';
import { ScbwiForm } from './form';
import { IRegistrationForm, getToken, submitForm } from './staticredux';

declare const paypal: any;

class StaticInternal extends React.Component<any, {}> {
    constructor(props: any) {
        super(props);
    }

    public handleSubmit = (values: IRegistrationForm) => {
        const { dispatch } = this.props;

        dispatch(submitForm(values));
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
                        <h1>SCBWI September Bootcamps</h1>
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
                        <p>
                            All Boot Camps on September 29 from 10am - 4pm.
                        </p>
                        <ScbwiForm onSubmit={this.handleSubmit} />
                    </Grid.PureU34>
                </Grid.PureU1>
            </Grid.PureG>
        );
    }
}

export const Static = connect(
    (state: any) => ({ static: state.staticReducer })
)(StaticInternal);
