export interface BillboardMovie {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    backdropPath: string;
    rating: number;
    trailer: string;
    posterPath: string;
}
