export class SimulatorEntity {
  constructor(
    public _id: string,
    public id: string,
    public biosimulators: object,
    public name: string,
    public version: string,
    public description: string,
    public urls: object[],
    public image: string | null,
    public cli: object | null,
    public pythonApi: object | null,
    public authors: object[],
    public references: object,
    public license: object | null,
    public algorithms: object[],
    public interfaceTypes: string[],
    public supportedOperatingSystemTypes: string[],
    public supportedProgrammingLanguages: string[],
    public funding: string[]
  ) { }


}
