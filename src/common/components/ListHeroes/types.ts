type THeroes = {
    id: string,
    name: string,
    path: string
    extension: string
}


export type TListHeroesC = {
    data: THeroes[]
    isLoading?: boolean
}

