function loadChord(chord) {
    let code = '';
    code += `<div class="tabTableName">${chord.name}</div>`; 
    code += '<table class="tabTable">';

    // open and unused strings

    code += '<tr>';

    for (let j = 0; j < chord.diagram[0].length; j++) {
        code += `<td class="unbordered"><div class="shiftUp">${chord.diagram[0][j]}</div></td>`;
    }

    code += '</tr>';

    // finger marks

    for (let i = 1; i < chord.diagram.length; i++) {
        code += '<tr>';

        for (let j = 0; j < chord.diagram[i].length; j++) {
            if (j == chord.diagram[i].length - 1)
                code += '<td class="unbordered"><div class="shiftLeft">';
            else
                code += '<td class="bordered"><div class="shiftLeft">';
            if (chord.diagram[i][j] == '*')
                code += '<span class="circle"></span>';
            code += '</div></td>';
        }

        code += '</tr>';
    }

    // add an extra row of blank frets if length < 5
    
    if (chord.diagram.length < 5) {
        code += '<tr>';
    
        for (let j = 0; j < chord.diagram[0].length; j++) {
            if (j == chord.diagram[0].length - 1)
                code += '<td class="unbordered"></td>';
            else
                code += '<td class="bordered"></td>';
        }
    
        code += '</tr>';    
    }

    // finger numbers

    code += '<tr>';

    for (let j = 0; j < chord.fingering.length; j++) {
        code += `<td class="unbordered"><div class="shiftUp">${chord.fingering[j]}</div></td>`;
    }
    
    code += '</tr></table>';

    return code;
}

function loadChords() {
    let code = '';
    for (let i = 0; i < chordSet.length; i++) {
        code += '<tr>'
        for (let j = 0; j < chordSet[i].length; j++) {
            code += '<td>';
            code += loadChord(chordSet[i][j]);
            code += '</td>';
        }
        code += '</tr>';
    }
    document.getElementById('chordChart').innerHTML = code;
}