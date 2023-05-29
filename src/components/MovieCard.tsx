import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function Moca() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBLKcm8i9LQcVWn18C5CdVYbYGGk8SrZ_Ut1jzFAP6dY1WfdAi"
          height={250}
          alt="Cartelera"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Nombre de la película</Text>
        <Badge color="pink" variant="light">
          Pre-Venta
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Reservar
      </Button>
    </Card>
  );
}