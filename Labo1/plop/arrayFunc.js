function filledArray(array, value){
	for(let i=0; i<array.length; i++){
		if(array[i] !== value){
			return 0;
		}
	}
	return 1;
}

function fill(array, value){
	for (let i=0; i<array.length; i++) {
		array[i] = value;
	}
	return array;	//not required
}