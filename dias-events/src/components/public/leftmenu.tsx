import * as React from 'react';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import New from 'material-ui-icons/Add';
import Home from 'material-ui-icons/Home';

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        flex: 1,
        minHeight: '100%'
    }
});

class LeftMenuClass extends React.Component<WithStyles<'root'>, any> {
    constructor(props: WithStyles<'root'>) {
        super(props);
    }

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="Events" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <New />
                        </ListItemIcon>
                        <ListItemText primary="New Event" />
                    </ListItem>
                </List>
            </div>
        );
    }
}

export const LeftMenu = withStyles(styles)<{}>(LeftMenuClass);
