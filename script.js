document.querySelector('form').addEventListener('submit' , checkGrade);


function checkGrade(e) {
    e.preventDefault();

    let myGrade = document.querySelector('input').value;

    let message = `<ul>`;

    console.log("RUNNING..." +myGrade);
    if (myGrade >=90) {
        message = 'You got an A';
    }

    if (myGrade > 79 && myGrade < 90) {
        message = 'You got a B';
    }

    if (myGrade >69 && myGrade < 80) {
        message = 'You got a C';
    }

    if (myGrade >59 && myGrade < 70){
        message = 'You got a D';
    }

    if (myGrade < 60) {
        message = 'You got a F, study harder next time';
    }
    message += `</ul>` 

    document.querySelector('#output').innerHTML = message;
}