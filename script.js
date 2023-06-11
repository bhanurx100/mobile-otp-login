// Generate a random 6-digit OTP
function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  
  // Event listener for Send OTP button click
  document.getElementById('sendOTPButton').addEventListener('click', function () {
    var mobileNumber = document.getElementById('mobileNumber').value;
  
    // Validate the mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
      alert('Invalid mobile number. Please enter a 10-digit mobile number.');
      return;
    }
  
    // Generate OTP and display OTP input field
    var otp = generateOTP();
    alert('OTP sent to ' + mobileNumber + '.');
    document.getElementById('otpInputContainer').style.display = 'block';
    document.getElementById('resendOTPButton').style.display = 'block';
    document.getElementById('verifyOTPButton').style.display = 'block';
    document.getElementById('sendOTPButton').style.display = 'none';
  
    // Event listener for Verify OTP button click
    document.getElementById('verifyOTPButton').addEventListener('click', function () {
      var enteredOTP = document.getElementById('otp').value;
  
      // Verify the entered OTP
      if (enteredOTP === otp) {
        alert('OTP verification successful!');
      } else {
        alert('OTP verification failed. Please try again.');
      }
    });
  });
  
  // Event listener for Resend OTP button click
  document.getElementById('resendOTPButton').addEventListener('click', function () {
    var mobileNumber = document.getElementById('mobileNumber').value;
  
    // Validate the mobile number
    if (!/^\d{10}$/.test(mobileNumber)) {
      alert('Invalid mobile number. Please enter a 10-digit mobile number.');
      return;
    }
  
    // Generate OTP and display OTP input field
    var otp = generateOTP();
    alert('OTP resent to ' + mobileNumber + '.');
  
    // Clear the previous OTP value
    document.getElementById('otp').value = '';
  
    // Event listener for Verify OTP button click
    document.getElementById('verifyOTPButton').addEventListener('click', function () {
      var enteredOTP = document.getElementById('otp').value;
  
      // Verify the entered OTP
      if (enteredOTP === otp) {
        alert('OTP verification successful!');
      } else {
        alert('OTP verification failed. Please try again.');
      }
    });
  });
  