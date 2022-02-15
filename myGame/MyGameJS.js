//  // adding function on button - 
// //assigning player one to h1-leftScore and the second player to h1-rightScore, reset for resetting h1's
// var num_score1 = document.querySelector('#leftScore');
// var num_score2 = document.querySelector('#rightScore');
// var select = document.querySelector('#score-select');

// var button1 = document.querySelector('#player1');
// var button2 = document.querySelector('#player2');
// var button3 = document.querySelector('#reset');

// // while(select.value < 4 ){

// var count_left = 1;
// var count_right = 1;


// button1.addEventListener('click', function(){
//     while(count_left<=select.value)
//     {
//     count_left+=1;
//     num_score1.innerText = count_left;
//     if(count_left >= select.value) {
//         num_score1.style.color = 'green';
//         num_score2.style.color = 'red';
//         num_score1.innerText=selec.value;
//     }
// }

// });

// button2.addEventListener('click', function(){
//     while(count.right<=select.value)
//     {
//     count_right+=1;
//     num_score2.innerText = count_right;
    
//     if(count_right >= select.value) {
//         num_score2.style.color = 'green';
//         num_score1.style.color = 'red';
//         num_score2.innerText=selec.value;
//     }
// }
// });



// button3.addEventListener('click', function(){
//     num_score1.innerText=0;
//     num_score2.innerText=0;
//     num_score1.style.color = 'black';
//     num_score2.style.color = 'black';
// });

const p1button = document.querySelector('#player1');
const p2button = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const select = document.querySelector('#score-select');
const p1Display = document.querySelector('#leftScore');
const p2Display = document.querySelector('#rightScore');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1Score;
    }
})

p2button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
        }
        p2Display.textContent = p2Score;
    }
})

select.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetf();
})


reset.addEventListener('click', resetf);

function resetf() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('winner','loser');
}