import { useState } from 'react';
import { createStyles, Container, Text, ScrollArea, rem, TextInput, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  container: {
  }


}));

interface ConfigurationSectionProps {
  username: string;
  onUsernameChange: (newUsername: string) => void;
  onPasswordChange: (newPassword: string) => void;
}

export function Settings () {
    const { classes } = useStyles()
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewUsername(event.target.value);
    };
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewPassword(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // onUsernameChange(newUsername);
      // onPasswordChange(newPassword);
      // setNewUsername('');
      // setNewPassword('');
    };
  
    return (
      <div style={{margin: '5em'}}>
        <Container className={classes.container}>
          <h1>Configuración del perfil</h1>
          <Text>Cambiar los datos de identificación de tu cuenta</Text>
          <form onSubmit={handleSubmit} >
            <div>
              <TextInput
                label="Usuario"
                placeholder='Andres'
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <TextInput
              label="Contraseña"
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
            <Button color='yellow' mt={20} >
              Guardar cambios
            </Button>
          </form>
        </Container>
      </div>
    );
  }
  