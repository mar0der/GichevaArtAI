const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/gichevaart';

// Sample paintings data
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

async function connectToDb() {
    const client = new MongoClient(uri);
    await client.connect();
    return client;
}

// Add new paintings
async function addPaintings(newPaintings) {
    const client = await connectToDb();
    try {
        const db = client.db('gichevaart');
        const result = await db.collection('paintings').insertMany(newPaintings);
        console.log(`Added ${result.insertedCount} new paintings`);
        return result;
    } finally {
        await client.close();
    }
}

// Update painting
async function updatePainting(id, updates) {
    const client = await connectToDb();
    try {
        const db = client.db('gichevaart');
        const result = await db.collection('paintings').updateOne(
            { id: id },
            { $set: updates }
        );
        console.log(`Modified ${result.modifiedCount} painting(s)`);
        return result;
    } finally {
        await client.close();
    }
}

// Delete painting
async function deletePainting(id) {
    const client = await connectToDb();
    try {
        const db = client.db('gichevaart');
        const result = await db.collection('paintings').deleteOne({ id: id });
        console.log(`Deleted ${result.deletedCount} painting(s)`);
        return result;
    } finally {
        await client.close();
    }
}

// List all paintings
async function listPaintings() {
    const client = await connectToDb();
    try {
        const db = client.db('gichevaart');
        const paintings = await db.collection('paintings').find().toArray();
        console.log(JSON.stringify(paintings, null, 2));
        return paintings;
    } finally {
        await client.close();
    }
}

// Add a new field to all paintings
async function addFieldToPaintings(fieldName, defaultValue) {
    const client = await connectToDb();
    try {
        const db = client.db('gichevaart');
        const result = await db.collection('paintings').updateMany(
            {},
            { $set: { [fieldName]: defaultValue } }
        );
        console.log(`Added field "${fieldName}" to ${result.modifiedCount} paintings`);
        return result;
    } finally {
        await client.close();
    }
}

// Example usage:
// Add new paintings:
// await addPaintings([
//     {
//         id: '4',
//         title: 'New Painting',
//         description: 'Description here',
//         price: 1000.00,
//         dimensions: '24x36 inches',
//         medium: 'Oil on canvas',
//         category: 'Abstract',
//         imageUrl: '/images/paintings/new.jpg',
//         available: true,
//         createdAt: new Date().toISOString()
//     }
// ]);

// Update a painting:
// await updatePainting('1', { price: 1300.00 });

// Add a new field to all paintings:
// await addFieldToPaintings('yearCreated', '2024');

// List all paintings:
// await listPaintings();

// Export functions for use in other scripts
module.exports = {
    addPaintings,
    updatePainting,
    deletePainting,
    listPaintings,
    addFieldToPaintings
}; 