let sum = document.getElementById('Sum');
let btn = document.getElementById('sum_btn');
let i1 = document.getElementById('n1');
let i2 = document.getElementById('n2');

btn.addEventListener('click',()=>{
	let val1 = parseInt(i1.value);
	let val2 = parseInt(i2.value);
	let total = val1+val2;
	sum.innerText = `${total}`;
})