import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Button from 'material-ui/Button';

export const Routes =
    <div className="main pure-g">
        <div className="pure-u-1">
            <div>header</div>
        </div>

        <div className="pure-u-1">
            routes collection
            <Button variant="raised" color="primary">
                Hello!
            </Button>
        </div>

        <footer className="pure-u-1">
            <div className="small pull-right">
                &copy; 2018 - <a target="_blank" href="https://github.com/myopicmage/dias-events">a dog in a sweater</a>
            </div>
        </footer>
    </div>;
