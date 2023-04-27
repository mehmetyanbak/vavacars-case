import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BookService } from './book.service';

describe('BookService', () => {
  let injector: TestBed;
  let service: BookService;
  let httpMock: HttpTestingController;

  const dummyBookListResponse = [
    {
      id: 1,
      title: 'Sefiller',
      author: 'Victor Hugo',
      category: 'KLASIKLER',
      coverImageUrl:
        'https://www.ilknokta.com/u/ilknokta/img/b/s/e/sefiller1b132b2ff6eb9dd89cc65195e6ba8427.jpg',
      description: `Victor Hugo (1802-1885): Fransız edebiyatının gelmiş geçmiş en büyük yazarlarındandır. Şiirleri, oyunları ve romanları ile tanınır. Romantizm akımının Fransa'daki temsilcisidir. Edebiyat alanındaki devasa başarılarının yanında politik hayatta da etkin bir rol üstlendi, bu nedenle sürgün cezasına çarptırıldı, cezasını tamamlamasına rağmen İmparatorluk yıkılana dek Fransa'ya dönmedi`,
    },
    {
      id: 2,
      title: 'Suç Ve Ceza',
      author: 'Dostoyevski',
      category: 'KLASIKLER',
      coverImageUrl:
        'https://cdn1.dokuzsoft.com/u/ilknokta/img/b/s/u/suc-ve-cezae0e5bcb1d08c76267f7662776919cdc0.jpg',
      description: `Tüm zamanların en çok konuşulan romanlarından Suç ve Ceza, psikolojik derinliği ve topluma tuttuğu aynayla gündemde kalmaya devam ediyor.`,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookService],
    });

    injector = getTestBed();
    service = injector.get(BookService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
