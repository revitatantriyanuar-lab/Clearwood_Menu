# Plan: CLEARWOOD MENU

Tujuan: mewujudkan [BRIEF.md](BRIEF.md) sebagai satu halaman web statis (HTML, CSS, dan JavaScript tanpa framework dan tanpa server).

## Pendekatan
- **Satu file `index.html`.** Mudah dibagikan, dibuka di HP, dan tidak butuh build.
- **Hitungan terpisah dari tampilan.** Satu fungsi `calculate(state)` yang murni: terima pilihan paket, jumlah porsi, dan lokasi; kembalikan baris menu, subtotal, service charge, transport, total, dan daftar peringatan. Fungsi ini yang diuji.
- **Semua harga dan aturan jadi konstanta** di bagian atas skrip, supaya mudah diubah saat harga berganti.
- **Prototipe sudah ada** sebagai Artifact Claude (v9). Repo ini jadi rumah tetapnya, dan prototipe dipakai sebagai acuan perilaku.

## Aturan hitung (dari brief)
| Paket | Menu | Service charge | Transport |
|---|---|---|---|
| ARISAN | tetap: 100 Laksa, 100 Siomay, 130 Credo Drinks, 100 Aqua (Rp 10.000.000) | gratis | Rp 500.000 bila lebih dari 30 km |
| FLEKSIBEL | bebas | Rp 300.000 × jumlah stall bila subtotal di bawah Rp 10.000.000 | sama |
| FOODSTALL | 1 sampai 4 stall, tiap stall minimal 150 porsi; Aqua opsional minimal 100 botol | gratis | sama |

Urutan tampilan: porsi × harga, subtotal, service charge, transport, total.

## Tahapan
1. **Inti hitungan dan tesnya.** Konstanta, `calculate()`, dan tes untuk setiap contoh di brief.
2. **Kerangka halaman.** Judul, logo, teks pembuka, pilihan paket, input porsi, pilihan lokasi.
3. **Rincian harga 5 langkah** dan peringatan (kurang porsi, kurang dari minimum order).
4. **Pesan WhatsApp.** Dua nomor, isi pesan terisi otomatis, bar tetap di bawah layar untuk HP.
5. **Tampilan akhir.** Warna hitam-putih mengikuti logo, mode terang dan gelap, cek di HP dan komputer.
6. **Terbit.** Publikasi lewat GitHub Pages atau tetap lewat link Artifact.

## Risiko dan keputusan terbuka
- Jarak 30 km dipilih manual oleh pembeli. Tidak ada hitungan jarak otomatis karena halaman statis tidak memanggil layanan peta.
- Tarif transport Rp 500.000 adalah tarif tetap menurut catatan penawaran Credo. Perlu konfirmasi bila ada tarif per kilometer.
- Logo sumbernya tangkapan layar yang buram. Perlu file PNG bersih dari Ibu.
- Tampilan komputer dan mode gelap belum pernah dilihat langsung.
