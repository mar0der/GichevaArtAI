const { addPaintings } = require('./explore-db');

const newPainting = {
    id: '5',
    title: 'Autumn Symphony',
    description: 'A vibrant celebration of fall colors, where golden leaves dance against a crisp blue sky. The painting captures the magical moment when sunlight filters through the autumn canopy, creating a natural symphony of warm oranges, deep reds, and touches of remaining summer green.',
    price: 2200.00,
    dimensions: '48x36 inches',
    medium: 'Acrylic on canvas',
    category: 'Landscape',
    imageUrl: '/images/paintings/autumn-symphony.jpg',
    available: true,
    createdAt: new Date().toISOString()
};

// Add the painting and then display the result
async function addNewPainting() {
    try {
        const result = await addPaintings([newPainting]);
        console.log('Successfully added new painting:', newPainting);
        return result;
    } catch (error) {
        console.error('Error adding painting:', error);
    }
}

addNewPainting(); 