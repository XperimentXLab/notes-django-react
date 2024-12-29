export const ACCESS_TOKEN = "access" //exporting ACCESS_TOKEN 
export const REFRESH_TOKEN = "refresh" //exporting REFRESH_TOKEN 

//how did i get the ACCESS_TOKEN and REFRESH_TOKEN from django?
//i got the ACCESS_TOKEN and REFRESH_TOKEN from django by creating a custom token response payload in the settings.py file 

//how is it got accedssed in the frontend?
//it is accessed in the frontend by using the localStorage.getItem() method to get the token from the local storage