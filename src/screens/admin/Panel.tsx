import {
    createStyles,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
} from "@mantine/core";
import {motion} from "framer-motion";
import {IconGauge, IconUser, IconCookie} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";

const panelElements = [
    {
        title: "Salas",
        description: "Crea, edita y elimina salas de cine",
        icon: IconGauge,
        link: "/admin/rooms"
    },
    {
        title: "Peliculas",
        description:
            "Crea, edita y elimina peliculas",
        icon: IconUser,
        link: "/admin/movies"
    },
    {
        title: "Programacion",
        description:
            "Programa las peliculas en las salas",
        icon: IconCookie,
        link: "/admin/schedule"
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
    const {classes, theme} = useStyles();
    const navigate = useNavigate();
    const elements = panelElements.map((element) => (
        <motion.div
            whileHover={{
                scale: 1.08
            }}
        >

            <Card
                key={element.title}
                shadow="md"
                radius="md"
                className={classes.card}
                padding="xl"
                onClick={() => navigate(element.link)}
            >
                <element.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()}/>
                <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                    {element.title}
                </Text>
                <Text fz="sm" c="dimmed" mt="sm">
                    {element.description}
                </Text>
            </Card>
        </motion.div>
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
                breakpoints={[{maxWidth: "md", cols: 1}]}
            >
                {elements}
            </SimpleGrid>
        </Container>
    );
}
