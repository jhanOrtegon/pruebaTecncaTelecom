type TComic = {
    available: number,
    items: {
        name: string
        resourceURI: string
    }[]
}

export type THeroeC = {
    isLoading?: boolean
    data?:
    {
        id: number,
        extension: string
        description: string
        name: string
        path: string
        comics: TComic
        modified: string
    }[]
}

