import {makeStyles} from "@material-ui/core/styles/index";

export const useStyles = makeStyles((theme) => ({
    layout: {
        width: 500,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paper: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    submitButton: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));