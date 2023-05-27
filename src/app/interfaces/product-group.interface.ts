import { Product } from "./product.interface";
import { ScrapeSession } from "./scrape-session.interface";

export interface ProductGroup {
    group: string | number | ScrapeSession;
    products: Product[];
}