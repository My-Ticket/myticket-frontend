import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function Moca({title,link}: {title:string, link:string}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder >
      <Card.Section>
        <Image
          src={link}
          height={250}
          alt="Cartelera"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
          Pre-Venta
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </Text>

      <Button  variant="outline" color="yellow" fullWidth mt="md" radius="md">
        Reservar
      </Button>
    </Card>
  );
}