import { objectType, enumType, queryType, subscriptionType } from 'nexus';
import { Context } from '../../context';

export const Record = objectType({
  name: 'Record',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.field('createdAt', { type: 'DateTime' });
    t.nonNull.string('name');
    t.nonNull.field('updatedAt', { type: 'DateTime' });
    t.nonNull.string('state'); // TODO enum
  },
});

// export const RecordState = enumType({
//   name: 'RecordState',
//   members: ['new', 'transcripting', 'transcripted', 'failed', 'picked', 'finished'],
// });

export const getAllRecordsQuery = queryType({
  definition(t) {
    t.list.field('getAllRecords', {
      type: 'Record',
      resolve(parent, _, context: Context) {
        return context.prisma.record.findMany();
      },
    });
  },
});

export const Subscription = subscriptionType({
  definition(t) {
    t.string('truths', {
      subscribe(parent, _, context: Context) {
        // return context.pubsub.asyncIterator(['bookTitleChanged']);
        return (async function* () {
          while (true) {
            await new Promise((res) => setTimeout(res, 1000));
            yield Math.random();
          }
        })();
      },
      resolve(eventData: any) {
        return eventData;
      },
    });
  },
});
