/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type BooleanResponse = {
  __typename?: 'BooleanResponse';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type Link = {
  __typename?: 'Link';
  bee_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  expires_at?: Maybe<Scalars['Date']['output']>;
  last_visited_at?: Maybe<Scalars['Date']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  original_url?: Maybe<Scalars['URL']['output']>;
  owner?: Maybe<User>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  shortenLink?: Maybe<Link>;
};


export type MutationShortenLinkArgs = {
  url: Scalars['URL']['input'];
};

export type Query = {
  __typename?: 'Query';
  getShortLinks?: Maybe<Array<Maybe<Link>>>;
};

export type User = {
  __typename?: 'User';
  created_at?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  last_login?: Maybe<Scalars['Date']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type GetShortLinksMutationVariables = Exact<{
  url: Scalars['URL']['input'];
}>;


export type GetShortLinksMutation = { __typename?: 'Mutation', shortenLink?: { __typename?: 'Link', bee_id?: string | null, created_at?: any | null, expires_at?: any | null, last_visited_at?: any | null, name?: string | null, original_url?: any | null, owner?: { __typename?: 'User', id?: string | null, email?: any | null, last_login?: any | null, password?: string | null, updated_at?: any | null, created_at?: any | null } | null } | null };


export const GetShortLinksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"getShortLinks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"URL"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shortenLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bee_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_visited_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"original_url"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"last_login"}},{"kind":"Field","name":{"kind":"Name","value":"password"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]} as unknown as DocumentNode<GetShortLinksMutation, GetShortLinksMutationVariables>;