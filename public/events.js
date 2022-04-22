var elUsername = document.getElementById('username'); // Get username input
var elPassword = document.getElementById('pwd');
var elForm = document.getElementById('formSignup');
var elTerms = document.getElementById('terms');
var elSelectPackage = document.getElementById('package');


function checkUsername() {                             // Declare function
  var elfbu = document.getElementById('fbusername');     // Get feedback element
  if (this.value.length < 5) {                         // If username too short
    elfbu.textContent = '*Username must be 5 characters or more'; // Set msg
  } else {                                             // Otherwise
    elfbu.textContent = '';                            // Clear msg
  }
}
function checkPassword(){
  var elfbp = document.getElementById('fbpassword');
  if (this.value.length < 8) {                         // If username too short
    elfbp.textContent = '*Password must be 8 characters or more'; // Set msg
  } 
  else {                                             // Otherwise
	if (!(/^[A-Za-z]+$/.test(this.value) || /^[0-9]+$/.test(this.value) ))
    {
		elfbp.textContent = '';
	}
	else
	{
	   elfbp.textContent = '*Password should contain both numbers and alphabets';                            // Clear msg
	}
  }
}

function checkTerms(event) {                             // Declare function
  var elMsg = document.getElementById('feedback');
  if (!elTerms.checked) {                                // If checkbox ticked
    
	elMsg.textContent = '*You must agree to the terms.'; // Show message
    event.preventDefault();                              // Don't submit form
  }
  else
  {
	elMsg.textContent = '';
  }
} 

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  var elPackageHint   = document.getElementById('packageHint');
  if (pack === 'monthly') {                              // If monthly package
    elPackageHint.innerHTML = 'Save 500 if you pay for 1 year!';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = '';            // Show this message
  }
}

// When it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);
elPassword.addEventListener('blur', checkPassword, false);
elForm.addEventListener('submit',checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);