type TypeLocation = {
    city: string;
    country: string;
}

export interface IPlace {
    slug: string
    location: TypeLocation
    imagePath: string
    description: string
    raiting: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    duration: string
    distance: number
    googleMapLink: string
    mapImage: string
}




