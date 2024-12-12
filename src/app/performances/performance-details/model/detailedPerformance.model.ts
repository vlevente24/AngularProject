import {Role} from './role.model';

export class detailedPerformance {
    constructor(
      public id: number,
      public dramaTitle: string,
      public genre: string,
      public date: Date,
      public duration: number,
      public location: string,
      public imagePath: string,
      public price: number,
      public description: string,
      public director: string,
      public roles: Role[]
    ) {}
}
