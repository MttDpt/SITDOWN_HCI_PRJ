/* In TypeScript, interfaces are like contracts that define the structure of an object. 
They specify what properties and methods an object should have, but they don't provide the actual implementation. 
Think of interfaces as a blueprint for creating objects. */

//to-do: add all information that might be specified in the filters screen
export interface IFilterConfig {
    restrictions: Restrictions[];
}

//to-do: add all information that might be specified in the profile screen
export interface ICafe {
    name: String;
    restrictions: Restrictions[];
    offers: IOffer[];
    reviews: IReview[];
    rating: Rating;
    features: Features[];
    price: Price;
    location: {
        left: number,
        top: number,
    }
}

//to-do: add all information that might be specified in the offer screen
export interface IOffer {
    name: String;
    description: string;
    price: number;
}

export interface IReview {
    userId: number;
    comment: String;
    imageSrc: String;
}

export interface IUser {
    id: number;
    name: String;
    imageSrc: String;
}

export enum Restrictions {
    Vegan = "Vegan",
    Vegitarian = "Vegitarian",
    Halal = "Halal"
}

export enum Features {
    Laptop = "Laptop",
    Outlet = "Outlet",
    Booth = "Booth"
}

export enum Rating {
    worst = 0,
    detestable = 1,
    bad = 2,
    neutral = 3,
    good = 4,
    best = 5,
}

export enum Price {
    cheap = "€",
    middle = "€€",
    expensive = "€€€"
}