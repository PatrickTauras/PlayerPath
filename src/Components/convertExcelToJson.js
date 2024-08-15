const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

// Path to the Excel file - update this path to match your directory
const excelFilePath = path.join('C:', 'Users', 'patri', 'Desktop', 'ReactJS', 'nba-data-converter', 'src', 'Filtered_Dataset.xlsx');

// Path to the JSON file in the public directory of your React project
const jsonFilePath = path.join(__dirname, '../../public/data/players.json');

// Read the Excel file
const workbook = xlsx.readFile(excelFilePath);

// Get the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the sheet to JSON
const jsonData = xlsx.utils.sheet_to_json(worksheet);

// Write the JSON data to a file
fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

console.log('Excel data has been converted to JSON and saved to players.json');