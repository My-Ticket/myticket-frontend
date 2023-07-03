import {Card, Image, Text, Badge, Button, Group} from '@mantine/core';
import {motion} from "framer-motion";

export function Moca({title, link, sinopsis, presale = false, onReserveClick}: {
    title: string,
    link: string,
    sinopsis: string,
    presale?: boolean,
    onReserveClick?: () => void
}) {
    return (
        <motion.div
            initial={{
                scale: 0
            }}
            animate={{ scale: 1}}
            transition={{
                type: "tween",
            }}
        >

            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image
                        src={link}
                        height={250}
                        alt="Cartelera"
                    />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>{title}</Text>
                    {presale ?
                        <Badge color="pink" variant="light">
                            Pre-Venta
                        </Badge>
                        : null
                    }
                </Group>

                <Text size="sm" color="dimmed" lineClamp={5}>
                    {sinopsis}
                </Text>

                <Button variant="outline" color="yellow" fullWidth mt="md" radius="md" onClick={onReserveClick}>
                    Reservar
                </Button>
            </Card>
        </motion.div>
    );
}