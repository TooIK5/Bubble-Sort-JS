var arr = [],
arr2 = [],
N = 20,
container;



for (let i = 0; i < N; i++) {
	arr.push(Math.round(Math.random() * 100));
}


for (let i = 0; i < N; i++) {
	arr2.push(Math.round(Math.random() * 100));
}


document.write('<br>' + arr);

for (let j = 0; j < N; j++) {
	for (i = 0; i < N - 1; i++) {
		if (arr[i+1] < arr[i]) {
			container = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = container;
		}
	}
}

document.write('<br>' + arr);

for (let i = 0; i < arr2.length; i++) {
	var MAXval = arr[0];
	if(arr2[i] > MAXval) {
		MAXval = arr[i];
	}
}

document.write('<br> MAX: ' + MAXval);

var n = arr2.length;
var MaxVal = 0;


for (let j = 0; j < arr2.length; j++) {
	for (let i = 0; i < n; i++) {
		if(arr2[i] > arr2[MaxVal]) {
			MaxVal = i;
		}
	}
	n -= 1; //it's important!
	let container = arr2[n];
	arr2[n] = arr2[MaxVal];
	arr2[MaxVal] = container;
	MaxVal = 0;
}

document.write('<br> Сортировка поиском максимального: ' + arr2);

let array = [1,2,3,4,5,6,7,8,9];

function binary(defined, value) {
	let midle,
	low = 0,
	high = defined.length - 1;
  
	while (low <= high) {
		midle = Math.floor((low + high) / 2);

		if (defined[midle] === value) {
			return document.write('<br>' + ' This nubmer is: '  + midle);
		}
		else if (defined[midle] < value) {
			low = midle + 1;
		}
		else 
		{	
			high = midle - 1;
		}
	}
}

binary(array,5);

