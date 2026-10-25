# Tasks: CLEARWOOD MENU

Urut dari yang paling penting. Tiap tugas kecil dan punya cara tes yang jelas.

1. **Hitungan dasar menu.** Fungsi `calculate()` menghitung porsi × harga dan subtotal tiap menu.
   - Tes: 20 Laksa + 20 Siomay = Rp 1.250.000.
2. **Paket ARISAN.** Isi tetap dan total pas Rp 10.000.000, tanpa service charge.
   - Tes: hasil ARISAN = Rp 10.000.000.
3. **Paket FLEKSIBEL dan service charge.** Subtotal di bawah Rp 10.000.000 kena Rp 300.000 × jumlah stall (Aqua bukan stall); minimum order tercapai berarti gratis.
   - Tes: 20 Laksa + 20 Siomay = Rp 1.250.000 + 2 × Rp 300.000 = Rp 1.850.000.
4. **Paket FOODSTALL.** 1 sampai 4 stall, minimal 150 porsi per stall, Aqua opsional minimal 100 botol, service charge gratis, dengan peringatan bila kurang.
   - Tes: 150 Laksa = Rp 5.625.000. Bakso 100 porsi memunculkan "kurang 50 porsi". Aqua 50 botol memunculkan "minimal 100 botol".
5. **Biaya transport.** Rp 500.000 bila lebih dari 30 km dari Credo Art Space, Jatibening Bekasi; gratis bila dalam 30 km; tidak ada biaya bila belum ada menu terpilih.
   - Tes: ARISAN di luar 30 km = Rp 10.500.000.
6. **Halaman dan rincian 5 langkah.** Pilihan paket, input porsi (ketik dan tombol +/− per 10), pilihan lokasi, dan rincian: porsi × harga, subtotal, service charge, transport, total.
   - Tes: buka di HP, ketiga paket dan pilihan lokasi bekerja, tidak ada teks terpotong.
7. **Pesan via WhatsApp.** Tombol hijau ke 0811 303 488, tautan ke 0896 5889 7759, pesan terisi otomatis (paket, menu, service charge, transport, total), dan bar tetap di bawah layar di HP.
   - Tes: tombol membuka WhatsApp dengan isi pesan yang benar di kedua nomor.
8. **Logo dan tampilan akhir.** Logo Clearwood, warna hitam-putih, mode terang dan gelap, tanpa geser horizontal di HP.
   - Tes: tampilan di HP dan komputer, terang dan gelap, tanpa teks terpotong.
