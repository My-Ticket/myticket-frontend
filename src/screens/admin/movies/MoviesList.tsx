import useSWR from "swr";
import fetchWithAuth from "../../../util/fetchWithAuth.ts";
import {ActionIcon, Affix, Center, Modal, rem} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import SearchMovies from "./SearchMovies.tsx";
import {useDisclosure} from "@mantine/hooks";

function Layout() {
    const [opened, { open, close }] = useDisclosure(false);

    return <div>
        <Modal opened={opened} onClose={close} centered size={"100%"}>
            <SearchMovies/>
        </Modal>
        <Affix position={{bottom: rem(20), right: rem(20)}}>
            <ActionIcon variant={"filled"} radius={"xl"} size={"xl"} color={"yellow"} onClick={open}>
                <IconPlus/>
            </ActionIcon>
        </Affix>
    </div>
}

function MoviesList() {
    const {data, error, isLoading} = useSWR("http://localhost:5000/content/movies/", fetchWithAuth);

    if (error) return <div>error</div>
    if (isLoading) return <div>Loading</div>
    if (data.length === 0) return (
        <div>

            <Layout/>
            <Center style={{
                display: "flex",
                justifyContent: "center",
                height: "100vh"
            }}>
                No hay peliculas agregadas
            </Center>
        </div>)
    return <div>
        <Layout/>
    </div>
}

export default MoviesList