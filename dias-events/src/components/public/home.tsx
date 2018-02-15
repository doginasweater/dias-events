import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="pure-u-1">
                <div className="pure-u-1">
                    <header>i'm the header</header>
                </div>
                <div className="pure-u-1">
                    <main>
                        <div className="pure-u-1-4">i'm the left side</div>
                        <div className="pure-u-3-4">i'm the right side</div>
                    </main>
                </div>
                <div className="pure-u-1">
                    <footer>i'm the footer</footer>
                </div>
            </div>
        );
    }
}
