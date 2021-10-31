type Typename = { __typename?: string }

export type WithTypename<T extends Typename> = {
  [K in keyof T]-?: WithTypename<Exclude<T[K], undefined>>
}
