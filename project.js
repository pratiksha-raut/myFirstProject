/*

var player_score= document.querySelectorAll('[class = player-score]') ;
console.log(player_score);

for(var i = 0 ;i < player_score.length ; i++){
	player_score[i].textContent = "00";
}

*/

var scores,activePlayer,roundScore,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',() => {
	
	if(gamePlaying){
		var dice = Math.floor(Math.random()* 6) +1;
		//console.log(dice);

		var diceDom = document.querySelector('.dice');
		//console.log(diceDom);

		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + dice + '.png';

		if(dice !== 1){
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
			
		}
		else
		{
			nextPlayer();
		}
	}
	
});


function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');


		document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-hold').addEventListener('click',() => {
	if(gamePlaying){
		scores[activePlayer] +=  roundScore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		if(scores[activePlayer] >= 20){
			document.querySelector('#name-' + activePlayer).textContent = 'winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
		else
		{
			nextPlayer();
		}
	}
	
});

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'player 1';
	document.getElementById('name-1').textContent = 'player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');


}