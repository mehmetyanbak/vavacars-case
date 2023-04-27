## Giriş

Bu proje vavacars için study case olarak geliştirilmiştir.
  
## Projeyi Çalıştırma Adımları
Projeyi koşmak için aşağıdaki adımları sırası ile izleyebilirsiniz.
1. npm install (nodu_modules paketlerini oluşturmak için)
2. npm run start (Uygulamayı Development mod ta çalıştırmak için)
3. Uygulama tarayıcınızda  [http://localhost:4200](http://localhost:3000) linkinde koşmaya başlayacaktır.
4. https://vavacarsbooklist.azurewebsites.net/ linkinden projenin çalışan haline ulaşabilirsiniz.

## Açıklama

#### Servisler

1. **booksService:** Api sorgularının yapıldıgı servistir.

#### Komponentlar

1. **LoadingSpinnerComponent:** Yükleniyor komponentidir. Sayfa geçişlerinde sayfanın geç yüklenmesi durumunda gösterilir.
2. **BookListComponent:** Kitapların listelendiği componenttir.
3. **BookDetailComponent:** Kitabın detaylarının gösterildiği componenttir.
4. **AddBookDialogComponent:** Yeni kitap a ait bilgilerin girildiği componenttir.

#### Notlar

1. Yeni kitap girdiğimiz dialogta , 'Add' butonunun aktif olabilmesi için bütün inputların doğru şekilde doldurulmuş olması gerekmektedir. Koşulun sağlanmaması durumunda 'GO!' butonunun disable oldugunu belirtmek için buton un renk i gri olarak ayarlanmıştır.
2. Api call ları için mock server oluşturuldu. MirageJS kullanıldı. Başlandıç için mock datalar girildi.
3. Api lere unsubscribe olmak için componentlerde ngOnDestroy larda unsubscription yapısı kuruldu.