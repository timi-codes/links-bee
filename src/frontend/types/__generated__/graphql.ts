/* eslint-disable */
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
