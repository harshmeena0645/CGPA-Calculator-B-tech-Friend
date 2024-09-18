function handleButtonClick(buttonName) {
    switch(buttonName) {
        case 'RTU Syllabus':
            window.location.href = './RTU Syllabus 3rd year.pdf';
            break;
        case 'GATE Syllabus':
            window.location.href = './GATE Syllabus.pdf';
            break;
        default:
            alert('Unknown button clicked');
    }
}
