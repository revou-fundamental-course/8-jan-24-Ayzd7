document.getElementById("btnPersegi").addEventListener("click", function() {
    document.getElementById("formPersegi").style.display = "block";
    document.getElementById("formPersegiPanjang").style.display = "none";
});

document.getElementById("btnPersegiPanjang").addEventListener("click", function() {
    document.getElementById("formPersegi").style.display     = "none";
    document.getElementById("formPersegiPanjang").style.display = "block";
});

function hitungLuasPersegi() {
    var sisi = document.getElementById("sisi").value;
    var hasil = sisi * sisi;
    document.getElementById("hasilPersegi").innerText = "Luas Persegi: " + hasil;
}

function hitungLuasPersegiPanjang() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;
    var hasil = panjang * lebar;
    document.getElementById("hasilPersegiPanjang").innerText = "Luas Persegi Panjang: " + hasil;
}

// Fungsi untuk menghitung keliling persegi
function hitungKelilingPersegi() {
    var sisi = document.getElementById("sisi").value;
    var keliling = 4 * sisi;
    document.getElementById("hasilPersegi").innerHTML = "Keliling Persegi: " + keliling;
}

// Fungsi untuk menghitung keliling persegi panjang
function hitungKelilingPersegiPanjang() {
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;
    var keliling = 2 * (parseFloat(panjang) + parseFloat(lebar));
    document.getElementById("hasilPersegiPanjang").innerHTML = "Keliling Persegi Panjang: " + keliling;
}

// Tampilkan form untuk menghitung keliling persegi
document.getElementById("btnPersegi").addEventListener("click", function() {
    document.getElementById("formPersegi").style.display = "block";
    document.getElementById("formPersegiPanjang").style.display = "none";
});

// Tampilkan form untuk menghitung keliling persegi panjang
document.getElementById("btnPersegiPanjang").addEventListener("click", function() {
    document.getElementById("formPersegiPanjang").style.display = "block";
    document.getElementById("formPersegi").style.display = "none";
});

// script.js

function resetForm(formId) {
    var form = document.getElementById(formId);

    var inputElements = form.getElementsByTagName('input');
    for (var i = 0; i < inputElements.length; i++) {
        inputElements[i].value = '';
    }

    var hasilElement = document.getElementById('hasil' + formId.replace('form', ''));
    if (hasilElement) {
        hasilElement.innerHTML = '';
    }
}