/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChapterOneService } from './chapter-one.service';

describe('Service: ChapterOne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChapterOneService]
    });
  });

  it('should ...', inject([ChapterOneService], (service: ChapterOneService) => {
    expect(service).toBeTruthy();
  }));
});