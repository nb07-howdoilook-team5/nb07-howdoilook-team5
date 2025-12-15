
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model style
 * 
 */
export type style = $Result.DefaultSelection<Prisma.$stylePayload>
/**
 * Model curation
 * 
 */
export type curation = $Result.DefaultSelection<Prisma.$curationPayload>
/**
 * Model curation_comment
 * 
 */
export type curation_comment = $Result.DefaultSelection<Prisma.$curation_commentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Styles
 * const styles = await prisma.style.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Styles
   * const styles = await prisma.style.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.style`: Exposes CRUD operations for the **style** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Styles
    * const styles = await prisma.style.findMany()
    * ```
    */
  get style(): Prisma.styleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curation`: Exposes CRUD operations for the **curation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curations
    * const curations = await prisma.curation.findMany()
    * ```
    */
  get curation(): Prisma.curationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curation_comment`: Exposes CRUD operations for the **curation_comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curation_comments
    * const curation_comments = await prisma.curation_comment.findMany()
    * ```
    */
  get curation_comment(): Prisma.curation_commentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    style: 'style',
    curation: 'curation',
    curation_comment: 'curation_comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "style" | "curation" | "curation_comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      style: {
        payload: Prisma.$stylePayload<ExtArgs>
        fields: Prisma.styleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.styleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.styleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>
          }
          findFirst: {
            args: Prisma.styleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.styleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>
          }
          findMany: {
            args: Prisma.styleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>[]
          }
          create: {
            args: Prisma.styleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>
          }
          createMany: {
            args: Prisma.styleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.styleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>[]
          }
          delete: {
            args: Prisma.styleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>
          }
          update: {
            args: Prisma.styleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>
          }
          deleteMany: {
            args: Prisma.styleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.styleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.styleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>[]
          }
          upsert: {
            args: Prisma.styleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stylePayload>
          }
          aggregate: {
            args: Prisma.StyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStyle>
          }
          groupBy: {
            args: Prisma.styleGroupByArgs<ExtArgs>
            result: $Utils.Optional<StyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.styleCountArgs<ExtArgs>
            result: $Utils.Optional<StyleCountAggregateOutputType> | number
          }
        }
      }
      curation: {
        payload: Prisma.$curationPayload<ExtArgs>
        fields: Prisma.curationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.curationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.curationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>
          }
          findFirst: {
            args: Prisma.curationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.curationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>
          }
          findMany: {
            args: Prisma.curationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>[]
          }
          create: {
            args: Prisma.curationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>
          }
          createMany: {
            args: Prisma.curationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.curationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>[]
          }
          delete: {
            args: Prisma.curationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>
          }
          update: {
            args: Prisma.curationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>
          }
          deleteMany: {
            args: Prisma.curationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.curationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.curationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>[]
          }
          upsert: {
            args: Prisma.curationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curationPayload>
          }
          aggregate: {
            args: Prisma.CurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuration>
          }
          groupBy: {
            args: Prisma.curationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.curationCountArgs<ExtArgs>
            result: $Utils.Optional<CurationCountAggregateOutputType> | number
          }
        }
      }
      curation_comment: {
        payload: Prisma.$curation_commentPayload<ExtArgs>
        fields: Prisma.curation_commentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.curation_commentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.curation_commentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>
          }
          findFirst: {
            args: Prisma.curation_commentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.curation_commentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>
          }
          findMany: {
            args: Prisma.curation_commentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>[]
          }
          create: {
            args: Prisma.curation_commentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>
          }
          createMany: {
            args: Prisma.curation_commentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.curation_commentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>[]
          }
          delete: {
            args: Prisma.curation_commentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>
          }
          update: {
            args: Prisma.curation_commentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>
          }
          deleteMany: {
            args: Prisma.curation_commentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.curation_commentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.curation_commentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>[]
          }
          upsert: {
            args: Prisma.curation_commentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$curation_commentPayload>
          }
          aggregate: {
            args: Prisma.Curation_commentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCuration_comment>
          }
          groupBy: {
            args: Prisma.curation_commentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Curation_commentGroupByOutputType>[]
          }
          count: {
            args: Prisma.curation_commentCountArgs<ExtArgs>
            result: $Utils.Optional<Curation_commentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    style?: styleOmit
    curation?: curationOmit
    curation_comment?: curation_commentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StyleCountOutputType
   */

  export type StyleCountOutputType = {
    curations: number
  }

  export type StyleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curations?: boolean | StyleCountOutputTypeCountCurationsArgs
  }

  // Custom InputTypes
  /**
   * StyleCountOutputType without action
   */
  export type StyleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleCountOutputType
     */
    select?: StyleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StyleCountOutputType without action
   */
  export type StyleCountOutputTypeCountCurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model style
   */

  export type AggregateStyle = {
    _count: StyleCountAggregateOutputType | null
    _avg: StyleAvgAggregateOutputType | null
    _sum: StyleSumAggregateOutputType | null
    _min: StyleMinAggregateOutputType | null
    _max: StyleMaxAggregateOutputType | null
  }

  export type StyleAvgAggregateOutputType = {
    id: number | null
  }

  export type StyleSumAggregateOutputType = {
    id: bigint | null
  }

  export type StyleMinAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    title: string | null
    password: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StyleMaxAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    title: string | null
    password: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StyleCountAggregateOutputType = {
    id: number
    nickname: number
    title: number
    password: number
    description: number
    tags: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StyleAvgAggregateInputType = {
    id?: true
  }

  export type StyleSumAggregateInputType = {
    id?: true
  }

  export type StyleMinAggregateInputType = {
    id?: true
    nickname?: true
    title?: true
    password?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type StyleMaxAggregateInputType = {
    id?: true
    nickname?: true
    title?: true
    password?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type StyleCountAggregateInputType = {
    id?: true
    nickname?: true
    title?: true
    password?: true
    description?: true
    tags?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which style to aggregate.
     */
    where?: styleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styles to fetch.
     */
    orderBy?: styleOrderByWithRelationInput | styleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: styleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned styles
    **/
    _count?: true | StyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StyleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StyleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StyleMaxAggregateInputType
  }

  export type GetStyleAggregateType<T extends StyleAggregateArgs> = {
        [P in keyof T & keyof AggregateStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStyle[P]>
      : GetScalarType<T[P], AggregateStyle[P]>
  }




  export type styleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: styleWhereInput
    orderBy?: styleOrderByWithAggregationInput | styleOrderByWithAggregationInput[]
    by: StyleScalarFieldEnum[] | StyleScalarFieldEnum
    having?: styleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StyleCountAggregateInputType | true
    _avg?: StyleAvgAggregateInputType
    _sum?: StyleSumAggregateInputType
    _min?: StyleMinAggregateInputType
    _max?: StyleMaxAggregateInputType
  }

  export type StyleGroupByOutputType = {
    id: bigint
    nickname: string
    title: string
    password: string
    description: string
    tags: string[]
    created_at: Date
    updated_at: Date | null
    _count: StyleCountAggregateOutputType | null
    _avg: StyleAvgAggregateOutputType | null
    _sum: StyleSumAggregateOutputType | null
    _min: StyleMinAggregateOutputType | null
    _max: StyleMaxAggregateOutputType | null
  }

  type GetStyleGroupByPayload<T extends styleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StyleGroupByOutputType[P]>
            : GetScalarType<T[P], StyleGroupByOutputType[P]>
        }
      >
    >


  export type styleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    title?: boolean
    password?: boolean
    description?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
    curations?: boolean | style$curationsArgs<ExtArgs>
    _count?: boolean | StyleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["style"]>

  export type styleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    title?: boolean
    password?: boolean
    description?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["style"]>

  export type styleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    title?: boolean
    password?: boolean
    description?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["style"]>

  export type styleSelectScalar = {
    id?: boolean
    nickname?: boolean
    title?: boolean
    password?: boolean
    description?: boolean
    tags?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type styleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "title" | "password" | "description" | "tags" | "created_at" | "updated_at", ExtArgs["result"]["style"]>
  export type styleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curations?: boolean | style$curationsArgs<ExtArgs>
    _count?: boolean | StyleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type styleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type styleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "style"
    objects: {
      curations: Prisma.$curationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nickname: string
      title: string
      password: string
      description: string
      tags: string[]
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["style"]>
    composites: {}
  }

  type styleGetPayload<S extends boolean | null | undefined | styleDefaultArgs> = $Result.GetResult<Prisma.$stylePayload, S>

  type styleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<styleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StyleCountAggregateInputType | true
    }

  export interface styleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['style'], meta: { name: 'style' } }
    /**
     * Find zero or one Style that matches the filter.
     * @param {styleFindUniqueArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends styleFindUniqueArgs>(args: SelectSubset<T, styleFindUniqueArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Style that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {styleFindUniqueOrThrowArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends styleFindUniqueOrThrowArgs>(args: SelectSubset<T, styleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Style that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleFindFirstArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends styleFindFirstArgs>(args?: SelectSubset<T, styleFindFirstArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Style that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleFindFirstOrThrowArgs} args - Arguments to find a Style
     * @example
     * // Get one Style
     * const style = await prisma.style.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends styleFindFirstOrThrowArgs>(args?: SelectSubset<T, styleFindFirstOrThrowArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Styles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Styles
     * const styles = await prisma.style.findMany()
     * 
     * // Get first 10 Styles
     * const styles = await prisma.style.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const styleWithIdOnly = await prisma.style.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends styleFindManyArgs>(args?: SelectSubset<T, styleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Style.
     * @param {styleCreateArgs} args - Arguments to create a Style.
     * @example
     * // Create one Style
     * const Style = await prisma.style.create({
     *   data: {
     *     // ... data to create a Style
     *   }
     * })
     * 
     */
    create<T extends styleCreateArgs>(args: SelectSubset<T, styleCreateArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Styles.
     * @param {styleCreateManyArgs} args - Arguments to create many Styles.
     * @example
     * // Create many Styles
     * const style = await prisma.style.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends styleCreateManyArgs>(args?: SelectSubset<T, styleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Styles and returns the data saved in the database.
     * @param {styleCreateManyAndReturnArgs} args - Arguments to create many Styles.
     * @example
     * // Create many Styles
     * const style = await prisma.style.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Styles and only return the `id`
     * const styleWithIdOnly = await prisma.style.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends styleCreateManyAndReturnArgs>(args?: SelectSubset<T, styleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Style.
     * @param {styleDeleteArgs} args - Arguments to delete one Style.
     * @example
     * // Delete one Style
     * const Style = await prisma.style.delete({
     *   where: {
     *     // ... filter to delete one Style
     *   }
     * })
     * 
     */
    delete<T extends styleDeleteArgs>(args: SelectSubset<T, styleDeleteArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Style.
     * @param {styleUpdateArgs} args - Arguments to update one Style.
     * @example
     * // Update one Style
     * const style = await prisma.style.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends styleUpdateArgs>(args: SelectSubset<T, styleUpdateArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Styles.
     * @param {styleDeleteManyArgs} args - Arguments to filter Styles to delete.
     * @example
     * // Delete a few Styles
     * const { count } = await prisma.style.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends styleDeleteManyArgs>(args?: SelectSubset<T, styleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Styles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Styles
     * const style = await prisma.style.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends styleUpdateManyArgs>(args: SelectSubset<T, styleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Styles and returns the data updated in the database.
     * @param {styleUpdateManyAndReturnArgs} args - Arguments to update many Styles.
     * @example
     * // Update many Styles
     * const style = await prisma.style.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Styles and only return the `id`
     * const styleWithIdOnly = await prisma.style.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends styleUpdateManyAndReturnArgs>(args: SelectSubset<T, styleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Style.
     * @param {styleUpsertArgs} args - Arguments to update or create a Style.
     * @example
     * // Update or create a Style
     * const style = await prisma.style.upsert({
     *   create: {
     *     // ... data to create a Style
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Style we want to update
     *   }
     * })
     */
    upsert<T extends styleUpsertArgs>(args: SelectSubset<T, styleUpsertArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Styles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleCountArgs} args - Arguments to filter Styles to count.
     * @example
     * // Count the number of Styles
     * const count = await prisma.style.count({
     *   where: {
     *     // ... the filter for the Styles we want to count
     *   }
     * })
    **/
    count<T extends styleCountArgs>(
      args?: Subset<T, styleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Style.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StyleAggregateArgs>(args: Subset<T, StyleAggregateArgs>): Prisma.PrismaPromise<GetStyleAggregateType<T>>

    /**
     * Group by Style.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {styleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends styleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: styleGroupByArgs['orderBy'] }
        : { orderBy?: styleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, styleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the style model
   */
  readonly fields: styleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for style.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__styleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curations<T extends style$curationsArgs<ExtArgs> = {}>(args?: Subset<T, style$curationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the style model
   */
  interface styleFieldRefs {
    readonly id: FieldRef<"style", 'BigInt'>
    readonly nickname: FieldRef<"style", 'String'>
    readonly title: FieldRef<"style", 'String'>
    readonly password: FieldRef<"style", 'String'>
    readonly description: FieldRef<"style", 'String'>
    readonly tags: FieldRef<"style", 'String[]'>
    readonly created_at: FieldRef<"style", 'DateTime'>
    readonly updated_at: FieldRef<"style", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * style findUnique
   */
  export type styleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * Filter, which style to fetch.
     */
    where: styleWhereUniqueInput
  }

  /**
   * style findUniqueOrThrow
   */
  export type styleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * Filter, which style to fetch.
     */
    where: styleWhereUniqueInput
  }

  /**
   * style findFirst
   */
  export type styleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * Filter, which style to fetch.
     */
    where?: styleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styles to fetch.
     */
    orderBy?: styleOrderByWithRelationInput | styleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for styles.
     */
    cursor?: styleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of styles.
     */
    distinct?: StyleScalarFieldEnum | StyleScalarFieldEnum[]
  }

  /**
   * style findFirstOrThrow
   */
  export type styleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * Filter, which style to fetch.
     */
    where?: styleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styles to fetch.
     */
    orderBy?: styleOrderByWithRelationInput | styleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for styles.
     */
    cursor?: styleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of styles.
     */
    distinct?: StyleScalarFieldEnum | StyleScalarFieldEnum[]
  }

  /**
   * style findMany
   */
  export type styleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * Filter, which styles to fetch.
     */
    where?: styleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of styles to fetch.
     */
    orderBy?: styleOrderByWithRelationInput | styleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing styles.
     */
    cursor?: styleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` styles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` styles.
     */
    skip?: number
    distinct?: StyleScalarFieldEnum | StyleScalarFieldEnum[]
  }

  /**
   * style create
   */
  export type styleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * The data needed to create a style.
     */
    data: XOR<styleCreateInput, styleUncheckedCreateInput>
  }

  /**
   * style createMany
   */
  export type styleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many styles.
     */
    data: styleCreateManyInput | styleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * style createManyAndReturn
   */
  export type styleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * The data used to create many styles.
     */
    data: styleCreateManyInput | styleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * style update
   */
  export type styleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * The data needed to update a style.
     */
    data: XOR<styleUpdateInput, styleUncheckedUpdateInput>
    /**
     * Choose, which style to update.
     */
    where: styleWhereUniqueInput
  }

  /**
   * style updateMany
   */
  export type styleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update styles.
     */
    data: XOR<styleUpdateManyMutationInput, styleUncheckedUpdateManyInput>
    /**
     * Filter which styles to update
     */
    where?: styleWhereInput
    /**
     * Limit how many styles to update.
     */
    limit?: number
  }

  /**
   * style updateManyAndReturn
   */
  export type styleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * The data used to update styles.
     */
    data: XOR<styleUpdateManyMutationInput, styleUncheckedUpdateManyInput>
    /**
     * Filter which styles to update
     */
    where?: styleWhereInput
    /**
     * Limit how many styles to update.
     */
    limit?: number
  }

  /**
   * style upsert
   */
  export type styleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * The filter to search for the style to update in case it exists.
     */
    where: styleWhereUniqueInput
    /**
     * In case the style found by the `where` argument doesn't exist, create a new style with this data.
     */
    create: XOR<styleCreateInput, styleUncheckedCreateInput>
    /**
     * In case the style was found with the provided `where` argument, update it with this data.
     */
    update: XOR<styleUpdateInput, styleUncheckedUpdateInput>
  }

  /**
   * style delete
   */
  export type styleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
    /**
     * Filter which style to delete.
     */
    where: styleWhereUniqueInput
  }

  /**
   * style deleteMany
   */
  export type styleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which styles to delete
     */
    where?: styleWhereInput
    /**
     * Limit how many styles to delete.
     */
    limit?: number
  }

  /**
   * style.curations
   */
  export type style$curationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    where?: curationWhereInput
    orderBy?: curationOrderByWithRelationInput | curationOrderByWithRelationInput[]
    cursor?: curationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * style without action
   */
  export type styleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the style
     */
    select?: styleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the style
     */
    omit?: styleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: styleInclude<ExtArgs> | null
  }


  /**
   * Model curation
   */

  export type AggregateCuration = {
    _count: CurationCountAggregateOutputType | null
    _avg: CurationAvgAggregateOutputType | null
    _sum: CurationSumAggregateOutputType | null
    _min: CurationMinAggregateOutputType | null
    _max: CurationMaxAggregateOutputType | null
  }

  export type CurationAvgAggregateOutputType = {
    id: number | null
    trendy: number | null
    personality: number | null
    practicality: number | null
    costEffectiveness: number | null
    style_id: number | null
  }

  export type CurationSumAggregateOutputType = {
    id: bigint | null
    trendy: number | null
    personality: number | null
    practicality: number | null
    costEffectiveness: number | null
    style_id: bigint | null
  }

  export type CurationMinAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    content: string | null
    password: string | null
    trendy: number | null
    personality: number | null
    practicality: number | null
    costEffectiveness: number | null
    style_id: bigint | null
  }

  export type CurationMaxAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    content: string | null
    password: string | null
    trendy: number | null
    personality: number | null
    practicality: number | null
    costEffectiveness: number | null
    style_id: bigint | null
  }

  export type CurationCountAggregateOutputType = {
    id: number
    nickname: number
    content: number
    password: number
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style_id: number
    _all: number
  }


  export type CurationAvgAggregateInputType = {
    id?: true
    trendy?: true
    personality?: true
    practicality?: true
    costEffectiveness?: true
    style_id?: true
  }

  export type CurationSumAggregateInputType = {
    id?: true
    trendy?: true
    personality?: true
    practicality?: true
    costEffectiveness?: true
    style_id?: true
  }

  export type CurationMinAggregateInputType = {
    id?: true
    nickname?: true
    content?: true
    password?: true
    trendy?: true
    personality?: true
    practicality?: true
    costEffectiveness?: true
    style_id?: true
  }

  export type CurationMaxAggregateInputType = {
    id?: true
    nickname?: true
    content?: true
    password?: true
    trendy?: true
    personality?: true
    practicality?: true
    costEffectiveness?: true
    style_id?: true
  }

  export type CurationCountAggregateInputType = {
    id?: true
    nickname?: true
    content?: true
    password?: true
    trendy?: true
    personality?: true
    practicality?: true
    costEffectiveness?: true
    style_id?: true
    _all?: true
  }

  export type CurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curation to aggregate.
     */
    where?: curationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curations to fetch.
     */
    orderBy?: curationOrderByWithRelationInput | curationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: curationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned curations
    **/
    _count?: true | CurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurationMaxAggregateInputType
  }

  export type GetCurationAggregateType<T extends CurationAggregateArgs> = {
        [P in keyof T & keyof AggregateCuration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuration[P]>
      : GetScalarType<T[P], AggregateCuration[P]>
  }




  export type curationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curationWhereInput
    orderBy?: curationOrderByWithAggregationInput | curationOrderByWithAggregationInput[]
    by: CurationScalarFieldEnum[] | CurationScalarFieldEnum
    having?: curationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurationCountAggregateInputType | true
    _avg?: CurationAvgAggregateInputType
    _sum?: CurationSumAggregateInputType
    _min?: CurationMinAggregateInputType
    _max?: CurationMaxAggregateInputType
  }

  export type CurationGroupByOutputType = {
    id: bigint
    nickname: string
    content: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style_id: bigint
    _count: CurationCountAggregateOutputType | null
    _avg: CurationAvgAggregateOutputType | null
    _sum: CurationSumAggregateOutputType | null
    _min: CurationMinAggregateOutputType | null
    _max: CurationMaxAggregateOutputType | null
  }

  type GetCurationGroupByPayload<T extends curationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurationGroupByOutputType[P]>
            : GetScalarType<T[P], CurationGroupByOutputType[P]>
        }
      >
    >


  export type curationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    trendy?: boolean
    personality?: boolean
    practicality?: boolean
    costEffectiveness?: boolean
    style_id?: boolean
    style?: boolean | styleDefaultArgs<ExtArgs>
    curation_comment?: boolean | curation$curation_commentArgs<ExtArgs>
  }, ExtArgs["result"]["curation"]>

  export type curationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    trendy?: boolean
    personality?: boolean
    practicality?: boolean
    costEffectiveness?: boolean
    style_id?: boolean
    style?: boolean | styleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation"]>

  export type curationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    trendy?: boolean
    personality?: boolean
    practicality?: boolean
    costEffectiveness?: boolean
    style_id?: boolean
    style?: boolean | styleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation"]>

  export type curationSelectScalar = {
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    trendy?: boolean
    personality?: boolean
    practicality?: boolean
    costEffectiveness?: boolean
    style_id?: boolean
  }

  export type curationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "content" | "password" | "trendy" | "personality" | "practicality" | "costEffectiveness" | "style_id", ExtArgs["result"]["curation"]>
  export type curationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | styleDefaultArgs<ExtArgs>
    curation_comment?: boolean | curation$curation_commentArgs<ExtArgs>
  }
  export type curationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | styleDefaultArgs<ExtArgs>
  }
  export type curationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | styleDefaultArgs<ExtArgs>
  }

  export type $curationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curation"
    objects: {
      style: Prisma.$stylePayload<ExtArgs>
      curation_comment: Prisma.$curation_commentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nickname: string
      content: string
      password: string
      trendy: number
      personality: number
      practicality: number
      costEffectiveness: number
      style_id: bigint
    }, ExtArgs["result"]["curation"]>
    composites: {}
  }

  type curationGetPayload<S extends boolean | null | undefined | curationDefaultArgs> = $Result.GetResult<Prisma.$curationPayload, S>

  type curationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<curationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurationCountAggregateInputType | true
    }

  export interface curationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curation'], meta: { name: 'curation' } }
    /**
     * Find zero or one Curation that matches the filter.
     * @param {curationFindUniqueArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends curationFindUniqueArgs>(args: SelectSubset<T, curationFindUniqueArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {curationFindUniqueOrThrowArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends curationFindUniqueOrThrowArgs>(args: SelectSubset<T, curationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curationFindFirstArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends curationFindFirstArgs>(args?: SelectSubset<T, curationFindFirstArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curationFindFirstOrThrowArgs} args - Arguments to find a Curation
     * @example
     * // Get one Curation
     * const curation = await prisma.curation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends curationFindFirstOrThrowArgs>(args?: SelectSubset<T, curationFindFirstOrThrowArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curations
     * const curations = await prisma.curation.findMany()
     * 
     * // Get first 10 Curations
     * const curations = await prisma.curation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curationWithIdOnly = await prisma.curation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends curationFindManyArgs>(args?: SelectSubset<T, curationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curation.
     * @param {curationCreateArgs} args - Arguments to create a Curation.
     * @example
     * // Create one Curation
     * const Curation = await prisma.curation.create({
     *   data: {
     *     // ... data to create a Curation
     *   }
     * })
     * 
     */
    create<T extends curationCreateArgs>(args: SelectSubset<T, curationCreateArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curations.
     * @param {curationCreateManyArgs} args - Arguments to create many Curations.
     * @example
     * // Create many Curations
     * const curation = await prisma.curation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends curationCreateManyArgs>(args?: SelectSubset<T, curationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curations and returns the data saved in the database.
     * @param {curationCreateManyAndReturnArgs} args - Arguments to create many Curations.
     * @example
     * // Create many Curations
     * const curation = await prisma.curation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curations and only return the `id`
     * const curationWithIdOnly = await prisma.curation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends curationCreateManyAndReturnArgs>(args?: SelectSubset<T, curationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curation.
     * @param {curationDeleteArgs} args - Arguments to delete one Curation.
     * @example
     * // Delete one Curation
     * const Curation = await prisma.curation.delete({
     *   where: {
     *     // ... filter to delete one Curation
     *   }
     * })
     * 
     */
    delete<T extends curationDeleteArgs>(args: SelectSubset<T, curationDeleteArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curation.
     * @param {curationUpdateArgs} args - Arguments to update one Curation.
     * @example
     * // Update one Curation
     * const curation = await prisma.curation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends curationUpdateArgs>(args: SelectSubset<T, curationUpdateArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curations.
     * @param {curationDeleteManyArgs} args - Arguments to filter Curations to delete.
     * @example
     * // Delete a few Curations
     * const { count } = await prisma.curation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends curationDeleteManyArgs>(args?: SelectSubset<T, curationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curations
     * const curation = await prisma.curation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends curationUpdateManyArgs>(args: SelectSubset<T, curationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curations and returns the data updated in the database.
     * @param {curationUpdateManyAndReturnArgs} args - Arguments to update many Curations.
     * @example
     * // Update many Curations
     * const curation = await prisma.curation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curations and only return the `id`
     * const curationWithIdOnly = await prisma.curation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends curationUpdateManyAndReturnArgs>(args: SelectSubset<T, curationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curation.
     * @param {curationUpsertArgs} args - Arguments to update or create a Curation.
     * @example
     * // Update or create a Curation
     * const curation = await prisma.curation.upsert({
     *   create: {
     *     // ... data to create a Curation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curation we want to update
     *   }
     * })
     */
    upsert<T extends curationUpsertArgs>(args: SelectSubset<T, curationUpsertArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curationCountArgs} args - Arguments to filter Curations to count.
     * @example
     * // Count the number of Curations
     * const count = await prisma.curation.count({
     *   where: {
     *     // ... the filter for the Curations we want to count
     *   }
     * })
    **/
    count<T extends curationCountArgs>(
      args?: Subset<T, curationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurationAggregateArgs>(args: Subset<T, CurationAggregateArgs>): Prisma.PrismaPromise<GetCurationAggregateType<T>>

    /**
     * Group by Curation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends curationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: curationGroupByArgs['orderBy'] }
        : { orderBy?: curationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, curationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curation model
   */
  readonly fields: curationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__curationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    style<T extends styleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, styleDefaultArgs<ExtArgs>>): Prisma__styleClient<$Result.GetResult<Prisma.$stylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    curation_comment<T extends curation$curation_commentArgs<ExtArgs> = {}>(args?: Subset<T, curation$curation_commentArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the curation model
   */
  interface curationFieldRefs {
    readonly id: FieldRef<"curation", 'BigInt'>
    readonly nickname: FieldRef<"curation", 'String'>
    readonly content: FieldRef<"curation", 'String'>
    readonly password: FieldRef<"curation", 'String'>
    readonly trendy: FieldRef<"curation", 'Int'>
    readonly personality: FieldRef<"curation", 'Int'>
    readonly practicality: FieldRef<"curation", 'Int'>
    readonly costEffectiveness: FieldRef<"curation", 'Int'>
    readonly style_id: FieldRef<"curation", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * curation findUnique
   */
  export type curationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * Filter, which curation to fetch.
     */
    where: curationWhereUniqueInput
  }

  /**
   * curation findUniqueOrThrow
   */
  export type curationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * Filter, which curation to fetch.
     */
    where: curationWhereUniqueInput
  }

  /**
   * curation findFirst
   */
  export type curationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * Filter, which curation to fetch.
     */
    where?: curationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curations to fetch.
     */
    orderBy?: curationOrderByWithRelationInput | curationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curations.
     */
    cursor?: curationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curations.
     */
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * curation findFirstOrThrow
   */
  export type curationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * Filter, which curation to fetch.
     */
    where?: curationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curations to fetch.
     */
    orderBy?: curationOrderByWithRelationInput | curationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curations.
     */
    cursor?: curationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curations.
     */
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * curation findMany
   */
  export type curationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * Filter, which curations to fetch.
     */
    where?: curationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curations to fetch.
     */
    orderBy?: curationOrderByWithRelationInput | curationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing curations.
     */
    cursor?: curationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curations.
     */
    skip?: number
    distinct?: CurationScalarFieldEnum | CurationScalarFieldEnum[]
  }

  /**
   * curation create
   */
  export type curationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * The data needed to create a curation.
     */
    data: XOR<curationCreateInput, curationUncheckedCreateInput>
  }

  /**
   * curation createMany
   */
  export type curationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many curations.
     */
    data: curationCreateManyInput | curationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curation createManyAndReturn
   */
  export type curationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * The data used to create many curations.
     */
    data: curationCreateManyInput | curationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * curation update
   */
  export type curationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * The data needed to update a curation.
     */
    data: XOR<curationUpdateInput, curationUncheckedUpdateInput>
    /**
     * Choose, which curation to update.
     */
    where: curationWhereUniqueInput
  }

  /**
   * curation updateMany
   */
  export type curationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update curations.
     */
    data: XOR<curationUpdateManyMutationInput, curationUncheckedUpdateManyInput>
    /**
     * Filter which curations to update
     */
    where?: curationWhereInput
    /**
     * Limit how many curations to update.
     */
    limit?: number
  }

  /**
   * curation updateManyAndReturn
   */
  export type curationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * The data used to update curations.
     */
    data: XOR<curationUpdateManyMutationInput, curationUncheckedUpdateManyInput>
    /**
     * Filter which curations to update
     */
    where?: curationWhereInput
    /**
     * Limit how many curations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * curation upsert
   */
  export type curationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * The filter to search for the curation to update in case it exists.
     */
    where: curationWhereUniqueInput
    /**
     * In case the curation found by the `where` argument doesn't exist, create a new curation with this data.
     */
    create: XOR<curationCreateInput, curationUncheckedCreateInput>
    /**
     * In case the curation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<curationUpdateInput, curationUncheckedUpdateInput>
  }

  /**
   * curation delete
   */
  export type curationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
    /**
     * Filter which curation to delete.
     */
    where: curationWhereUniqueInput
  }

  /**
   * curation deleteMany
   */
  export type curationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curations to delete
     */
    where?: curationWhereInput
    /**
     * Limit how many curations to delete.
     */
    limit?: number
  }

  /**
   * curation.curation_comment
   */
  export type curation$curation_commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    where?: curation_commentWhereInput
  }

  /**
   * curation without action
   */
  export type curationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation
     */
    select?: curationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation
     */
    omit?: curationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curationInclude<ExtArgs> | null
  }


  /**
   * Model curation_comment
   */

  export type AggregateCuration_comment = {
    _count: Curation_commentCountAggregateOutputType | null
    _avg: Curation_commentAvgAggregateOutputType | null
    _sum: Curation_commentSumAggregateOutputType | null
    _min: Curation_commentMinAggregateOutputType | null
    _max: Curation_commentMaxAggregateOutputType | null
  }

  export type Curation_commentAvgAggregateOutputType = {
    id: number | null
    curaion_id: number | null
  }

  export type Curation_commentSumAggregateOutputType = {
    id: bigint | null
    curaion_id: bigint | null
  }

  export type Curation_commentMinAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    content: string | null
    password: string | null
    curaion_id: bigint | null
  }

  export type Curation_commentMaxAggregateOutputType = {
    id: bigint | null
    nickname: string | null
    content: string | null
    password: string | null
    curaion_id: bigint | null
  }

  export type Curation_commentCountAggregateOutputType = {
    id: number
    nickname: number
    content: number
    password: number
    curaion_id: number
    _all: number
  }


  export type Curation_commentAvgAggregateInputType = {
    id?: true
    curaion_id?: true
  }

  export type Curation_commentSumAggregateInputType = {
    id?: true
    curaion_id?: true
  }

  export type Curation_commentMinAggregateInputType = {
    id?: true
    nickname?: true
    content?: true
    password?: true
    curaion_id?: true
  }

  export type Curation_commentMaxAggregateInputType = {
    id?: true
    nickname?: true
    content?: true
    password?: true
    curaion_id?: true
  }

  export type Curation_commentCountAggregateInputType = {
    id?: true
    nickname?: true
    content?: true
    password?: true
    curaion_id?: true
    _all?: true
  }

  export type Curation_commentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curation_comment to aggregate.
     */
    where?: curation_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curation_comments to fetch.
     */
    orderBy?: curation_commentOrderByWithRelationInput | curation_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: curation_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curation_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curation_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned curation_comments
    **/
    _count?: true | Curation_commentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Curation_commentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Curation_commentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Curation_commentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Curation_commentMaxAggregateInputType
  }

  export type GetCuration_commentAggregateType<T extends Curation_commentAggregateArgs> = {
        [P in keyof T & keyof AggregateCuration_comment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCuration_comment[P]>
      : GetScalarType<T[P], AggregateCuration_comment[P]>
  }




  export type curation_commentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: curation_commentWhereInput
    orderBy?: curation_commentOrderByWithAggregationInput | curation_commentOrderByWithAggregationInput[]
    by: Curation_commentScalarFieldEnum[] | Curation_commentScalarFieldEnum
    having?: curation_commentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Curation_commentCountAggregateInputType | true
    _avg?: Curation_commentAvgAggregateInputType
    _sum?: Curation_commentSumAggregateInputType
    _min?: Curation_commentMinAggregateInputType
    _max?: Curation_commentMaxAggregateInputType
  }

  export type Curation_commentGroupByOutputType = {
    id: bigint
    nickname: string
    content: string
    password: string
    curaion_id: bigint
    _count: Curation_commentCountAggregateOutputType | null
    _avg: Curation_commentAvgAggregateOutputType | null
    _sum: Curation_commentSumAggregateOutputType | null
    _min: Curation_commentMinAggregateOutputType | null
    _max: Curation_commentMaxAggregateOutputType | null
  }

  type GetCuration_commentGroupByPayload<T extends curation_commentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Curation_commentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Curation_commentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Curation_commentGroupByOutputType[P]>
            : GetScalarType<T[P], Curation_commentGroupByOutputType[P]>
        }
      >
    >


  export type curation_commentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    curaion_id?: boolean
    curation?: boolean | curationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation_comment"]>

  export type curation_commentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    curaion_id?: boolean
    curation?: boolean | curationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation_comment"]>

  export type curation_commentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    curaion_id?: boolean
    curation?: boolean | curationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["curation_comment"]>

  export type curation_commentSelectScalar = {
    id?: boolean
    nickname?: boolean
    content?: boolean
    password?: boolean
    curaion_id?: boolean
  }

  export type curation_commentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nickname" | "content" | "password" | "curaion_id", ExtArgs["result"]["curation_comment"]>
  export type curation_commentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | curationDefaultArgs<ExtArgs>
  }
  export type curation_commentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | curationDefaultArgs<ExtArgs>
  }
  export type curation_commentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    curation?: boolean | curationDefaultArgs<ExtArgs>
  }

  export type $curation_commentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "curation_comment"
    objects: {
      curation: Prisma.$curationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nickname: string
      content: string
      password: string
      curaion_id: bigint
    }, ExtArgs["result"]["curation_comment"]>
    composites: {}
  }

  type curation_commentGetPayload<S extends boolean | null | undefined | curation_commentDefaultArgs> = $Result.GetResult<Prisma.$curation_commentPayload, S>

  type curation_commentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<curation_commentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Curation_commentCountAggregateInputType | true
    }

  export interface curation_commentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['curation_comment'], meta: { name: 'curation_comment' } }
    /**
     * Find zero or one Curation_comment that matches the filter.
     * @param {curation_commentFindUniqueArgs} args - Arguments to find a Curation_comment
     * @example
     * // Get one Curation_comment
     * const curation_comment = await prisma.curation_comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends curation_commentFindUniqueArgs>(args: SelectSubset<T, curation_commentFindUniqueArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curation_comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {curation_commentFindUniqueOrThrowArgs} args - Arguments to find a Curation_comment
     * @example
     * // Get one Curation_comment
     * const curation_comment = await prisma.curation_comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends curation_commentFindUniqueOrThrowArgs>(args: SelectSubset<T, curation_commentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curation_comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curation_commentFindFirstArgs} args - Arguments to find a Curation_comment
     * @example
     * // Get one Curation_comment
     * const curation_comment = await prisma.curation_comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends curation_commentFindFirstArgs>(args?: SelectSubset<T, curation_commentFindFirstArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curation_comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curation_commentFindFirstOrThrowArgs} args - Arguments to find a Curation_comment
     * @example
     * // Get one Curation_comment
     * const curation_comment = await prisma.curation_comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends curation_commentFindFirstOrThrowArgs>(args?: SelectSubset<T, curation_commentFindFirstOrThrowArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curation_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curation_commentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curation_comments
     * const curation_comments = await prisma.curation_comment.findMany()
     * 
     * // Get first 10 Curation_comments
     * const curation_comments = await prisma.curation_comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curation_commentWithIdOnly = await prisma.curation_comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends curation_commentFindManyArgs>(args?: SelectSubset<T, curation_commentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curation_comment.
     * @param {curation_commentCreateArgs} args - Arguments to create a Curation_comment.
     * @example
     * // Create one Curation_comment
     * const Curation_comment = await prisma.curation_comment.create({
     *   data: {
     *     // ... data to create a Curation_comment
     *   }
     * })
     * 
     */
    create<T extends curation_commentCreateArgs>(args: SelectSubset<T, curation_commentCreateArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curation_comments.
     * @param {curation_commentCreateManyArgs} args - Arguments to create many Curation_comments.
     * @example
     * // Create many Curation_comments
     * const curation_comment = await prisma.curation_comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends curation_commentCreateManyArgs>(args?: SelectSubset<T, curation_commentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curation_comments and returns the data saved in the database.
     * @param {curation_commentCreateManyAndReturnArgs} args - Arguments to create many Curation_comments.
     * @example
     * // Create many Curation_comments
     * const curation_comment = await prisma.curation_comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curation_comments and only return the `id`
     * const curation_commentWithIdOnly = await prisma.curation_comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends curation_commentCreateManyAndReturnArgs>(args?: SelectSubset<T, curation_commentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curation_comment.
     * @param {curation_commentDeleteArgs} args - Arguments to delete one Curation_comment.
     * @example
     * // Delete one Curation_comment
     * const Curation_comment = await prisma.curation_comment.delete({
     *   where: {
     *     // ... filter to delete one Curation_comment
     *   }
     * })
     * 
     */
    delete<T extends curation_commentDeleteArgs>(args: SelectSubset<T, curation_commentDeleteArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curation_comment.
     * @param {curation_commentUpdateArgs} args - Arguments to update one Curation_comment.
     * @example
     * // Update one Curation_comment
     * const curation_comment = await prisma.curation_comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends curation_commentUpdateArgs>(args: SelectSubset<T, curation_commentUpdateArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curation_comments.
     * @param {curation_commentDeleteManyArgs} args - Arguments to filter Curation_comments to delete.
     * @example
     * // Delete a few Curation_comments
     * const { count } = await prisma.curation_comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends curation_commentDeleteManyArgs>(args?: SelectSubset<T, curation_commentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curation_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curation_commentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curation_comments
     * const curation_comment = await prisma.curation_comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends curation_commentUpdateManyArgs>(args: SelectSubset<T, curation_commentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curation_comments and returns the data updated in the database.
     * @param {curation_commentUpdateManyAndReturnArgs} args - Arguments to update many Curation_comments.
     * @example
     * // Update many Curation_comments
     * const curation_comment = await prisma.curation_comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curation_comments and only return the `id`
     * const curation_commentWithIdOnly = await prisma.curation_comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends curation_commentUpdateManyAndReturnArgs>(args: SelectSubset<T, curation_commentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curation_comment.
     * @param {curation_commentUpsertArgs} args - Arguments to update or create a Curation_comment.
     * @example
     * // Update or create a Curation_comment
     * const curation_comment = await prisma.curation_comment.upsert({
     *   create: {
     *     // ... data to create a Curation_comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curation_comment we want to update
     *   }
     * })
     */
    upsert<T extends curation_commentUpsertArgs>(args: SelectSubset<T, curation_commentUpsertArgs<ExtArgs>>): Prisma__curation_commentClient<$Result.GetResult<Prisma.$curation_commentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curation_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curation_commentCountArgs} args - Arguments to filter Curation_comments to count.
     * @example
     * // Count the number of Curation_comments
     * const count = await prisma.curation_comment.count({
     *   where: {
     *     // ... the filter for the Curation_comments we want to count
     *   }
     * })
    **/
    count<T extends curation_commentCountArgs>(
      args?: Subset<T, curation_commentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Curation_commentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curation_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Curation_commentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Curation_commentAggregateArgs>(args: Subset<T, Curation_commentAggregateArgs>): Prisma.PrismaPromise<GetCuration_commentAggregateType<T>>

    /**
     * Group by Curation_comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {curation_commentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends curation_commentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: curation_commentGroupByArgs['orderBy'] }
        : { orderBy?: curation_commentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, curation_commentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuration_commentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the curation_comment model
   */
  readonly fields: curation_commentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for curation_comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__curation_commentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    curation<T extends curationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, curationDefaultArgs<ExtArgs>>): Prisma__curationClient<$Result.GetResult<Prisma.$curationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the curation_comment model
   */
  interface curation_commentFieldRefs {
    readonly id: FieldRef<"curation_comment", 'BigInt'>
    readonly nickname: FieldRef<"curation_comment", 'String'>
    readonly content: FieldRef<"curation_comment", 'String'>
    readonly password: FieldRef<"curation_comment", 'String'>
    readonly curaion_id: FieldRef<"curation_comment", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * curation_comment findUnique
   */
  export type curation_commentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * Filter, which curation_comment to fetch.
     */
    where: curation_commentWhereUniqueInput
  }

  /**
   * curation_comment findUniqueOrThrow
   */
  export type curation_commentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * Filter, which curation_comment to fetch.
     */
    where: curation_commentWhereUniqueInput
  }

  /**
   * curation_comment findFirst
   */
  export type curation_commentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * Filter, which curation_comment to fetch.
     */
    where?: curation_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curation_comments to fetch.
     */
    orderBy?: curation_commentOrderByWithRelationInput | curation_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curation_comments.
     */
    cursor?: curation_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curation_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curation_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curation_comments.
     */
    distinct?: Curation_commentScalarFieldEnum | Curation_commentScalarFieldEnum[]
  }

  /**
   * curation_comment findFirstOrThrow
   */
  export type curation_commentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * Filter, which curation_comment to fetch.
     */
    where?: curation_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curation_comments to fetch.
     */
    orderBy?: curation_commentOrderByWithRelationInput | curation_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for curation_comments.
     */
    cursor?: curation_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curation_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curation_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of curation_comments.
     */
    distinct?: Curation_commentScalarFieldEnum | Curation_commentScalarFieldEnum[]
  }

  /**
   * curation_comment findMany
   */
  export type curation_commentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * Filter, which curation_comments to fetch.
     */
    where?: curation_commentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of curation_comments to fetch.
     */
    orderBy?: curation_commentOrderByWithRelationInput | curation_commentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing curation_comments.
     */
    cursor?: curation_commentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` curation_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` curation_comments.
     */
    skip?: number
    distinct?: Curation_commentScalarFieldEnum | Curation_commentScalarFieldEnum[]
  }

  /**
   * curation_comment create
   */
  export type curation_commentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * The data needed to create a curation_comment.
     */
    data: XOR<curation_commentCreateInput, curation_commentUncheckedCreateInput>
  }

  /**
   * curation_comment createMany
   */
  export type curation_commentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many curation_comments.
     */
    data: curation_commentCreateManyInput | curation_commentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * curation_comment createManyAndReturn
   */
  export type curation_commentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * The data used to create many curation_comments.
     */
    data: curation_commentCreateManyInput | curation_commentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * curation_comment update
   */
  export type curation_commentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * The data needed to update a curation_comment.
     */
    data: XOR<curation_commentUpdateInput, curation_commentUncheckedUpdateInput>
    /**
     * Choose, which curation_comment to update.
     */
    where: curation_commentWhereUniqueInput
  }

  /**
   * curation_comment updateMany
   */
  export type curation_commentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update curation_comments.
     */
    data: XOR<curation_commentUpdateManyMutationInput, curation_commentUncheckedUpdateManyInput>
    /**
     * Filter which curation_comments to update
     */
    where?: curation_commentWhereInput
    /**
     * Limit how many curation_comments to update.
     */
    limit?: number
  }

  /**
   * curation_comment updateManyAndReturn
   */
  export type curation_commentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * The data used to update curation_comments.
     */
    data: XOR<curation_commentUpdateManyMutationInput, curation_commentUncheckedUpdateManyInput>
    /**
     * Filter which curation_comments to update
     */
    where?: curation_commentWhereInput
    /**
     * Limit how many curation_comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * curation_comment upsert
   */
  export type curation_commentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * The filter to search for the curation_comment to update in case it exists.
     */
    where: curation_commentWhereUniqueInput
    /**
     * In case the curation_comment found by the `where` argument doesn't exist, create a new curation_comment with this data.
     */
    create: XOR<curation_commentCreateInput, curation_commentUncheckedCreateInput>
    /**
     * In case the curation_comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<curation_commentUpdateInput, curation_commentUncheckedUpdateInput>
  }

  /**
   * curation_comment delete
   */
  export type curation_commentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
    /**
     * Filter which curation_comment to delete.
     */
    where: curation_commentWhereUniqueInput
  }

  /**
   * curation_comment deleteMany
   */
  export type curation_commentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which curation_comments to delete
     */
    where?: curation_commentWhereInput
    /**
     * Limit how many curation_comments to delete.
     */
    limit?: number
  }

  /**
   * curation_comment without action
   */
  export type curation_commentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the curation_comment
     */
    select?: curation_commentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the curation_comment
     */
    omit?: curation_commentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: curation_commentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StyleScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    title: 'title',
    password: 'password',
    description: 'description',
    tags: 'tags',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StyleScalarFieldEnum = (typeof StyleScalarFieldEnum)[keyof typeof StyleScalarFieldEnum]


  export const CurationScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    content: 'content',
    password: 'password',
    trendy: 'trendy',
    personality: 'personality',
    practicality: 'practicality',
    costEffectiveness: 'costEffectiveness',
    style_id: 'style_id'
  };

  export type CurationScalarFieldEnum = (typeof CurationScalarFieldEnum)[keyof typeof CurationScalarFieldEnum]


  export const Curation_commentScalarFieldEnum: {
    id: 'id',
    nickname: 'nickname',
    content: 'content',
    password: 'password',
    curaion_id: 'curaion_id'
  };

  export type Curation_commentScalarFieldEnum = (typeof Curation_commentScalarFieldEnum)[keyof typeof Curation_commentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type styleWhereInput = {
    AND?: styleWhereInput | styleWhereInput[]
    OR?: styleWhereInput[]
    NOT?: styleWhereInput | styleWhereInput[]
    id?: BigIntFilter<"style"> | bigint | number
    nickname?: StringFilter<"style"> | string
    title?: StringFilter<"style"> | string
    password?: StringFilter<"style"> | string
    description?: StringFilter<"style"> | string
    tags?: StringNullableListFilter<"style">
    created_at?: DateTimeFilter<"style"> | Date | string
    updated_at?: DateTimeNullableFilter<"style"> | Date | string | null
    curations?: CurationListRelationFilter
  }

  export type styleOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    title?: SortOrder
    password?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    curations?: curationOrderByRelationAggregateInput
  }

  export type styleWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: styleWhereInput | styleWhereInput[]
    OR?: styleWhereInput[]
    NOT?: styleWhereInput | styleWhereInput[]
    nickname?: StringFilter<"style"> | string
    title?: StringFilter<"style"> | string
    password?: StringFilter<"style"> | string
    description?: StringFilter<"style"> | string
    tags?: StringNullableListFilter<"style">
    created_at?: DateTimeFilter<"style"> | Date | string
    updated_at?: DateTimeNullableFilter<"style"> | Date | string | null
    curations?: CurationListRelationFilter
  }, "id">

  export type styleOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    title?: SortOrder
    password?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: styleCountOrderByAggregateInput
    _avg?: styleAvgOrderByAggregateInput
    _max?: styleMaxOrderByAggregateInput
    _min?: styleMinOrderByAggregateInput
    _sum?: styleSumOrderByAggregateInput
  }

  export type styleScalarWhereWithAggregatesInput = {
    AND?: styleScalarWhereWithAggregatesInput | styleScalarWhereWithAggregatesInput[]
    OR?: styleScalarWhereWithAggregatesInput[]
    NOT?: styleScalarWhereWithAggregatesInput | styleScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"style"> | bigint | number
    nickname?: StringWithAggregatesFilter<"style"> | string
    title?: StringWithAggregatesFilter<"style"> | string
    password?: StringWithAggregatesFilter<"style"> | string
    description?: StringWithAggregatesFilter<"style"> | string
    tags?: StringNullableListFilter<"style">
    created_at?: DateTimeWithAggregatesFilter<"style"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"style"> | Date | string | null
  }

  export type curationWhereInput = {
    AND?: curationWhereInput | curationWhereInput[]
    OR?: curationWhereInput[]
    NOT?: curationWhereInput | curationWhereInput[]
    id?: BigIntFilter<"curation"> | bigint | number
    nickname?: StringFilter<"curation"> | string
    content?: StringFilter<"curation"> | string
    password?: StringFilter<"curation"> | string
    trendy?: IntFilter<"curation"> | number
    personality?: IntFilter<"curation"> | number
    practicality?: IntFilter<"curation"> | number
    costEffectiveness?: IntFilter<"curation"> | number
    style_id?: BigIntFilter<"curation"> | bigint | number
    style?: XOR<StyleScalarRelationFilter, styleWhereInput>
    curation_comment?: XOR<Curation_commentNullableScalarRelationFilter, curation_commentWhereInput> | null
  }

  export type curationOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
    style?: styleOrderByWithRelationInput
    curation_comment?: curation_commentOrderByWithRelationInput
  }

  export type curationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: curationWhereInput | curationWhereInput[]
    OR?: curationWhereInput[]
    NOT?: curationWhereInput | curationWhereInput[]
    nickname?: StringFilter<"curation"> | string
    content?: StringFilter<"curation"> | string
    password?: StringFilter<"curation"> | string
    trendy?: IntFilter<"curation"> | number
    personality?: IntFilter<"curation"> | number
    practicality?: IntFilter<"curation"> | number
    costEffectiveness?: IntFilter<"curation"> | number
    style_id?: BigIntFilter<"curation"> | bigint | number
    style?: XOR<StyleScalarRelationFilter, styleWhereInput>
    curation_comment?: XOR<Curation_commentNullableScalarRelationFilter, curation_commentWhereInput> | null
  }, "id">

  export type curationOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
    _count?: curationCountOrderByAggregateInput
    _avg?: curationAvgOrderByAggregateInput
    _max?: curationMaxOrderByAggregateInput
    _min?: curationMinOrderByAggregateInput
    _sum?: curationSumOrderByAggregateInput
  }

  export type curationScalarWhereWithAggregatesInput = {
    AND?: curationScalarWhereWithAggregatesInput | curationScalarWhereWithAggregatesInput[]
    OR?: curationScalarWhereWithAggregatesInput[]
    NOT?: curationScalarWhereWithAggregatesInput | curationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"curation"> | bigint | number
    nickname?: StringWithAggregatesFilter<"curation"> | string
    content?: StringWithAggregatesFilter<"curation"> | string
    password?: StringWithAggregatesFilter<"curation"> | string
    trendy?: IntWithAggregatesFilter<"curation"> | number
    personality?: IntWithAggregatesFilter<"curation"> | number
    practicality?: IntWithAggregatesFilter<"curation"> | number
    costEffectiveness?: IntWithAggregatesFilter<"curation"> | number
    style_id?: BigIntWithAggregatesFilter<"curation"> | bigint | number
  }

  export type curation_commentWhereInput = {
    AND?: curation_commentWhereInput | curation_commentWhereInput[]
    OR?: curation_commentWhereInput[]
    NOT?: curation_commentWhereInput | curation_commentWhereInput[]
    id?: BigIntFilter<"curation_comment"> | bigint | number
    nickname?: StringFilter<"curation_comment"> | string
    content?: StringFilter<"curation_comment"> | string
    password?: StringFilter<"curation_comment"> | string
    curaion_id?: BigIntFilter<"curation_comment"> | bigint | number
    curation?: XOR<CurationScalarRelationFilter, curationWhereInput>
  }

  export type curation_commentOrderByWithRelationInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    curaion_id?: SortOrder
    curation?: curationOrderByWithRelationInput
  }

  export type curation_commentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    curaion_id?: bigint | number
    AND?: curation_commentWhereInput | curation_commentWhereInput[]
    OR?: curation_commentWhereInput[]
    NOT?: curation_commentWhereInput | curation_commentWhereInput[]
    nickname?: StringFilter<"curation_comment"> | string
    content?: StringFilter<"curation_comment"> | string
    password?: StringFilter<"curation_comment"> | string
    curation?: XOR<CurationScalarRelationFilter, curationWhereInput>
  }, "id" | "curaion_id">

  export type curation_commentOrderByWithAggregationInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    curaion_id?: SortOrder
    _count?: curation_commentCountOrderByAggregateInput
    _avg?: curation_commentAvgOrderByAggregateInput
    _max?: curation_commentMaxOrderByAggregateInput
    _min?: curation_commentMinOrderByAggregateInput
    _sum?: curation_commentSumOrderByAggregateInput
  }

  export type curation_commentScalarWhereWithAggregatesInput = {
    AND?: curation_commentScalarWhereWithAggregatesInput | curation_commentScalarWhereWithAggregatesInput[]
    OR?: curation_commentScalarWhereWithAggregatesInput[]
    NOT?: curation_commentScalarWhereWithAggregatesInput | curation_commentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"curation_comment"> | bigint | number
    nickname?: StringWithAggregatesFilter<"curation_comment"> | string
    content?: StringWithAggregatesFilter<"curation_comment"> | string
    password?: StringWithAggregatesFilter<"curation_comment"> | string
    curaion_id?: BigIntWithAggregatesFilter<"curation_comment"> | bigint | number
  }

  export type styleCreateInput = {
    id?: bigint | number
    nickname: string
    title: string
    password: string
    description?: string
    tags?: styleCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string | null
    curations?: curationCreateNestedManyWithoutStyleInput
  }

  export type styleUncheckedCreateInput = {
    id?: bigint | number
    nickname: string
    title: string
    password: string
    description?: string
    tags?: styleCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string | null
    curations?: curationUncheckedCreateNestedManyWithoutStyleInput
  }

  export type styleUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: styleUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curations?: curationUpdateManyWithoutStyleNestedInput
  }

  export type styleUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: styleUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    curations?: curationUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type styleCreateManyInput = {
    id?: bigint | number
    nickname: string
    title: string
    password: string
    description?: string
    tags?: styleCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type styleUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: styleUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type styleUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: styleUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type curationCreateInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style: styleCreateNestedOneWithoutCurationsInput
    curation_comment?: curation_commentCreateNestedOneWithoutCurationInput
  }

  export type curationUncheckedCreateInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style_id: bigint | number
    curation_comment?: curation_commentUncheckedCreateNestedOneWithoutCurationInput
  }

  export type curationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    style?: styleUpdateOneRequiredWithoutCurationsNestedInput
    curation_comment?: curation_commentUpdateOneWithoutCurationNestedInput
  }

  export type curationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    style_id?: BigIntFieldUpdateOperationsInput | bigint | number
    curation_comment?: curation_commentUncheckedUpdateOneWithoutCurationNestedInput
  }

  export type curationCreateManyInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style_id: bigint | number
  }

  export type curationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
  }

  export type curationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    style_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type curation_commentCreateInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    curation: curationCreateNestedOneWithoutCuration_commentInput
  }

  export type curation_commentUncheckedCreateInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    curaion_id: bigint | number
  }

  export type curation_commentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    curation?: curationUpdateOneRequiredWithoutCuration_commentNestedInput
  }

  export type curation_commentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    curaion_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type curation_commentCreateManyInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    curaion_id: bigint | number
  }

  export type curation_commentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type curation_commentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    curaion_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CurationListRelationFilter = {
    every?: curationWhereInput
    some?: curationWhereInput
    none?: curationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type curationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type styleCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    title?: SortOrder
    password?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type styleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type styleMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    title?: SortOrder
    password?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type styleMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    title?: SortOrder
    password?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type styleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StyleScalarRelationFilter = {
    is?: styleWhereInput
    isNot?: styleWhereInput
  }

  export type Curation_commentNullableScalarRelationFilter = {
    is?: curation_commentWhereInput | null
    isNot?: curation_commentWhereInput | null
  }

  export type curationCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
  }

  export type curationAvgOrderByAggregateInput = {
    id?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
  }

  export type curationMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
  }

  export type curationMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
  }

  export type curationSumOrderByAggregateInput = {
    id?: SortOrder
    trendy?: SortOrder
    personality?: SortOrder
    practicality?: SortOrder
    costEffectiveness?: SortOrder
    style_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type CurationScalarRelationFilter = {
    is?: curationWhereInput
    isNot?: curationWhereInput
  }

  export type curation_commentCountOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    curaion_id?: SortOrder
  }

  export type curation_commentAvgOrderByAggregateInput = {
    id?: SortOrder
    curaion_id?: SortOrder
  }

  export type curation_commentMaxOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    curaion_id?: SortOrder
  }

  export type curation_commentMinOrderByAggregateInput = {
    id?: SortOrder
    nickname?: SortOrder
    content?: SortOrder
    password?: SortOrder
    curaion_id?: SortOrder
  }

  export type curation_commentSumOrderByAggregateInput = {
    id?: SortOrder
    curaion_id?: SortOrder
  }

  export type styleCreatetagsInput = {
    set: string[]
  }

  export type curationCreateNestedManyWithoutStyleInput = {
    create?: XOR<curationCreateWithoutStyleInput, curationUncheckedCreateWithoutStyleInput> | curationCreateWithoutStyleInput[] | curationUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: curationCreateOrConnectWithoutStyleInput | curationCreateOrConnectWithoutStyleInput[]
    createMany?: curationCreateManyStyleInputEnvelope
    connect?: curationWhereUniqueInput | curationWhereUniqueInput[]
  }

  export type curationUncheckedCreateNestedManyWithoutStyleInput = {
    create?: XOR<curationCreateWithoutStyleInput, curationUncheckedCreateWithoutStyleInput> | curationCreateWithoutStyleInput[] | curationUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: curationCreateOrConnectWithoutStyleInput | curationCreateOrConnectWithoutStyleInput[]
    createMany?: curationCreateManyStyleInputEnvelope
    connect?: curationWhereUniqueInput | curationWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type styleUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type curationUpdateManyWithoutStyleNestedInput = {
    create?: XOR<curationCreateWithoutStyleInput, curationUncheckedCreateWithoutStyleInput> | curationCreateWithoutStyleInput[] | curationUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: curationCreateOrConnectWithoutStyleInput | curationCreateOrConnectWithoutStyleInput[]
    upsert?: curationUpsertWithWhereUniqueWithoutStyleInput | curationUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: curationCreateManyStyleInputEnvelope
    set?: curationWhereUniqueInput | curationWhereUniqueInput[]
    disconnect?: curationWhereUniqueInput | curationWhereUniqueInput[]
    delete?: curationWhereUniqueInput | curationWhereUniqueInput[]
    connect?: curationWhereUniqueInput | curationWhereUniqueInput[]
    update?: curationUpdateWithWhereUniqueWithoutStyleInput | curationUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: curationUpdateManyWithWhereWithoutStyleInput | curationUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: curationScalarWhereInput | curationScalarWhereInput[]
  }

  export type curationUncheckedUpdateManyWithoutStyleNestedInput = {
    create?: XOR<curationCreateWithoutStyleInput, curationUncheckedCreateWithoutStyleInput> | curationCreateWithoutStyleInput[] | curationUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: curationCreateOrConnectWithoutStyleInput | curationCreateOrConnectWithoutStyleInput[]
    upsert?: curationUpsertWithWhereUniqueWithoutStyleInput | curationUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: curationCreateManyStyleInputEnvelope
    set?: curationWhereUniqueInput | curationWhereUniqueInput[]
    disconnect?: curationWhereUniqueInput | curationWhereUniqueInput[]
    delete?: curationWhereUniqueInput | curationWhereUniqueInput[]
    connect?: curationWhereUniqueInput | curationWhereUniqueInput[]
    update?: curationUpdateWithWhereUniqueWithoutStyleInput | curationUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: curationUpdateManyWithWhereWithoutStyleInput | curationUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: curationScalarWhereInput | curationScalarWhereInput[]
  }

  export type styleCreateNestedOneWithoutCurationsInput = {
    create?: XOR<styleCreateWithoutCurationsInput, styleUncheckedCreateWithoutCurationsInput>
    connectOrCreate?: styleCreateOrConnectWithoutCurationsInput
    connect?: styleWhereUniqueInput
  }

  export type curation_commentCreateNestedOneWithoutCurationInput = {
    create?: XOR<curation_commentCreateWithoutCurationInput, curation_commentUncheckedCreateWithoutCurationInput>
    connectOrCreate?: curation_commentCreateOrConnectWithoutCurationInput
    connect?: curation_commentWhereUniqueInput
  }

  export type curation_commentUncheckedCreateNestedOneWithoutCurationInput = {
    create?: XOR<curation_commentCreateWithoutCurationInput, curation_commentUncheckedCreateWithoutCurationInput>
    connectOrCreate?: curation_commentCreateOrConnectWithoutCurationInput
    connect?: curation_commentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type styleUpdateOneRequiredWithoutCurationsNestedInput = {
    create?: XOR<styleCreateWithoutCurationsInput, styleUncheckedCreateWithoutCurationsInput>
    connectOrCreate?: styleCreateOrConnectWithoutCurationsInput
    upsert?: styleUpsertWithoutCurationsInput
    connect?: styleWhereUniqueInput
    update?: XOR<XOR<styleUpdateToOneWithWhereWithoutCurationsInput, styleUpdateWithoutCurationsInput>, styleUncheckedUpdateWithoutCurationsInput>
  }

  export type curation_commentUpdateOneWithoutCurationNestedInput = {
    create?: XOR<curation_commentCreateWithoutCurationInput, curation_commentUncheckedCreateWithoutCurationInput>
    connectOrCreate?: curation_commentCreateOrConnectWithoutCurationInput
    upsert?: curation_commentUpsertWithoutCurationInput
    disconnect?: curation_commentWhereInput | boolean
    delete?: curation_commentWhereInput | boolean
    connect?: curation_commentWhereUniqueInput
    update?: XOR<XOR<curation_commentUpdateToOneWithWhereWithoutCurationInput, curation_commentUpdateWithoutCurationInput>, curation_commentUncheckedUpdateWithoutCurationInput>
  }

  export type curation_commentUncheckedUpdateOneWithoutCurationNestedInput = {
    create?: XOR<curation_commentCreateWithoutCurationInput, curation_commentUncheckedCreateWithoutCurationInput>
    connectOrCreate?: curation_commentCreateOrConnectWithoutCurationInput
    upsert?: curation_commentUpsertWithoutCurationInput
    disconnect?: curation_commentWhereInput | boolean
    delete?: curation_commentWhereInput | boolean
    connect?: curation_commentWhereUniqueInput
    update?: XOR<XOR<curation_commentUpdateToOneWithWhereWithoutCurationInput, curation_commentUpdateWithoutCurationInput>, curation_commentUncheckedUpdateWithoutCurationInput>
  }

  export type curationCreateNestedOneWithoutCuration_commentInput = {
    create?: XOR<curationCreateWithoutCuration_commentInput, curationUncheckedCreateWithoutCuration_commentInput>
    connectOrCreate?: curationCreateOrConnectWithoutCuration_commentInput
    connect?: curationWhereUniqueInput
  }

  export type curationUpdateOneRequiredWithoutCuration_commentNestedInput = {
    create?: XOR<curationCreateWithoutCuration_commentInput, curationUncheckedCreateWithoutCuration_commentInput>
    connectOrCreate?: curationCreateOrConnectWithoutCuration_commentInput
    upsert?: curationUpsertWithoutCuration_commentInput
    connect?: curationWhereUniqueInput
    update?: XOR<XOR<curationUpdateToOneWithWhereWithoutCuration_commentInput, curationUpdateWithoutCuration_commentInput>, curationUncheckedUpdateWithoutCuration_commentInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type curationCreateWithoutStyleInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    curation_comment?: curation_commentCreateNestedOneWithoutCurationInput
  }

  export type curationUncheckedCreateWithoutStyleInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    curation_comment?: curation_commentUncheckedCreateNestedOneWithoutCurationInput
  }

  export type curationCreateOrConnectWithoutStyleInput = {
    where: curationWhereUniqueInput
    create: XOR<curationCreateWithoutStyleInput, curationUncheckedCreateWithoutStyleInput>
  }

  export type curationCreateManyStyleInputEnvelope = {
    data: curationCreateManyStyleInput | curationCreateManyStyleInput[]
    skipDuplicates?: boolean
  }

  export type curationUpsertWithWhereUniqueWithoutStyleInput = {
    where: curationWhereUniqueInput
    update: XOR<curationUpdateWithoutStyleInput, curationUncheckedUpdateWithoutStyleInput>
    create: XOR<curationCreateWithoutStyleInput, curationUncheckedCreateWithoutStyleInput>
  }

  export type curationUpdateWithWhereUniqueWithoutStyleInput = {
    where: curationWhereUniqueInput
    data: XOR<curationUpdateWithoutStyleInput, curationUncheckedUpdateWithoutStyleInput>
  }

  export type curationUpdateManyWithWhereWithoutStyleInput = {
    where: curationScalarWhereInput
    data: XOR<curationUpdateManyMutationInput, curationUncheckedUpdateManyWithoutStyleInput>
  }

  export type curationScalarWhereInput = {
    AND?: curationScalarWhereInput | curationScalarWhereInput[]
    OR?: curationScalarWhereInput[]
    NOT?: curationScalarWhereInput | curationScalarWhereInput[]
    id?: BigIntFilter<"curation"> | bigint | number
    nickname?: StringFilter<"curation"> | string
    content?: StringFilter<"curation"> | string
    password?: StringFilter<"curation"> | string
    trendy?: IntFilter<"curation"> | number
    personality?: IntFilter<"curation"> | number
    practicality?: IntFilter<"curation"> | number
    costEffectiveness?: IntFilter<"curation"> | number
    style_id?: BigIntFilter<"curation"> | bigint | number
  }

  export type styleCreateWithoutCurationsInput = {
    id?: bigint | number
    nickname: string
    title: string
    password: string
    description?: string
    tags?: styleCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type styleUncheckedCreateWithoutCurationsInput = {
    id?: bigint | number
    nickname: string
    title: string
    password: string
    description?: string
    tags?: styleCreatetagsInput | string[]
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type styleCreateOrConnectWithoutCurationsInput = {
    where: styleWhereUniqueInput
    create: XOR<styleCreateWithoutCurationsInput, styleUncheckedCreateWithoutCurationsInput>
  }

  export type curation_commentCreateWithoutCurationInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
  }

  export type curation_commentUncheckedCreateWithoutCurationInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
  }

  export type curation_commentCreateOrConnectWithoutCurationInput = {
    where: curation_commentWhereUniqueInput
    create: XOR<curation_commentCreateWithoutCurationInput, curation_commentUncheckedCreateWithoutCurationInput>
  }

  export type styleUpsertWithoutCurationsInput = {
    update: XOR<styleUpdateWithoutCurationsInput, styleUncheckedUpdateWithoutCurationsInput>
    create: XOR<styleCreateWithoutCurationsInput, styleUncheckedCreateWithoutCurationsInput>
    where?: styleWhereInput
  }

  export type styleUpdateToOneWithWhereWithoutCurationsInput = {
    where?: styleWhereInput
    data: XOR<styleUpdateWithoutCurationsInput, styleUncheckedUpdateWithoutCurationsInput>
  }

  export type styleUpdateWithoutCurationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: styleUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type styleUncheckedUpdateWithoutCurationsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    tags?: styleUpdatetagsInput | string[]
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type curation_commentUpsertWithoutCurationInput = {
    update: XOR<curation_commentUpdateWithoutCurationInput, curation_commentUncheckedUpdateWithoutCurationInput>
    create: XOR<curation_commentCreateWithoutCurationInput, curation_commentUncheckedCreateWithoutCurationInput>
    where?: curation_commentWhereInput
  }

  export type curation_commentUpdateToOneWithWhereWithoutCurationInput = {
    where?: curation_commentWhereInput
    data: XOR<curation_commentUpdateWithoutCurationInput, curation_commentUncheckedUpdateWithoutCurationInput>
  }

  export type curation_commentUpdateWithoutCurationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type curation_commentUncheckedUpdateWithoutCurationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type curationCreateWithoutCuration_commentInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style: styleCreateNestedOneWithoutCurationsInput
  }

  export type curationUncheckedCreateWithoutCuration_commentInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
    style_id: bigint | number
  }

  export type curationCreateOrConnectWithoutCuration_commentInput = {
    where: curationWhereUniqueInput
    create: XOR<curationCreateWithoutCuration_commentInput, curationUncheckedCreateWithoutCuration_commentInput>
  }

  export type curationUpsertWithoutCuration_commentInput = {
    update: XOR<curationUpdateWithoutCuration_commentInput, curationUncheckedUpdateWithoutCuration_commentInput>
    create: XOR<curationCreateWithoutCuration_commentInput, curationUncheckedCreateWithoutCuration_commentInput>
    where?: curationWhereInput
  }

  export type curationUpdateToOneWithWhereWithoutCuration_commentInput = {
    where?: curationWhereInput
    data: XOR<curationUpdateWithoutCuration_commentInput, curationUncheckedUpdateWithoutCuration_commentInput>
  }

  export type curationUpdateWithoutCuration_commentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    style?: styleUpdateOneRequiredWithoutCurationsNestedInput
  }

  export type curationUncheckedUpdateWithoutCuration_commentInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    style_id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type curationCreateManyStyleInput = {
    id?: bigint | number
    nickname: string
    content?: string
    password: string
    trendy: number
    personality: number
    practicality: number
    costEffectiveness: number
  }

  export type curationUpdateWithoutStyleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    curation_comment?: curation_commentUpdateOneWithoutCurationNestedInput
  }

  export type curationUncheckedUpdateWithoutStyleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
    curation_comment?: curation_commentUncheckedUpdateOneWithoutCurationNestedInput
  }

  export type curationUncheckedUpdateManyWithoutStyleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nickname?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    trendy?: IntFieldUpdateOperationsInput | number
    personality?: IntFieldUpdateOperationsInput | number
    practicality?: IntFieldUpdateOperationsInput | number
    costEffectiveness?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}