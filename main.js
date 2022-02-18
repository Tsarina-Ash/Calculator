  ///////////////////////
 ///SIMPLE CALCULATOR///
///////////////////////

        //defining what "sub-area" does what

        let form = document.getElementById('demoForm'), 
		formData = form.elements; 
console.log(formData);

        //defining X/Y/OP

function showData(event){
	let x = parseInt(formData['x'].value),
			y = parseInt(formData['y'].value),
			op = formData['operation'].value, 
			out;
	
        //defining the equations

	let output = document.getElementById('output');

        function add(x,y){
            return x+y;
        }

        function subtract(x,y){
            return x-y;
        }

        function multiply(x,y){
            return x*y;
        }

        function divide(x,y){
            return x/y;
        }

        //allows proper switching between submatters

	switch(op){
		case 'add':
			out = add(x,y);
		break;
		case 'subtract':
			out = subtract(x,y);
		break;
		case 'add':
			out = multiply(x,y);
		break;
		case 'subtract':
			out = divide(x,y);
		break;        
	}

        //"dispensing" the answer

	output.innerHTML = `${x} ${op} ${y} = ${out} `;

        //prevents page from auto-refreshing

	event.preventDefault();

}

form.addEventListener('submit',showData) // this "listens" for the submit button to be clicked and triggers our "showData" function when it is.

  ////////////////////////
 ///COMPLEX CALCULATOR///
////////////////////////