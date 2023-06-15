import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function Moca({title,link, sinopsis, presale=false, onReserveClick}: {title:string, link:string, sinopsis:string, presale?: boolean, onReserveClick?: () => void}) {
  return (
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

      <Text size="sm" color="dimmed">
        {sinopsis}
      </Text>

      <Button  variant="outline" color="yellow" fullWidth mt="md" radius="md" onClick={onReserveClick}>
        Reservar
      </Button>
    </Card>
  );
}