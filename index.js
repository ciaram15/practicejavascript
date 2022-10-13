let homescoreEl = document.getElementById("homescore")
let awayscoreEl = document.getElementById("awayscore")

let homescore = 0 
let awayscore = 0 

function homeplus1(){
    homescore = homescore + 1
    homescoreEl.textContent = homescore
}

function homeplus2(){
    homescore = homescore + 2
    homescoreEl.textContent = homescore
}

function homeplus3(){
    homescore = homescore + 3
    homescoreEl.textContent = homescore
}

function homeplus4(){
    awayscore = awayscore + 1
    awayscoreEl.textContent = awayscore
}

function homeplus5(){
    awayscore = awayscore + 2
    awayscoreEl.textContent = awayscore
}

function homeplus6(){
    awayscore = awayscore + 3
    awayscoreEl.textContent = awayscore
}