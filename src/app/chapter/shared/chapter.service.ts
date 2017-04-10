import { Injectable } from '@angular/core';
import { CommonService } from 'app/core/services/common.service';

@Injectable()
export class ChapterService {

    constructor(private service: CommonService) { }

    getChaptersByBookId(bookId) {
        return this.service.get('chapter/GetChaptersByBookId/' + bookId);
    }

    getSectionByChapterId(chapterId) {
        return this.service.get('section/GetSectionByChapterId/' + chapterId);
    }
}
