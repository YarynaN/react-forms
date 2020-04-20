import React from 'react'
import {useForm} from 'react-hook-form'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    InputLabel,
    NativeSelect,
    Paper,
    TextField
} from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from "./styles";
import fire from '../../fire';

export default function RegistrationForm() {
    const [loading, setLoading] = React.useState(false);
    const classes = useStyles();
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        setLoading(true);
        fire.database().ref('users').push( data )
            .then(() => {
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

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
                                    control={<Checkbox color='secondary' name='agreementCheck' value='yes' inputRef={register({required: true})}/>}
                                    label='I agree to the terms and conditions'
                                />
                                {!!errors.agreementCheck && <FormHelperText>You need to agree to our terms</FormHelperText>}
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={classes.buttons}>
                        <div className={classes.wrapper}>
                            <Button className={classes.submitButton} variant='contained' color='primary' type='submit' disabled={loading}>
                                {loading && <CircularProgress size={16}/>}
                                Register Your Cat</Button>

                        </div>
                    </Grid>
                </form>
            </Paper>
        </main>
    )
}