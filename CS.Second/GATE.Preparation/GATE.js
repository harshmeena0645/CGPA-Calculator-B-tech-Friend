function handleButtonClick(buttonName) {
    switch(buttonName) {
        case 'DM':
            window.location.href = 'https://youtube.com/playlist?list=PLC36xJgs4dxEYmhzVBW7nBdftFZ4xmiF1&si=UvFzQwcHJSWd-UCY';
            break;
        case 'EM':
            window.location.href = 'https://youtube.com/playlist?list=PLQtV9njJ9uymo0SRigEcNEL8JIimQ5zLg&si=VADdizJNiYHiY2HP';
            break;
        case 'DL':
            window.location.href = 'https://youtube.com/playlist?list=PLC36xJgs4dxEErKQZ7xFxat8oh4OepU34&si=QGdzWlSo_NS3QBzc';
            break;
        case 'COA':
            window.location.href = 'https://youtube.com/playlist?list=PLG9aCp4uE-s3WzvFW1nI-7hHWNC8s2RdI&si=4u9SmEMaNgNZz6Hy';
            break;
        case 'PDS':
            window.location.href = 'https://youtube.com/playlist?list=PLEVDNf7p-wYyh712BgmW9UGrAc88bl3OF&si=6rZkbg2cz2XSKq6u';
            break;
        case 'Algo':
            window.location.href = '';
            break;
        case 'TOC':
            window.location.href = 'https://youtube.com/playlist?list=PLEVDNf7p-wYxt8Yy3t1eL9hdZUy27NBdY&si=6TimDgOvw4AvVDbh';
            break;
        case 'CD':
            window.location.href = '';
            break;
        case 'OS':
            window.location.href = 'https://youtube.com/playlist?list=PLG9aCp4uE-s17rFjWM8KchGlffXgOzzVP&si=mfDCiAG4_AnuR0RT';
            break;
        case 'DB':
            window.location.href = 'https://youtube.com/playlist?list=PLG9aCp4uE-s0bu-I8fgDXXhVLO4qVROGy&si=mNAppyJlp8hxNzTv';
            break;
        case 'CN':
            window.location.href = 'https://youtube.com/playlist?list=PLG9aCp4uE-s0pjBv6tQS7sl8BMGs_100S&si=OKEPY0CI5SrYIgiP';
            break;
        case 'GATE PYQ':
            window.location.href = './GATE_2024_CSE_QuestionPaper.pdf';
            break;
            default:
            alert('Unknown button clicked');
    }
}
