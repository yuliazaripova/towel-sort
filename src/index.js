
// You should implement your task here.

module.exports = function towelSort (matrix) {
	matrix = typeof matrix !== 'undefined' ?  matrix : [];
	let arr = [];
	let count = 0;
	for (i of matrix) {
		if (count % 2 == 0) {
			arr.push (...i)
		} else {
			let j = [].concat(...i).reverse();
			arr.push(...j)
		}
		count +=1;
	}
 	return arr;
}
