function gradePoint(g) {
    if (g == "A++") {
        return 10;
    } else if (g == "A+") {
        return 9;
    } else if (g == "A") {
        return 8.5;
    } else if (g == "B+") {
        return 8;
    } else if (g == "B") {
        return 7.5;
    } else if (g == "C+") {
        return 7;
    } else if (g == "C") {
        return 6.5;
    } else if (g == "D+") {
        return 6;
    } else if (g == "D") {
        return 5.5;
    } else if (g == "E+") {
        return 5;
    } else if (g == "E") {
        return 4;
    } else if (g == "F") {
        return 0;
    }
}

function selectSem() {

    var sem = document.getElementById("semister").value;
    if (sem === 'Eighth') {
        document.getElementById('seventh').style.display = 'none';
        document.getElementById('eighth').style.display = 'block';
    }
    else {
        document.getElementById('eighth').style.display = 'none';
        document.getElementById('seventh').style.display = 'block';
    }
}

function calculate() {
    var sem = document.getElementById("semister").value;
    if (sem === 'Seventh') {
        SeventhSem();
    }
    if (sem === 'Eighth') {
        EighthSem();
    }
}
function SeventhSem() {
    let BDA = gradePoint(document.getElementById("BDA").value);
    let OE1 = gradePoint(document.getElementById("OE1").value);
    let BDAL = gradePoint(document.getElementById("BDAL").value);
    let CSL = gradePoint(document.getElementById("CSL").value);
    let IT = gradePoint(document.getElementById("IT").value);
    let S = gradePoint(document.getElementById("S").value);
    let SODECA7 = gradePoint(document.getElementById("SODECA7").value);

    BDA *= 3;
    OE1 *= 3;
    BDAL *= 2;
    CSL *= 2;
    IT *= 2.5;
    S *= 2;
    SODECA7 *= 0.5;

    let totalGradePoints = BDA + OE1 + BDAL + CSL + IT + S + SODECA7;
    let RESULT = totalGradePoints / 15;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}

function EighthSem() {
    let IOT = gradePoint(document.getElementById("IOT").value);
    let OE2 = gradePoint(document.getElementById("OE2").value);
    let IOTL = gradePoint(document.getElementById("IOTL").value);
    let STVL = gradePoint(document.getElementById("STVL").value);
    let P = gradePoint(document.getElementById("P").value);
    let SODECA8 = gradePoint(document.getElementById("SODECA8").value);

    IOT *= 3;
    OE2 *= 3;
    IOTL *= 1;
    STVL *= 1;
    P *= 7;
    SODECA8 *= 0.5;

    let totalGradePoints = IOT + OE2 + IOTL + STVL + P + SODECA8;
    let RESULT = totalGradePoints / 15.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}