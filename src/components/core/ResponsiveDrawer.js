import {useTheme} from "@material-ui/core";
import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {ListItemLink} from "./ListItemLink";
import {Dashboard as DashboardIcon, Home, Info} from "@material-ui/icons";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import {useStyles} from "./styles";


export function ResponsiveDrawer(props) {
    const {container, navigation} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {navigation.map((i, index) => <ListItemLink to={i.to} key={i.name+index} primary={i.name} icon={i.icon}/>)}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Awesome Enterprising App for Cats only
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    container: PropTypes.any,
    navigation: PropTypes.array,
};