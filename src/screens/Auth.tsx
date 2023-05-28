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
import { loginUser, registerUser } from '../services/auth'
import { useNavigate } from 'react-router-dom';

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

export const Auth = ({ register }: { register: boolean}) => {
  const { classes } = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validConfirmPassword, setValidConfirmPassword] = useState(false)
  const navigate = useNavigate()
  // TODO: Make error visible
  const [_, setError] = useState('')

  useEffect (() => {
    setValidEmail(EMAIL_VALIDATE.test(email))
  },[email])

  useEffect(() => {
    if (register) {
      setValidPassword(PASSWORD_VALIDATE.test(password))
      setValidConfirmPassword(password === confirmPassword)
    }
  },[password, confirmPassword])

  useEffect(() => {
    setError('')
  },[email,password,confirmPassword])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if(!validEmail || !validPassword){
      setError('Correo o contraseña no validos')
      return
    }

    try {
      if (register) {
        await registerUser({email, password})
      }
      if (!register) {
        await loginUser({email, password, rememberMe: true})
      }
        setConfirmPassword('')
        setPassword('')
        setEmail('')
    } catch (e) {
    }
      // TODO: Proper handle register error
      setError('Registration Failed')
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
          {register ?
            <PasswordInput label="Confirmar contraseña" placeholder="Tu contraseña" mt="md" size="md" aria-invalid={!validConfirmPassword ? true : false}
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            : null
          }
          <Button className='login' fullWidth mt="xl" size="md" disabled={!validEmail || !validPassword || !validConfirmPassword ? true : false} onClick={handleSubmit}>
            Registrarse
          </Button>
        </form>

        <Text ta="center" mt="md">
          {register ? "Ya tienes una cuenta? " : "No tienes una cuenta? "}
          <Anchor weight={700} 
            onClick={() => {
              if (register) {
                navigate("/login")
              } else {
               navigate("/register")
              }
            }}
          >
            {register ? "Inicia sesión aquí" : "Registrate"}
          </Anchor>
        </Text>
      </Paper>
    </div>
  )
}
