function validate(){


var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var submit = document.getElementById("addBtn");
var error = document.getElementById("demo");

var pass =   password.length;
var extract = username.slice(-10);

var condition = "@gmail.com";
var condition2 = 5;


                    if(extract == condition && pass > condition2){
                        
                        
                    return true;
                        
                        
                    }
                    else

                    {
                        
                    demo.textContent = "Invalid email format or password too short.";    
                        
                    return false;

                    
                 
                        
                        
                    }
     }