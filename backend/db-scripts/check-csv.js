const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

// Function to find the CSV file
function findCSVFile() {
  const possiblePaths = [
    path.resolve(__dirname, '../../Book1.csv'),
    path.resolve(__dirname, '../Book1.csv'),
    path.resolve(__dirname, './Book1.csv'),
    path.resolve(process.cwd(), 'Book1.csv')
  ];
  
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      console.log(`Found CSV file at: ${p}`);
      return p;
    }
  }
  
  console.error('Could not find Book1.csv file. Tried the following paths:');
  possiblePaths.forEach(p => console.error(`- ${p}`));
  return null;
}

// Read and parse the CSV file
function parseCSV(filePath) {
  const results = [];
  
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .on('error', (err) => {
        console.error(`Error reading CSV file: ${err.message}`);
        reject(err);
      })
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        console.error(`Error parsing CSV: ${err.message}`);
        reject(err);
      });
  });
}

// Main function
async function main() {
  console.log('CSV Troubleshooting Tool');
  console.log('=======================');
  
  // Find the CSV file
  const csvPath = findCSVFile();
  if (!csvPath) {
    console.error('CSV file not found. Please check that Book1.csv exists in the project directory.');
    process.exit(1);
  }
  
  // Check file size
  const stats = fs.statSync(csvPath);
  console.log(`CSV file size: ${stats.size} bytes`);
  
  // Preview file contents (first 200 characters)
  const preview = fs.readFileSync(csvPath, 'utf8').slice(0, 200);
  console.log('\nFile preview:');
  console.log(preview + '...');
  
  try {
    // Parse the CSV
    console.log('\nAttempting to parse CSV...');
    const data = await parseCSV(csvPath);
    
    console.log(`Successfully parsed ${data.length} rows from CSV file`);
    
    // Display the first 3 rows
    console.log('\nFirst 3 rows:');
    data.slice(0, 3).forEach((row, index) => {
      console.log(`\nRow ${index + 1}:`);
      Object.entries(row).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
      });
    });
    
    // Display all column names
    console.log('\nAll column names found in CSV:');
    if (data.length > 0) {
      Object.keys(data[0]).forEach(key => console.log(`- ${key}`));
    } else {
      console.log('No data rows found in CSV file');
    }
    
  } catch (error) {
    console.error('Error processing CSV file:', error);
  }
}

main().catch(console.error); 