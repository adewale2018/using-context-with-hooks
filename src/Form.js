import React, { useContext } from 'react';
import { 
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography, 
  MenuItem, 
  Select 
} from "@material-ui/core";
import LockoutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";
import  styles  from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    signIn: "Sign In",
    email: "Email Address",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    signIn: "Se Connecter",
    email: "Adresse Électronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    signIn: "Registrarse",
    email: "Correo Electrónico",
    password: "Contraseña",
    remember: "Recuérdame"
  }
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { signIn, email, password, remember } = words[language];
  const { classes } = props;
  return(
    <main className={classes.main}>
    <Paper className={classes.paper}>
     <Avatar className={classes.avatar}>
       <LockoutlinedIcon/>
     </Avatar>
     <Typography variant="h5">Sign In</Typography>
     <Select value={language} onChange={changeLanguage}>
       <MenuItem value="english">English</MenuItem>
       <MenuItem value="french">French</MenuItem>
       <MenuItem value="spanish">Spanish</MenuItem>
     </Select>
     <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
         <InputLabel htmlFor="email">{email}</InputLabel>
         <Input id="email" name="email" autoFocus/>
        </FormControl>
        <FormControl margin="normal" required fullWidth>
         <InputLabel htmlFor="password">{password}</InputLabel>
         <Input id="password" name="password" autoFocus/>
        </FormControl>
        <FormControlLabel 
          control={<Checkbox color="primary"/>} 
          label={remember}
          />
        <Button 
          variant="contained" 
          type="submit" 
          color="primary" 
          fullWidth 
          className={classes.submit}
        >{signIn}</Button>
     </form>
    </Paper>
  </main>
  );
}

export default withStyles(styles)(Form);
