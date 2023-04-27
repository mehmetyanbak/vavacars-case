import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookListComponent } from './book-list.component';
import { BookService } from 'src/shared/services';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { of } from 'rxjs';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let router: Router;

  let dialogSpy: jasmine.Spy;
  let dialogRefSpyObj = jasmine.createSpyObj({
    afterClosed: of({}),
    close: null,
  });
  dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, FormsModule],
      providers: [BookService],
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  beforeEach(() => {
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(
      dialogRefSpyObj
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open AddBookDialog ', () => {
    component.openAddBookDialog();
    expect(dialogSpy).toHaveBeenCalled();

    expect(dialogSpy).toHaveBeenCalledWith(AddBookDialogComponent, {
      height: '420px',
      width: '600px',
    });

    expect(dialogRefSpyObj.afterClosed).toHaveBeenCalled();
  });

  it('should call getAllBooks if selected `ALL` category', () => {
    const getAllBooksSpy = spyOn<any>(component, 'getAllBooks');
    component.filterCategories('ALL');
    expect(getAllBooksSpy).toHaveBeenCalled();
  });

  it('should navigate', () => {
    const component = fixture.componentInstance;
    const navigateSpy = spyOn(router, 'navigate');
    const dummyBook = {
      id: 1,
      title: 'title',
      author: 'author',
      category: 'category',
      coverImageUrl: 'coverImageUrl',
      description: 'description',
    };
    component.navigateToDetail(dummyBook);
    expect(navigateSpy).toHaveBeenCalledWith([
      'book-detail',
      { data: JSON.stringify(dummyBook) },
    ]);
  });
});
