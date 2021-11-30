function breakingRecords(scores) {
	// Write your code here

	
	let highest = 0;
	let lowest = 0;
	let sorted = [];
	let max = scores[0];
	let min = scores[0];
	for (let i = 0; i < scores.length; i++){
		
		if (scores[i] > max) {
			highest++;
		} else if (scores[i] < min) {
			lowest++;
		}
		sorted.push(scores[i]);
		max = Math.max(sorted);
		min = Math.min(sorted);
		
		

		

	}

	return [highest, lowest];

}

console.log(breakingRecords([3, 4 ,21 ,36 ,10 ,28 ,35, 5 ,24, 42]));