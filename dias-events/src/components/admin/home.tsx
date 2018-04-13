import * as React from 'react';
import { Grid } from 'components/common';

export class Home extends React.Component<any, any> {
    public render() {
        return (
            <Grid.PureG>
                <Grid.PureU1>
                    <a href="/" className="unstyled-link">
                        <h1>SCBWI June 2018 Admin</h1>
                    </a>
                </Grid.PureU1>
                <Grid.PureU1>
                    <Grid.PureU14>
                        <h2>Navigation</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
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
                        <h2>Administration</h2>
                        <a href="/dashboard/report">Download Registrations</a>
                    </Grid.PureU34>
                </Grid.PureU1>
            </Grid.PureG>
        );
    }
}
