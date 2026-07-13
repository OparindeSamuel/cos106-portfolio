function calculateResult(){

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;

    let math = Number(document.getElementById("math").value);
    let english = Number(document.getElementById("english").value);
    let ict = Number(document.getElementById("ict").value);

    let total = math + english + ict;

    let average = total / 3;

    let grade;

    if(average >= 70){

        grade = "A";

    }

    else if(average >= 60){

        grade = "B";

    }

    else if(average >= 50){

        grade = "C";

    }

    else if(average >= 45){

        grade = "D";

    }

    else if(average >= 40){

        grade = "E";

    }

    else{

        grade = "F";

    }

    document.getElementById("output").innerHTML =

    "<h3>Student Result</h3>" +

    "<p><b>Name:</b> " + name + "</p>" +

    "<p><b>ID:</b> " + id + "</p>" +

    "<p><b>Total:</b> " + total + "</p>" +

    "<p><b>Average:</b> " + average.toFixed(2) + "</p>" +

    "<p><b>Grade:</b> " + grade + "</p>";

}

function clearForm(){

    document.getElementById("name").value = "";

    document.getElementById("id").value = "";

    document.getElementById("math").value = "";

    document.getElementById("english").value = "";

    document.getElementById("ict").value = "";

    document.getElementById("output").innerHTML = "";

}