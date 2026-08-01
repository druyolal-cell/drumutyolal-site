# Op. Dr. Umut Yolal — Web Sitesi

Kadın Hastalıkları ve Doğum Uzmanı Op. Dr. Umut Yolal'ın kurumsal web sitesi.
Statik HTML/CSS/JS ile hazırlanmıştır; derleme (build) gerektirmez.

## Yapı

```
index.html            Ana sayfa
hakkimda.html         Özgeçmiş
iletisim.html         İletişim ve randevu formu
yasal-uyari.html      Yasal uyarı metni
uzmanliklar/          22 uzmanlık sayfası
css/style.css         Tüm site stilleri
js/main.js            Mobil menü
images/               Görseller
```

## Yayın (Cloudflare Pages)

- Framework preset: **None**
- Build command: *(boş bırakılacak)*
- Build output directory: `/`

Depoya yapılan her `git push` sonrası site otomatik olarak güncellenir.

## İletişim bilgileri nerede değiştirilir?

Telefon, e-posta ve adres bilgileri her sayfada tekrar ettiği için
`generate_site.py` betiğindeki `PHONE`, `EMAIL`, `ADDRESS` değişkenleri
üzerinden güncellenip site yeniden üretilmelidir.
