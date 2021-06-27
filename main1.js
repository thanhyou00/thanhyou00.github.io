
var pass = prompt('Please enter a password')

if(pass=='123456') {
    alert('You have successfully accessed !')  
} else {
    alert('Access is denied !')
    history.back();
}