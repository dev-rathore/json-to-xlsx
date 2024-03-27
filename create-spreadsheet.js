const XLSX = require('xlsx');
const { LIST_DATA } = require('./list-data');

const heading = ['Address', 'Price'];

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Data to be written
const data = LIST_DATA.map((item) => [item.address, item.price]);

// Add the data to a new worksheet
const worksheet = XLSX.utils.aoa_to_sheet([heading, ...data]);

// Add the worksheet to the workbook
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Write the workbook to a file
XLSX.writeFile(workbook, 'output.xlsx');

console.log('Excel file created successfully.');
