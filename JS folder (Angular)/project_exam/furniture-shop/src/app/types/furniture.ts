
export interface Furniture {

    _id: string | null,
    name: string | null,
    category: string | null,
    year: number | null,
    materials: string | null,
    condition: string | null,
    imageUrl: string | null,
    price: number | null,
    description: string | null,
    buyList: string[] | null,
    owner: string | null,
    createdAt: Date | string | null,
    __v: number | null
}