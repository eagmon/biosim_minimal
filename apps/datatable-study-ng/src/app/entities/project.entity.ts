export class ProjectEntity {
  constructor(
    public _id: string,
    public id: string,
    public simulationRun: any,
    public owner: any,
    public created: Date,
    public updated: Date,

  ) { }

}
