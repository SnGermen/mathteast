

const button = document.getElementById('mama');

button.addEventListener('click', chkteast);

function chkteast() {
    let resalt = 0;

    let a1 = document.getElementById('q1').value;
    if (a1 === '10') {
        resalt++;
    } else {
        resalt--;
    }

    let a2 = document.getElementById("q2").value;
    if (a2 === '25') {
        resalt++;
    } else {
        resalt--;
    }

    let a3 = document.getElementById("q3").value;
    if (a3 === '2775') {
        resalt++;
    } else {
        resalt--;
    }

    let a4 = document.getElementById("q4").value;
    if (a4 === '392171') {
        resalt++;
    } else {
        resalt--;
    }

    let a5 = document.getElementById("q5").value;
    if (a5 === '1111') {
        resalt++;
    } else {
        resalt--;
    }

    alert(`Количество правильных значений ${resalt}`);
}





