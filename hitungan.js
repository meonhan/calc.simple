function tambah() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const hasil = num1 + num2;
    document.getElementById('hasil').textContent = hasil;
}

function kurang() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const hasil = num1 - num2;
    document.getElementById('hasil').textContent = hasil;
}

function kali() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const hasil = num1 * num2;
    document.getElementById('hasil').textContent = hasil;
    document.getElementById('operator').textContent = "×";
}

function bagi() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const hasil = num1 / num2;
    document.getElementById('hasil').textContent = hasil;
    document.getElementById('operator').textContent = "÷";
}

function pangkat() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const hasil = Math.pow(num1, num2); // Menghitung num1^num2
    document.getElementById('hasil').textContent = hasil;
    document.getElementById('operator').textContent = "^";
}
