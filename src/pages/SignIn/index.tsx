import React from "react";

import Copyright from "../Components/Copyright";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: 'url(https://live.staticflickr.com/65535/48160595672_f9ec4ef38f_o.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SignIn: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              autoComplete="password"
            />
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembre-me"
            />
            <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Sign In
            </Button>
            <Grid>
                <Grid item xs>
                    <Link href="#" variant="body2">Esqueceu sua senha?</Link>
                </Grid>
                <Grid item>
                    <Link href="/signup" variant="body2">{'Não tem uma conta? Cadastre-se!'}</Link>
                </Grid>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
