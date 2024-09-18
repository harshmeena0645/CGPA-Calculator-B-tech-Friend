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
    let semNum = document.getElementById("semister").value;
    if (semNum === 'Fourth') {
        document.getElementById('third').style.display = 'none';
        document.getElementById('fourth').style.display = 'block';
    }
    else {
        document.getElementById('fourth').style.display = 'none';
        document.getElementById('third').style.display = 'block';
    }
}

function calculate() {
    let sem = document.getElementById("semister").value;
    if (sem === 'Third') {
        ThirdSem();
    }
    if (sem === 'Fourth') {
        FourthSem();
    }
    console.log(sem);
}
function ThirdSem() {
    let MEFA = gradePoint(document.getElementById("MEFA").value);
    let AEM = gradePoint(document.getElementById("AEM").value);
    let DE = gradePoint(document.getElementById("DE").value);
    let DSA = gradePoint(document.getElementById("DSA").value);
    let OOP = gradePoint(document.getElementById("OOP").value);
    let SE = gradePoint(document.getElementById("SE").value);
    let DSAL = gradePoint(document.getElementById("DSAL").value);
    let OOPL = gradePoint(document.getElementById("OOPL").value);
    let SEL = gradePoint(document.getElementById("SEL").value);
    let DEL = gradePoint(document.getElementById("DEL").value);
    let IT = gradePoint(document.getElementById("IT").value);
    let SODECA3 = gradePoint(document.getElementById("SODECA3").value);

    MEFA *= 2;
    AEM *= 3;
    DE *= 3;
    DSA *= 3;
    OOP *= 3;
    SE *= 3;
    DSAL *= 1.5;
    OOPL *= 1.5;
    SEL *= 1.5;
    DEL *= 1.5;
    IT *= 1;
    SODECA3 *= 0.5;

    let totalGradePoints = MEFA + AEM + DE + DSA + OOP + SE + DSAL + OOPL + SEL + DEL + IT + SODECA3;
    let RESULT = totalGradePoints / 24.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}

function FourthSem() {

    let TC = gradePoint(document.getElementById("TC").value);
    let MATHS = gradePoint(document.getElementById("MATHS").value);
    let MPI = gradePoint(document.getElementById("MPI").value);
    let DBMS = gradePoint(document.getElementById("DBMS").value);
    let TOC = gradePoint(document.getElementById("TOC").value);
    let DCCN = gradePoint(document.getElementById("DCCN").value);
    let MPIL = gradePoint(document.getElementById("MPIL").value);
    let DBMSL = gradePoint(document.getElementById("DBMSL").value);
    let NPL = gradePoint(document.getElementById("NPL").value);
    let LSPL = gradePoint(document.getElementById("LSPL").value);
    let JAVAL = gradePoint(document.getElementById("JAVAL").value);
    let SODECA4 = gradePoint(document.getElementById("SODECA4").value);

    TC *= 2;
    MATHS *= 3;
    MPI *= 3;
    DBMS *= 3;
    TOC *= 3;
    DCCN *= 3;
    MPIL *= 1;
    DBMSL *= 1.5;
    NPL *= 1.5;
    LSPL *= 1;
    JAVAL *= 1;
    SODECA4 *= 0.5;

    let totalGradePoints = TC + MATHS + MPI + DBMS + TOC + DCCN + MPIL + DBMSL + NPL + LSPL + JAVAL + SODECA4;
    let RESULT = totalGradePoints / 23.5;
    alert(`Your SGPA is : ${RESULT}`);
    document.getElementById("result").value = RESULT.toFixed(2);
}