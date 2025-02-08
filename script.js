function preprocessText(text) {
    text = text.toUpperCase().replace(/[^A-Z]/g, '');
    if (text.length % 2 === 1) text += 'X'; // Make it even length
    return text;
}

function encryptHillCipher() {
    let plaintext = document.getElementById("plaintext").value;
    let k11 = parseInt(document.getElementById("key11").value);
    let k12 = parseInt(document.getElementById("key12").value);
    let k21 = parseInt(document.getElementById("key21").value);
    let k22 = parseInt(document.getElementById("key22").value);

    if (!plaintext || isNaN(k11) || isNaN(k12) || isNaN(k21) || isNaN(k22)) {
        alert("Please enter both plaintext and key matrix values.");
        return;
    }

    let keyMatrix = [
        [k11, k12],
        [k21, k22]
    ];

    let text = preprocessText(plaintext);
    let encryptedText = "";

    for (let i = 0; i < text.length; i += 2) {
        let char1 = text.charCodeAt(i) - 65;
        let char2 = text.charCodeAt(i + 1) - 65;

        let enc1 = (keyMatrix[0][0] * char1 + keyMatrix[0][1] * char2) % 26;
        let enc2 = (keyMatrix[1][0] * char1 + keyMatrix[1][1] * char2) % 26;

        encryptedText += String.fromCharCode(enc1 + 65) + String.fromCharCode(enc2 + 65);
    }

    document.getElementById("output").innerHTML = "Encrypted Text: <span style='color:lime'>" + encryptedText + "</span>";
}