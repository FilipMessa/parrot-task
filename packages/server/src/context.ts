import { PrismaClient } from '@prisma/client';
import { PubSub } from 'apollo-server';

const pubsub = new PubSub();

setInterval(() => {
  context.pubsub.publish('bookTitleChanged', 'intrva;');
  console.log('D');
}, 500);

export interface Context {
  prisma: PrismaClient;
  pubsub: PubSub;
}

const prisma = new PrismaClient();

export const context: Context = {
  prisma,
  pubsub,
};
