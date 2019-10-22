

function checkboxes() {
  let checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7;
  checkbox1 = document.getElementById('Checkbox1').checked;
  checkbox2 = document.getElementById('Checkbox2').checked;
  checkbox3 = document.getElementById('Checkbox3').checked;
  checkbox4 = document.getElementById('Checkbox4').checked;
  checkbox5 = document.getElementById('Checkbox5').checked;
  checkbox6 = document.getElementById('Checkbox6').checked;
  checkbox7 = document.getElementById('Checkbox7').checked;

  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "Landscape";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "Portrait";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "Square";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
  if ( checkbox4 == true ) {
    document.getElementById('checkbox4_answer').innerHTML = "Landscape";
  } else {
    document.getElementById('checkbox4_answer').innerHTML = "Answer?";
  }
  if ( checkbox5 == true ) {
    document.getElementById('checkbox5_answer').innerHTML = "Portrait";
  } else {
    document.getElementById('checkbox5_answer').innerHTML = "Answer?";
  }
  if ( checkbox6 == true ) {
    document.getElementById('checkbox6_answer').innerHTML = "Square";
  } else {
    document.getElementById('checkbox6_answer').innerHTML = "Answer?";
  }
  if ( checkbox7 == true ) {
    document.getElementById('checkbox7_answer').innerHTML = "Square";
  } else {
    document.getElementById('checkbox7_answer').innerHTML = "Answer?";
  }
}
