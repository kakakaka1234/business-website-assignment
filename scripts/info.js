

function checkboxes() {
  let checkbox1, checkbox2, checkbox3, checkbox4, checkbox5, checkbox6, checkbox7;
  checkbox1 = document.getElementById('checkbox1').checked;
  checkbox2 = document.getElementById('checkbox2').checked;
  checkbox3 = document.getElementById('checkbox3').checked;
  checkbox4 = document.getElementById('checkbox4').checked;
  checkbox5 = document.getElementById('checkbox5').checked;
  checkbox6 = document.getElementById('checkbox6').checked;
  checkbox7 = document.getElementById('checkbox7').checked;

  if ( checkbox1 == true ) {
    document.getElementById('checkbox1_answer').innerHTML = "A monitor is an electronic visual computer display that includes a screen, circuitry and the case in which that circuitry is enclosed. ";
  } else {
    document.getElementById('checkbox1_answer').innerHTML = "Answer?";
  }
  if ( checkbox2 == true ) {
    document.getElementById('checkbox2_answer').innerHTML = "The motherboard is the main circuit board of your computer and is also known as the mainboard or logic board.";
  } else {
    document.getElementById('checkbox2_answer').innerHTML = "Answer?";
  }
  if ( checkbox3 == true ) {
    document.getElementById('checkbox3_answer').innerHTML = "CPU (pronounced as separate letters) is the abbreviation for central processing unit.";
  } else {
    document.getElementById('checkbox3_answer').innerHTML = "Answer?";
  }
  if ( checkbox4 == true ) {
    document.getElementById('checkbox4_answer').innerHTML = "RAM (Random Access Memory) is the hardware in a computing device where the operating system (OS), application programs and data in current use are kept so they can be quickly reached by the device's processor.";
  } else {
    document.getElementById('checkbox4_answer').innerHTML = "Answer?";
  }
  if ( checkbox5 == true ) {
    document.getElementById('checkbox5_answer').innerHTML = "A power supply is an electrical device that supplies electric power to an electrical load.";
  } else {
    document.getElementById('checkbox5_answer').innerHTML = "Answer?";
  }
  if ( checkbox6 == true ) {
    document.getElementById('checkbox6_answer').innerHTML = "A hard disk drive, hard disk, hard drive, or fixed disk is an electro-mechanical data storage device that uses magnetic storage to store and retrieve digital information using one or more rigid rapidly rotating disks coated with magnetic material.";
  } else {
    document.getElementById('checkbox6_answer').innerHTML = "Answer?";
  }
  if ( checkbox7 == true ) {
    document.getElementById('checkbox7_answer').innerHTML = "Most interactions with a computer involve using a keyboard and a mouse. The keyboard allows the user to type letters and numbers and the mouse allows the user to position the cursor, draw and execute program functions by clicking mouse buttons.";
  } else {
    document.getElementById('checkbox7_answer').innerHTML = "Answer?";
  }
}
