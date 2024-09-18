const form = document.forms['details'];

function selectDept() {
    var select = document.getElementById("dept");
    var selectedValue = select.options[select.selectedIndex].value;

    if (selectedValue !== 'CS' && selectedValue !== 'IT') {
        alert('This page is in developing stage, Please select other Department!');
        select.value = 'CS';
    }
}

function load() {
    document.getElementById('loadingIcon').style.display = 'block';
    document.getElementById('webBody').style.display = 'none';
    document.body.style.minHeight = '100vh';
}

function dload() {
    document.getElementById('loadingIcon').style.display = 'none';
    document.getElementById('webBody').style.display = 'block';
    document.body.style.minHeight = '0';
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is CS and the year is First
    if (dept === 'CS' && year === 'First') {
        window.location.href = 'CS.First/First.html';
    } else {
        load();
        window.location.href = `${dept}/${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is CS and the year is Second
    if (dept === 'CS' && year === 'Second') {
        window.location.href = 'CS.Second/Second.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is CS and the year is Third
    if (dept === 'CS' && year === 'Third') {
        window.location.href = 'CS.Third/Third.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is CS and the year is Fourth
    if (dept === 'CS' && year === 'Fourth') {
        window.location.href = 'CS.Fourth/Fourth.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is IT and the year is First
    if (dept === 'IT' && year === 'First') {
        window.location.href = 'IT.First/First.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is IT and the year is Second
    if (dept === 'IT' && year === 'Second') {
        window.location.href = 'IT.Second/Second.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is IT and the year is Third
    if (dept === 'IT' && year === 'Third') {
        window.location.href = 'IT.Third/Third.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const year = document.getElementById("year").value;
    const dept = document.getElementById("dept").value;

    // Check if the department is IT and the year is Fourth
    if (dept === 'IT' && year === 'Fourth') {
        window.location.href = 'IT.Fourth/Fourth.html';
    } else {
        load();
        window.location.href = `${dept}.${year}/${year}.html`;
        dload();
    }
});
