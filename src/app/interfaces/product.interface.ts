import { ScrapeSession } from "./scrape-session.interface";

export interface Product {
    id: number;
    productId: number;
    name: string;
    category: string;
    brand: string;
    gender: string;
    shop: string;
    price: number;
    discount: number;
    oldPrice: number;
    url: string;
    imageUrl: string;
    scrapeSession: ScrapeSession;
}