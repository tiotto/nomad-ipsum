'use strict';

const words = ['wise', 'man', 'said',
    'only', 'fools', 'rush', 'in',
    'but', 'i', 'cant', 'help',
    'falling', 'love', 'with',
    'you', 'shall', 'stay', 'would',
    'it', 'be', 'a', 'sin', 'if',
    'like', 'river', 'flows',
    'surely', 'to', 'the', 'sea',
    'darling', 'so', 'it', 'goes',
    'some', 'things', 'are',
    'meant', 'take', 'my', 'hand',
    'whole', 'life', 'for'
];
const text = document.getElementById('text');
let counter = (Math.floor((Math.random() * (44 - 1) + 5)));
var sentence = ''; 

function generator() {
	for (let i = 0; i < counter; i++) {
		const index = (Math.floor((Math.random() * (44 - 1) + 1)));
		sentence = sentence + words[index] + ' '; 
	}
}

generate.onclick = function(element) {
	generator();

	text.value = sentence;
	text.select()
	document.execCommand("Copy");
};