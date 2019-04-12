var arr = [],
arr2 = [],
N = 20,
container,
value = 99; 

for (let i = 0; i < N; i++) {
	arr.push(Math.round(Math.random() * 100));
};

document.write('<br>' + arr);

for (let j = 0; j < N; j++) {
	for (i = 0; i < N; i++) {
		if (arr[i+1] < arr[i]) {
			container = arr[i+1];
			arr[i+1] = arr[i];
			arr[i] = container;
		};
	};
};
document.write('<br>' + arr);

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
		};	
	};
//return - 1;
};

binary(arr, value);

for (let i = 0; i < N; i++) {
	arr2.push(Math.round(Math.random() * 100));
};

document.write('<br>' + arr);

while (arr2[i])
