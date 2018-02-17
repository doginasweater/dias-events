import * as React from 'react';
import { withStyles, WithStyles, Theme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = (theme: Theme) => ({
    root: {
        width: '100%'
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbar: {
        minHeight: '8vh'
    }
});

type HeaderStyles = WithStyles<'root' | 'flex' | 'menuButton' | 'toolbar'>;

class HeaderClass extends React.Component<HeaderStyles, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Admin
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export const Header = withStyles(styles, { withTheme: true })<{}>(HeaderClass);
