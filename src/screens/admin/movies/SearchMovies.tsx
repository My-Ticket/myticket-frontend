import {Button, Center, Grid, Group, Input, Loader, Modal, Stack, Text} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";
import {AdminMovieComp} from "../../../components/AdminMovieComp.tsx";
import {useState} from "react";
// import { BillboardMovie } from "../../../types.ts";
import getImageLink from "../../../util/getImageLink.ts";
import {useDebouncedValue} from "@mantine/hooks";
import useSWR from "swr";
import fetchWithAuth from "../../../util/fetchWithAuth.ts";
import {Movie} from "../../Reservation.tsx";
import {baseUrl} from "../../../constants.ts";

function SearchMovies() {
    // const [movies, setMovies] = useState<BillboardMovie[]>([]);
    const [search, setSearch] = useState<string>("");
    const [debouncedSearch] = useDebouncedValue(search, 200);
    const [showModal, setShowModal] = useState<boolean>(false);
    const {
        data,
        isLoading
    } = useSWR<Movie[]>(`${baseUrl}/content/movies/search/${debouncedSearch.trim() || "__null__"}`, fetchWithAuth)
    const [currentMovie, setCurrentMovie] = useState("");
    return (
        <div
            style={{
                minHeight: "45em"
            }}
        >
            <Modal opened={showModal} onClose={() => setShowModal(false)} centered withCloseButton={false}>
                <Center>
                    <Stack>
                        <Text style={{
                            marginBottom: "1em"
                        }}>
                            Estas seguro de agregar esta pelicula?
                        </Text>
                        <Group position={"center"} >
                            <Button onClick={async () => {
                                await fetchWithAuth(`${baseUrl}/content/movies/add/${currentMovie}`, undefined, "POST")
                                setShowModal(false)
                            }}>
                                Aceptar
                            </Button>
                            <Button color={"red"} onClick={() => setShowModal(false)}>
                                Cancelar
                            </Button>
                        </Group>
                    </Stack>
                </Center>
            </Modal>
            <div
            >
                <Input
                    value={search}
                    icon={<IconSearch/>}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                    placeholder="Rapidos y Furiosos"
                    style={{marginBottom: "3em"}}
                />
                <Grid>
                    {data?.map((movie) => (
                        <Grid.Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                            <AdminMovieComp
                                key={movie.id}
                                image={getImageLink(movie.image)}
                                title={movie.title}
                                onClick={() => {setCurrentMovie(movie.id);setShowModal(true)}}
                            />
                        </Grid.Col>
                    )) || null}
                </Grid>
                {isLoading ? <Center>
                    <Loader variant={"bars"}/>
                </Center> : null}
            </div>
        </div>
    );
}

export default SearchMovies;
