import { Injectable } from '@angular/core';
import { CommonService } from 'app/core/services/common.service';

@Injectable()
export class ChapterOneService {

    constructor(private service: CommonService) { }

    getGreetings() {
        return this.service.getString("http://ec2-54-193-9-147.us-west-1.compute.amazonaws.com/api/home/greetings");
    }
}

