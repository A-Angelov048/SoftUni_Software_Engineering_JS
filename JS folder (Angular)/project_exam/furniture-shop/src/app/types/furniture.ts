
export interface Furniture {

    _id: string,
    name: string,
    category: string,
    year: number,
    materials: number,
    condition: string,
    imageUrl: string,
    price: number,
    description: string,
    buyList: string[],
    owner: string,
    createdAt: Date | string,
    __v: number
}