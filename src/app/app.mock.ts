import { Server } from 'miragejs';
import { Book } from 'src/core/models';

const books: Book[] = [
  {
    id: 1,
    title: 'Sefiller',
    author: 'Victor Hugo',
    category: 'KLASIKLER',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/s/e/sefiller1b132b2ff6eb9dd89cc65195e6ba8427.jpg',
    description: `Victor Hugo (1802-1885): Fransız edebiyatının gelmiş geçmiş en büyük yazarlarındandır. Şiirleri, oyunları ve romanları ile tanınır. Romantizm akımının Fransa'daki temsilcisidir. Edebiyat alanındaki devasa başarılarının yanında politik hayatta da etkin bir rol üstlendi, bu nedenle sürgün cezasına çarptırıldı, cezasını tamamlamasına rağmen İmparatorluk yıkılana dek Fransa'ya dönmedi`,
  },
  {
    id: 2,
    title: 'Suç Ve Ceza',
    author: 'Dostoyevski',
    category: 'KLASIKLER',
    coverImageUrl: 'https://cdn1.dokuzsoft.com/u/ilknokta/img/b/s/u/suc-ve-cezae0e5bcb1d08c76267f7662776919cdc0.jpg',
    description: `Tüm zamanların en çok konuşulan romanlarından Suç ve Ceza, psikolojik derinliği ve topluma tuttuğu aynayla gündemde kalmaya devam ediyor.`,
  },
  {
    id: 3,
    title: 'Simyacı',
    author: 'Paulo Coelho',
    category: 'PSIKOLOJIK',
    coverImageUrl: 'https://i.dr.com.tr/cache/500x400-0/originals/0000000064552-1.jpg',
    description: `Dünya edebiyatının fenomenleri arasında yer alan Simyacı, yayımlandığı günden bugüne pek çok hayata dokunmaya devam ediyor. Brezilyalı yazar Paulo Coelho tarafından 1988 yılında yayımlanan eser, Doğu ve Batı dünyasına aynı pencereden ışık tutuyor.`,
  },
  {
    id: 4,
    title: 'Veda',
    author: 'Ayşe Kulin',
    category: 'TARIH',
    coverImageUrl: 'https://cdn1.dokuzsoft.com/u/ilknokta/img/b/v/e/vedaae87dd4fbc903c8576524e9094095446.jpg',
    description: `Ayşe Kulin, Osmanlı İmparatorluğu'nun son günlerinde, işgal altındaki İstanbul'da bir konakta yaşananları anlatıyor bu kez. Son Maliye Nazırı ve ailesi aracılığıyla o dönemin resmini çizen Veda, çökmekte olan bir tarih ile yeni bir gelecek arayan Milliciler arasında sıkışan o dönem Osmanlı aydınının da öyküsünü dile getiriyor.`,
  },
  {
    id: 5,
    title: 'Puslu Kıtalar Atlası',
    author: 'İhsan Oktay Anar',
    category: 'TARIH',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/p/u/puslu-kitalar-atlasieb0986e981f3e03875094c42a0261e5e.jpg',
    description: `“Yeniçeriler kapıyı zorlarken” düşler üstüne düşünceleredalan Uzun İhsan Efendi, kapı kırıldığında klasik ama hepyeni kalabilen sonuca ulaşmak üzeredir:“Dünya bir düştür.Evet, dünya... Ah! Evet, dünya bir masaldır.”`,
  },
  {
    id: 6,
    title: 'Efsane',
    author: 'İskender Pala',
    category: 'TARIH',
    coverImageUrl: 'https://cdn1.dokuzsoft.com/u/ilknokta/img/b/e/f/efsane1503170d70b343f4da323815b322598d.jpg',
    description: `Efsaneler bazen denizden, Bazen aşktan ve ateşten gelirler. Aşktan ve ateşten ve denizden gelenler, Bazen ışık olurlar ve bütün zamanı aydınlatırlar…Efsane kurmak kadar, efsaneyi yazmak da efsaneye dâhildir. Bir çağı haritalarda bulamazsınız.`,
  },
  {
    id: 7,
    title: 'Düello',
    author: 'Aleksandr İvanoviç Kuprin',
    category: 'KLASIKLER',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/d/u/duello-1677745612.jpg',
    description: `Hayranları arasında Çehov, Tolstoy, Gorki, Bunin gibi Rus edebiyatının büyük isimleri de bulunan Düello, Aleksandr Kuprin’in en meşhur eseri sayılıyor. Romanda, kendisi için askerlik dışında bir hayat hayal edemeyen, bir yandan da içinde bulunduğu düzene ayak uydurmakta güçlük çeken bir subayın hikâyesi anlatılıyor.`,
  },
  {
    id: 8,
    title: 'Büyük Ortak',
    author: 'Petros Markaris',
    category: 'POLISIYE',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/9/7/9786254497667-1679990566.jpg',
    description: `Kostas Haritos’un kızı Katerina kaçırılan bir gemidedir. Terörle mücadele ekibi bu davayla ilgili farklı önyargılar ve sorular ortaya atmaktadır. Gemiyi kaçıranlar İslamcılar mı, Filistinliler mi yoksa Çeçenler midir? Bir başka soru ise aniden ortaya çıkan “Türkiye, ABD, Yunanistan-Gelişmeler ve Perspektifler” adlı dosyanın içeriği nedir?`,
  },
  {
    id: 9,
    title: `Güneşin Altın Elmaları`,
    author: 'Ray Bradbury',
    category: 'BILIM KURGU',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/g/u/gunesin-altin-elmalari-1677151814.jpg',
    description: `Ray Bradbury sadece bilimkurgunun değil, fantastik edebiyatın ve korkunun da yirminci yüzyıldaki ustalarından biri. Bilimkurgunun “iyi edebiyat” da olabileceğini kanıtlayan belki de ilk yazar. Yazarın ilk derlemelerinden biri olan Güneşin Altın Elmaları ise Bradbury’nin erken dönem öykülerinden otuz iki tanesini bir araya getiren gerçek bir hazine.`,
  },
  {
    id: 10,
    title: `Düşyılanı`,
    author: 'Vonda N. McIntyre',
    category: 'BILIM KURGU',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/9/7/9786258327939-dusyilani-vonda-n-mcintyre-1666265843.jpg',
    description: `Vonda N. McIntyre, 1970’lerin feminist bilimkurgu hareketinin ön saflarında yer alan, arkadaşı ve işbirlikçisi Ursula K. Le Guin gibi, edebiyatta ve özellikle bilimkurguda yaygın görülen cinsiyetçiliğe meydan okuyan ileri görüşlü bir yazar. Düşyılanı ise bilimkurgunun üç büyük ödülünü alan türün sayılı romanlarından biri.`,
  },
  {
    id: 11,
    title: `Zümrüt Alev`,
    author: 'Allan Frewin-Jones',
    category: 'FANTASTIK',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/9/7/9786053048053-1677500897.jpg',
    description: `Artık o bir insan değil, bir tanrıydı! Kan dökme ve savaşma tanrısıydı. İnsanlık prangalarından kurtulmuştu. Tüm dünyayı katletmekte serbest bir varlıktı.`,
  },
  {
    id: 12,
    title: `Zor Bir Yıkım`,
    author: 'Charlaine Harris',
    category: 'FANTASTIK',
    coverImageUrl: 'https://www.ilknokta.com/u/ilknokta/img/b/9/7/9786053047568-1664179046.jpg',
    description: `New York Times çoksatan yazarı Charlaine Harris, “Silahşor Rose” serisinin ikinci romanında yine sürükleyici bir hikâyeyle dönüyor. Yeni bir ekibe katılan Lizbeth Rose görünüşte kolay bir koruma işi üstleniyor. Dixie’ye bir sandık götürecek, yani eski Birleşik Devletler’in en tekinsiz ve ıssız yerine. Ama elbette basit görünen işin hiç de öyle olmadığı ortaya çıkıyor çünkü hayatta işler nadiren yolunda gider. Sandığın içinde öyle güçlü bir şey saklı ki üç bölgeden de birileri onu ele geçirmenin peşinde.`,
  },
  {
    id: 13,
    title: `Beyoğlu'nun En Güzel Abisi`,
    author: 'Ahmet Ümit',
    category: 'POLISIYE',
    coverImageUrl: 'https://cdn1.dokuzsoft.com/u/ilknokta/img/b/b/e/beyoglunun-en-guzel-abisibd0c062b45bdf795f5496d1a6182f84e.jpg',
    description: `Yılbaşı gecesi işlenen bir cinayet... Tarlabaşı'nın arka sokaklarında bulunan bir erkek cesedi. Öldürülmüş erkeklerin en yakışıklısı, belki de en kötüsü. Karanlık sırların ortaya çıkardığı utanç verici bir gerçek.`,
  },
];

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        books
      });
    },
    routes() {
      this.namespace = '/api';

      this.get('/books', (schema: any) => schema.db.books);

      this.post('/book', (schema: any, request) => {
        const book = JSON.parse(request.requestBody);
        return schema.db.books.insert(book);
      });

      this.get('/categories', (schema: any) => {
        const categories: string[] = [];
        schema.db.books.forEach((book: Book) => {
          if (!categories.includes(book.category.toLocaleUpperCase())) {
            categories.push(book.category);
          }
        });
        return categories;
      });

      
      this.get('/getBooksByCategoryId/:category', (schema: any, request: any) => {
        const books = schema.db.books.filter((book: Book) => book.category === request.params.category);
        return books;
      });

    }
  });
};
