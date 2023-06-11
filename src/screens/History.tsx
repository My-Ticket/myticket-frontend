import { useState } from 'react';
import { createStyles, Table, ScrollArea, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  headerText:{
    color: 'black !important'
  },
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'orange',//theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',
  
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { pelicula: string; fecha: string; boletos: string; sala: string }[];
}

export function TableScrollArea({ data }: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.pelicula}>
      <td>{row.pelicula}</td>
      <td>{row.fecha}</td>
      <td>{row.boletos}</td>
      <td>{row.sala}</td>
    </tr>
  ));

  return (
    <div style={{ margin: '5em'}}>
      <h1>Historial de reservas</h1>
      <ScrollArea h={400} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700}>
          <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
            <tr>
              <th className={classes.headerText}>Pelicula</th>
              <th className={classes.headerText}>Fecha</th>
              <th className={classes.headerText}>Boletos</th>
              <th className={classes.headerText}>Sala</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}