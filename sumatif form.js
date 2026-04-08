document.getElementById('okBTN').onclick = function() {

    var nama = document.getElementById('nama').value.trim();
    if (nama === "") {
        nama = "(Nama harus di isi)";
    }

    var kelas = document.getElementById('kelas').value.trim();
    if (kelas === "") {
        kelas = "(Kelas harus di isi)";
    }

    var umur = "";
    var umurRadio = document.getElementsByName('Umur');
    for (var i = 0; i < umurRadio.length; i++) {
        if (umurRadio[i].checked) {
            umur = umurRadio[i].value;
            break;
        }
    }
    if (umur === "") {
        umur = "(Pilih umur)";
    }

    var gender = "";
    var radios = document.getElementsByName('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            gender = radios[i].value;
            break;
        }
    }
    if (gender === "") {
        gender = "(Mohon Masukkan Jenis Kelamin)";
    }

    var tingkatan = "";
    var tingkatRadio = document.getElementsByName('tingkatan');
    for (var i = 0; i < tingkatRadio.length; i++) {
        if (tingkatRadio[i].checked) {
            tingkatan = tingkatRadio[i].value;
            break;
        }
    }
    if (tingkatan === "") {
        tingkatan = "(Pilih tingkatan)";
    }

    var hasilText =
        "Nama: " + nama + "\n" +
        "Kelas: " + kelas + "\n" +
        "Umur: " + umur + "\n" +
        "Jenis Kelamin: " + gender + "\n" +
        "Tingkatan: " + tingkatan;

    document.getElementById('Hasil').innerText = hasilText;
};

document.getElementById('clearBTN').onclick = function() {

    document.getElementById('nama').value = "";
    document.getElementById('kelas').value = "";

    var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === "radio") {
            radios[i].checked = false;
        }
    }

    document.getElementById('Hasil').innerText = "Data Muncul di sini";
};