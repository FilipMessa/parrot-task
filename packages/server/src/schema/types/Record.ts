import { objectType, enumType } from 'nexus';

export const Record = objectType({
  name: 'Record',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.nonNull.string('name');
    t.nonNull.field('updatedAt', { type: 'DateTime' });
    t.nonNull.field('state', { type: 'RecordState' });
  },
});

export const RecordState = enumType({
  name: 'RecordState',
  members: ['new', 'transcripting', 'transcripted', 'failed', 'picked', 'finished'],
});
