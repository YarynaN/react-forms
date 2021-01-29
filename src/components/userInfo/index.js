import React from 'react'
import {withStyles} from "@material-ui/core/styles/index";
import {
    Grid,
    Paper,
    TextField
} from '@material-ui/core'
import {styles} from "./styles";
import { connect } from 'react-redux';
import { watchPersonData } from '../../services';

const mapStateToProps = (state) => {
    return {
        personData: state.personData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        watchPersonData: (id) => dispatch(watchPersonData(id))
    };
};

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        //todo: replace with current logged in user id
        this.props.watchPersonData('-M6PqZ8sB5BdT2sxDkwS');
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField fullWidth={true} name='userName' readoly="true" value={this.props.personData.userName}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth={true} name='userName' readoly="true"  value={this.props.personData.catName}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth={true} name='userName' readoly="true" value={this.props.personData.age}/>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        )
    }
}

const styledComponent = withStyles(styles)(UserInfo);
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(styledComponent);

export default ConnectedComponent;