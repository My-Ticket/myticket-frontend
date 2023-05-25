import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from '@mantine/core'

import {useState, useEffect} from 'react'
import registerService from '../services/register'

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

const EMAIL_VALIDATE = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
const PASSWORD_VALIDATE = /^[a-zA-Z0-9áéíóúñÁÉÍÓÚÑ]{8,24}$/

export const Register = () => {
  const { classes } = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validMatchPassword, setValidMatchPassword] = useState(false)
  const [error, setError] = useState('')
  const [isRegistred, setIsRegistred] = useState(false)

  useEffect (() => {
    setValidEmail(EMAIL_VALIDATE.test(email))
  },[email])

  useEffect(() => {
    setValidPassword(PASSWORD_VALIDATE.test(password))
    setValidMatchPassword(password === matchPassword)
  },[password, matchPassword])

  useEffect(() => {
    setError('')
  },[email,password,matchPassword])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!validEmail || !validPassword){
      setError('Correo o contraseña no validos')
      return
    }

    try {
      const register = await registerService.register({email, password})
      setIsRegistred(true)
      setEmail('')
      setPassword('')
      setMatchPassword('')
      console.log(register)
    } catch (e) {
      /*if (!e?.response) {
        setError('No Server Response');
      } else if (err.response?.status === 409) {
        setError('Username Taken');
      } else {
        setError('Registration Failed')
      }*/
      setError('Registration Failed')
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
          <PasswordInput label="Confirmar contraseña" placeholder="Tu contraseña" mt="md" size="md" aria-invalid={!validMatchPassword ? true : false}
            value={matchPassword} onChange={(e) => setMatchPassword(e.target.value)} />
          <Button className='login' fullWidth mt="xl" size="md" disabled={!validEmail || !validPassword || !validMatchPassword ? true : false} onClick={handleSubmit}>
            Registrarse
          </Button>
        </form>

        <Text ta="center" mt="md">
          Ya tienes una cuenta?{' '}
          <Anchor<'a'> href="login" weight={700} >
            Inicia sesión aquí
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}
