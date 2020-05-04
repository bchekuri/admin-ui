import React from 'react';
import clsx from 'clsx';
import { Drawer,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText } from '@material-ui/core';
import SideNavStyle from './SideNavStyle';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NatureOutlinedIcon from '@material-ui/icons/NatureOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PanoramaHorizontalOutlinedIcon from '@material-ui/icons/PanoramaHorizontalOutlined';



const SideNav  = function (props, ref) {
    const classes = SideNavStyle();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    React.useImperativeHandle(ref, () => ({
        showSideNav(anchor, open) {
            setState({ ...state, [anchor]: open });
        }
    }));

    const menuIcons = function (name) {
        switch (name) {
            case 'Home':
                return <HomeOutlinedIcon/>
            case 'Templates':
                return <NatureOutlinedIcon/>
            case 'Jobs':
                return <WorkOutlineOutlinedIcon/>
            case 'Clusters':
                return <PanoramaHorizontalOutlinedIcon/>
            case 'About':
                return <InfoOutlinedIcon/>
            default:
                return state
        }
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Templates', 'Clusters', 'Jobs'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem}>
                        <ListItemIcon>{menuIcons(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['About'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem}>
                        <ListItemIcon>{menuIcons(text)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {props.anchors.map(anchor => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default React.forwardRef(SideNav);