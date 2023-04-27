$(document).ready(function () {
    localStorage.setItem("p", "testuser");

    //Check if userName already exists.
    $.validator.addMethod('validUserName', function (value, element) {
        isNull = localStorage.getItem(value);
        if (isNull == null) {
            return true;
        }
        else return false;
    });

    //Check if the password valid.
    $.validator.addMethod("validPassword", function (value, element) {
        return this.optional(element) || /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%&*]+$/i.test(value);
    });

    //Check if the fullName is from letters only. 
    $.validator.addMethod("onlyLetters", function (value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    });
});

$(function () {
    /* ---Validate the registerion form---  */
    $("#register").validate({
        rules: {
            //name=""
            userName: {
                required: true,
                validUserName: true
            },
            password: {
                required: true,
                minlength: 6,
                validPassword: true
            },
            firstName: {
                required: true,
                onlyLetters: true
            },
            lastName: {
                required: true,
                onlyLetters: true
            },
            email: {
                required: true,
                validEmail: true
            },
            birthday: {
                required: true ,
                validDate: true

            }
        },

        // error messages
        messages: {
            userName: {
                required: "please enter your user name",
                validUserName: "this user name is already exist."
            },
            password: {
                required: "please enter your password",
                minlength: "your password must contain at least 6 characters.",
                validPassword: "your passeord must contain letters and least on digit."
            },

            firstName: {
                required: "please enter your first name",
                onlyLetters: "your name must contain only letters."
            },
            lastName: {
                required: "please enter your first name",
                onlyLetters: "your name must contain only letters."
            },
            email: {
                required: "please enter your email address",
                email: "you press invalid email address."
            },
            birthday: {
                required: "please enter your birth date",
                validDate: "please enter a valid date in the format dd/mm/yyyy"
              }
                      },

        //Now we must make sure that the new user is entered into the system.
        submitHandler: function () {
            let new_userName = document.getElementById("userName").value;
            let new_pwd = document.getElementById("password").value;
            console.log(new_userName);
            localStorage.setItem(new_userName, new_pwd); //insert to localStorage the new key,val.
            console.log(localStorage);

            //After adding him to the system we will move to 'login-screen'.
            changeScreen('login-screen');
            document.getElementById("register").reset();
        }
    })
});

$.validator.addMethod("validDate", function (value, element) {
  // Check if the date is in the format dd/mm/yyyy
  if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) {
    // Parse the date parts to integers
    var parts = value.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    // Check if the year, month, and day are valid
    if (year > 0 && month > 0 && month <= 12 && day > 0 && day <= new Date(year, month, 0).getDate()) {
      return true;
    }
  }

  return false;
});


$.validator.addMethod("validEmail", function (value, element) {
    // Check if the date is in the format dd/mm/yyyy
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailPattern.test(value)) {
    return true;
    }
  
    return false;
  });


// function valDate(date) {
//     let dateformat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;

//     // Matching the date through regular expression      
//     if (date.match(dateformat)) {
//         let operator = date.split('/');

//         // Extract the string into month, date and year      
//         let datepart = [];
//         if (operator.length > 1) {
//             datepart = date.split('/');
//         }
//         let day = parseInt(datepart[0]);
//         let month = parseInt(datepart[1]);
//         let year = parseInt(datepart[2]);

//         // Create a list of days of a month      
//         let ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//         if (month == 1 || month > 2) {
//             if (day > ListofDays[month - 1]) {
//                 //to check if the date is out of range
//                 console.log("Invalid date")     
//                 return false;
//             }
//         } else if (month == 2) {
//             let leapYear = false;
//             if ((!(year % 4) && year % 100) || !(year % 400)) leapYear = true;
//             if ((leapYear == false) && (day >= 29)) {
//                 console.log("Invalid date")
//                 return false;
//             }
//             else
//                 if ((leapYear == true) && (day > 29)) {
//                     console.log('Invalid date format!');
//                     return false;
//                 }
//         }
//     } else {
//         console.log("Invalid date format!");
//         return false;
//     }
//     return "Valid date";
// }



