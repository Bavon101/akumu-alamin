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
		max = Math.max.apply(null,sorted);
		min = Math.min.apply(null,sorted);
		
		

		

	}

	return [highest, lowest];

}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function designerPdfViewer(h, word) {
	// Write your code here
	let wordHeight = [];
	for (let i = 0; i < word.length; i++){
		let index = alphabets.indexOf(word[i]);
		wordHeight.push(h[index]);
		
	}
	let height = Math.max.apply(null,wordHeight);

	return (height * word.length);

}


console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba"));