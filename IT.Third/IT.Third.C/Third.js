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
    if (sem === 'Sixth') {
        document.getElementById('fifth').style.display = 'none';
        document.getElementById('sixth').style.display = 'block';
    }
    else {
        document.getElementById('sixth').style.display = 'none';
        document.getElementById('fifth').style.display = 'block';
    }
}

function calculate() {
    var sem = document.getElementById("semister").value;
    if (sem === 'Fifth') {
        FifthSem();
    }
    if (sem === 'Sixth') {
        SixthSem();
    }
}
function FifthSem() {
    let MPI = gradePoint(document.getElementById("MPI").value);
    let CD = gradePoint(document.getElementById("CD").value);
    let OS = gradePoint(document.getElementById("OS").value);
    let CGM = gradePoint(document.getElementById("CGM").value);
    let AOA = gradePoint(document.getElementById("AOA").value);
    let WCHCIB = gradePoint(document.getElementById("WCHCIB").value);
    let CGML = gradePoint(document.getElementById("CGML").value);
    let CDL = gradePoint(document.getElementById("CDL").value);
    let AOAL = gradePoint(document.getElementById("AOAL").value);
    let AJL = gradePoint(document.getElementById("AJL").value);
    let IT = gradePoint(document.getElementById("IT").value);
    let SODECA5 = gradePoint(document.getElementById("SODECA5").value);

    MPI *= 2;
    CD *= 3;
    OS *= 3;
    CGM *= 3;
    AOA *= 3;
    WCHCIB *= 2;
    CGML *= 1;
    CDL *= 1;
    AOAL *= 1;
    AJL *= 1;
    IT *= 2.5;
    SODECA5 *= 0.5;

    let totalGradePoints = MPI + CD + OS + CGM + AOA + WCHCIB + CGML + CDL + AOAL + AJL + IT + SODECA5;
    let RESULT = totalGradePoints / 23;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}

function SixthSem() {
    let DIP = gradePoint(document.getElementById("DIP").value);
    let ML = gradePoint(document.getElementById("ML").value);
    let ISS = gradePoint(document.getElementById("ISS").value);
    let CAO = gradePoint(document.getElementById("CAO").value);
    let AI = gradePoint(document.getElementById("AI").value);
    let DS = gradePoint(document.getElementById("DS").value);
    let DSSDNEE = gradePoint(document.getElementById("DSSDNEE").value);
    let DIPL = gradePoint(document.getElementById("DIPL").value);
    let MLL = gradePoint(document.getElementById("MLL").value);
    let PL = gradePoint(document.getElementById("PL").value);
    let MADL = gradePoint(document.getElementById("MADL").value);
    let CL = gradePoint(document.getElementById("CL").value);
    let SODECA6 = gradePoint(document.getElementById("SODECA6").value);

    DIP *= 2;
    ML *= 3;
    ISS *= 2;
    CAO *= 3;
    AI *= 2;
    DS *= 3;
    DSSDNEE *= 2;
    DIPL *= 1;
    MLL *= 1.5;
    PL *= 1.5;
    MADL *= 1;
    CL *= 1;
    SODECA6 *= 0.5;

    let totalGradePoints = DIP + ML + ISS + CAO + AI + DS + DSSDNEE + DIPL + MLL + PL + MADL + CL + SODECA6;
    let RESULT = totalGradePoints / 23.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}
