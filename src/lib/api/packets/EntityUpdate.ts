import * as app from '..';

export class EntityUpdate {
  private constructor(
    readonly entities: Array<app.EntityUpdateEntity>) {}

  static create(stream: app.BinaryReader) {
    const membersSize = stream.readVariableLength();
    const members = process(stream, membersSize);
    return new EntityUpdate(members);
  }
}

function process(stream: app.BinaryReader, size: number) {
  const result = new Array<app.EntityUpdateEntity>(size);
  for (let i = 0; i < size; i++) result[i] = app.EntityUpdateEntity.create(stream);
  return result;
}
