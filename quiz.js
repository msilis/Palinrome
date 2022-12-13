

let answer = true

do {
    let input = prompt('What is the biggest continent? \n a. Europe \n b. Asia \n c. Africa \n d. South America');
    if (input === 'a'){
        let tryAgain = prompt('Incorrect, would you like to try again? \n y/n')
        if(tryAgain === 'y'){
            answer= true;
        }else {
            alert('Thank you for playing');
            answer = false
        }
        
    }else if(input === 'b'){
        alert('Correct')
        answer = false;
    }else if(input === 'c'){
        let tryAgain = prompt('Incorrect, would you like to try again? \n y/n')
        if(tryAgain === 'y'){
            answer= true;
        }else {
            alert('Thank you for playing');
            answer = false
        }
    }else if (input === 'd'){
        let tryAgain = prompt('Incorrect, would you like to try again? \n y/n')
        if(tryAgain === 'y'){
            answer= true;
        }else {
            alert('Thank you for playing');
            answer = false
        }

    }


}
while (answer)