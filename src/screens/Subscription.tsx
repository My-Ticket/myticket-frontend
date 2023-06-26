
import { SubscriptionPlan } from "../components/SubscriptionPlan"
import { createStyles, Text, Center } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}))

export function Subscription () {
  const { classes } = useStyles();

  const benefitsBasic = [
    { text: 'Notificaciones de estrenos y promociones especiales.', included: true },
    { text: 'Descuentos en todas tus reservas.', included: false },
    { text: "Reservas anticipadas y asientos preferenciales.", included: false}
  ];
  
  const benefitsMonthly = [
    { text: 'Notificaciones de estrenos y promociones especiales.', included: true },
    { text: 'Descuentos en todas tus reservas.', included: true },
    { text: "Reservas anticipadas y asientos preferenciales.", included: true}
  ];
  
  const benefitsAnnual = [
    { text: 'Notificaciones de estrenos y promociones especiales.', included: true },
    { text: 'Descuentos en todas tus reservas.', included: true },
    { text: "Reservas anticipadas y asientos preferenciales.", included: true}
  ];

  return (
    <div style={{marginTop: '5em'}}>
      <Center>
        <h1>SUSCRIPCIÓN</h1>
      </Center>
      <Text size='xl' ml='5rem' mt='sm'>Selecciona tu plan de suscripción preferido y disfruta de los beneficios que te ofrece.</Text>
      <div className={classes.container}>
        <div style={{flex: 1}}>
          <SubscriptionPlan title="Plan Básico"
            description= {{
              main: 'Prueba nuestra suscripción gratuita y disfruta de algunas ventajas básicas.',
              benefits: benefitsBasic
            }}
            price="GRATIS"
          />
        </div>
        <div style={{flex: 1}}>
          <SubscriptionPlan
            title="Plan Mensual"
            description= {{
              main: "Obtén descuentos en tus reservas de boletos de cine.",
              benefits: benefitsMonthly
            }}
            price="$40.000/mes"
          />
        </div>
        <div style={{flex: 1}}>
          <SubscriptionPlan
            title="Plan Anual"
            description={{
              main: "¡Ahorra aún más con nuestro plan anual!",
              benefits: benefitsAnnual
            }}
            price="$250.000/año"
            />
        </div>

      </div>
    </div>
  )
}