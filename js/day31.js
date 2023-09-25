

//const btnElt = document.getElementById('btn')

//btnElt.addEventListener('click', joke)



/*function joke(){
	for (let i = 0; i <= 3; i++){
	if (i == 1){
		console.log('This is real')
	}
	else if(i == 2) {
		console.log('This will appear on the second click')
	}
	else if (i == 3){
		console.log('On the third click, this will pop up')
	}
	else{
		console.log('none')
	}


	}
}

  function joke(){
  	const paraElt = document.getElementById('text')
  	paraElt.innerHTML= 'Hello World'
  }*/

document.getElementById('btn').addEventListener('click', toggleText);
function toggleText(){
	var textBox = document.getElementById('txt');
	switch (textBox.className) {
	case 'txt1': {
		textBox.innerHTML = 'You smoke weed, and you take some coke. A few minutes after, you hear chooboi chooboi in your head. Its a setup. The moment you answer, Yei! You are mad.'
		swapClasses(textBox, 'txt2');
		break;
	}
case 'txt2': {
	textBox.innerHTML = 'I dreamt I was forced to eat a giant cake. When I woke up my pillow was gone';
	swapClasses(textBox, 'txt3');
	break;
}

case 'txt3': {
	textBox.innerHTML = 'The nigerian national anthem is very long because they have to explain all their problems in it..';
	swapClasses(textBox, 'txt4');
	break;
}

case 'txt4': {
	textBox.innerHTML = 'No matter how bad you are, you’re not useless. You can still be used as a bad example.';
	swapClasses(textBox, 'txt5');
	break;
}

case 'txt5': {
	textBox.innerHTML = 'Do not worry if time does not wait for you. Simply remove the battery from the clock and live your life.';
	swapClasses(textBox, 'txt6');
	break;
}

case 'txt6': {
	textBox.innerHTML = 'A boy asked his dad-"Dad, whats the difference between confident and confidential?", the dad replied="You are my son, i am confident about that. your friend over there is also my son but thats confidential"';
	swapClasses(textBox, 'txt7');
	break;
}

case 'txt7': {
	textBox.innerHTML = 'Age 7: I want to be a doctor when i grow up.  Age 16: Mum, look! all As. Age 20: Mum, medicine is hard. Age 35: Make some noise for DJ Chukwu Ebuka';
	swapClasses(textBox, 'txt8');
	break;
}


case 'txt8': {
	textBox.innerHTML = 'The awkward moment when you help your crush with her assignment and she gets zero. My brother, just forget about any explanation and go your way peacefully';
	swapClasses(textBox, 'txt9');
	break;
}


case 'txt9': {
	textBox.innerHTML = 'It is only in Nigerian movie that you will see cassava plant in an evil forest. who planted the cassava?';
	swapClasses(textBox, 'txt10');
	break;
}


case 'txt10': {
	textBox.innerHTML = 'My school teacher taught me most of the lies i tell today, she would tell me to write a letter to my uncle abroad when she knows my uncle is in the village';
	swapClasses(textBox, 'txt11');
	break;
}

	case 'txt6': {
	textBox.innerHTML = 'Which part of Nigeria is my fatherland? I am broke and want to sell my portion.';
	break;
}

}
}

function swapClasses(elem, targetClass) {
	elem.className = targetClass;
}



