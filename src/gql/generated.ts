import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null | undefined
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export type Continent = {
  __typename?: 'Continent'
  code: Scalars['ID']
  countries: Array<Country>
  name: Scalars['String']
}

export type ContinentFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type Country = {
  __typename?: 'Country'
  capital?: Maybe<Scalars['String']>
  code: Scalars['ID']
  continent: Continent
  currency?: Maybe<Scalars['String']>
  emoji: Scalars['String']
  emojiU: Scalars['String']
  languages: Array<Language>
  name: Scalars['String']
  native: Scalars['String']
  phone: Scalars['String']
  states: Array<State>
}

export type CountryFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
  continent?: Maybe<StringQueryOperatorInput>
  currency?: Maybe<StringQueryOperatorInput>
}

export type Language = {
  __typename?: 'Language'
  code: Scalars['ID']
  name?: Maybe<Scalars['String']>
  native?: Maybe<Scalars['String']>
  rtl: Scalars['Boolean']
}

export type LanguageFilterInput = {
  code?: Maybe<StringQueryOperatorInput>
}

export type Query = {
  __typename?: 'Query'
  continent?: Maybe<Continent>
  continents: Array<Continent>
  countries: Array<Country>
  country?: Maybe<Country>
  language?: Maybe<Language>
  languages: Array<Language>
}

export type QueryContinentArgs = {
  code: Scalars['ID']
}

export type QueryContinentsArgs = {
  filter?: Maybe<ContinentFilterInput>
}

export type QueryCountriesArgs = {
  filter?: Maybe<CountryFilterInput>
}

export type QueryCountryArgs = {
  code: Scalars['ID']
}

export type QueryLanguageArgs = {
  code: Scalars['ID']
}

export type QueryLanguagesArgs = {
  filter?: Maybe<LanguageFilterInput>
}

export type State = {
  __typename?: 'State'
  code?: Maybe<Scalars['String']>
  country: Country
  name: Scalars['String']
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  ne?: Maybe<Scalars['String']>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
}

export type CountryFragment = { __typename?: 'Country'; code: string; name: string }

export type GetCountriesQueryVariables = Exact<{ [key: string]: never }>

export type GetCountriesQuery = {
  __typename?: 'Query'
  countries: Array<{ __typename?: 'Country'; code: string; name: string }>
}

export type StateFragment = { __typename?: 'State'; code?: string | null | undefined; name: string }

export const CountryFragmentDoc = gql`
  fragment country on Country {
    code
    name
  }
`
export const StateFragmentDoc = gql`
  fragment state on State {
    code
    name
  }
`
export const GetCountriesDocument = gql`
  query getCountries {
    countries {
      ...country
    }
  }
  ${CountryFragmentDoc}
`

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options
  )
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options
  )
}
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>
