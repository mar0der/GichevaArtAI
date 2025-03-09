const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/gichevaart';

// All paintings data for seeding
const seedPaintings = [
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
    },
    {
        id: '4',
        title: 'Mystic Forest',
        description: 'A mystical forest scene with ethereal light filtering through ancient trees, creating a magical atmosphere of wonder and tranquility.',
        price: 1800.00,
        dimensions: '40x50 inches',
        medium: 'Oil on canvas',
        category: 'Landscape',
        imageUrl: '/images/paintings/mystic-forest.jpg',
        available: true,
        createdAt: '2024-03-09'
    },
    {
        id: '5',
        title: 'Autumn Symphony',
        description: 'A vibrant celebration of fall colors, where golden leaves dance against a crisp blue sky. The painting captures the magical moment when sunlight filters through the autumn canopy, creating a natural symphony of warm oranges, deep reds, and touches of remaining summer green.',
        price: 2200.00,
        dimensions: '48x36 inches',
        medium: 'Acrylic on canvas',
        category: 'Landscape',
        imageUrl: '/images/paintings/autumn-symphony.jpg',
        available: true,
        createdAt: '2024-03-09'
    }
];

async function seedDatabase() {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('gichevaart');
        
        // Drop existing paintings collection if it exists
        try {
            await db.collection('paintings').drop();
            console.log('Dropped existing paintings collection');
        } catch (err) {
            console.log('No existing paintings collection to drop');
        }

        // Create paintings collection
        const paintingsCollection = await db.createCollection('paintings');
        console.log('Created paintings collection');

        // Insert all seed paintings
        const result = await paintingsCollection.insertMany(seedPaintings);
        console.log(`Seeded database with ${result.insertedCount} paintings`);

        // Verify the seeded data
        const paintings = await paintingsCollection.find().toArray();
        console.log('\nVerifying seeded paintings:');
        console.log('------------------------');
        paintings.forEach(painting => {
            console.log(`${painting.id}: ${painting.title}`);
        });

    } catch (err) {
        console.error('Error seeding database:', err);
    } finally {
        await client.close();
    }
}

// Run the seeding
seedDatabase().catch(console.error); 