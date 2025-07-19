export type SORT_BY = "price" | "rating";
export type BRAND = "apple" | "samsung" | "xiaomi" | "nokia" | "sony";

export interface IPhone {
    id: number;
    rating: number;
    name: string;
    image: string;
    price: number;
    isLiked: boolean;
}