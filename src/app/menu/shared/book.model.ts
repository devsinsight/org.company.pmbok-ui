import {Chapter} from 'app/menu/shared/chapter.model';

export class Book {
    constructor(
        id: number,
        name: string,
        autor: string,
        description: string,
        isEnable: boolean,
        creationDate: string,
        chapters: Chapter[]) { }

}