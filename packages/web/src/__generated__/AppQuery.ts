/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AppQuery
// ====================================================

export interface AppQuery_getAllRecords {
  __typename: "Record";
  id: string;
  name: string;
}

export interface AppQuery {
  getAllRecords: (AppQuery_getAllRecords | null)[] | null;
}
