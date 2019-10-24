
	function addNumbers()
	{
		var val1 = parseInt(document.getElementById("value1").value);
		var val2 = parseInt(document.getElementById("value2").value);
    var val3 = parseInt(document.getElementById("value3").value);
    var val4 = parseInt(document.getElementById("value4").value);
    var val5 = parseInt(document.getElementById("value5").value);
    var val6 = parseInt(document.getElementById("value6").value);
    var val7 = parseInt(document.getElementById("value7").value);
		var ansD = document.getElementById("answer");
		ansD.value = val1 + val2 + val3 +val4 +val5 +val6+ val7;
	}
