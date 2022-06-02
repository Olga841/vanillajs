type AdressType = {
    streetTitle: string
    city: CityType
}

type CityType = {
    title: string
    countryTitle: string
}

type TechType = {
    id: number
    name: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: "Dimych",
    age: 27,
    isActive: false,
    adress: {
        streetTitle: "Surganova 2",
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            name: 'HTML'
        },
        {
            id: 2,
            name: 'CSS'
        },
        {
            id: 3,
            name: 'JS'
        },
        {
            id: 4,
            name: 'React'
        }
    ]
}