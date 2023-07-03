import { Button, Card, Indicator, Overlay, Text, ThemeIcon, createStyles, getStylesRef, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { ReactNode, useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    height: rem(280),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

    [`&:hover .${getStylesRef('image')}`]: {
      transform: 'scale(1.03)',
    },
  },

  image: {
    ...theme.fn.cover(),
    ref: getStylesRef('image'),
    backgroundSize: 'cover',
    transition: 'transform 500ms ease',
  },

  overlay: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
  },

  content: {
    height: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
  },

  title: {
    color: theme.white,
    marginBottom: rem(5),
  },

  bodyText: {
    color: theme.colors.dark[2],
    marginLeft: rem(7),
  },

  author: {
    color: theme.colors.dark[2],
  },
}));

interface ImageCardProps {
  image: string;
  title: string;
  onClick?: () => void;
  selectedMoviesSetter?: React.Dispatch<React.SetStateAction<string[]>>;
  movieId?: string
  selectedMovies?: string[]
}

export function AdminMovieComp({ image, title, onClick, selectedMoviesSetter, movieId, selectedMovies }: ImageCardProps) {
  const { classes } = useStyles();
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (selectedMovies?.includes(movieId!)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    return () => {
    }
  }, [selectedMovies])
  
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      target="_blank"
      onClick={() => {
        if (onClick) {
          onClick();
        }
        if (selectedMoviesSetter) {
          console.log(selectedMovies);
          if (selectedMovies?.includes(movieId!)) {
            selectedMoviesSetter((prev) => prev.filter((id) => id !== movieId));
            return;
          }
          selectedMoviesSetter((prev) => [...prev, movieId!]);
        }
      }}
    >
      <Indicator disabled={disabled} size={0} label={<ThemeIcon radius={"xl"} color='dark'>
        <IconCheck />
      </ThemeIcon>}>


      </Indicator>
      <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} weight={500}>
            {title}
          </Text>

        </div>
      </div>
    </Card>
  );
}