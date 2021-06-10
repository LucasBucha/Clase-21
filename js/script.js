var numbers = [18, 24, 35, 420, 2, 150, 24, 2, 10, 18];
var max = null;
var min = numbers[0];
var repetidos = {};

for (var i = 0; i < numbers.length; i++)
{
	console.log(numbers[i]);
}


for (var i = 0; i < numbers.length; i++)
{
	if (numbers[i] > max) 
	{
		max = numbers[i];
	}
}
console.log(max);


for (var i = 0; i < numbers.length; i++)
{
	if (numbers[i] < min) 
	{
		min = numbers[i];
	}
}
console.log(min);


numbers.forEach(
	function(numbers)
	{
		repetidos[numbers] = (repetidos[numbers] || 0) + 1;
	});
console.log(repetidos);
