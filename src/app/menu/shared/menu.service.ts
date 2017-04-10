import { Injectable } from '@angular/core';
import { CommonService } from 'app/core/services/common.service';

@Injectable()
export class MenuService {

    constructor(private service: CommonService) { }

    getBooks() {
        return this.service.get('book/GetBooks');
    }
}
