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
		result.innerHTML = "<p>If you deposit <b><mark>"+principal+"<\/mark><\/b>,<\/p>";
		result.innerHTML += "<p>at an interest rate of <b><mark>"+rate+"%<\/mark><\/b>.<\/p>";
		result.innerHTML += "<p>You will receive an amount of <b><mark>"+interest+"<\/mark><\/b>,<\/p>";
		result.innerHTML += "<p>in the year <b><mark>"+year;+"<\/mark><\/b><\/p>";
	}
	
}

function updateRate()
{
	var rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = rateval+"%";
}

