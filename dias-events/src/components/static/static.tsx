import * as React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'components/common';

class StaticInternal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Grid.PureG>
                <Grid.PureU1>
                    I'm a header
                </Grid.PureU1>
                <Grid.PureU1>
                    <Grid.PureU14>
                        left menu
                    </Grid.PureU14>
                    <Grid.PureU34>
                        the rest
                    </Grid.PureU34>
                </Grid.PureU1>
            </Grid.PureG>
        );
    }
}

export const Static = connect((state: any) => ({ public: state.pubic }))(StaticInternal);
