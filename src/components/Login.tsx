import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from '@mantine/core';
import { useState } from 'react'
import loginService from '../services/login'

const useStyles = createStyles((theme) => ({

  wrapper: {
    minHeight: '100%',
    backgroundSize: '400px',
    backgroundImage:
      'url(https://i.pinimg.com/564x/55/03/08/550308d63d97d5679f184ca9e5b46219.jpg)',
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: '100vh',
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export function Login() {
  const { classes } = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const user = await loginService.login({email, password, rememberMe})
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      setUser(user)
      setPassword("")
      setEmail("")
      setError("")
      //setIsLoggedIn(true)
    
      console.log("Username:", email)
      console.log("Password:", password)
    } catch (e) {
      /*if (!e?.response) {
        setError("No se puede conectar al servidor")
      }else if (e.response.status === 401) {
        setError("Usuario o contraseña incorrectos")
      }else if (e.response.status === 400) {
        setError('El usuario o contraseña no existe')
      }else {
        setError("No se pudo iniciar sesión")
      }*/
      setError('Error')
    }
  }

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          MyTicket
        </Title>
        <form onSubmit={handleSubmit}>
          <TextInput label="Correo electrónico" placeholder="hola@gmail.com" size="md" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PasswordInput label="Contraseña" placeholder="Tu contraseña" mt="md" size="md" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Checkbox label="Mantener la sesión" mt="xl" size="md"checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          <Button className='login' fullWidth mt="xl" size="md" onClick={handleSubmit}>
            Iniciar sesión
          </Button>
        </form>

        <Text ta="center" mt="md">
          No tienes una cuenta?{' '}
          <Anchor<'a'> href="register" weight={700} >
            Registrate aquí
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}