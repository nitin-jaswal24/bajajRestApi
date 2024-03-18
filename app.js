const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Replace with your actual user ID and details (optional)
const userId = "nitin_jaswal_23102002";
const email = "nitin0970.be21@chitkara.edu.in";
const rollNumber = "2110990970";

app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
      throw new Error('Invalid request: data is missing or not an array');
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    for (const item of data) {
      if (typeof item === 'string') {
        alphabets.push(item.toUpperCase());
      } else if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item);
        } else {
          oddNumbers.push(item);
        }
      } else {
        throw new Error('Invalid data type in array');
      }
    }

    const response = {
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});