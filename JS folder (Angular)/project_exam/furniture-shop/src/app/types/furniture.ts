
export interface Furniture {

    _id: string,
    name: string,
    category: string,
    year: number,
    materials: string,
    condition: string,
    imageUrl: string,
    price: number,
    description: string,
    buyList: string[],
    owner: string,
    createdAt: Date,
    __v: number
}