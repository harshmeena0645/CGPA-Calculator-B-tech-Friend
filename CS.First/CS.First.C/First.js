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
    let EPEC1 = gradePoint(document.getElementById("EPEC1").value);
    let CSHV1 = gradePoint(document.getElementById("CSHV1").value);
    let PPSBME1 = gradePoint(document.getElementById("PPSBME1").value);
    let BEEBCE1 = gradePoint(document.getElementById("BEEBCE1").value);
    let EPLECL1 = gradePoint(document.getElementById("EPLECL1").value);
    let LLHVAS1 = gradePoint(document.getElementById("LLHVAS1").value);
    let CPLMPW1 = gradePoint(document.getElementById("CPLMPW1").value);
    let BEELBCEL1 = gradePoint(document.getElementById("BEELBCEL1").value);
    let CAEGCAMD1 = gradePoint(document.getElementById("CAEGCAMD1").value);
    let SODECA1 = gradePoint(document.getElementById("SODECA1").value);

    EM1 *= 4;
    EPEC1 *= 4;
    CSHV1 *= 2;
    PPSBME1 *= 2;
    BEEBCE1 *= 2;
    EPLECL1 *= 1;
    LLHVAS1 *= 1;
    CPLMPW1 *= 1.5;
    BEELBCEL1 *= 1;
    CAEGCAMD1 *= 1.5;
    SODECA1 *= 0.5;

    let totalGradePoints = EM1 + EPEC1 + CSHV1 + PPSBME1 + BEEBCE1 + EPLECL1 + LLHVAS1 + CPLMPW1 + BEELBCEL1 + CAEGCAMD1 + SODECA1;
    let RESULT = totalGradePoints / 20.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}

function SecondSem() {
    let EM2 = gradePoint(document.getElementById("EM2").value);
    let EPEC2 = gradePoint(document.getElementById("EPEC2").value);
    let CSHV2 = gradePoint(document.getElementById("CSHV2").value);
    let PPSBME2 = gradePoint(document.getElementById("PPSBME2").value);
    let BEEBCE2 = gradePoint(document.getElementById("BEEBCE2").value);
    let EPLECL2 = gradePoint(document.getElementById("EPLECL2").value);
    let LLHVAS2 = gradePoint(document.getElementById("LLHVAS2").value);
    let CPLMPW2 = gradePoint(document.getElementById("CPLMPW2").value);
    let BEELBCEL2 = gradePoint(document.getElementById("BEELBCEL2").value);
    let CAEGCAMD2 = gradePoint(document.getElementById("CAEGCAMD2").value);
    let SODECA2 = gradePoint(document.getElementById("SODECA2").value);

    EM2 *= 4;
    EPEC2 *= 4;
    CSHV2 *= 2;
    PPSBME2 *= 2;
    BEEBCE2 *= 2;
    EPLECL2 *= 1;
    LLHVAS2 *= 1;
    CPLMPW2 *= 1.5;
    BEELBCEL2 *= 1;
    CAEGCAMD2 *= 1.5;
    SODECA2 *= 0.5;
    let totalGradePoints = EM2 + EPEC2 + CSHV2 + PPSBME2 + BEEBCE2 + EPLECL2 + LLHVAS2 + CPLMPW2 + BEELBCEL2 + CAEGCAMD2 + SODECA2;
    let RESULT = totalGradePoints / 20.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}