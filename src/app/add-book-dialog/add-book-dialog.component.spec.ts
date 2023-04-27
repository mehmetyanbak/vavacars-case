import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBookDialogComponent } from './add-book-dialog.component';
import { BookService } from 'src/shared/services';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

xdescribe('AddBookDialogComponent', () => {
  let component: AddBookDialogComponent;
  let fixture: ComponentFixture<AddBookDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      providers: [
        BookService,
        {
          provide: MAT_DIALOG_DEFAULT_OPTIONS,
          useValue: { AddBookDialogComponent },
        },
        MatDialogRef,
      ],
    });
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBookDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddBookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
