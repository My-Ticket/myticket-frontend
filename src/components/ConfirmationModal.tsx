import { Modal, Paper, Text, Button, ThemeIcon } from '@mantine/core';
import { IconCheck, IconMail} from '@tabler/icons-react';

export const ConfirmationModal: React.FC<{ 
  isOpen: boolean,
  confirmed: boolean,
  onClose: () => void,
  onConfirm: () => void,
  details: {titulo: string, boletos: number, total: number }
 }> = ({
  isOpen, 
  confirmed,
  onClose,
  onConfirm,
  details
}) => {

  return (
    !confirmed 
    ? 
    (<Modal opened={isOpen} onClose={onConfirm} size="md">
      <Paper p="lg" shadow="md">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <ThemeIcon size='xxl' radius='xl' variant='outline' color='gray' >
            <IconMail size={100} />
          </ThemeIcon>
        </div>
        <Text size="xl" align='center' color='yellow'>¡CONFIRMACION DE RESERVA ENVIADA!</Text> <br/>
        <Text >
          Se ha enviado un correo a CORREO USUARIO.
        </Text>
        <Text >
          Por favor, revise su bandeja de entrada y siga 
          las instrucciones para completar la reserva.
        </Text>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={onConfirm} color='yellow'>Aceptar</Button>
        </div>
      </Paper>
    </Modal>
    )
    :
    (<Modal opened={isOpen} onClose={onClose} size="md">
      <Paper p="lg" shadow="md">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <ThemeIcon size='xxl' radius='xl' variant='outline' color='lime' >
            <IconCheck size={100} />
          </ThemeIcon>
        </div>
        <Text size="xl" align='center' color='lime'>¡RESERVA CONFIRMADA!</Text>
        <Text color='white'>Se ha realizado la reserva exitosamente.</Text>
        <Text color='white'>Detalles de la reserva:</Text>
        <Text>Película: {details.titulo} <br/>
          Boletos: {details.boletos} <br/>
          Asientos: {details.boletos} <br/>
          Total a pagar: ${details.total} <br/>
        </Text> <br/>
        <Text color='white'>Se ha enviado un correo de confirmación a CORREO DEL USUARIO
          acepta para terminar la compra.
        </Text> <br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button onClick={onClose} color='yellow'>Aceptar</Button>
        </div>
      </Paper>
    </Modal>
    )
  )
};
