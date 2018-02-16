import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="grid-wrapper">
                <header className="header">i am a header</header>
                <div className="left-menu">
                    <ul>
                        <li>item one</li>
                        <li>item two</li>
                    </ul>
                </div>
                <div className="main-content flex">
                    <div className="flex-item">
                        i am content
                    </div>
                    <footer className="footer">&copy; 2018 - a dog in a sweater</footer>
                </div>
            </div>
        );
    }
}
