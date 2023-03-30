/**
 * A simple basic item
 */
export  class SimpleItemEntity {
  constructor(
    public id?: string,
    public name?: string,
    public description?: string,
    public ownerId?: string,
    public created?: string
  ) {}
}
