import { Painting } from '@/types/painting';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function getPaintings(): Promise<Painting[]> {
  try {
    const response = await fetch(`${API_URL}/api/paintings`);
    
    if (!response.ok) {
      throw new Error(`Error fetching paintings: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching paintings:', error);
    return [];
  }
}

export async function getPainting(id: string): Promise<Painting | null> {
  try {
    const response = await fetch(`${API_URL}/api/paintings/${id}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Error fetching painting: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching painting ${id}:`, error);
    return null;
  }
}