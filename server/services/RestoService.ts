// Importeer sql uit db.ts
import sql from "./db";

// Interface voor een restaurant
export interface Restaurant {
  id?: number;
  name?: string;
  city?: string;
  image?: string;
  stars?: string;
}

// Alle restaurants ophalen
export async function getAllRestaurants(): Promise<Restaurant[]> {
    try {
        const data : Restaurant[] = await sql`select * from restaurants`;
        return data;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error('Could not fetch news: ' + error);
    }
}

export async function getRestaurantById(id: number): Promise<Restaurant[]> {
    try {
        const data : Restaurant[] = await sql`select * from restaurants where id=${id}`;
        return data;

    } catch (error) {
        console.error('Error fetching news:', error);
        throw new Error('Could not fetch news: ' + error);
    }
}