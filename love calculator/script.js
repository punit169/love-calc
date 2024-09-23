function calculate() {
    //alert("its working yaaaaaaaa.............")

    const name1 = document.getElementById("fname").value;
    const name2 = document.getElementById("sname").value;
    let love;
    if (name1 === '' || name2 === '') {
        alert("plaease enter both names.");
    }
    else {
        love = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        result.innerHTML = ` ${name1} and ${name2} 's love percentage = ${love} % `;
    }
    if (love < 30) {
        result.innerHTML += "<br>Not a grat match keep looking";
    }
    else if (love > 30 && love < 70) {
        result.innerHTML += "<br>There is a chance give it a try";
    }
    else {
        result.innerHTML += "<br>You two are great match";
    }
}

