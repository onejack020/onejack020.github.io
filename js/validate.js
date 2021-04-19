function validate(event) {

  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  document.getElementById('errors_lat').innerHTML = "";
  document.getElementById('errors_lon').innerHTML = "";
  
  input_lat = document.getElementById('input_latitude').value.trim();
  input_lon = document.getElementById('input_longitude').value.trim();
  flag=true;
  if(input_lat <-90 || input_lat > 90 ||parseInt(input_lat)!=input_lat){
        document.getElementById('errors_lat').innerHTML = "must be a valid Latitude (-90 to 90)";
        flag=false;
        }
  if (input_lon < -180 || input_lon > 180||parseInt(input_lon)!=input_lon) { 
     document.getElementById('errors_lon').innerHTML = "must be a valid Longitude (-180 to 180)";
     flag=false
      }
   if(flag==false){
     return false;
   }  
   else if(flag==true){
   return true;
   }



  console.log('TODO - validate the longitude, latitude values before submitting');
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
