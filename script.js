// Mendefinisikan persentase bobot untuk masing-masing komponen
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;
const BATAS_LULUS = 60;

function hitungNilai() {
    // Mengambil input nilai dari user
    let tugas = parseFloat(document.getElementById("tugas").value);
    let uts = parseFloat(document.getElementById("uts").value);
    let uas = parseFloat(document.getElementById("uas").value);

    // Validasi input agar berada di antara 0 dan 100
    if (isNaN(tugas) || isNaN(uts) || isNaN(uas) || tugas < 0 || tugas > 100 || uts < 0 || uts > 100 || uas < 0 || uas > 100) {
        alert("Masukkan nilai antara 0 dan 100 untuk semua komponen.");
        return;
    }

    // Menghitung rata-rata tertimbang
    let nilaiAkhir = (tugas * BOBOT_TUGAS) + (uts * BOBOT_UTS) + (uas * BOBOT_UAS);

    // Menentukan nilai huruf
    let nilaiHuruf;
    if (nilaiAkhir >= 90) {
        nilaiHuruf = "A";
    } else if (nilaiAkhir >= 80) {
        nilaiHuruf = "B";
    } else if (nilaiAkhir >= 70) {
        nilaiHuruf = "C";
    } else if (nilaiAkhir >= 60) {
        nilaiHuruf = "D";
    } else {
        nilaiHuruf = "E";
    }

    // Menentukan status lulus atau gagal
    let status = nilaiAkhir >= BATAS_LULUS ? "Lulus" : "Gagal";

    // Menampilkan hasil ke pengguna
    let hasilDiv = document.getElementById("hasil");
    hasilDiv.innerHTML = `
        <p>Nilai Tugas (30%): ${tugas}</p>
        <p>Nilai UTS (30%): ${uts}</p>
        <p>Nilai UAS (40%): ${uas}</p>
        <p><strong>Rata-Rata Tertimbang: ${nilaiAkhir.toFixed(2)}</strong></p>
        <p>Nilai Huruf: <strong>${nilaiHuruf}</strong></p>
        <p>Status: <strong>${status}</strong></p>
    `;
    
    hasilDiv.classList.remove("lulus", "gagal");
    hasilDiv.classList.add(status === "Lulus" ? "lulus" : "gagal");
    hasilDiv.style.display = "block";
}
