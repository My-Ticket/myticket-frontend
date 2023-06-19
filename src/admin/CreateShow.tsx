
import { Group, Text, ActionIcon, createStyles, Center, Button, Autocomplete  } from '@mantine/core';
import { Calendar, TimeInput } from '@mantine/dates';
import { useState } from 'react';
import { IconClock } from '@tabler/icons-react';
import { useRef } from 'react';
import dayjs from 'dayjs';

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '4em',
    margin: '0 3em 0 3em',
    gap: '2em',
  },
  search: {
    justifyContent: 'left',
  },
}))

export function CreateShow() {
  const {classes} = useStyles();
  const [selected, setSelected] = useState<Date[]>([]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const ref = useRef<HTMLInputElement>();

  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
      if (selected.length === 2) {
        setSelected([date]);
      } else if (selected.length === 1) {
        if (date < selected[0]) {
          setSelected([date, selected[0]]);
        } else {
          setSelected([selected[0], date]);
        }
      } else {
        setSelected([date]);
      }
      console.log(selected);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Crear programación</h1>
      <div className= {classes.search}>
      <Autocomplete
        mx={400}
        label="Selecciona la película"
        placeholder="Rapido y furioso"
        data={['Rapido y furioso', 'Transformers', 'Guardianes de la galaxia', 'Spiderman']}
      />
      </div>
      <div className= {classes.root}>
        <Group position="left">
          <Calendar 
            getDayProps={(date) => ({
              selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
              onClick: () => handleSelect(date),
            })}
          />
        </Group>
        <TimeInput
        label="Selecciona la hora en que se emite la película"
        ref={ref}
        rightSection={
          <ActionIcon onClick={() => ref.current.showPicker()}>
            <IconClock size="1rem" stroke={1.5} />
          </ActionIcon>
        }
        maw={300}
        mx="auto"
        />
      </div>
      <Center>
        <Button variant="outline" color="blue" onClick={handleSubmit}>
          Crear programación
        </Button>
      </Center>  
    </div>
  );
}
