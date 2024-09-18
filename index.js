let date2 = new Date();
console.log(date2);

// Task 2: Add Days to Date

// - Input: Date string (e.g., "2024-08-28"), number of days to add (e.g., 3)
// - Output: New date string (e.g., "2024-08-31")

let date1 = new Date("2024-12-28");
 let newDate = date1.setDate(date1.getDate()+4);
let year = date1.getFullYear();
let month = (date1.getMonth()+ 1); // Add 1 to the month (zero-indexed)
let day = (date1.getDate());
console.log(`${year}-${month}-${day}`);


// Task 3: Format Date as MM/DD/YYYY

// - Input: Date string (e.g., "2024-08-28")
// - Output: Formatted date string (e.g., "08/28/2024");

 let date3 = new Date();
let year = String(date3.getFullYear()).padStart(2,0);
let month = String(date3.getMonth()+ 1).padStart(2,0); // Add 1 to the month (zero-indexed)
let day = String(date3.getDate()).padStart(2,0);
console.log(`${month}-${day}-${year}`);

// Task 4: Get Number of Days Between Dates

// - Input: Two date strings (e.g., "2024-08-28", "2024-09-01")
// - Output: Number of days between dates (e.g., 4)
let  custDate = new Date("2024-08-28");
let custDate2 = new Date("2024-09-01");
let newDate = Math.ceil(((custDate2-custDate)/(24*60*60*1000)));
console.log(newDate);
