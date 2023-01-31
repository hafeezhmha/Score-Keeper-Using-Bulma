const btn1 = document.querySelector('#p1Button');
const btn2 = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;
btn1.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
    }
    if(p1Score == winningScore){
    isGameOver = true;
    p1Display.classList.add('has-text-success');
    p2Display.classList.add('has-text-danger');
    btn1.disabled = true;
    btn2.disabled = true;
    }
    p1Display.textContent = p1Score;
})
btn2.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
    }
    if(p2Score == winningScore){
    isGameOver = true;
    p2Display.classList.add('has-text-success');
    p1Display.classList.add('has-text-danger');
    btn1.disabled = true;
    btn2.disabled = true;
    }
    p2Display.textContent = p2Score;
})

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    btn1.disabled = false;
    btn2.disabled = false;
}

