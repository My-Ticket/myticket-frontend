import useSWR, { KeyedMutator } from "swr";
import fetchWithAuth from "../../../util/fetchWithAuth.ts";
import { ActionIcon, Affix, Button, Center, Loader, Modal, Overlay, rem, SimpleGrid } from "@mantine/core";
import { IconCalendarCheck, IconCalendarUp, IconPlus } from "@tabler/icons-react";
import SearchMovies from "./SearchMovies.tsx";
import { useDisclosure } from "@mantine/hooks";
import { AdminMovieComp } from "../../../components/AdminMovieComp.tsx";
import getImageLink from "../../../util/getImageLink.ts";
import { MovieDetails } from "../../../types.ts";
import { baseUrl } from "../../../constants.ts";
import { useState } from "react";

function Layout({ mutate, sendToBillboard, sendToUpcoming }: { mutate?: KeyedMutator<MovieDetails[]>, sendToBillboard?: Function, sendToUpcoming?: Function }) {
    const [opened, { open, close }] = useDisclosure(false);

    return <div>
        <Modal opened={opened} onClose={async () => {
            if (mutate) {
                await mutate()
            }
            close()
        }} centered size={"100%"}>
            <SearchMovies />
        </Modal>
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
            <Center>
                <ActionIcon variant={"filled"} radius={"xl"} size={"xl"} color={"yellow"} mr={"xs"} onClick={open}>
                    <IconPlus />
                </ActionIcon>
                <ActionIcon variant={"filled"} radius={"xl"} size={"xl"} color={"yellow"} mr={"xs"} onClick={() => {
                    if (sendToUpcoming) sendToUpcoming()
                }}>
                    <IconCalendarUp />
                </ActionIcon>
                <ActionIcon variant={"filled"} radius={"xl"} size={"xl"} color={"yellow"} mr={"xs"} onClick={() => {
                    if (sendToBillboard) sendToBillboard()
                }}>
                    <IconCalendarCheck />
                </ActionIcon>
            </Center>
        </Affix>
    </div>
}

function MoviesList() {
    const { data, error, isLoading, mutate } = useSWR<MovieDetails[]>(`${baseUrl}/content/movies/`, fetchWithAuth);
    const [selectedMovies, setSelectedMovies] = useState<string[]>([])
    if (error) return <div>error</div>
    if (isLoading) return <Center style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh"
    }}>
        <Loader variant={"bars"} />
    </Center>
    if (data?.length === 0) return (
        <div>

            <Layout mutate={mutate} />
            <Center style={{
                display: "flex",
                justifyContent: "center",
                height: "100vh"
            }}>
                No hay peliculas agregadas
            </Center>
        </div>)
    return <div
        style={{
            width: "100vw",
            marginTop: "1rem",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginBottom: "1rem",
            display: "flex"
        }}
    >
        <Center>
            <SimpleGrid cols={6}>
                {data?.map((movie) => (
                    <div>
                        <AdminMovieComp
                            key={movie.id}
                            image={getImageLink(movie.posterPath)}
                            title={movie.title}
                            movieId={movie.id.toString()}
                            selectedMoviesSetter={setSelectedMovies}

                        /> {/* PORQUE TAN QUIETO REY? */}
                    </div>
                )) || null}
            </SimpleGrid>
        </Center>
        <Layout mutate={mutate} />
    </div>
}

export default MoviesList