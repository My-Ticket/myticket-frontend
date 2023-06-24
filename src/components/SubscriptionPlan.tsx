
import { createStyles, Paper, Text, ThemeIcon, rem, List } from '@mantine/core';
import { IconCoin, IconCheck, IconX} from '@tabler/icons-react';
import { sub } from '../services/subs';
const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    minHeight: '26rem',
    
   

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.orange[3], theme.colors.orange[6]),
    },
  },
}));

type benefits = {
  text: string,
  included: boolean
}

interface SubscriptionPlanProps {
  title: string;
  description: {
    main: string;
    benefits: benefits[];
  };
  price: string;
}

export function SubscriptionPlan({ title, description, price }: SubscriptionPlanProps) {
  const { classes } = useStyles();

  const handleSubscribe = async (planId: string) => {
    // Lógica para suscribir al plan
    console.log('Subscribing to plan');
    try {
      const response = await sub(planId);
      // Manejar la respuesta del backend aquí
      window.open(response!.url, '_blank');
      console.log(response);
    } catch (error) {
      // Manejar errores aquí
      console.error(error);
    }

  
  };

  return (
    <div style={{ margin: '5em' }}>
      <Paper withBorder radius="md" className={classes.card} onClick={() => handleSubscribe(title)}>
        <ThemeIcon
          size="xl"
          radius="md"
          variant="gradient"
          gradient={{ deg: 0, from: 'yellow', to: 'orange' }}
        >
          <IconCoin size={rem(28)} stroke={1.5} />
        </ThemeIcon>
        <Text size="xl" weight={500} mt="md">
          {title}
        </Text>
        <Text size="sm" mt="sm" mb='sm' color="dimmed">
          {description.main}
        </Text>
        <List
          spacing="xs"
          size="sm"
          center
        >
          {description.benefits.map((benefit, index) => (
            <List.Item key={index} icon={
                benefit.included ? (
                  <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCheck size="2rem" />
                  </ThemeIcon>
                ) : (
                  <ThemeIcon color="red" size={24} radius="xl">
                    <IconX size="2rem" />
                  </ThemeIcon>
                )                                     
            }><Text size="sm" color="white">
                {benefit.text}
              </Text>
            </List.Item>
          ))}
        </List>
        <Text size="xl" weight={500} mt="lg">
          {price}
        </Text>
      </Paper>
    </div>
  );
}