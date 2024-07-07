let rateEl = document.getElementById("rate")
console.log(rateEl)

let rating = 0;

function increment(){
    if(rating != 10){
    rating = rating + 1;
    rateEl.innerText = `${rating}/10`
    }
    else{
        rateEl.innerText = `${rating}/10 (Cannot higher than 10)`
    }
}

function decrement(){
    if(rating != 0){
    rating = rating - 1;
    rateEl.innerText = `${rating}/10`
    }
    else{
        rateEl.innerText = `${rating}/10 (Cannot lower than 0)`
    }
}