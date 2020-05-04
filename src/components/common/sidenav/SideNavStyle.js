import { makeStyles } from '@material-ui/core/styles';

const SideNavStyle = makeStyles((theme) => ({
    list: {
        width: 275,
    },
    fullList: {
        width: 'auto',
    },
    listItem: {
        '&:hover': {
            color: theme.palette.primary.main,
            '& path': {
                color: theme.palette.primary.main
            },
        },
    }
}));


export default SideNavStyle;