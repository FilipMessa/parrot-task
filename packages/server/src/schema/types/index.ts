export * from './Record';

import {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
  subscriptionType,
} from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
export const DateTime = asNexusMethod(DateTimeResolver, 'date');
