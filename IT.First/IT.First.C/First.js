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
    if (sem === 'Second') {
        document.getElementById('first').style.display = 'none';
        document.getElementById('second').style.display = 'block';
    }
    else {
        document.getElementById('second').style.display = 'none';
        document.getElementById('first').style.display = 'block';
    }
}

function calculate() {
    var sem = document.getElementById("semister").value;
    if (sem === 'First') {
        FirstSem();
    }
    if (sem === 'Second') {
        SecondSem();
    }
}
function FirstSem() {
    let EM1 = gradePoint(document.getElementById("EM1").value);
    let EPEC = gradePoint(document.getElementById("EPEC").value);
    let CSHV = gradePoint(document.getElementById("CSHV").value);
    let PPSBME = gradePoint(document.getElementById("PPSBME").value);
    let BEEBCE = gradePoint(document.getElementById("BEEBCE").value);
    let EPLECL = gradePoint(document.getElementById("EPLECL").value);
    let LLHVAS = gradePoint(document.getElementById("LLHVAS").value);
    let CPLMPW = gradePoint(document.getElementById("CPLMPW").value);
    let BEELBCEL = gradePoint(document.getElementById("BEELBCEL").value);

    let CAEGCAMD = gradePoint(document.getElementById("CAEGCAMD").value);
    let SODECA1 = gradePoint(document.getElementById("SODECA1").value);


    EM1 *= 4;
    EPEC *= 4;
    CSHV *= 2;
    PPSBME *= 2;
    BEEBCE *= 2;
    EPLECL *= 1;
    LLHVAS *= 1;
    CPLMPW *= 1.5;
    BEELBCEL *= 1;
    CAEGCAMD *= 1.5;
    SODECA1 *= 0.5;
    let totalGradePoints = EM1 + EPEC + CSHV + PPSBME + BEEBCE + EPLECL + LLHVAS + CPLMPW + BEELBCEL + CAEGCAMD + SODECA1;
    console.log(totalGradePoints);
    let RESULT = totalGradePoints / 20.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}

function SecondSem() {
    let EM2 = gradePoint(document.getElementById("EM2").value);
    let EPEC = gradePoint(document.getElementById("EPEC").value);
    let CSHV = gradePoint(document.getElementById("CSHV").value);
    let PPSBME = gradePoint(document.getElementById("PPSBME").value);
    let BEEBCE = gradePoint(document.getElementById("BEEBCE").value);
    let EPLECL = gradePoint(document.getElementById("EPLECL").value);
    let LLHVAS = gradePoint(document.getElementById("LLHVAS").value);
    let CPLMPW = gradePoint(document.getElementById("CPLMPW").value);
    let BEELBCEL = gradePoint(document.getElementById("BEELBCEL").value);
    let CAEGCAMD = gradePoint(document.getElementById("CAEGCAMD").value);
    let SODECA2 = gradePoint(document.getElementById("SODECA2").value);

    EM2 *= 4;
    EPEC *= 4;
    CSHV *= 2;
    PPSBME *= 2;
    BEEBCE *= 2;
    EPLECL *= 1;
    LLHVAS *= 1;
    CPLMPW *= 1.5;
    BEELBCEL *= 1;
    CAEGCAMD *= 1.5;
    SODECA2 *= 0.5;
    let totalGradePoints = EM2 + EPEC + CSHV + PPSBME + BEEBCE + EPLECL + LLHVAS + CPLMPW + BEELBCEL + CAEGCAMD + SODECA2;
    console.log(totalGradePoints);
    let RESULT = totalGradePoints / 20.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}