function zeige(komponente) {
    var alleBoxen = document.querySelectorAll('.info-box');
    for (var i = 0; i < alleBoxen.length; i++) {
        alleBoxen[i].classList.remove('sichtbar');
    }

    var alleButtons = document.querySelectorAll('.pc-btn');
    for (var j = 0; j < alleButtons.length; j++) {
        alleButtons[j].classList.remove('aktiv');
    }

    document.getElementById('info-standard').style.display = 'none';
    document.getElementById('info-' + komponente).classList.add('sichtbar');
    document.getElementById('btn-' + komponente).classList.add('aktiv');
}