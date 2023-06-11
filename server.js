const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Parse JSON request bodies
app.use(bodyParser.json());

// API endpoint to send OTP to mobile number
app.post('/send-otp', function (req, res) {
  var mobileNumber = req.body.mobileNumber;

  // Validate the mobile number
  if (!/^\d{10}$/.test(mobileNumber)) {
    return res.status(400).json({ error: 'Invalid mobile number' });
  }

  // Generate OTP and send it to the mobile number
  var otp = generateOTP();
  console.log('OTP sent to mobile number: ' + mobileNumber + ', OTP: ' + otp);

  // Simulate sending OTP via SMS or any other method here

  res.sendStatus(200);
});

// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Start the server
app.listen(3000, function () {
  console.log('Server started on port 3000');
});
