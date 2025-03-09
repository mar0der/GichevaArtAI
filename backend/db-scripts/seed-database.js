const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/gichevaart';

// Hardcoded data from Book1.csv
const paintingsData = [
  {
    id: '1',
    title: 'Colorful flowers',
    description: 'Acrylic on stretched canvas; vibrant floral abstract.',
    price: 0,
    dimensions: '11.7 W x 8.3 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3039997/2109890-HSC00923-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Colorful-flowers/836963/2849455/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '2',
    title: 'Flowers',
    description: 'Created Oct 2019; acrylic on cotton canvas; inspired by nature.',
    price: 260,
    dimensions: '8.7 W x 10.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3040001/2109894-HSC00923-8.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Flowers/836963/7520971/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '3',
    title: 'Daisy and lady-bird',
    description: 'Delicate small canvas with daisy motif.',
    price: 320,
    dimensions: '8.3 W x 5.8 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3105237/2175134-HSC00622-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Daisy-and-lady-bird/836963/3105237/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '4',
    title: 'Field with daisies',
    description: 'Textured floral abstract on canvas.',
    price: 0,
    dimensions: '11.8 W x 9.8 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3105239/2175136-HSC00622-9.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Field-with-daisies/836963/3105239/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '5',
    title: 'Field with Poppies',
    description: 'Vivid field of poppies; warm color palette.',
    price: 0,
    dimensions: '9.4 W x 7.1 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3105241/2175138-HSC00622-11.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Field-with-Poppies/836963/3105241/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '6',
    title: 'Portrait 1',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107781/2177678-HSC00622-19.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-1/836963/3107781/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '7',
    title: 'Portrait 2',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107782/2177679-HSC00622-20.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-2/836963/3107782/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '8',
    title: 'Portrait 3',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107783/2177680-HSC00622-21.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-3/836963/3107783/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '9',
    title: 'Portrait 4',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107784/2177681-HSC00622-22.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-4/836963/3107784/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '10',
    title: 'Portrait 5',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107786/2177683-HSC00622-24.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-5/836963/3107786/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '11',
    title: 'Portrait 6',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107780/2177677-HSC00622-18.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-6/836963/3107780/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '12',
    title: 'Portrait 7',
    description: 'Pencil drawing (gypsum head study) from art lessons.',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107785/2177682-HSC00622-23.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-7/836963/3107785/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '13',
    title: 'Portrait 8',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107787/2177684-HSC00622-25.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-8/836963/3107787/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '14',
    title: 'Portrait 9',
    description: 'Academic pencil drawing of a gypsum head (study).',
    price: 0,
    dimensions: '13.8 W x 19.7 H',
    medium: 'Drawing (Pencil on Paper)',
    category: 'Drawing',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3107788/2177685-HSC00622-26.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Drawing-Portrait-9/836963/3107788/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '15',
    title: 'Hope for Rain',
    description: 'Impressionistic landscape; textured acrylic layers.',
    price: 590,
    dimensions: '19.7 W x 27.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/7579703/4026345-SLGSYZXO-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Hope-for-Rain/836963/7579703/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '16',
    title: 'Cherry Blossom Trees',
    description: 'Landscape with cherry blossoms in bloom.',
    price: 280,
    dimensions: '11.8 W x 9.8 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/7579704/4026346-SLGSYZXO-8.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Cherry-Blossom-Trees/836963/7579704/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '17',
    title: 'The Giraffe',
    description: 'Abstract animal portrait in bold colors.',
    price: 480,
    dimensions: '11.8 W x 15.7 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/7579707/4026349-ZJHQOLWN-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-The-Giraffe/836963/7579707/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '18',
    title: 'The Zebra',
    description: 'Playful small zebra-themed canvas.',
    price: 260,
    dimensions: '8.7 W x 10.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3040003/2109896-HSC00923-10.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-The-Zebra/836963/3040003/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '19',
    title: 'Colorful Desert',
    description: 'Desert-inspired abstract in warm tones.',
    price: 400,
    dimensions: '23.6 W x 15.7 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3040005/2109898-HSC00923-12.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Colorful-desert/836963/3040005/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '20',
    title: 'The Mighty Elephant',
    description: 'Large textured elephant portrait (mixed media).',
    price: 0,
    dimensions: '27.6 W x 23.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3040007/2109900-HSC00923-14.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-The-mighty-elephant/836963/3040007/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '21',
    title: 'The Zebra (large)',
    description: 'Portrait of a zebra with bold abstract background.',
    price: 510,
    dimensions: '11.8 W x 15.7 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3822222/1571733-HSC00001-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-The-Zebra/836963/3822222/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '22',
    title: 'The Dance of the Butterflies',
    description: 'Abstract composition of dancing butterflies.',
    price: 640,
    dimensions: '19.7 W x 35.4 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/3822230/1571741-HSC00001-15.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-The-Dance-of-the-Butterflies/836963/3822230/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '23',
    title: 'Still Life N1',
    description: 'Realistic still life with objects on table.',
    price: 1740,
    dimensions: '23.6 W x 19.7 H x 0.8 D',
    medium: 'Painting (Oil on Canvas)',
    category: 'Oil Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/7234940/3981582-JFFUHPYL-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Still-Life-N1/836963/7234940/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '24',
    title: 'Still Life N2',
    description: 'Realistic still life with objects on table.',
    price: 1840,
    dimensions: '23.6 W x 19.7 H x 0.8 D',
    medium: 'Painting (Oil on Canvas)',
    category: 'Oil Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/7234941/3981583-JFFUHPYL-8.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Still-Life-N2/836963/7234941/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '25',
    title: 'Dancing Couple',
    description: 'Figurative painting of a couple dancing.',
    price: 0,
    dimensions: '13.8 W x 17.7 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315867/955339-WHPFFAVJ-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Dancing-Couple/836963/1315867/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '26',
    title: 'Chasing Horizons N1',
    description: 'Abstract seascape horizon with bold textures.',
    price: 650,
    dimensions: '15.7 W x 23.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315873/955345-WHPFFAVJ-13.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Chasing-Horizons-N1/836963/1315873/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '27',
    title: 'Chasing Horizons N2',
    description: 'Abstract seascape horizon, companion to N1.',
    price: 650,
    dimensions: '15.7 W x 23.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315872/955344-WHPFFAVJ-12.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Chasing-Horizons-N2/836963/1315872/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '28',
    title: 'Chocolate Waves N1',
    description: 'Mixed-media abstract with brown and blue tones.',
    price: 510,
    dimensions: '11.8 W x 27.6 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315874/955346-WHPFFAVJ-14.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Chocolate-waves-N1/836963/1315874/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '29',
    title: 'White Magic',
    description: 'Textured abstract in white with impasto effects.',
    price: 400,
    dimensions: '11.8 W x 15.7 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315875/955347-WHPFFAVJ-15.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-White-magic/836963/1315875/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '30',
    title: 'Colors of the Wind',
    description: 'Large abstract with dynamic colorful swirls.',
    price: 1520,
    dimensions: '23.6 W x 35.4 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315876/955348-WHPFFAVJ-16.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Colors-of-the-wind/836963/1315876/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  // Adding more paintings - just a subset for brevity
  {
    id: '31',
    title: 'Lost in Time',
    description: 'Vertical abstract on paper, mixed media layers.',
    price: 360,
    dimensions: '16.5 W x 11.8 H x 0.1 D',
    medium: 'Painting (Mixed Media on Paper)',
    category: 'Mixed Media',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315877/955349-WHPFFAVJ-17.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Lost-in-Time/836963/1315877/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '32',
    title: 'Desert Vibes',
    description: 'Mixed-media abstract in earthy desert tones.',
    price: 360,
    dimensions: '16.5 W x 11.8 H x 0.1 D',
    medium: 'Painting (Mixed Media on Paper)',
    category: 'Mixed Media',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/1315878/955350-WHPFFAVJ-18.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Desert-vibes/836963/1315878/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '33',
    title: 'Serenity',
    description: 'Intuitive layered abstract; mixed media on canvas.',
    price: 360,
    dimensions: '11.8 W x 15.7 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/8879814/5320723-VLLWXAKW-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Serenity/836963/8879814/view',
    available: false,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '34',
    title: 'Ancient Secrets',
    description: 'Textured abstract with earthy and metallic tones.',
    price: 670,
    dimensions: '11.8 W x 15.7 H x 0.4 D',
    medium: 'Painting (Acrylic/Oil/Mixed Media on Canvas)',
    category: 'Mixed Media',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/9566728/6017629-GATFHTSI-2.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-Ancient-secrets/836963/9566728/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
  },
  {
    id: '35',
    title: 'The Wave',
    description: 'Abstract seascape with wave motif, made with acrylic and silicone.',
    price: 380,
    dimensions: '23.6 W x 11.8 H x 0.8 D',
    medium: 'Painting (Acrylic on Canvas)',
    category: 'Acrylic Painting',
    imageUrl: 'https://www.saatchiart.com/saatchi-images/saatchi/836963/art/7477881/4084519-TTBHJJBE-7.jpg',
    saatchiLink: 'https://www.saatchiart.com/art/Painting-The-Wave/836963/7477881/view',
    available: true,
    createdAt: new Date().toISOString().split('T')[0]
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

    // Insert all paintings data
    const result = await paintingsCollection.insertMany(paintingsData);
    console.log(`Seeded database with ${result.insertedCount} paintings from hardcoded data`);

    // Verify the seeded data
    const paintings = await paintingsCollection.find().toArray();
    console.log('\nVerifying seeded paintings:');
    console.log('------------------------');
    paintings.slice(0, 5).forEach(painting => { // Show just the first 5 for brevity
      console.log(`${painting.id}: ${painting.title} - $${painting.price} - ${painting.available ? 'Available' : 'Not Available'}`);
    });
    console.log(`... and ${paintings.length - 5} more paintings`);

  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    await client.close();
  }
}

// Run the seeding
console.log('Starting database seeding...');
seedDatabase().catch(console.error); 