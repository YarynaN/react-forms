import React from 'react'
import {useForm} from 'react-hook-form'
import {TextField, Button, Paper, NativeSelect, Grid, FormControlLabel, Checkbox, InputLabel, FormControl, FormHelperText} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default function App() {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const classes = useStyles();

    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField name='userName' error={!!errors.userName} helperText={!!errors.userName && 'Name is required'}
                                       placeholder='enter your name' inputRef={register({required: true})}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name='age' error={!!errors.age} helperText={!!errors.age && 'You must be at least 16yo'}
                                       placeholder='age' inputRef={register({
                                validate: age => age > 16
                            })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField name='catName'
                                       error={!!errors.catName}
                                       helperText={!!errors.catName && 'Cat name should be at least 4 chars'}
                                       placeholder='cat`s name'
                                       inputRef={register({
                                           minLength: 4,
                                           required: true
                                       })}/>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel shrink id="cat breed">
                                Your cat's breed
                            </InputLabel>
                            <NativeSelect>
                                <option value='Persian'>Persian</option>
                                <option value='Siamese'>Siamese</option>
                                <option value='Sphynx'>Sphynx</option>
                                <option value='Maine coon'>Maine coon</option>
                                <option value='Dunno'>Dunno</option>
                            </NativeSelect>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl error={!!errors.agreementCheck}>
                                <FormControlLabel
                                    control={<Checkbox error color='secondary' name='agreementCheck' value='yes' inputRef={register({required: true})}/>}
                                    label='I agree to the terms and conditions'
                                />
                                {!!errors.agreementCheck && <FormHelperText>You need to agree to our terms</FormHelperText>}
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.buttons}>
                        <Button className={classes.submitButton} variant='contained' color='primary' type='submit'>Register
                            Your Cat</Button>
                    </Grid>
                </form>
            </Paper>
        </main>
    )
}