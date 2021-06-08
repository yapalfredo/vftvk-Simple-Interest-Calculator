function compute()
{
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * (rate / 100);
	var year = new Date().getFullYear() + parseInt(years);
	var result = document.getElementById("result");

	if (principal <=0){
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}
	else {
		result.innerHTML = "If you deposit <b><mark>"+principal+"<\/mark><\/b>,<\/br>";
		result.innerHTML += "at an interest rate of <b><mark>"+rate+"%<\/mark><\/b>.<\/br>";
		result.innerHTML += "You will receive an amount of <b><mark>"+interest+"<\/mark><\/b>,<\/br>";
		result.innerHTML += "in the year <b><mark>"+year;+"<\/mark><\/b><\/br>";
	}
	
}

function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval+"%";
}

