function handleButtonClick(buttonName) {
    switch(buttonName) {
        case 'Syllabus':
            window.location.href = './IT.Second.S/Syllabus.html';
            break;
        case 'Notes':
            window.location.href = '';
            break;
        case 'GATE Preparation':
            window.location.href = 'GATE.Preparation/GATE.html';
            break;
        case 'Skill Development Suggestion':
            window.location.href = '';
            break;
        case 'SGPA Calculator':
            window.location.href = 'IT.Second.C/Second.html';
            break;
        default:
            alert('Unknown button clicked');
    }
}