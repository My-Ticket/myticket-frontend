import {
  createStyles,
  Badge,
  Button,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { IconMovie, IconCalendarEvent, IconArmchair } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const mockdata = [
  {
    title: "Salas",
    description:"Crea, edita y elimina salas de cine",
    icon: IconArmchair,
  },
  {
    title: "Peliculas",
    description:
      "Crea, edita y elimina peliculas",
    icon: IconMovie,
  },
  {
    title: "Programacion",
    description:
      "Programa las peliculas en las salas",
    icon: IconCalendarEvent,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function Panel() {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
      <Group position="apart" mt="xl">
        <Button variant="subtle" size="xs" color={theme.fn.primaryColor()} onClick={() => navigate(`/admin/crear-${feature.title.toLowerCase()}`)} >
          Crear
        </Button>
      </Group>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        My Ticket Control Panel
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
