// wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // get the checkbox element
    const checkbox = document.getElementById('myCheckbox');
  
    // add event listener for change event
    checkbox.addEventListener('change', function() {
      // check if the checkbox is checked
      if (checkbox.checked) {
        console.log('Checkbox is checked');
        document.body.style.background = "rgb(0, 180, 0)";
      } else {
        console.log('Checkbox is not checked');
        document.body.style.background = "rgb(220, 220, 220)";
      }
    });
  });
