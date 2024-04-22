import { Features, ICafe, IUser, Price, Rating, Restrictions } from "./types";

const CoffeeShops: ICafe[] = [
    {
        name: "Stevens",
        restrictions: [
            Restrictions.Halal,
            Restrictions.Vegan
        ],
        offers: [
            {
                name: "super offer",
                description: "This describes everything that is offered in this offer.",
                price: 20,
            }
        ],
        reviews: [
            {
                userId: 0,
                comment: undefined,
                imageSrc: undefined
            }
        ],
        features: [
            Features.Laptop,
        ],
        location: {
            left: 200,
            top: 200,
        },
        rating: Rating.worst,
        price: Price.cheap,
    },
    /*
        add more cafes here
    */
]

const Friends: IUser[] = [
    {
        id: 0,
        name: "Matteo",
        imageSrc: "../../assets/Matteo",
        reviews: []
    }

]


export const getCaffees = () => {
    return CoffeeShops;
}

export const getFriends = () => {
    return Friends;
}