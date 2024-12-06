// Logika Decision Tree untuk Prediksi Penyakit
function predictDisease(gejala) {
    const [demam, batuk, sakitKepala, mual, sakitPerut] = gejala;
  
    if (demam === 1 && batuk === 1 && sakitKepala === 1) {
      return { penyakit: "Flu Berat", pencegahan: "Istirahat cukup, minum air hangat, konsumsi vitamin C" };
    } else if (demam === 1 && sakitPerut === 1 && mual === 1) {
      return { penyakit: "Demam Tifoid", pencegahan: "Konsumsi makanan higienis, periksakan ke dokter" };
    } else if (batuk === 1 && demam === 0 && sakitKepala === 0) {
      return { penyakit: "Batuk Ringan", pencegahan: "Minum madu, hindari minuman dingin" };
    } else if (mual === 1 && sakitPerut === 1 && demam === 0) {
      return { penyakit: "Gangguan Pencernaan", pencegahan: "Konsumsi makanan berserat, hindari makanan pedas" };
    } else if (demam === 1 && sakitKepala === 1 && mual === 1) {
      return { penyakit: "Demam Berdarah", pencegahan: "Jaga kebersihan lingkungan, gunakan lotion anti nyamuk" };
    } else {
      return { penyakit: "Sehat", pencegahan: "Tetap jaga pola hidup sehat" };
    }
  }
  
  // Event Listener untuk Form
  document.getElementById('predictionForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Ambil input pengguna
    const demam = parseInt(document.getElementById('demam').value);
    const batuk = parseInt(document.getElementById('batuk').value);
    const sakitKepala = parseInt(document.getElementById('sakitKepala').value);
    const mual = parseInt(document.getElementById('mual').value);
    const sakitPerut = parseInt(document.getElementById('sakitPerut').value);
  
    // Lakukan prediksi
    const result = predictDisease([demam, batuk, sakitKepala, mual, sakitPerut]);
  
    // Tampilkan hasil
    document.getElementById('predictedDisease').textContent = result.penyakit;
    document.getElementById('prevention').textContent = result.pencegahan;
    document.getElementById('result').style.display = 'block';
  });
  