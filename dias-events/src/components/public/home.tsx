import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { Header } from './header';
import { LeftMenu } from './leftmenu';

export class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="grid-wrapper">
                <header className="header">
                    <Header />
                </header>
                <div className="left-menu">
                    <LeftMenu />
                </div>
                <div className="main-content flex">
                    <div className="flex-item">
                        <Paper style={{ padding: '10px' }} elevation={4}>
                            <Typography variant="headline" component="h3">
                                This is a sheet of paper.
                            </Typography>
                            <Typography component="p">
                                Paper can be used to build surface or other elements for your application.
                            </Typography>
                        </Paper>
                    </div>
                    <footer className="footer">
                        &copy; 2018 - <a href="https://github.com/myopicmage/dias-events" target="_blank">a dog in a sweater</a>
                    </footer>
                </div>
            </div>
        );
    }
}
