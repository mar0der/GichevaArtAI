export interface Painting {
  id: string;
  title: string;
  description: string;
  price: number;
  dimensions: string;
  medium: string;
  category: string;
  imageUrl: string;
  available: boolean;
  createdAt: string;
}

export interface PaintingListResponse {
  paintings: Painting[];
}

export interface PaintingResponse {
  painting: Painting;
}