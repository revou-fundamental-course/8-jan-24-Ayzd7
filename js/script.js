let luas_persegi = document.getElementById("luaspersegi")
let rmspersegi = document.getElementById("rmsluaspersegi")
let keliling_persegi = document.getElementById("kelilingpersegi")
let rmskeliling = document.getElementById("rmskeliling")


document.getElementById("btnPersegi").addEventListener("click", function () {
    document.getElementById("formPersegi").style.display = "block";
    document.getElementById("formPersegiPanjang").style.display = "none";
});

document.getElementById("btnPersegiPanjang").addEventListener("click", function () {
    document.getElementById("formPersegi").style.display = "none";
    document.getElementById("formPersegiPanjang").style.display = "block"
});

function hitungLuasPersegi() {
    var sisi = document.getElementById("sisi").value;
    var hasil = sisi * sisi;
    document.getElementById("hasilPersegi").innerText = "Luas Persegi: " + hasil;
    rmspersegi.innerHTML = `L = S x S`
    luas_persegi.innerHTML = 'L = ' + sisi + ' x ' + sisi
}

function hitungLuasPersegiPanjang() {
    var sisipersegipanjang = document.getElementById("sisipersegipanjang").value;
    var hasil = 4 * sisipersegipanjang;
    document.getElementById("hasilPersegiPanjang").innerText = "Hitung Keliling Persegi : " + hasil;
    rmskeliling.innerHTML = `K =  4 x S`
    keliling_persegi.innerHTML = 'K = ' + 4 + ' * ' + sisipersegipanjang
}

// Tampilkan form untuk menghitung keliling persegi
document.getElementById("btnPersegi").addEventListener("click", function () {
    document.getElementById("formPersegi").style.display = "block";
    document.getElementById("formPersegiPanjang").style.display = "none";
});

// Tampilkan form untuk menghitung keliling persegi panjang
document.getElementById("btnPersegiPanjang").addEventListener("click", function () {
    document.getElementById("formPersegiPanjang").style.display = "block";
    document.getElementById("formPersegi").style.display = "none";
});

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