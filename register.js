// import "./game"



// var Days = [31,28,31,30,31,30,31,31,30,31,30,31];// index => month [0-11]
// $(document).ready(function(){
//     var option = '<option value="day">day</option>';
//     var selectedDay="day";
//     for (var i=1;i <= Days[0];i++){ //add option days
//         option += '<option value="'+ i + '">' + i + '</option>';
//     }
//     $('#day').append(option);
//     $('#day').val(selectedDay);

//     var option = '<option value="month">month</option>';
//     var selectedMon ="month";
//     for (var i=1;i <= 12;i++){
//         option += '<option value="'+ i + '">' + i + '</option>';
//     }
//     $('#month').append(option);
//     $('#month').val(selectedMon);

//     var option = '<option value="month">month</option>';
//     var selectedMon ="month";
//     for (var i=1;i <= 12;i++){
//         option += '<option value="'+ i + '">' + i + '</option>';
//     }
//     $('#month2').append(option);
//     $('#month2').val(selectedMon);
  
//     var d = new Date();
//     var option = '<option value="year">year</option>';
//     selectedYear ="year";
//     for (var i=1930;i <= d.getFullYear();i++){// years start i
//         option += '<option value="'+ i + '">' + i + '</option>';
//     }
//     $('#year').append(option);
//     $('#year').val(selectedYear);
// });
// function isLeapYear(year) {
//     year = parseInt(year);
//     if (year % 4 != 0) {
// 	      return false;
// 	  } else if (year % 400 == 0) {
// 	      return true;
// 	  } else if (year % 100 == 0) {
// 	      return false;
// 	  } else {
// 	      return true;
// 	  }
// }

// function change_year(select)
// {
//     if( isLeapYear( $(select).val() ) )
// 	  {
// 		    Days[1] = 29;
		    
//     }
//     else {
//         Days[1] = 28;
//     }
//     if( $("#month").val() == 2)
// 		    {
// 			       var day = $('#day');
// 			       var val = $(day).val();
// 			       $(day).empty();
// 			       var option = '<option value="day">day</option>';
// 			       for (var i=1;i <= Days[1];i++){ //add option days
// 				         option += '<option value="'+ i + '">' + i + '</option>';
//              }
// 			       $(day).append(option);
// 			       if( val > Days[ month ] )
// 			       {
// 				          val = 1;
// 			       }
// 			       $(day).val(val);
// 		     }
//   }

// function change_month(select) {
//     var day = $('#day');
//     var val = $(day).val();
//     $(day).empty();
//     var option = '<option value="day">day</option>';
//     var month = parseInt( $(select).val() ) - 1;
//     for (var i=1;i <= Days[ month ];i++){ //add option days
//         option += '<option value="'+ i + '">' + i + '</option>';
//     }
//     $(day).append(option);
//     if( val > Days[ month ] )
//     {
//         val = 1;
//     }
//     $(day).val(val);
// }

// function submit(){
//     if(verifyPassword){
//         openGame();
//     }
    

// // }

// function verifyForm(){
//     print("checked")
//     var c =function verifyPassRepeat(){
//         var pw = document.getElementById("psw").value; 
//         var Rpw = document.getElementById("psw-repeat").value; 
//       //maximum length of password validation  
//       print("checked")
//       if(Rpw != pw) {  
//         print("checked")
//         alert("**passwords ate not mache");  
//        return false;  
//     }else{
//        return true;
//     }
//     if(c ){
//         openGame();
//     }
// }}
// function verifyPasswordLen() {  
//     var pw = document.getElementById("psw").value;       
//    //minimum password length validation  
//     if(pw.length < 8) {  
//         alert("**Password length must be atleast 8 characters");  
//        return false;  
//     }  else{
        
//         return true;
//     }

// }

// var registeredUsers = {};
// function verifyUserName() {
//      var pw = document.getElementById("psw").value;       

//     var username = document.getElementById("username").value;
   
//         if(username in registeredUsers){
//             alert("**user name is taken")
//             return false;
//         }else{
//             registeredUsers[username]=pw; 
//             return true;
           
//         }
     
// }

// var registeredUsers={};
// function ValidForm(){
//     let username = document.forms["LogIn"]["username"].value;
//     let password = document.forms["LogIn"]["psw"].value;
//     if (username == "") {
//         alert("user name must be filled out");
//         return false;
//     }
//     else if (password=="") {
//         alert("passsword must be filled out");
//             return false;

//     }else if(username!="p" && !(username in registeredUsers)){
//         alert("incorrect userName");
//         return false;
//         }       
//     }else  if(username in registeredUsers){
//         if(password !=registeredUsers[username]){
            
//         }else if(password==""){
//             alert("passsword must be filled out");
//             return false;
//         }
        
//     }
        
//     }
