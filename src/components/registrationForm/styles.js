import {makeStyles} from "@material-ui/core/styles/index";
import { green } from '@material-ui/core/colors';

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
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
}));