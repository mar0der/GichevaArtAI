import { NextResponse } from 'next/server';

// Sample paintings data (in a real app, this would come from the backend API)
const paintings = [
  {
    id: '1',
    title: 'Sunset Over Mountains',
    description: 'A beautiful sunset scene over mountain ranges.',
    price: 1200.00,
    dimensions: '24x36 inches',
    medium: 'Oil on canvas',
    category: 'Landscape',
    imageUrl: '/images/paintings/sunset.jpg',
    available: true,
    createdAt: '2023-01-15'
  },
  {
    id: '2',
    title: 'Abstract Harmony',
    description: 'An abstract composition with harmonious colors and shapes.',
    price: 950.00,
    dimensions: '30x30 inches',
    medium: 'Acrylic on canvas',
    category: 'Abstract',
    imageUrl: '/images/paintings/abstract.jpg',
    available: true,
    createdAt: '2023-03-22'
  },
  {
    id: '3',
    title: 'Coastal Dreams',
    description: 'A serene coastal scene with waves crashing on the shore.',
    price: 1500.00,
    dimensions: '36x48 inches',
    medium: 'Oil on canvas',
    category: 'Seascape',
    imageUrl: '/images/paintings/coastal.jpg',
    available: true,
    createdAt: '2023-05-10'
  }
];

export async function GET() {
  // In a real app, this would fetch data from the backend API
  return NextResponse.json(paintings);
}