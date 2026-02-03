import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type BankAccount = {
  __typename?: 'BankAccount';
  accountNumber: Scalars['ID']['output'];
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type BankAccountInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  cardId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Card = {
  __typename?: 'Card';
  account: BankAccount;
  brand: Scalars['String']['output'];
  cardNumber: Scalars['String']['output'];
  expiryDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  owner: User;
};

export type CardInput = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  billingAddress?: InputMaybe<Scalars['String']['input']>;
  brand?: InputMaybe<Scalars['String']['input']>;
  cardId?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  ownerAddress?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Membership = {
  __typename?: 'Membership';
  expiryDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isPaid: Scalars['Boolean']['output'];
  maxAccounts: Scalars['Int']['output'];
  maxCards: Scalars['Int']['output'];
  membershipType: Scalars['String']['output'];
  name: Scalars['String']['output'];
  startDate: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type MembershipInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isPaid?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBankAccount?: Maybe<BankAccount>;
  createCard?: Maybe<Card>;
  createMembership?: Maybe<Membership>;
  createSettings?: Maybe<Settings>;
  deActivateMembership?: Maybe<Membership>;
  login: AuthPayload;
  register: AuthPayload;
  updateBalance?: Maybe<Transaction>;
  updateBankAccount?: Maybe<BankAccount>;
  updateCard?: Maybe<Card>;
  updateMembership?: Maybe<Membership>;
  updateUser?: Maybe<User>;
};


export type MutationCreateBankAccountArgs = {
  accountDetails: BankAccountInput;
};


export type MutationCreateCardArgs = {
  cardDetails: CardInput;
};


export type MutationCreateMembershipArgs = {
  membershipDetails: MembershipInput;
};


export type MutationCreateSettingsArgs = {
  settingsDetails: SettingsInput;
};


export type MutationDeActivateMembershipArgs = {
  id: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  loginRequest: LoginInput;
};


export type MutationRegisterArgs = {
  registerRequest: RegisterInput;
};


export type MutationUpdateBalanceArgs = {
  balanceInput: UpdateBalanceInput;
};


export type MutationUpdateBankAccountArgs = {
  accountDetails: BankAccountInput;
};


export type MutationUpdateCardArgs = {
  cardDetails: CardInput;
};


export type MutationUpdateMembershipArgs = {
  membershipDetails: MembershipInput;
};


export type MutationUpdateUserArgs = {
  userDetails: UserInput;
};

export type Query = {
  __typename?: 'Query';
  bankAccount?: Maybe<BankAccount>;
  bankAccounts: Array<BankAccount>;
  card?: Maybe<Card>;
  cards: Array<Card>;
  me?: Maybe<User>;
  membership?: Maybe<Membership>;
  membershipByUser: Array<Membership>;
  settings?: Maybe<Settings>;
  transactionsByAccount: Array<Transaction>;
  transactionsByUser: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryBankAccountArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  cardId?: InputMaybe<Scalars['ID']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCardArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  cardId?: InputMaybe<Scalars['ID']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMembershipArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembershipByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QuerySettingsArgs = {
  ownerId: Scalars['ID']['input'];
};


export type QueryTransactionsByAccountArgs = {
  accountId: Scalars['ID']['input'];
};


export type QueryTransactionsByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterInput = {
  address: Scalars['String']['input'];
  billingAddress: Scalars['String']['input'];
  birthDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type Settings = {
  __typename?: 'Settings';
  analyticsEnabled?: Maybe<Scalars['Boolean']['output']>;
  darkMode?: Maybe<Scalars['Boolean']['output']>;
  emailNotifications?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  pushNotifications?: Maybe<Scalars['Boolean']['output']>;
  reduceMotion?: Maybe<Scalars['Boolean']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

export type SettingsInput = {
  ownerId: Scalars['ID']['input'];
};

export type Transaction = {
  __typename?: 'Transaction';
  accountId: Scalars['ID']['output'];
  amount: Scalars['Float']['output'];
  balanceAfter: Scalars['Float']['output'];
  balanceBefore: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  transactionType: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type UpdateBalanceInput = {
  accountId: Scalars['ID']['input'];
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  transactionType: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  billingAddress?: Maybe<Scalars['String']['output']>;
  birthDate?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  billingAddress?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterMutationVariables = Exact<{
  registerRequest: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', email: string, firstName: string, id: string, lastName: string } } };

export type LoginMutationVariables = Exact<{
  loginRequest: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', email: string, firstName: string, id: string, lastName: string } } };

export type BankAccountFieldsFragment = { __typename?: 'BankAccount', id: string, name: string, accountNumber: string, currency: string, status: string, type: string, balance: number };

export type BankAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type BankAccountsQuery = { __typename?: 'Query', bankAccounts: Array<{ __typename?: 'BankAccount', id: string, name: string, accountNumber: string, currency: string, status: string, type: string, balance: number }> };

export type BankAccountQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars['ID']['input']>;
  cardId?: InputMaybe<Scalars['ID']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type BankAccountQuery = { __typename?: 'Query', bankAccount?: { __typename?: 'BankAccount', id: string, name: string, accountNumber: string, currency: string, status: string, type: string, balance: number } | null };

export type CreateBankAccountMutationVariables = Exact<{
  accountDetails: BankAccountInput;
}>;


export type CreateBankAccountMutation = { __typename?: 'Mutation', createBankAccount?: { __typename?: 'BankAccount', id: string, name: string, accountNumber: string, currency: string, status: string, type: string, balance: number } | null };

export type UpdateBankAccountMutationVariables = Exact<{
  accountDetails: BankAccountInput;
}>;


export type UpdateBankAccountMutation = { __typename?: 'Mutation', updateBankAccount?: { __typename?: 'BankAccount', id: string, name: string, accountNumber: string, currency: string, status: string, type: string, balance: number } | null };

export type UpdateBalanceMutationVariables = Exact<{
  balanceInput: UpdateBalanceInput;
}>;


export type UpdateBalanceMutation = { __typename?: 'Mutation', updateBalance?: { __typename?: 'Transaction', id: string, userId: string, accountId: string, amount: number, balanceAfter: number, balanceBefore: number, createdAt: string, description?: string | null, transactionType: string } | null };

export type CardFieldsFragment = { __typename?: 'Card', id: string, brand: string, cardNumber: string, expiryDate: string, isActive: boolean };

export type GetAllCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCardsQuery = { __typename?: 'Query', cards: Array<{ __typename?: 'Card', id: string, brand: string, cardNumber: string, expiryDate: string, isActive: boolean }> };

export type GetCardQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars['ID']['input']>;
  cardId?: InputMaybe<Scalars['ID']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetCardQuery = { __typename?: 'Query', card?: { __typename?: 'Card', id: string, brand: string, cardNumber: string, expiryDate: string, isActive: boolean } | null };

export type CreateCardMutationVariables = Exact<{
  cardDetails: CardInput;
}>;


export type CreateCardMutation = { __typename?: 'Mutation', createCard?: { __typename?: 'Card', id: string, brand: string, cardNumber: string, expiryDate: string, isActive: boolean } | null };

export type UpdateCardMutationVariables = Exact<{
  cardDetails: CardInput;
}>;


export type UpdateCardMutation = { __typename?: 'Mutation', updateCard?: { __typename?: 'Card', id: string, brand: string, cardNumber: string, expiryDate: string, isActive: boolean } | null };

export type MembershipFragment = { __typename?: 'Membership', id: string, name: string, startDate: string, userId: string, isPaid: boolean, maxAccounts: number, maxCards: number, expiryDate: string, membershipType: string, isActive: boolean };

export type GetMembershipByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMembershipByIdQuery = { __typename?: 'Query', membership?: { __typename?: 'Membership', id: string, name: string, startDate: string, userId: string, isPaid: boolean, maxAccounts: number, maxCards: number, expiryDate: string, membershipType: string, isActive: boolean } | null };

export type GetMembershipByUserIdQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetMembershipByUserIdQuery = { __typename?: 'Query', membershipByUser: Array<{ __typename?: 'Membership', id: string, name: string, startDate: string, userId: string, isPaid: boolean, maxAccounts: number, maxCards: number, expiryDate: string, membershipType: string, isActive: boolean }> };

export type CreateMembershipMutationVariables = Exact<{
  membershipDetails: MembershipInput;
}>;


export type CreateMembershipMutation = { __typename?: 'Mutation', createMembership?: { __typename?: 'Membership', id: string, name: string, startDate: string, userId: string, isPaid: boolean, maxAccounts: number, maxCards: number, expiryDate: string, membershipType: string, isActive: boolean } | null };

export type UpdateMembershipMutationVariables = Exact<{
  membershipDetails: MembershipInput;
}>;


export type UpdateMembershipMutation = { __typename?: 'Mutation', updateMembership?: { __typename?: 'Membership', id: string, name: string, startDate: string, userId: string, isPaid: boolean, maxAccounts: number, maxCards: number, expiryDate: string, membershipType: string, isActive: boolean } | null };

export type DeActivateMembershipMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeActivateMembershipMutation = { __typename?: 'Mutation', deActivateMembership?: { __typename?: 'Membership', id: string, name: string, startDate: string, userId: string, isPaid: boolean, maxAccounts: number, maxCards: number, expiryDate: string, membershipType: string, isActive: boolean } | null };

export type SettingsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SettingsQuery = { __typename?: 'Query', settings?: { __typename?: 'Settings', analyticsEnabled?: boolean | null, darkMode?: boolean | null, emailNotifications?: boolean | null, id: string, language?: string | null, pushNotifications?: boolean | null, reduceMotion?: boolean | null, timezone?: string | null } | null };

export type TransactionFragment = { __typename?: 'Transaction', id: string, userId: string, accountId: string, amount: number, balanceAfter: number, balanceBefore: number, createdAt: string, description?: string | null, transactionType: string };

export type TransactionsByUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type TransactionsByUserQuery = { __typename?: 'Query', transactionsByUser: Array<{ __typename?: 'Transaction', id: string, userId: string, accountId: string, amount: number, balanceAfter: number, balanceBefore: number, createdAt: string, description?: string | null, transactionType: string }> };

export type TransactionsByAccountQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
}>;


export type TransactionsByAccountQuery = { __typename?: 'Query', transactionsByAccount: Array<{ __typename?: 'Transaction', id: string, userId: string, accountId: string, amount: number, balanceAfter: number, balanceBefore: number, createdAt: string, description?: string | null, transactionType: string }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string, lastName: string }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string } | null };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, address?: string | null, billingAddress?: string | null, birthDate?: string | null, phoneNumber?: string | null } | null };

export type UpdateUserMutationVariables = Exact<{
  userDetails: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, address?: string | null, billingAddress?: string | null, birthDate?: string | null, phoneNumber?: string | null } | null };

export const BankAccountFieldsFragmentDoc = gql`
    fragment BankAccountFields on BankAccount {
  id
  name
  accountNumber
  currency
  status
  type
  balance
}
    `;
export const CardFieldsFragmentDoc = gql`
    fragment CardFields on Card {
  id
  brand
  cardNumber
  expiryDate
  isActive
}
    `;
export const MembershipFragmentDoc = gql`
    fragment membership on Membership {
  id
  name
  startDate
  userId
  isPaid
  maxAccounts
  maxCards
  expiryDate
  membershipType
  isActive
}
    `;
export const TransactionFragmentDoc = gql`
    fragment Transaction on Transaction {
  id
  userId
  accountId
  amount
  balanceAfter
  balanceBefore
  createdAt
  description
  transactionType
}
    `;
export const RegisterDocument = gql`
    mutation Register($registerRequest: RegisterInput!) {
  register(registerRequest: $registerRequest) {
    token
    user {
      email
      firstName
      id
      lastName
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($loginRequest: LoginInput!) {
  login(loginRequest: $loginRequest) {
    token
    user {
      email
      firstName
      id
      lastName
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const BankAccountsDocument = gql`
    query BankAccounts {
  bankAccounts {
    ...BankAccountFields
  }
}
    ${BankAccountFieldsFragmentDoc}`;
export function useBankAccountsQuery(baseOptions?: Apollo.QueryHookOptions<BankAccountsQuery, BankAccountsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BankAccountsQuery, BankAccountsQueryVariables>(BankAccountsDocument, options);
      }
export function useBankAccountsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BankAccountsQuery, BankAccountsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BankAccountsQuery, BankAccountsQueryVariables>(BankAccountsDocument, options);
        }
// @ts-ignore
export function useBankAccountsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BankAccountsQuery, BankAccountsQueryVariables>): Apollo.UseSuspenseQueryResult<BankAccountsQuery, BankAccountsQueryVariables>;
export function useBankAccountsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BankAccountsQuery, BankAccountsQueryVariables>): Apollo.UseSuspenseQueryResult<BankAccountsQuery | undefined, BankAccountsQueryVariables>;
export function useBankAccountsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BankAccountsQuery, BankAccountsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BankAccountsQuery, BankAccountsQueryVariables>(BankAccountsDocument, options);
        }
export type BankAccountsQueryHookResult = ReturnType<typeof useBankAccountsQuery>;
export type BankAccountsLazyQueryHookResult = ReturnType<typeof useBankAccountsLazyQuery>;
export type BankAccountsSuspenseQueryHookResult = ReturnType<typeof useBankAccountsSuspenseQuery>;
export type BankAccountsQueryResult = Apollo.QueryResult<BankAccountsQuery, BankAccountsQueryVariables>;
export const BankAccountDocument = gql`
    query BankAccount($accountId: ID, $cardId: ID, $ownerId: ID) {
  bankAccount(accountId: $accountId, cardId: $cardId, ownerId: $ownerId) {
    ...BankAccountFields
  }
}
    ${BankAccountFieldsFragmentDoc}`;
export function useBankAccountQuery(baseOptions?: Apollo.QueryHookOptions<BankAccountQuery, BankAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BankAccountQuery, BankAccountQueryVariables>(BankAccountDocument, options);
      }
export function useBankAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BankAccountQuery, BankAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BankAccountQuery, BankAccountQueryVariables>(BankAccountDocument, options);
        }
// @ts-ignore
export function useBankAccountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BankAccountQuery, BankAccountQueryVariables>): Apollo.UseSuspenseQueryResult<BankAccountQuery, BankAccountQueryVariables>;
export function useBankAccountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BankAccountQuery, BankAccountQueryVariables>): Apollo.UseSuspenseQueryResult<BankAccountQuery | undefined, BankAccountQueryVariables>;
export function useBankAccountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<BankAccountQuery, BankAccountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BankAccountQuery, BankAccountQueryVariables>(BankAccountDocument, options);
        }
export type BankAccountQueryHookResult = ReturnType<typeof useBankAccountQuery>;
export type BankAccountLazyQueryHookResult = ReturnType<typeof useBankAccountLazyQuery>;
export type BankAccountSuspenseQueryHookResult = ReturnType<typeof useBankAccountSuspenseQuery>;
export type BankAccountQueryResult = Apollo.QueryResult<BankAccountQuery, BankAccountQueryVariables>;
export const CreateBankAccountDocument = gql`
    mutation CreateBankAccount($accountDetails: BankAccountInput!) {
  createBankAccount(accountDetails: $accountDetails) {
    ...BankAccountFields
  }
}
    ${BankAccountFieldsFragmentDoc}`;
export type CreateBankAccountMutationFn = Apollo.MutationFunction<CreateBankAccountMutation, CreateBankAccountMutationVariables>;
export function useCreateBankAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateBankAccountMutation, CreateBankAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBankAccountMutation, CreateBankAccountMutationVariables>(CreateBankAccountDocument, options);
      }
export type CreateBankAccountMutationHookResult = ReturnType<typeof useCreateBankAccountMutation>;
export type CreateBankAccountMutationResult = Apollo.MutationResult<CreateBankAccountMutation>;
export type CreateBankAccountMutationOptions = Apollo.BaseMutationOptions<CreateBankAccountMutation, CreateBankAccountMutationVariables>;
export const UpdateBankAccountDocument = gql`
    mutation UpdateBankAccount($accountDetails: BankAccountInput!) {
  updateBankAccount(accountDetails: $accountDetails) {
    ...BankAccountFields
  }
}
    ${BankAccountFieldsFragmentDoc}`;
export type UpdateBankAccountMutationFn = Apollo.MutationFunction<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>;
export function useUpdateBankAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>(UpdateBankAccountDocument, options);
      }
export type UpdateBankAccountMutationHookResult = ReturnType<typeof useUpdateBankAccountMutation>;
export type UpdateBankAccountMutationResult = Apollo.MutationResult<UpdateBankAccountMutation>;
export type UpdateBankAccountMutationOptions = Apollo.BaseMutationOptions<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>;
export const UpdateBalanceDocument = gql`
    mutation UpdateBalance($balanceInput: UpdateBalanceInput!) {
  updateBalance(balanceInput: $balanceInput) {
    ...Transaction
  }
}
    ${TransactionFragmentDoc}`;
export type UpdateBalanceMutationFn = Apollo.MutationFunction<UpdateBalanceMutation, UpdateBalanceMutationVariables>;
export function useUpdateBalanceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBalanceMutation, UpdateBalanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBalanceMutation, UpdateBalanceMutationVariables>(UpdateBalanceDocument, options);
      }
export type UpdateBalanceMutationHookResult = ReturnType<typeof useUpdateBalanceMutation>;
export type UpdateBalanceMutationResult = Apollo.MutationResult<UpdateBalanceMutation>;
export type UpdateBalanceMutationOptions = Apollo.BaseMutationOptions<UpdateBalanceMutation, UpdateBalanceMutationVariables>;
export const GetAllCardsDocument = gql`
    query GetAllCards {
  cards {
    ...CardFields
  }
}
    ${CardFieldsFragmentDoc}`;
export function useGetAllCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
      }
export function useGetAllCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
        }
// @ts-ignore
export function useGetAllCardsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllCardsQuery, GetAllCardsQueryVariables>;
export function useGetAllCardsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllCardsQuery | undefined, GetAllCardsQueryVariables>;
export function useGetAllCardsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCardsQuery, GetAllCardsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCardsQuery, GetAllCardsQueryVariables>(GetAllCardsDocument, options);
        }
export type GetAllCardsQueryHookResult = ReturnType<typeof useGetAllCardsQuery>;
export type GetAllCardsLazyQueryHookResult = ReturnType<typeof useGetAllCardsLazyQuery>;
export type GetAllCardsSuspenseQueryHookResult = ReturnType<typeof useGetAllCardsSuspenseQuery>;
export type GetAllCardsQueryResult = Apollo.QueryResult<GetAllCardsQuery, GetAllCardsQueryVariables>;
export const GetCardDocument = gql`
    query GetCard($accountId: ID, $cardId: ID, $ownerId: ID) {
  card(accountId: $accountId, cardId: $cardId, ownerId: $ownerId) {
    ...CardFields
  }
}
    ${CardFieldsFragmentDoc}`;
export function useGetCardQuery(baseOptions?: Apollo.QueryHookOptions<GetCardQuery, GetCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCardQuery, GetCardQueryVariables>(GetCardDocument, options);
      }
export function useGetCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCardQuery, GetCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCardQuery, GetCardQueryVariables>(GetCardDocument, options);
        }
// @ts-ignore
export function useGetCardSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCardQuery, GetCardQueryVariables>): Apollo.UseSuspenseQueryResult<GetCardQuery, GetCardQueryVariables>;
export function useGetCardSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCardQuery, GetCardQueryVariables>): Apollo.UseSuspenseQueryResult<GetCardQuery | undefined, GetCardQueryVariables>;
export function useGetCardSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCardQuery, GetCardQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCardQuery, GetCardQueryVariables>(GetCardDocument, options);
        }
export type GetCardQueryHookResult = ReturnType<typeof useGetCardQuery>;
export type GetCardLazyQueryHookResult = ReturnType<typeof useGetCardLazyQuery>;
export type GetCardSuspenseQueryHookResult = ReturnType<typeof useGetCardSuspenseQuery>;
export type GetCardQueryResult = Apollo.QueryResult<GetCardQuery, GetCardQueryVariables>;
export const CreateCardDocument = gql`
    mutation CreateCard($cardDetails: CardInput!) {
  createCard(cardDetails: $cardDetails) {
    ...CardFields
  }
}
    ${CardFieldsFragmentDoc}`;
export type CreateCardMutationFn = Apollo.MutationFunction<CreateCardMutation, CreateCardMutationVariables>;
export function useCreateCardMutation(baseOptions?: Apollo.MutationHookOptions<CreateCardMutation, CreateCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCardMutation, CreateCardMutationVariables>(CreateCardDocument, options);
      }
export type CreateCardMutationHookResult = ReturnType<typeof useCreateCardMutation>;
export type CreateCardMutationResult = Apollo.MutationResult<CreateCardMutation>;
export type CreateCardMutationOptions = Apollo.BaseMutationOptions<CreateCardMutation, CreateCardMutationVariables>;
export const UpdateCardDocument = gql`
    mutation UpdateCard($cardDetails: CardInput!) {
  updateCard(cardDetails: $cardDetails) {
    ...CardFields
  }
}
    ${CardFieldsFragmentDoc}`;
export type UpdateCardMutationFn = Apollo.MutationFunction<UpdateCardMutation, UpdateCardMutationVariables>;
export function useUpdateCardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCardMutation, UpdateCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCardMutation, UpdateCardMutationVariables>(UpdateCardDocument, options);
      }
export type UpdateCardMutationHookResult = ReturnType<typeof useUpdateCardMutation>;
export type UpdateCardMutationResult = Apollo.MutationResult<UpdateCardMutation>;
export type UpdateCardMutationOptions = Apollo.BaseMutationOptions<UpdateCardMutation, UpdateCardMutationVariables>;
export const GetMembershipByIdDocument = gql`
    query getMembershipById($id: ID!) {
  membership(id: $id) {
    ...membership
  }
}
    ${MembershipFragmentDoc}`;
export function useGetMembershipByIdQuery(baseOptions: Apollo.QueryHookOptions<GetMembershipByIdQuery, GetMembershipByIdQueryVariables> & ({ variables: GetMembershipByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>(GetMembershipByIdDocument, options);
      }
export function useGetMembershipByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>(GetMembershipByIdDocument, options);
        }
// @ts-ignore
export function useGetMembershipByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>;
export function useGetMembershipByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetMembershipByIdQuery | undefined, GetMembershipByIdQueryVariables>;
export function useGetMembershipByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>(GetMembershipByIdDocument, options);
        }
export type GetMembershipByIdQueryHookResult = ReturnType<typeof useGetMembershipByIdQuery>;
export type GetMembershipByIdLazyQueryHookResult = ReturnType<typeof useGetMembershipByIdLazyQuery>;
export type GetMembershipByIdSuspenseQueryHookResult = ReturnType<typeof useGetMembershipByIdSuspenseQuery>;
export type GetMembershipByIdQueryResult = Apollo.QueryResult<GetMembershipByIdQuery, GetMembershipByIdQueryVariables>;
export const GetMembershipByUserIdDocument = gql`
    query getMembershipByUserId($userId: ID!) {
  membershipByUser(userId: $userId) {
    ...membership
  }
}
    ${MembershipFragmentDoc}`;
export function useGetMembershipByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables> & ({ variables: GetMembershipByUserIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>(GetMembershipByUserIdDocument, options);
      }
export function useGetMembershipByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>(GetMembershipByUserIdDocument, options);
        }
// @ts-ignore
export function useGetMembershipByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>;
export function useGetMembershipByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetMembershipByUserIdQuery | undefined, GetMembershipByUserIdQueryVariables>;
export function useGetMembershipByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>(GetMembershipByUserIdDocument, options);
        }
export type GetMembershipByUserIdQueryHookResult = ReturnType<typeof useGetMembershipByUserIdQuery>;
export type GetMembershipByUserIdLazyQueryHookResult = ReturnType<typeof useGetMembershipByUserIdLazyQuery>;
export type GetMembershipByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetMembershipByUserIdSuspenseQuery>;
export type GetMembershipByUserIdQueryResult = Apollo.QueryResult<GetMembershipByUserIdQuery, GetMembershipByUserIdQueryVariables>;
export const CreateMembershipDocument = gql`
    mutation createMembership($membershipDetails: MembershipInput!) {
  createMembership(membershipDetails: $membershipDetails) {
    ...membership
  }
}
    ${MembershipFragmentDoc}`;
export type CreateMembershipMutationFn = Apollo.MutationFunction<CreateMembershipMutation, CreateMembershipMutationVariables>;
export function useCreateMembershipMutation(baseOptions?: Apollo.MutationHookOptions<CreateMembershipMutation, CreateMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMembershipMutation, CreateMembershipMutationVariables>(CreateMembershipDocument, options);
      }
export type CreateMembershipMutationHookResult = ReturnType<typeof useCreateMembershipMutation>;
export type CreateMembershipMutationResult = Apollo.MutationResult<CreateMembershipMutation>;
export type CreateMembershipMutationOptions = Apollo.BaseMutationOptions<CreateMembershipMutation, CreateMembershipMutationVariables>;
export const UpdateMembershipDocument = gql`
    mutation updateMembership($membershipDetails: MembershipInput!) {
  updateMembership(membershipDetails: $membershipDetails) {
    ...membership
  }
}
    ${MembershipFragmentDoc}`;
export type UpdateMembershipMutationFn = Apollo.MutationFunction<UpdateMembershipMutation, UpdateMembershipMutationVariables>;
export function useUpdateMembershipMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMembershipMutation, UpdateMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMembershipMutation, UpdateMembershipMutationVariables>(UpdateMembershipDocument, options);
      }
export type UpdateMembershipMutationHookResult = ReturnType<typeof useUpdateMembershipMutation>;
export type UpdateMembershipMutationResult = Apollo.MutationResult<UpdateMembershipMutation>;
export type UpdateMembershipMutationOptions = Apollo.BaseMutationOptions<UpdateMembershipMutation, UpdateMembershipMutationVariables>;
export const DeActivateMembershipDocument = gql`
    mutation deActivateMembership($id: ID!) {
  deActivateMembership(id: $id) {
    ...membership
  }
}
    ${MembershipFragmentDoc}`;
export type DeActivateMembershipMutationFn = Apollo.MutationFunction<DeActivateMembershipMutation, DeActivateMembershipMutationVariables>;
export function useDeActivateMembershipMutation(baseOptions?: Apollo.MutationHookOptions<DeActivateMembershipMutation, DeActivateMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeActivateMembershipMutation, DeActivateMembershipMutationVariables>(DeActivateMembershipDocument, options);
      }
export type DeActivateMembershipMutationHookResult = ReturnType<typeof useDeActivateMembershipMutation>;
export type DeActivateMembershipMutationResult = Apollo.MutationResult<DeActivateMembershipMutation>;
export type DeActivateMembershipMutationOptions = Apollo.BaseMutationOptions<DeActivateMembershipMutation, DeActivateMembershipMutationVariables>;
export const SettingsDocument = gql`
    query Settings($id: ID!) {
  settings(ownerId: $id) {
    analyticsEnabled
    darkMode
    emailNotifications
    id
    language
    pushNotifications
    reduceMotion
    timezone
  }
}
    `;
export function useSettingsQuery(baseOptions: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables> & ({ variables: SettingsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
      }
export function useSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
        }
// @ts-ignore
export function useSettingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SettingsQuery, SettingsQueryVariables>): Apollo.UseSuspenseQueryResult<SettingsQuery, SettingsQueryVariables>;
export function useSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SettingsQuery, SettingsQueryVariables>): Apollo.UseSuspenseQueryResult<SettingsQuery | undefined, SettingsQueryVariables>;
export function useSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
        }
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<typeof useSettingsLazyQuery>;
export type SettingsSuspenseQueryHookResult = ReturnType<typeof useSettingsSuspenseQuery>;
export type SettingsQueryResult = Apollo.QueryResult<SettingsQuery, SettingsQueryVariables>;
export const TransactionsByUserDocument = gql`
    query transactionsByUser($userId: ID!) {
  transactionsByUser(userId: $userId) {
    ...Transaction
  }
}
    ${TransactionFragmentDoc}`;
export function useTransactionsByUserQuery(baseOptions: Apollo.QueryHookOptions<TransactionsByUserQuery, TransactionsByUserQueryVariables> & ({ variables: TransactionsByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsByUserQuery, TransactionsByUserQueryVariables>(TransactionsByUserDocument, options);
      }
export function useTransactionsByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsByUserQuery, TransactionsByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsByUserQuery, TransactionsByUserQueryVariables>(TransactionsByUserDocument, options);
        }
// @ts-ignore
export function useTransactionsByUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TransactionsByUserQuery, TransactionsByUserQueryVariables>): Apollo.UseSuspenseQueryResult<TransactionsByUserQuery, TransactionsByUserQueryVariables>;
export function useTransactionsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TransactionsByUserQuery, TransactionsByUserQueryVariables>): Apollo.UseSuspenseQueryResult<TransactionsByUserQuery | undefined, TransactionsByUserQueryVariables>;
export function useTransactionsByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TransactionsByUserQuery, TransactionsByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TransactionsByUserQuery, TransactionsByUserQueryVariables>(TransactionsByUserDocument, options);
        }
export type TransactionsByUserQueryHookResult = ReturnType<typeof useTransactionsByUserQuery>;
export type TransactionsByUserLazyQueryHookResult = ReturnType<typeof useTransactionsByUserLazyQuery>;
export type TransactionsByUserSuspenseQueryHookResult = ReturnType<typeof useTransactionsByUserSuspenseQuery>;
export type TransactionsByUserQueryResult = Apollo.QueryResult<TransactionsByUserQuery, TransactionsByUserQueryVariables>;
export const TransactionsByAccountDocument = gql`
    query transactionsByAccount($accountId: ID!) {
  transactionsByAccount(accountId: $accountId) {
    ...Transaction
  }
}
    ${TransactionFragmentDoc}`;
export function useTransactionsByAccountQuery(baseOptions: Apollo.QueryHookOptions<TransactionsByAccountQuery, TransactionsByAccountQueryVariables> & ({ variables: TransactionsByAccountQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>(TransactionsByAccountDocument, options);
      }
export function useTransactionsByAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>(TransactionsByAccountDocument, options);
        }
// @ts-ignore
export function useTransactionsByAccountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>): Apollo.UseSuspenseQueryResult<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>;
export function useTransactionsByAccountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>): Apollo.UseSuspenseQueryResult<TransactionsByAccountQuery | undefined, TransactionsByAccountQueryVariables>;
export function useTransactionsByAccountSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>(TransactionsByAccountDocument, options);
        }
export type TransactionsByAccountQueryHookResult = ReturnType<typeof useTransactionsByAccountQuery>;
export type TransactionsByAccountLazyQueryHookResult = ReturnType<typeof useTransactionsByAccountLazyQuery>;
export type TransactionsByAccountSuspenseQueryHookResult = ReturnType<typeof useTransactionsByAccountSuspenseQuery>;
export type TransactionsByAccountQueryResult = Apollo.QueryResult<TransactionsByAccountQuery, TransactionsByAccountQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  users {
    id
    email
    firstName
    lastName
  }
}
    `;
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
// @ts-ignore
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>): Apollo.UseSuspenseQueryResult<GetAllUsersQuery | undefined, GetAllUsersQueryVariables>;
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    firstName
    lastName
  }
}
    `;
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
// @ts-ignore
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>): Apollo.UseSuspenseQueryResult<MeQuery, MeQueryVariables>;
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>): Apollo.UseSuspenseQueryResult<MeQuery | undefined, MeQueryVariables>;
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: ID!) {
  user(id: $id) {
    id
    email
    firstName
    lastName
    address
    billingAddress
    birthDate
    phoneNumber
  }
}
    `;
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
// @ts-ignore
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>): Apollo.UseSuspenseQueryResult<GetUserByIdQuery | undefined, GetUserByIdQueryVariables>;
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($userDetails: UserInput!) {
  updateUser(userDetails: $userDetails) {
    id
    email
    firstName
    lastName
    address
    billingAddress
    birthDate
    phoneNumber
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;