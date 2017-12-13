import { Injectable } from '@angular/core';

@Injectable()
export class TestContentService {

  constructor() { }

  getContent() {
    return 'Hello from our service!';
  }

}
