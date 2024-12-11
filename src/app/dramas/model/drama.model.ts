export class Drama {
  constructor(
    public id: number,
    public title: string,
    public genre: string,
    public duration: number,
    public imagePath: string,
    public directorName: string,
    public directorId: number
  ) {}
}
