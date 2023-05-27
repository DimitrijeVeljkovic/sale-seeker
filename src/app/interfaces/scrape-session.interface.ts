export interface ScrapeSession {
    id: number;
    status: string;
    recordsScraped: number;
    scrapingTime: number;
    averageDiscount: number;
    timestamp: string;
}