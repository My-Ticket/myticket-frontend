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

export default function AuthImg() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          MyTicket
        </Title>

        <TextInput label="Correo electrónico" placeholder="hola@gmail.com" size="md" />
        <PasswordInput label="Contraseña" placeholder="Tu contraseña" mt="md" size="md" />
        <Checkbox label="Mantener la sesión" mt="xl" size="md" />
        <Button className='login' fullWidth mt="xl" size="md" >
          Login
        </Button>

        <Text ta="center" mt="md">
          No tienes una cuenta?{' '}
          <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
            Registrate aquí
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}