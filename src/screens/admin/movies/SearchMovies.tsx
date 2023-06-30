import { Button, Grid, Input, Modal } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { AdminMovieComp } from "../../../components/AdminMovieComp.tsx";
import { useEffect, useState } from "react";
import { BillboardMovie } from "../../../types.ts";
import getImageLink from "../../../util/getImageLink.ts";
import { useDebouncedValue } from "@mantine/hooks";

function SearchMovies() {
  const [movies, setMovies] = useState<BillboardMovie[]>([]);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebouncedValue(search, 200);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      fetch("http://localhost:5000/content/movies/search/__null__")
        .then((res) => res.json())
        .then((data) => {
          setMovies(data || []);
        });
    } else {
      fetch(`http://localhost:5000/content/movies/search/${debouncedSearch}`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data || []);
        });
    }
  }, [debouncedSearch]);

  return (
    <div
    >
      <Modal opened={showModal} onClose={() => setShowModal(false)} centered >
        <Modal.Title>Confirmar</Modal.Title>
        <Modal.Body>¿Está seguro que desea agregar esta película?</Modal.Body>
        <Button>
          Aceptar
        </Button>
      </Modal>
      <div
      >
        <Input
          value={search}
          icon={<IconSearch />}
          onChange={(e) => setSearch(e.currentTarget.value)}
          placeholder="Rapidos y Furiosos"
          style={{ marginBottom: "3em" }}
        />
        <Grid>
          {movies.map((movie) => (
            <Grid.Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <AdminMovieComp
                key={movie.id}
                image={getImageLink(movie.image)}
                title={movie.title}
                onClick={() => setShowModal(true)}
              />
            </Grid.Col>
          )) || null}
        </Grid>
      </div>
    </div>
  );
}

export default SearchMovies;
