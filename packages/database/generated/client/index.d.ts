
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Artists
 * 
 */
export type Artists = $Result.DefaultSelection<Prisma.$ArtistsPayload>
/**
 * Model Wallpapers
 * 
 */
export type Wallpapers = $Result.DefaultSelection<Prisma.$WallpapersPayload>
/**
 * Model LikedWallpapers
 * 
 */
export type LikedWallpapers = $Result.DefaultSelection<Prisma.$LikedWallpapersPayload>
/**
 * Model BookmarkedWallpapers
 * 
 */
export type BookmarkedWallpapers = $Result.DefaultSelection<Prisma.$BookmarkedWallpapersPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Platform: {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admins.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **Artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.ArtistsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallpapers`: Exposes CRUD operations for the **Wallpapers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallpapers
    * const wallpapers = await prisma.wallpapers.findMany()
    * ```
    */
  get wallpapers(): Prisma.WallpapersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likedWallpapers`: Exposes CRUD operations for the **LikedWallpapers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikedWallpapers
    * const likedWallpapers = await prisma.likedWallpapers.findMany()
    * ```
    */
  get likedWallpapers(): Prisma.LikedWallpapersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmarkedWallpapers`: Exposes CRUD operations for the **BookmarkedWallpapers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookmarkedWallpapers
    * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findMany()
    * ```
    */
  get bookmarkedWallpapers(): Prisma.BookmarkedWallpapersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Admins: 'Admins',
    Users: 'Users',
    Artists: 'Artists',
    Wallpapers: 'Wallpapers',
    LikedWallpapers: 'LikedWallpapers',
    BookmarkedWallpapers: 'BookmarkedWallpapers',
    Categories: 'Categories'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admins" | "users" | "artists" | "wallpapers" | "likedWallpapers" | "bookmarkedWallpapers" | "categories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admins: {
        payload: Prisma.$AdminsPayload<ExtArgs>
        fields: Prisma.AdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findFirst: {
            args: Prisma.AdminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findMany: {
            args: Prisma.AdminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          create: {
            args: Prisma.AdminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          createMany: {
            args: Prisma.AdminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          delete: {
            args: Prisma.AdminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          update: {
            args: Prisma.AdminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          deleteMany: {
            args: Prisma.AdminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          upsert: {
            args: Prisma.AdminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.AdminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Artists: {
        payload: Prisma.$ArtistsPayload<ExtArgs>
        fields: Prisma.ArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findMany: {
            args: Prisma.ArtistsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          create: {
            args: Prisma.ArtistsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          createMany: {
            args: Prisma.ArtistsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          delete: {
            args: Prisma.ArtistsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          update: {
            args: Prisma.ArtistsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          upsert: {
            args: Prisma.ArtistsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.ArtistsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistsCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      Wallpapers: {
        payload: Prisma.$WallpapersPayload<ExtArgs>
        fields: Prisma.WallpapersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WallpapersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WallpapersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>
          }
          findFirst: {
            args: Prisma.WallpapersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WallpapersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>
          }
          findMany: {
            args: Prisma.WallpapersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>[]
          }
          create: {
            args: Prisma.WallpapersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>
          }
          createMany: {
            args: Prisma.WallpapersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WallpapersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>[]
          }
          delete: {
            args: Prisma.WallpapersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>
          }
          update: {
            args: Prisma.WallpapersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>
          }
          deleteMany: {
            args: Prisma.WallpapersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WallpapersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WallpapersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>[]
          }
          upsert: {
            args: Prisma.WallpapersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WallpapersPayload>
          }
          aggregate: {
            args: Prisma.WallpapersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallpapers>
          }
          groupBy: {
            args: Prisma.WallpapersGroupByArgs<ExtArgs>
            result: $Utils.Optional<WallpapersGroupByOutputType>[]
          }
          count: {
            args: Prisma.WallpapersCountArgs<ExtArgs>
            result: $Utils.Optional<WallpapersCountAggregateOutputType> | number
          }
        }
      }
      LikedWallpapers: {
        payload: Prisma.$LikedWallpapersPayload<ExtArgs>
        fields: Prisma.LikedWallpapersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikedWallpapersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikedWallpapersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>
          }
          findFirst: {
            args: Prisma.LikedWallpapersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikedWallpapersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>
          }
          findMany: {
            args: Prisma.LikedWallpapersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>[]
          }
          create: {
            args: Prisma.LikedWallpapersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>
          }
          createMany: {
            args: Prisma.LikedWallpapersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikedWallpapersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>[]
          }
          delete: {
            args: Prisma.LikedWallpapersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>
          }
          update: {
            args: Prisma.LikedWallpapersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>
          }
          deleteMany: {
            args: Prisma.LikedWallpapersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikedWallpapersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikedWallpapersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>[]
          }
          upsert: {
            args: Prisma.LikedWallpapersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikedWallpapersPayload>
          }
          aggregate: {
            args: Prisma.LikedWallpapersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikedWallpapers>
          }
          groupBy: {
            args: Prisma.LikedWallpapersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikedWallpapersGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikedWallpapersCountArgs<ExtArgs>
            result: $Utils.Optional<LikedWallpapersCountAggregateOutputType> | number
          }
        }
      }
      BookmarkedWallpapers: {
        payload: Prisma.$BookmarkedWallpapersPayload<ExtArgs>
        fields: Prisma.BookmarkedWallpapersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkedWallpapersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkedWallpapersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>
          }
          findFirst: {
            args: Prisma.BookmarkedWallpapersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkedWallpapersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>
          }
          findMany: {
            args: Prisma.BookmarkedWallpapersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>[]
          }
          create: {
            args: Prisma.BookmarkedWallpapersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>
          }
          createMany: {
            args: Prisma.BookmarkedWallpapersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkedWallpapersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>[]
          }
          delete: {
            args: Prisma.BookmarkedWallpapersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>
          }
          update: {
            args: Prisma.BookmarkedWallpapersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkedWallpapersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkedWallpapersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkedWallpapersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkedWallpapersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkedWallpapersPayload>
          }
          aggregate: {
            args: Prisma.BookmarkedWallpapersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmarkedWallpapers>
          }
          groupBy: {
            args: Prisma.BookmarkedWallpapersGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkedWallpapersGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkedWallpapersCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkedWallpapersCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    admins?: AdminsOmit
    users?: UsersOmit
    artists?: ArtistsOmit
    wallpapers?: WallpapersOmit
    likedWallpapers?: LikedWallpapersOmit
    bookmarkedWallpapers?: BookmarkedWallpapersOmit
    categories?: CategoriesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    likedWallpapers: number
    bookmarkedWallpapers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedWallpapers?: boolean | UsersCountOutputTypeCountLikedWallpapersArgs
    bookmarkedWallpapers?: boolean | UsersCountOutputTypeCountBookmarkedWallpapersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedWallpapersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookmarkedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedWallpapersWhereInput
  }


  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    wallpapers: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallpapers?: boolean | ArtistsCountOutputTypeCountWallpapersArgs
  }

  // Custom InputTypes
  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsCountOutputType
     */
    select?: ArtistsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallpapersWhereInput
  }


  /**
   * Count Type WallpapersCountOutputType
   */

  export type WallpapersCountOutputType = {
    likedWallpapers: number
    bookmarkedWallpapers: number
  }

  export type WallpapersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedWallpapers?: boolean | WallpapersCountOutputTypeCountLikedWallpapersArgs
    bookmarkedWallpapers?: boolean | WallpapersCountOutputTypeCountBookmarkedWallpapersArgs
  }

  // Custom InputTypes
  /**
   * WallpapersCountOutputType without action
   */
  export type WallpapersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WallpapersCountOutputType
     */
    select?: WallpapersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WallpapersCountOutputType without action
   */
  export type WallpapersCountOutputTypeCountLikedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedWallpapersWhereInput
  }

  /**
   * WallpapersCountOutputType without action
   */
  export type WallpapersCountOutputTypeCountBookmarkedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedWallpapersWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    wallpapers: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallpapers?: boolean | CategoriesCountOutputTypeCountWallpapersArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallpapersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to aggregate.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type AdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminsWhereInput
    orderBy?: AdminsOrderByWithAggregationInput | AdminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: AdminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends AdminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type AdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admins"]>

  export type $AdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admins"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type AdminsGetPayload<S extends boolean | null | undefined | AdminsDefaultArgs> = $Result.GetResult<Prisma.$AdminsPayload, S>

  type AdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface AdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admins'], meta: { name: 'Admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {AdminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminsFindUniqueArgs>(args: SelectSubset<T, AdminsFindUniqueArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminsFindFirstArgs>(args?: SelectSubset<T, AdminsFindFirstArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminsFindManyArgs>(args?: SelectSubset<T, AdminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admins.
     * @param {AdminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends AdminsCreateArgs>(args: SelectSubset<T, AdminsCreateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {AdminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminsCreateManyArgs>(args?: SelectSubset<T, AdminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Admins.
     * @param {AdminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends AdminsDeleteArgs>(args: SelectSubset<T, AdminsDeleteArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admins.
     * @param {AdminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminsUpdateArgs>(args: SelectSubset<T, AdminsUpdateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminsDeleteManyArgs>(args?: SelectSubset<T, AdminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminsUpdateManyArgs>(args: SelectSubset<T, AdminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Admins.
     * @param {AdminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends AdminsUpsertArgs>(args: SelectSubset<T, AdminsUpsertArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminsCountArgs>(
      args?: Subset<T, AdminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsGroupByArgs} args - Group by arguments.
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
      T extends AdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminsGroupByArgs['orderBy'] }
        : { orderBy?: AdminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admins model
   */
  readonly fields: AdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admins model
   */ 
  interface AdminsFieldRefs {
    readonly id: FieldRef<"Admins", 'String'>
    readonly name: FieldRef<"Admins", 'String'>
    readonly email: FieldRef<"Admins", 'String'>
    readonly password: FieldRef<"Admins", 'String'>
    readonly createdAt: FieldRef<"Admins", 'DateTime'>
    readonly updatedAt: FieldRef<"Admins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admins findUnique
   */
  export type AdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findUniqueOrThrow
   */
  export type AdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findFirst
   */
  export type AdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findFirstOrThrow
   */
  export type AdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findMany
   */
  export type AdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins create
   */
  export type AdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data needed to create a Admins.
     */
    data: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
  }

  /**
   * Admins createMany
   */
  export type AdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins createManyAndReturn
   */
  export type AdminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins update
   */
  export type AdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data needed to update a Admins.
     */
    data: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
    /**
     * Choose, which Admins to update.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins updateMany
   */
  export type AdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins updateManyAndReturn
   */
  export type AdminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins upsert
   */
  export type AdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The filter to search for the Admins to update in case it exists.
     */
    where: AdminsWhereUniqueInput
    /**
     * In case the Admins found by the `where` argument doesn't exist, create a new Admins with this data.
     */
    create: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
    /**
     * In case the Admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
  }

  /**
   * Admins delete
   */
  export type AdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Filter which Admins to delete.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins deleteMany
   */
  export type AdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admins without action
   */
  export type AdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likedWallpapers?: boolean | Users$likedWallpapersArgs<ExtArgs>
    bookmarkedWallpapers?: boolean | Users$bookmarkedWallpapersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedWallpapers?: boolean | Users$likedWallpapersArgs<ExtArgs>
    bookmarkedWallpapers?: boolean | Users$bookmarkedWallpapersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      likedWallpapers: Prisma.$LikedWallpapersPayload<ExtArgs>[]
      bookmarkedWallpapers: Prisma.$BookmarkedWallpapersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likedWallpapers<T extends Users$likedWallpapersArgs<ExtArgs> = {}>(args?: Subset<T, Users$likedWallpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    bookmarkedWallpapers<T extends Users$bookmarkedWallpapersArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookmarkedWallpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.likedWallpapers
   */
  export type Users$likedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    where?: LikedWallpapersWhereInput
    orderBy?: LikedWallpapersOrderByWithRelationInput | LikedWallpapersOrderByWithRelationInput[]
    cursor?: LikedWallpapersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedWallpapersScalarFieldEnum | LikedWallpapersScalarFieldEnum[]
  }

  /**
   * Users.bookmarkedWallpapers
   */
  export type Users$bookmarkedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    where?: BookmarkedWallpapersWhereInput
    orderBy?: BookmarkedWallpapersOrderByWithRelationInput | BookmarkedWallpapersOrderByWithRelationInput[]
    cursor?: BookmarkedWallpapersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkedWallpapersScalarFieldEnum | BookmarkedWallpapersScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    mobileNo: string | null
    gender: $Enums.Gender | null
    country: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistsMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    name: string | null
    email: string | null
    mobileNo: string | null
    gender: $Enums.Gender | null
    country: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArtistsCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    email: number
    mobileNo: number
    gender: number
    country: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArtistsMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    mobileNo?: true
    gender?: true
    country?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistsMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    mobileNo?: true
    gender?: true
    country?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArtistsCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    email?: true
    mobileNo?: true
    gender?: true
    country?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to aggregate.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type ArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithAggregationInput | ArtistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: ArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    id: string
    clerkId: string
    name: string | null
    email: string
    mobileNo: string | null
    gender: $Enums.Gender | null
    country: string | null
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: ArtistsCountAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends ArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    mobileNo?: boolean
    gender?: boolean
    country?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallpapers?: boolean | Artists$wallpapersArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    mobileNo?: boolean
    gender?: boolean
    country?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    mobileNo?: boolean
    gender?: boolean
    country?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    email?: boolean
    mobileNo?: boolean
    gender?: boolean
    country?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArtistsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "email" | "mobileNo" | "gender" | "country" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["artists"]>
  export type ArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallpapers?: boolean | Artists$wallpapersArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {
      wallpapers: Prisma.$WallpapersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      name: string | null
      email: string
      mobileNo: string | null
      gender: $Enums.Gender | null
      country: string | null
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }

  type ArtistsGetPayload<S extends boolean | null | undefined | ArtistsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsPayload, S>

  type ArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface ArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artists'], meta: { name: 'Artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {ArtistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistsFindUniqueArgs>(args: SelectSubset<T, ArtistsFindUniqueArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Artists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistsFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistsFindFirstArgs>(args?: SelectSubset<T, ArtistsFindFirstArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistsFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistsWithIdOnly = await prisma.artists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistsFindManyArgs>(args?: SelectSubset<T, ArtistsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Artists.
     * @param {ArtistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
     */
    create<T extends ArtistsCreateArgs>(args: SelectSubset<T, ArtistsCreateArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Artists.
     * @param {ArtistsCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistsCreateManyArgs>(args?: SelectSubset<T, ArtistsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistsCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artists = await prisma.artists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistsWithIdOnly = await prisma.artists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistsCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Artists.
     * @param {ArtistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
     */
    delete<T extends ArtistsDeleteArgs>(args: SelectSubset<T, ArtistsDeleteArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Artists.
     * @param {ArtistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistsUpdateArgs>(args: SelectSubset<T, ArtistsUpdateArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistsDeleteManyArgs>(args?: SelectSubset<T, ArtistsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistsUpdateManyArgs>(args: SelectSubset<T, ArtistsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistsUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistsWithIdOnly = await prisma.artists.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistsUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Artists.
     * @param {ArtistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
     */
    upsert<T extends ArtistsUpsertArgs>(args: SelectSubset<T, ArtistsUpsertArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistsCountArgs>(
      args?: Subset<T, ArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsGroupByArgs} args - Group by arguments.
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
      T extends ArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artists model
   */
  readonly fields: ArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallpapers<T extends Artists$wallpapersArgs<ExtArgs> = {}>(args?: Subset<T, Artists$wallpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Artists model
   */ 
  interface ArtistsFieldRefs {
    readonly id: FieldRef<"Artists", 'String'>
    readonly clerkId: FieldRef<"Artists", 'String'>
    readonly name: FieldRef<"Artists", 'String'>
    readonly email: FieldRef<"Artists", 'String'>
    readonly mobileNo: FieldRef<"Artists", 'String'>
    readonly gender: FieldRef<"Artists", 'Gender'>
    readonly country: FieldRef<"Artists", 'String'>
    readonly isVerified: FieldRef<"Artists", 'Boolean'>
    readonly createdAt: FieldRef<"Artists", 'DateTime'>
    readonly updatedAt: FieldRef<"Artists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Artists findUnique
   */
  export type ArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists findUniqueOrThrow
   */
  export type ArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists findFirst
   */
  export type ArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists findFirstOrThrow
   */
  export type ArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists findMany
   */
  export type ArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }

  /**
   * Artists create
   */
  export type ArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Artists.
     */
    data: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
  }

  /**
   * Artists createMany
   */
  export type ArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artists createManyAndReturn
   */
  export type ArtistsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artists update
   */
  export type ArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Artists.
     */
    data: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
    /**
     * Choose, which Artists to update.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists updateMany
   */
  export type ArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artists updateManyAndReturn
   */
  export type ArtistsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artists upsert
   */
  export type ArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Artists to update in case it exists.
     */
    where: ArtistsWhereUniqueInput
    /**
     * In case the Artists found by the `where` argument doesn't exist, create a new Artists with this data.
     */
    create: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
    /**
     * In case the Artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
  }

  /**
   * Artists delete
   */
  export type ArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter which Artists to delete.
     */
    where: ArtistsWhereUniqueInput
  }

  /**
   * Artists deleteMany
   */
  export type ArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistsWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artists.wallpapers
   */
  export type Artists$wallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    where?: WallpapersWhereInput
    orderBy?: WallpapersOrderByWithRelationInput | WallpapersOrderByWithRelationInput[]
    cursor?: WallpapersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WallpapersScalarFieldEnum | WallpapersScalarFieldEnum[]
  }

  /**
   * Artists without action
   */
  export type ArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artists
     */
    omit?: ArtistsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistsInclude<ExtArgs> | null
  }


  /**
   * Model Wallpapers
   */

  export type AggregateWallpapers = {
    _count: WallpapersCountAggregateOutputType | null
    _avg: WallpapersAvgAggregateOutputType | null
    _sum: WallpapersSumAggregateOutputType | null
    _min: WallpapersMinAggregateOutputType | null
    _max: WallpapersMaxAggregateOutputType | null
  }

  export type WallpapersAvgAggregateOutputType = {
    likes: number | null
  }

  export type WallpapersSumAggregateOutputType = {
    likes: number | null
  }

  export type WallpapersMinAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    likes: number | null
    platform: $Enums.Platform | null
    categoriesId: string | null
    artistsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WallpapersMaxAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    likes: number | null
    platform: $Enums.Platform | null
    categoriesId: string | null
    artistsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WallpapersCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    likes: number
    platform: number
    categoriesId: number
    artistsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WallpapersAvgAggregateInputType = {
    likes?: true
  }

  export type WallpapersSumAggregateInputType = {
    likes?: true
  }

  export type WallpapersMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    likes?: true
    platform?: true
    categoriesId?: true
    artistsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WallpapersMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    likes?: true
    platform?: true
    categoriesId?: true
    artistsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WallpapersCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    likes?: true
    platform?: true
    categoriesId?: true
    artistsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WallpapersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallpapers to aggregate.
     */
    where?: WallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallpapers to fetch.
     */
    orderBy?: WallpapersOrderByWithRelationInput | WallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallpapers
    **/
    _count?: true | WallpapersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WallpapersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WallpapersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WallpapersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WallpapersMaxAggregateInputType
  }

  export type GetWallpapersAggregateType<T extends WallpapersAggregateArgs> = {
        [P in keyof T & keyof AggregateWallpapers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallpapers[P]>
      : GetScalarType<T[P], AggregateWallpapers[P]>
  }




  export type WallpapersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WallpapersWhereInput
    orderBy?: WallpapersOrderByWithAggregationInput | WallpapersOrderByWithAggregationInput[]
    by: WallpapersScalarFieldEnum[] | WallpapersScalarFieldEnum
    having?: WallpapersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WallpapersCountAggregateInputType | true
    _avg?: WallpapersAvgAggregateInputType
    _sum?: WallpapersSumAggregateInputType
    _min?: WallpapersMinAggregateInputType
    _max?: WallpapersMaxAggregateInputType
  }

  export type WallpapersGroupByOutputType = {
    id: string
    title: string | null
    imageUrl: string | null
    likes: number
    platform: $Enums.Platform | null
    categoriesId: string
    artistsId: string
    createdAt: Date
    updatedAt: Date
    _count: WallpapersCountAggregateOutputType | null
    _avg: WallpapersAvgAggregateOutputType | null
    _sum: WallpapersSumAggregateOutputType | null
    _min: WallpapersMinAggregateOutputType | null
    _max: WallpapersMaxAggregateOutputType | null
  }

  type GetWallpapersGroupByPayload<T extends WallpapersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WallpapersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WallpapersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WallpapersGroupByOutputType[P]>
            : GetScalarType<T[P], WallpapersGroupByOutputType[P]>
        }
      >
    >


  export type WallpapersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    likes?: boolean
    platform?: boolean
    categoriesId?: boolean
    artistsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    artists?: boolean | ArtistsDefaultArgs<ExtArgs>
    likedWallpapers?: boolean | Wallpapers$likedWallpapersArgs<ExtArgs>
    bookmarkedWallpapers?: boolean | Wallpapers$bookmarkedWallpapersArgs<ExtArgs>
    _count?: boolean | WallpapersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallpapers"]>

  export type WallpapersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    likes?: boolean
    platform?: boolean
    categoriesId?: boolean
    artistsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    artists?: boolean | ArtistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallpapers"]>

  export type WallpapersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    likes?: boolean
    platform?: boolean
    categoriesId?: boolean
    artistsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    artists?: boolean | ArtistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallpapers"]>

  export type WallpapersSelectScalar = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    likes?: boolean
    platform?: boolean
    categoriesId?: boolean
    artistsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WallpapersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageUrl" | "likes" | "platform" | "categoriesId" | "artistsId" | "createdAt" | "updatedAt", ExtArgs["result"]["wallpapers"]>
  export type WallpapersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    artists?: boolean | ArtistsDefaultArgs<ExtArgs>
    likedWallpapers?: boolean | Wallpapers$likedWallpapersArgs<ExtArgs>
    bookmarkedWallpapers?: boolean | Wallpapers$bookmarkedWallpapersArgs<ExtArgs>
    _count?: boolean | WallpapersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WallpapersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    artists?: boolean | ArtistsDefaultArgs<ExtArgs>
  }
  export type WallpapersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | CategoriesDefaultArgs<ExtArgs>
    artists?: boolean | ArtistsDefaultArgs<ExtArgs>
  }

  export type $WallpapersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallpapers"
    objects: {
      categories: Prisma.$CategoriesPayload<ExtArgs>
      artists: Prisma.$ArtistsPayload<ExtArgs>
      likedWallpapers: Prisma.$LikedWallpapersPayload<ExtArgs>[]
      bookmarkedWallpapers: Prisma.$BookmarkedWallpapersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      imageUrl: string | null
      likes: number
      platform: $Enums.Platform | null
      categoriesId: string
      artistsId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallpapers"]>
    composites: {}
  }

  type WallpapersGetPayload<S extends boolean | null | undefined | WallpapersDefaultArgs> = $Result.GetResult<Prisma.$WallpapersPayload, S>

  type WallpapersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WallpapersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WallpapersCountAggregateInputType | true
    }

  export interface WallpapersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallpapers'], meta: { name: 'Wallpapers' } }
    /**
     * Find zero or one Wallpapers that matches the filter.
     * @param {WallpapersFindUniqueArgs} args - Arguments to find a Wallpapers
     * @example
     * // Get one Wallpapers
     * const wallpapers = await prisma.wallpapers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WallpapersFindUniqueArgs>(args: SelectSubset<T, WallpapersFindUniqueArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Wallpapers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WallpapersFindUniqueOrThrowArgs} args - Arguments to find a Wallpapers
     * @example
     * // Get one Wallpapers
     * const wallpapers = await prisma.wallpapers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WallpapersFindUniqueOrThrowArgs>(args: SelectSubset<T, WallpapersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Wallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersFindFirstArgs} args - Arguments to find a Wallpapers
     * @example
     * // Get one Wallpapers
     * const wallpapers = await prisma.wallpapers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WallpapersFindFirstArgs>(args?: SelectSubset<T, WallpapersFindFirstArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Wallpapers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersFindFirstOrThrowArgs} args - Arguments to find a Wallpapers
     * @example
     * // Get one Wallpapers
     * const wallpapers = await prisma.wallpapers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WallpapersFindFirstOrThrowArgs>(args?: SelectSubset<T, WallpapersFindFirstOrThrowArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Wallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallpapers
     * const wallpapers = await prisma.wallpapers.findMany()
     * 
     * // Get first 10 Wallpapers
     * const wallpapers = await prisma.wallpapers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wallpapersWithIdOnly = await prisma.wallpapers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WallpapersFindManyArgs>(args?: SelectSubset<T, WallpapersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Wallpapers.
     * @param {WallpapersCreateArgs} args - Arguments to create a Wallpapers.
     * @example
     * // Create one Wallpapers
     * const Wallpapers = await prisma.wallpapers.create({
     *   data: {
     *     // ... data to create a Wallpapers
     *   }
     * })
     * 
     */
    create<T extends WallpapersCreateArgs>(args: SelectSubset<T, WallpapersCreateArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Wallpapers.
     * @param {WallpapersCreateManyArgs} args - Arguments to create many Wallpapers.
     * @example
     * // Create many Wallpapers
     * const wallpapers = await prisma.wallpapers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WallpapersCreateManyArgs>(args?: SelectSubset<T, WallpapersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallpapers and returns the data saved in the database.
     * @param {WallpapersCreateManyAndReturnArgs} args - Arguments to create many Wallpapers.
     * @example
     * // Create many Wallpapers
     * const wallpapers = await prisma.wallpapers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallpapers and only return the `id`
     * const wallpapersWithIdOnly = await prisma.wallpapers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WallpapersCreateManyAndReturnArgs>(args?: SelectSubset<T, WallpapersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Wallpapers.
     * @param {WallpapersDeleteArgs} args - Arguments to delete one Wallpapers.
     * @example
     * // Delete one Wallpapers
     * const Wallpapers = await prisma.wallpapers.delete({
     *   where: {
     *     // ... filter to delete one Wallpapers
     *   }
     * })
     * 
     */
    delete<T extends WallpapersDeleteArgs>(args: SelectSubset<T, WallpapersDeleteArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Wallpapers.
     * @param {WallpapersUpdateArgs} args - Arguments to update one Wallpapers.
     * @example
     * // Update one Wallpapers
     * const wallpapers = await prisma.wallpapers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WallpapersUpdateArgs>(args: SelectSubset<T, WallpapersUpdateArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Wallpapers.
     * @param {WallpapersDeleteManyArgs} args - Arguments to filter Wallpapers to delete.
     * @example
     * // Delete a few Wallpapers
     * const { count } = await prisma.wallpapers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WallpapersDeleteManyArgs>(args?: SelectSubset<T, WallpapersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallpapers
     * const wallpapers = await prisma.wallpapers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WallpapersUpdateManyArgs>(args: SelectSubset<T, WallpapersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallpapers and returns the data updated in the database.
     * @param {WallpapersUpdateManyAndReturnArgs} args - Arguments to update many Wallpapers.
     * @example
     * // Update many Wallpapers
     * const wallpapers = await prisma.wallpapers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallpapers and only return the `id`
     * const wallpapersWithIdOnly = await prisma.wallpapers.updateManyAndReturn({
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
    updateManyAndReturn<T extends WallpapersUpdateManyAndReturnArgs>(args: SelectSubset<T, WallpapersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Wallpapers.
     * @param {WallpapersUpsertArgs} args - Arguments to update or create a Wallpapers.
     * @example
     * // Update or create a Wallpapers
     * const wallpapers = await prisma.wallpapers.upsert({
     *   create: {
     *     // ... data to create a Wallpapers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallpapers we want to update
     *   }
     * })
     */
    upsert<T extends WallpapersUpsertArgs>(args: SelectSubset<T, WallpapersUpsertArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Wallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersCountArgs} args - Arguments to filter Wallpapers to count.
     * @example
     * // Count the number of Wallpapers
     * const count = await prisma.wallpapers.count({
     *   where: {
     *     // ... the filter for the Wallpapers we want to count
     *   }
     * })
    **/
    count<T extends WallpapersCountArgs>(
      args?: Subset<T, WallpapersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WallpapersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WallpapersAggregateArgs>(args: Subset<T, WallpapersAggregateArgs>): Prisma.PrismaPromise<GetWallpapersAggregateType<T>>

    /**
     * Group by Wallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WallpapersGroupByArgs} args - Group by arguments.
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
      T extends WallpapersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WallpapersGroupByArgs['orderBy'] }
        : { orderBy?: WallpapersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WallpapersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWallpapersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallpapers model
   */
  readonly fields: WallpapersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallpapers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WallpapersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    artists<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    likedWallpapers<T extends Wallpapers$likedWallpapersArgs<ExtArgs> = {}>(args?: Subset<T, Wallpapers$likedWallpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    bookmarkedWallpapers<T extends Wallpapers$bookmarkedWallpapersArgs<ExtArgs> = {}>(args?: Subset<T, Wallpapers$bookmarkedWallpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Wallpapers model
   */ 
  interface WallpapersFieldRefs {
    readonly id: FieldRef<"Wallpapers", 'String'>
    readonly title: FieldRef<"Wallpapers", 'String'>
    readonly imageUrl: FieldRef<"Wallpapers", 'String'>
    readonly likes: FieldRef<"Wallpapers", 'Int'>
    readonly platform: FieldRef<"Wallpapers", 'Platform'>
    readonly categoriesId: FieldRef<"Wallpapers", 'String'>
    readonly artistsId: FieldRef<"Wallpapers", 'String'>
    readonly createdAt: FieldRef<"Wallpapers", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallpapers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallpapers findUnique
   */
  export type WallpapersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * Filter, which Wallpapers to fetch.
     */
    where: WallpapersWhereUniqueInput
  }

  /**
   * Wallpapers findUniqueOrThrow
   */
  export type WallpapersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * Filter, which Wallpapers to fetch.
     */
    where: WallpapersWhereUniqueInput
  }

  /**
   * Wallpapers findFirst
   */
  export type WallpapersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * Filter, which Wallpapers to fetch.
     */
    where?: WallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallpapers to fetch.
     */
    orderBy?: WallpapersOrderByWithRelationInput | WallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallpapers.
     */
    cursor?: WallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallpapers.
     */
    distinct?: WallpapersScalarFieldEnum | WallpapersScalarFieldEnum[]
  }

  /**
   * Wallpapers findFirstOrThrow
   */
  export type WallpapersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * Filter, which Wallpapers to fetch.
     */
    where?: WallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallpapers to fetch.
     */
    orderBy?: WallpapersOrderByWithRelationInput | WallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallpapers.
     */
    cursor?: WallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallpapers.
     */
    distinct?: WallpapersScalarFieldEnum | WallpapersScalarFieldEnum[]
  }

  /**
   * Wallpapers findMany
   */
  export type WallpapersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * Filter, which Wallpapers to fetch.
     */
    where?: WallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallpapers to fetch.
     */
    orderBy?: WallpapersOrderByWithRelationInput | WallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallpapers.
     */
    cursor?: WallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallpapers.
     */
    skip?: number
    distinct?: WallpapersScalarFieldEnum | WallpapersScalarFieldEnum[]
  }

  /**
   * Wallpapers create
   */
  export type WallpapersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallpapers.
     */
    data: XOR<WallpapersCreateInput, WallpapersUncheckedCreateInput>
  }

  /**
   * Wallpapers createMany
   */
  export type WallpapersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallpapers.
     */
    data: WallpapersCreateManyInput | WallpapersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallpapers createManyAndReturn
   */
  export type WallpapersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * The data used to create many Wallpapers.
     */
    data: WallpapersCreateManyInput | WallpapersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallpapers update
   */
  export type WallpapersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallpapers.
     */
    data: XOR<WallpapersUpdateInput, WallpapersUncheckedUpdateInput>
    /**
     * Choose, which Wallpapers to update.
     */
    where: WallpapersWhereUniqueInput
  }

  /**
   * Wallpapers updateMany
   */
  export type WallpapersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallpapers.
     */
    data: XOR<WallpapersUpdateManyMutationInput, WallpapersUncheckedUpdateManyInput>
    /**
     * Filter which Wallpapers to update
     */
    where?: WallpapersWhereInput
    /**
     * Limit how many Wallpapers to update.
     */
    limit?: number
  }

  /**
   * Wallpapers updateManyAndReturn
   */
  export type WallpapersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * The data used to update Wallpapers.
     */
    data: XOR<WallpapersUpdateManyMutationInput, WallpapersUncheckedUpdateManyInput>
    /**
     * Filter which Wallpapers to update
     */
    where?: WallpapersWhereInput
    /**
     * Limit how many Wallpapers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallpapers upsert
   */
  export type WallpapersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallpapers to update in case it exists.
     */
    where: WallpapersWhereUniqueInput
    /**
     * In case the Wallpapers found by the `where` argument doesn't exist, create a new Wallpapers with this data.
     */
    create: XOR<WallpapersCreateInput, WallpapersUncheckedCreateInput>
    /**
     * In case the Wallpapers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WallpapersUpdateInput, WallpapersUncheckedUpdateInput>
  }

  /**
   * Wallpapers delete
   */
  export type WallpapersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    /**
     * Filter which Wallpapers to delete.
     */
    where: WallpapersWhereUniqueInput
  }

  /**
   * Wallpapers deleteMany
   */
  export type WallpapersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallpapers to delete
     */
    where?: WallpapersWhereInput
    /**
     * Limit how many Wallpapers to delete.
     */
    limit?: number
  }

  /**
   * Wallpapers.likedWallpapers
   */
  export type Wallpapers$likedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    where?: LikedWallpapersWhereInput
    orderBy?: LikedWallpapersOrderByWithRelationInput | LikedWallpapersOrderByWithRelationInput[]
    cursor?: LikedWallpapersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikedWallpapersScalarFieldEnum | LikedWallpapersScalarFieldEnum[]
  }

  /**
   * Wallpapers.bookmarkedWallpapers
   */
  export type Wallpapers$bookmarkedWallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    where?: BookmarkedWallpapersWhereInput
    orderBy?: BookmarkedWallpapersOrderByWithRelationInput | BookmarkedWallpapersOrderByWithRelationInput[]
    cursor?: BookmarkedWallpapersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkedWallpapersScalarFieldEnum | BookmarkedWallpapersScalarFieldEnum[]
  }

  /**
   * Wallpapers without action
   */
  export type WallpapersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
  }


  /**
   * Model LikedWallpapers
   */

  export type AggregateLikedWallpapers = {
    _count: LikedWallpapersCountAggregateOutputType | null
    _min: LikedWallpapersMinAggregateOutputType | null
    _max: LikedWallpapersMaxAggregateOutputType | null
  }

  export type LikedWallpapersMinAggregateOutputType = {
    id: string | null
    userId: string | null
    wallpaperId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedWallpapersMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    wallpaperId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikedWallpapersCountAggregateOutputType = {
    id: number
    userId: number
    wallpaperId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikedWallpapersMinAggregateInputType = {
    id?: true
    userId?: true
    wallpaperId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedWallpapersMaxAggregateInputType = {
    id?: true
    userId?: true
    wallpaperId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikedWallpapersCountAggregateInputType = {
    id?: true
    userId?: true
    wallpaperId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikedWallpapersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedWallpapers to aggregate.
     */
    where?: LikedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedWallpapers to fetch.
     */
    orderBy?: LikedWallpapersOrderByWithRelationInput | LikedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikedWallpapers
    **/
    _count?: true | LikedWallpapersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikedWallpapersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikedWallpapersMaxAggregateInputType
  }

  export type GetLikedWallpapersAggregateType<T extends LikedWallpapersAggregateArgs> = {
        [P in keyof T & keyof AggregateLikedWallpapers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikedWallpapers[P]>
      : GetScalarType<T[P], AggregateLikedWallpapers[P]>
  }




  export type LikedWallpapersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikedWallpapersWhereInput
    orderBy?: LikedWallpapersOrderByWithAggregationInput | LikedWallpapersOrderByWithAggregationInput[]
    by: LikedWallpapersScalarFieldEnum[] | LikedWallpapersScalarFieldEnum
    having?: LikedWallpapersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikedWallpapersCountAggregateInputType | true
    _min?: LikedWallpapersMinAggregateInputType
    _max?: LikedWallpapersMaxAggregateInputType
  }

  export type LikedWallpapersGroupByOutputType = {
    id: string
    userId: string
    wallpaperId: string
    createdAt: Date
    updatedAt: Date
    _count: LikedWallpapersCountAggregateOutputType | null
    _min: LikedWallpapersMinAggregateOutputType | null
    _max: LikedWallpapersMaxAggregateOutputType | null
  }

  type GetLikedWallpapersGroupByPayload<T extends LikedWallpapersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikedWallpapersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikedWallpapersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikedWallpapersGroupByOutputType[P]>
            : GetScalarType<T[P], LikedWallpapersGroupByOutputType[P]>
        }
      >
    >


  export type LikedWallpapersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedWallpapers"]>

  export type LikedWallpapersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedWallpapers"]>

  export type LikedWallpapersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likedWallpapers"]>

  export type LikedWallpapersSelectScalar = {
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikedWallpapersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wallpaperId" | "createdAt" | "updatedAt", ExtArgs["result"]["likedWallpapers"]>
  export type LikedWallpapersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }
  export type LikedWallpapersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }
  export type LikedWallpapersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }

  export type $LikedWallpapersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikedWallpapers"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      wallpapers: Prisma.$WallpapersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      wallpaperId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["likedWallpapers"]>
    composites: {}
  }

  type LikedWallpapersGetPayload<S extends boolean | null | undefined | LikedWallpapersDefaultArgs> = $Result.GetResult<Prisma.$LikedWallpapersPayload, S>

  type LikedWallpapersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikedWallpapersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikedWallpapersCountAggregateInputType | true
    }

  export interface LikedWallpapersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikedWallpapers'], meta: { name: 'LikedWallpapers' } }
    /**
     * Find zero or one LikedWallpapers that matches the filter.
     * @param {LikedWallpapersFindUniqueArgs} args - Arguments to find a LikedWallpapers
     * @example
     * // Get one LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikedWallpapersFindUniqueArgs>(args: SelectSubset<T, LikedWallpapersFindUniqueArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one LikedWallpapers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikedWallpapersFindUniqueOrThrowArgs} args - Arguments to find a LikedWallpapers
     * @example
     * // Get one LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikedWallpapersFindUniqueOrThrowArgs>(args: SelectSubset<T, LikedWallpapersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first LikedWallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersFindFirstArgs} args - Arguments to find a LikedWallpapers
     * @example
     * // Get one LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikedWallpapersFindFirstArgs>(args?: SelectSubset<T, LikedWallpapersFindFirstArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first LikedWallpapers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersFindFirstOrThrowArgs} args - Arguments to find a LikedWallpapers
     * @example
     * // Get one LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikedWallpapersFindFirstOrThrowArgs>(args?: SelectSubset<T, LikedWallpapersFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more LikedWallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.findMany()
     * 
     * // Get first 10 LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likedWallpapersWithIdOnly = await prisma.likedWallpapers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikedWallpapersFindManyArgs>(args?: SelectSubset<T, LikedWallpapersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a LikedWallpapers.
     * @param {LikedWallpapersCreateArgs} args - Arguments to create a LikedWallpapers.
     * @example
     * // Create one LikedWallpapers
     * const LikedWallpapers = await prisma.likedWallpapers.create({
     *   data: {
     *     // ... data to create a LikedWallpapers
     *   }
     * })
     * 
     */
    create<T extends LikedWallpapersCreateArgs>(args: SelectSubset<T, LikedWallpapersCreateArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many LikedWallpapers.
     * @param {LikedWallpapersCreateManyArgs} args - Arguments to create many LikedWallpapers.
     * @example
     * // Create many LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikedWallpapersCreateManyArgs>(args?: SelectSubset<T, LikedWallpapersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LikedWallpapers and returns the data saved in the database.
     * @param {LikedWallpapersCreateManyAndReturnArgs} args - Arguments to create many LikedWallpapers.
     * @example
     * // Create many LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LikedWallpapers and only return the `id`
     * const likedWallpapersWithIdOnly = await prisma.likedWallpapers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikedWallpapersCreateManyAndReturnArgs>(args?: SelectSubset<T, LikedWallpapersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a LikedWallpapers.
     * @param {LikedWallpapersDeleteArgs} args - Arguments to delete one LikedWallpapers.
     * @example
     * // Delete one LikedWallpapers
     * const LikedWallpapers = await prisma.likedWallpapers.delete({
     *   where: {
     *     // ... filter to delete one LikedWallpapers
     *   }
     * })
     * 
     */
    delete<T extends LikedWallpapersDeleteArgs>(args: SelectSubset<T, LikedWallpapersDeleteArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one LikedWallpapers.
     * @param {LikedWallpapersUpdateArgs} args - Arguments to update one LikedWallpapers.
     * @example
     * // Update one LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikedWallpapersUpdateArgs>(args: SelectSubset<T, LikedWallpapersUpdateArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more LikedWallpapers.
     * @param {LikedWallpapersDeleteManyArgs} args - Arguments to filter LikedWallpapers to delete.
     * @example
     * // Delete a few LikedWallpapers
     * const { count } = await prisma.likedWallpapers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikedWallpapersDeleteManyArgs>(args?: SelectSubset<T, LikedWallpapersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikedWallpapersUpdateManyArgs>(args: SelectSubset<T, LikedWallpapersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikedWallpapers and returns the data updated in the database.
     * @param {LikedWallpapersUpdateManyAndReturnArgs} args - Arguments to update many LikedWallpapers.
     * @example
     * // Update many LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LikedWallpapers and only return the `id`
     * const likedWallpapersWithIdOnly = await prisma.likedWallpapers.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikedWallpapersUpdateManyAndReturnArgs>(args: SelectSubset<T, LikedWallpapersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one LikedWallpapers.
     * @param {LikedWallpapersUpsertArgs} args - Arguments to update or create a LikedWallpapers.
     * @example
     * // Update or create a LikedWallpapers
     * const likedWallpapers = await prisma.likedWallpapers.upsert({
     *   create: {
     *     // ... data to create a LikedWallpapers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikedWallpapers we want to update
     *   }
     * })
     */
    upsert<T extends LikedWallpapersUpsertArgs>(args: SelectSubset<T, LikedWallpapersUpsertArgs<ExtArgs>>): Prisma__LikedWallpapersClient<$Result.GetResult<Prisma.$LikedWallpapersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of LikedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersCountArgs} args - Arguments to filter LikedWallpapers to count.
     * @example
     * // Count the number of LikedWallpapers
     * const count = await prisma.likedWallpapers.count({
     *   where: {
     *     // ... the filter for the LikedWallpapers we want to count
     *   }
     * })
    **/
    count<T extends LikedWallpapersCountArgs>(
      args?: Subset<T, LikedWallpapersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikedWallpapersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikedWallpapersAggregateArgs>(args: Subset<T, LikedWallpapersAggregateArgs>): Prisma.PrismaPromise<GetLikedWallpapersAggregateType<T>>

    /**
     * Group by LikedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikedWallpapersGroupByArgs} args - Group by arguments.
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
      T extends LikedWallpapersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikedWallpapersGroupByArgs['orderBy'] }
        : { orderBy?: LikedWallpapersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikedWallpapersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikedWallpapersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikedWallpapers model
   */
  readonly fields: LikedWallpapersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikedWallpapers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikedWallpapersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    wallpapers<T extends WallpapersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WallpapersDefaultArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the LikedWallpapers model
   */ 
  interface LikedWallpapersFieldRefs {
    readonly id: FieldRef<"LikedWallpapers", 'String'>
    readonly userId: FieldRef<"LikedWallpapers", 'String'>
    readonly wallpaperId: FieldRef<"LikedWallpapers", 'String'>
    readonly createdAt: FieldRef<"LikedWallpapers", 'DateTime'>
    readonly updatedAt: FieldRef<"LikedWallpapers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LikedWallpapers findUnique
   */
  export type LikedWallpapersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which LikedWallpapers to fetch.
     */
    where: LikedWallpapersWhereUniqueInput
  }

  /**
   * LikedWallpapers findUniqueOrThrow
   */
  export type LikedWallpapersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which LikedWallpapers to fetch.
     */
    where: LikedWallpapersWhereUniqueInput
  }

  /**
   * LikedWallpapers findFirst
   */
  export type LikedWallpapersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which LikedWallpapers to fetch.
     */
    where?: LikedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedWallpapers to fetch.
     */
    orderBy?: LikedWallpapersOrderByWithRelationInput | LikedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedWallpapers.
     */
    cursor?: LikedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedWallpapers.
     */
    distinct?: LikedWallpapersScalarFieldEnum | LikedWallpapersScalarFieldEnum[]
  }

  /**
   * LikedWallpapers findFirstOrThrow
   */
  export type LikedWallpapersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which LikedWallpapers to fetch.
     */
    where?: LikedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedWallpapers to fetch.
     */
    orderBy?: LikedWallpapersOrderByWithRelationInput | LikedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikedWallpapers.
     */
    cursor?: LikedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikedWallpapers.
     */
    distinct?: LikedWallpapersScalarFieldEnum | LikedWallpapersScalarFieldEnum[]
  }

  /**
   * LikedWallpapers findMany
   */
  export type LikedWallpapersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which LikedWallpapers to fetch.
     */
    where?: LikedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikedWallpapers to fetch.
     */
    orderBy?: LikedWallpapersOrderByWithRelationInput | LikedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikedWallpapers.
     */
    cursor?: LikedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikedWallpapers.
     */
    skip?: number
    distinct?: LikedWallpapersScalarFieldEnum | LikedWallpapersScalarFieldEnum[]
  }

  /**
   * LikedWallpapers create
   */
  export type LikedWallpapersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * The data needed to create a LikedWallpapers.
     */
    data: XOR<LikedWallpapersCreateInput, LikedWallpapersUncheckedCreateInput>
  }

  /**
   * LikedWallpapers createMany
   */
  export type LikedWallpapersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikedWallpapers.
     */
    data: LikedWallpapersCreateManyInput | LikedWallpapersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikedWallpapers createManyAndReturn
   */
  export type LikedWallpapersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * The data used to create many LikedWallpapers.
     */
    data: LikedWallpapersCreateManyInput | LikedWallpapersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedWallpapers update
   */
  export type LikedWallpapersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * The data needed to update a LikedWallpapers.
     */
    data: XOR<LikedWallpapersUpdateInput, LikedWallpapersUncheckedUpdateInput>
    /**
     * Choose, which LikedWallpapers to update.
     */
    where: LikedWallpapersWhereUniqueInput
  }

  /**
   * LikedWallpapers updateMany
   */
  export type LikedWallpapersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikedWallpapers.
     */
    data: XOR<LikedWallpapersUpdateManyMutationInput, LikedWallpapersUncheckedUpdateManyInput>
    /**
     * Filter which LikedWallpapers to update
     */
    where?: LikedWallpapersWhereInput
    /**
     * Limit how many LikedWallpapers to update.
     */
    limit?: number
  }

  /**
   * LikedWallpapers updateManyAndReturn
   */
  export type LikedWallpapersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * The data used to update LikedWallpapers.
     */
    data: XOR<LikedWallpapersUpdateManyMutationInput, LikedWallpapersUncheckedUpdateManyInput>
    /**
     * Filter which LikedWallpapers to update
     */
    where?: LikedWallpapersWhereInput
    /**
     * Limit how many LikedWallpapers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LikedWallpapers upsert
   */
  export type LikedWallpapersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * The filter to search for the LikedWallpapers to update in case it exists.
     */
    where: LikedWallpapersWhereUniqueInput
    /**
     * In case the LikedWallpapers found by the `where` argument doesn't exist, create a new LikedWallpapers with this data.
     */
    create: XOR<LikedWallpapersCreateInput, LikedWallpapersUncheckedCreateInput>
    /**
     * In case the LikedWallpapers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikedWallpapersUpdateInput, LikedWallpapersUncheckedUpdateInput>
  }

  /**
   * LikedWallpapers delete
   */
  export type LikedWallpapersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
    /**
     * Filter which LikedWallpapers to delete.
     */
    where: LikedWallpapersWhereUniqueInput
  }

  /**
   * LikedWallpapers deleteMany
   */
  export type LikedWallpapersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikedWallpapers to delete
     */
    where?: LikedWallpapersWhereInput
    /**
     * Limit how many LikedWallpapers to delete.
     */
    limit?: number
  }

  /**
   * LikedWallpapers without action
   */
  export type LikedWallpapersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikedWallpapers
     */
    select?: LikedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LikedWallpapers
     */
    omit?: LikedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikedWallpapersInclude<ExtArgs> | null
  }


  /**
   * Model BookmarkedWallpapers
   */

  export type AggregateBookmarkedWallpapers = {
    _count: BookmarkedWallpapersCountAggregateOutputType | null
    _min: BookmarkedWallpapersMinAggregateOutputType | null
    _max: BookmarkedWallpapersMaxAggregateOutputType | null
  }

  export type BookmarkedWallpapersMinAggregateOutputType = {
    id: string | null
    userId: string | null
    wallpaperId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarkedWallpapersMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    wallpaperId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookmarkedWallpapersCountAggregateOutputType = {
    id: number
    userId: number
    wallpaperId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookmarkedWallpapersMinAggregateInputType = {
    id?: true
    userId?: true
    wallpaperId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarkedWallpapersMaxAggregateInputType = {
    id?: true
    userId?: true
    wallpaperId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookmarkedWallpapersCountAggregateInputType = {
    id?: true
    userId?: true
    wallpaperId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookmarkedWallpapersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkedWallpapers to aggregate.
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedWallpapers to fetch.
     */
    orderBy?: BookmarkedWallpapersOrderByWithRelationInput | BookmarkedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookmarkedWallpapers
    **/
    _count?: true | BookmarkedWallpapersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkedWallpapersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkedWallpapersMaxAggregateInputType
  }

  export type GetBookmarkedWallpapersAggregateType<T extends BookmarkedWallpapersAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmarkedWallpapers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmarkedWallpapers[P]>
      : GetScalarType<T[P], AggregateBookmarkedWallpapers[P]>
  }




  export type BookmarkedWallpapersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkedWallpapersWhereInput
    orderBy?: BookmarkedWallpapersOrderByWithAggregationInput | BookmarkedWallpapersOrderByWithAggregationInput[]
    by: BookmarkedWallpapersScalarFieldEnum[] | BookmarkedWallpapersScalarFieldEnum
    having?: BookmarkedWallpapersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkedWallpapersCountAggregateInputType | true
    _min?: BookmarkedWallpapersMinAggregateInputType
    _max?: BookmarkedWallpapersMaxAggregateInputType
  }

  export type BookmarkedWallpapersGroupByOutputType = {
    id: string
    userId: string
    wallpaperId: string
    createdAt: Date
    updatedAt: Date
    _count: BookmarkedWallpapersCountAggregateOutputType | null
    _min: BookmarkedWallpapersMinAggregateOutputType | null
    _max: BookmarkedWallpapersMaxAggregateOutputType | null
  }

  type GetBookmarkedWallpapersGroupByPayload<T extends BookmarkedWallpapersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkedWallpapersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkedWallpapersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkedWallpapersGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkedWallpapersGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkedWallpapersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedWallpapers"]>

  export type BookmarkedWallpapersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedWallpapers"]>

  export type BookmarkedWallpapersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookmarkedWallpapers"]>

  export type BookmarkedWallpapersSelectScalar = {
    id?: boolean
    userId?: boolean
    wallpaperId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookmarkedWallpapersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "wallpaperId" | "createdAt" | "updatedAt", ExtArgs["result"]["bookmarkedWallpapers"]>
  export type BookmarkedWallpapersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }
  export type BookmarkedWallpapersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }
  export type BookmarkedWallpapersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    wallpapers?: boolean | WallpapersDefaultArgs<ExtArgs>
  }

  export type $BookmarkedWallpapersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookmarkedWallpapers"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      wallpapers: Prisma.$WallpapersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      wallpaperId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookmarkedWallpapers"]>
    composites: {}
  }

  type BookmarkedWallpapersGetPayload<S extends boolean | null | undefined | BookmarkedWallpapersDefaultArgs> = $Result.GetResult<Prisma.$BookmarkedWallpapersPayload, S>

  type BookmarkedWallpapersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkedWallpapersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkedWallpapersCountAggregateInputType | true
    }

  export interface BookmarkedWallpapersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookmarkedWallpapers'], meta: { name: 'BookmarkedWallpapers' } }
    /**
     * Find zero or one BookmarkedWallpapers that matches the filter.
     * @param {BookmarkedWallpapersFindUniqueArgs} args - Arguments to find a BookmarkedWallpapers
     * @example
     * // Get one BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkedWallpapersFindUniqueArgs>(args: SelectSubset<T, BookmarkedWallpapersFindUniqueArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one BookmarkedWallpapers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkedWallpapersFindUniqueOrThrowArgs} args - Arguments to find a BookmarkedWallpapers
     * @example
     * // Get one BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkedWallpapersFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkedWallpapersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first BookmarkedWallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersFindFirstArgs} args - Arguments to find a BookmarkedWallpapers
     * @example
     * // Get one BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkedWallpapersFindFirstArgs>(args?: SelectSubset<T, BookmarkedWallpapersFindFirstArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first BookmarkedWallpapers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersFindFirstOrThrowArgs} args - Arguments to find a BookmarkedWallpapers
     * @example
     * // Get one BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkedWallpapersFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkedWallpapersFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more BookmarkedWallpapers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findMany()
     * 
     * // Get first 10 BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkedWallpapersWithIdOnly = await prisma.bookmarkedWallpapers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkedWallpapersFindManyArgs>(args?: SelectSubset<T, BookmarkedWallpapersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a BookmarkedWallpapers.
     * @param {BookmarkedWallpapersCreateArgs} args - Arguments to create a BookmarkedWallpapers.
     * @example
     * // Create one BookmarkedWallpapers
     * const BookmarkedWallpapers = await prisma.bookmarkedWallpapers.create({
     *   data: {
     *     // ... data to create a BookmarkedWallpapers
     *   }
     * })
     * 
     */
    create<T extends BookmarkedWallpapersCreateArgs>(args: SelectSubset<T, BookmarkedWallpapersCreateArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many BookmarkedWallpapers.
     * @param {BookmarkedWallpapersCreateManyArgs} args - Arguments to create many BookmarkedWallpapers.
     * @example
     * // Create many BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkedWallpapersCreateManyArgs>(args?: SelectSubset<T, BookmarkedWallpapersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookmarkedWallpapers and returns the data saved in the database.
     * @param {BookmarkedWallpapersCreateManyAndReturnArgs} args - Arguments to create many BookmarkedWallpapers.
     * @example
     * // Create many BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookmarkedWallpapers and only return the `id`
     * const bookmarkedWallpapersWithIdOnly = await prisma.bookmarkedWallpapers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkedWallpapersCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkedWallpapersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a BookmarkedWallpapers.
     * @param {BookmarkedWallpapersDeleteArgs} args - Arguments to delete one BookmarkedWallpapers.
     * @example
     * // Delete one BookmarkedWallpapers
     * const BookmarkedWallpapers = await prisma.bookmarkedWallpapers.delete({
     *   where: {
     *     // ... filter to delete one BookmarkedWallpapers
     *   }
     * })
     * 
     */
    delete<T extends BookmarkedWallpapersDeleteArgs>(args: SelectSubset<T, BookmarkedWallpapersDeleteArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one BookmarkedWallpapers.
     * @param {BookmarkedWallpapersUpdateArgs} args - Arguments to update one BookmarkedWallpapers.
     * @example
     * // Update one BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkedWallpapersUpdateArgs>(args: SelectSubset<T, BookmarkedWallpapersUpdateArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more BookmarkedWallpapers.
     * @param {BookmarkedWallpapersDeleteManyArgs} args - Arguments to filter BookmarkedWallpapers to delete.
     * @example
     * // Delete a few BookmarkedWallpapers
     * const { count } = await prisma.bookmarkedWallpapers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkedWallpapersDeleteManyArgs>(args?: SelectSubset<T, BookmarkedWallpapersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkedWallpapersUpdateManyArgs>(args: SelectSubset<T, BookmarkedWallpapersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookmarkedWallpapers and returns the data updated in the database.
     * @param {BookmarkedWallpapersUpdateManyAndReturnArgs} args - Arguments to update many BookmarkedWallpapers.
     * @example
     * // Update many BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookmarkedWallpapers and only return the `id`
     * const bookmarkedWallpapersWithIdOnly = await prisma.bookmarkedWallpapers.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarkedWallpapersUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkedWallpapersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one BookmarkedWallpapers.
     * @param {BookmarkedWallpapersUpsertArgs} args - Arguments to update or create a BookmarkedWallpapers.
     * @example
     * // Update or create a BookmarkedWallpapers
     * const bookmarkedWallpapers = await prisma.bookmarkedWallpapers.upsert({
     *   create: {
     *     // ... data to create a BookmarkedWallpapers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookmarkedWallpapers we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkedWallpapersUpsertArgs>(args: SelectSubset<T, BookmarkedWallpapersUpsertArgs<ExtArgs>>): Prisma__BookmarkedWallpapersClient<$Result.GetResult<Prisma.$BookmarkedWallpapersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of BookmarkedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersCountArgs} args - Arguments to filter BookmarkedWallpapers to count.
     * @example
     * // Count the number of BookmarkedWallpapers
     * const count = await prisma.bookmarkedWallpapers.count({
     *   where: {
     *     // ... the filter for the BookmarkedWallpapers we want to count
     *   }
     * })
    **/
    count<T extends BookmarkedWallpapersCountArgs>(
      args?: Subset<T, BookmarkedWallpapersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkedWallpapersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookmarkedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkedWallpapersAggregateArgs>(args: Subset<T, BookmarkedWallpapersAggregateArgs>): Prisma.PrismaPromise<GetBookmarkedWallpapersAggregateType<T>>

    /**
     * Group by BookmarkedWallpapers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkedWallpapersGroupByArgs} args - Group by arguments.
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
      T extends BookmarkedWallpapersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkedWallpapersGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkedWallpapersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkedWallpapersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkedWallpapersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookmarkedWallpapers model
   */
  readonly fields: BookmarkedWallpapersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookmarkedWallpapers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkedWallpapersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    wallpapers<T extends WallpapersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WallpapersDefaultArgs<ExtArgs>>): Prisma__WallpapersClient<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the BookmarkedWallpapers model
   */ 
  interface BookmarkedWallpapersFieldRefs {
    readonly id: FieldRef<"BookmarkedWallpapers", 'String'>
    readonly userId: FieldRef<"BookmarkedWallpapers", 'String'>
    readonly wallpaperId: FieldRef<"BookmarkedWallpapers", 'String'>
    readonly createdAt: FieldRef<"BookmarkedWallpapers", 'DateTime'>
    readonly updatedAt: FieldRef<"BookmarkedWallpapers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookmarkedWallpapers findUnique
   */
  export type BookmarkedWallpapersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedWallpapers to fetch.
     */
    where: BookmarkedWallpapersWhereUniqueInput
  }

  /**
   * BookmarkedWallpapers findUniqueOrThrow
   */
  export type BookmarkedWallpapersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedWallpapers to fetch.
     */
    where: BookmarkedWallpapersWhereUniqueInput
  }

  /**
   * BookmarkedWallpapers findFirst
   */
  export type BookmarkedWallpapersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedWallpapers to fetch.
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedWallpapers to fetch.
     */
    orderBy?: BookmarkedWallpapersOrderByWithRelationInput | BookmarkedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkedWallpapers.
     */
    cursor?: BookmarkedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkedWallpapers.
     */
    distinct?: BookmarkedWallpapersScalarFieldEnum | BookmarkedWallpapersScalarFieldEnum[]
  }

  /**
   * BookmarkedWallpapers findFirstOrThrow
   */
  export type BookmarkedWallpapersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedWallpapers to fetch.
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedWallpapers to fetch.
     */
    orderBy?: BookmarkedWallpapersOrderByWithRelationInput | BookmarkedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookmarkedWallpapers.
     */
    cursor?: BookmarkedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedWallpapers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookmarkedWallpapers.
     */
    distinct?: BookmarkedWallpapersScalarFieldEnum | BookmarkedWallpapersScalarFieldEnum[]
  }

  /**
   * BookmarkedWallpapers findMany
   */
  export type BookmarkedWallpapersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * Filter, which BookmarkedWallpapers to fetch.
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookmarkedWallpapers to fetch.
     */
    orderBy?: BookmarkedWallpapersOrderByWithRelationInput | BookmarkedWallpapersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookmarkedWallpapers.
     */
    cursor?: BookmarkedWallpapersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookmarkedWallpapers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookmarkedWallpapers.
     */
    skip?: number
    distinct?: BookmarkedWallpapersScalarFieldEnum | BookmarkedWallpapersScalarFieldEnum[]
  }

  /**
   * BookmarkedWallpapers create
   */
  export type BookmarkedWallpapersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * The data needed to create a BookmarkedWallpapers.
     */
    data: XOR<BookmarkedWallpapersCreateInput, BookmarkedWallpapersUncheckedCreateInput>
  }

  /**
   * BookmarkedWallpapers createMany
   */
  export type BookmarkedWallpapersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookmarkedWallpapers.
     */
    data: BookmarkedWallpapersCreateManyInput | BookmarkedWallpapersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookmarkedWallpapers createManyAndReturn
   */
  export type BookmarkedWallpapersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * The data used to create many BookmarkedWallpapers.
     */
    data: BookmarkedWallpapersCreateManyInput | BookmarkedWallpapersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkedWallpapers update
   */
  export type BookmarkedWallpapersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * The data needed to update a BookmarkedWallpapers.
     */
    data: XOR<BookmarkedWallpapersUpdateInput, BookmarkedWallpapersUncheckedUpdateInput>
    /**
     * Choose, which BookmarkedWallpapers to update.
     */
    where: BookmarkedWallpapersWhereUniqueInput
  }

  /**
   * BookmarkedWallpapers updateMany
   */
  export type BookmarkedWallpapersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookmarkedWallpapers.
     */
    data: XOR<BookmarkedWallpapersUpdateManyMutationInput, BookmarkedWallpapersUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkedWallpapers to update
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * Limit how many BookmarkedWallpapers to update.
     */
    limit?: number
  }

  /**
   * BookmarkedWallpapers updateManyAndReturn
   */
  export type BookmarkedWallpapersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * The data used to update BookmarkedWallpapers.
     */
    data: XOR<BookmarkedWallpapersUpdateManyMutationInput, BookmarkedWallpapersUncheckedUpdateManyInput>
    /**
     * Filter which BookmarkedWallpapers to update
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * Limit how many BookmarkedWallpapers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookmarkedWallpapers upsert
   */
  export type BookmarkedWallpapersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * The filter to search for the BookmarkedWallpapers to update in case it exists.
     */
    where: BookmarkedWallpapersWhereUniqueInput
    /**
     * In case the BookmarkedWallpapers found by the `where` argument doesn't exist, create a new BookmarkedWallpapers with this data.
     */
    create: XOR<BookmarkedWallpapersCreateInput, BookmarkedWallpapersUncheckedCreateInput>
    /**
     * In case the BookmarkedWallpapers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkedWallpapersUpdateInput, BookmarkedWallpapersUncheckedUpdateInput>
  }

  /**
   * BookmarkedWallpapers delete
   */
  export type BookmarkedWallpapersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
    /**
     * Filter which BookmarkedWallpapers to delete.
     */
    where: BookmarkedWallpapersWhereUniqueInput
  }

  /**
   * BookmarkedWallpapers deleteMany
   */
  export type BookmarkedWallpapersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookmarkedWallpapers to delete
     */
    where?: BookmarkedWallpapersWhereInput
    /**
     * Limit how many BookmarkedWallpapers to delete.
     */
    limit?: number
  }

  /**
   * BookmarkedWallpapers without action
   */
  export type BookmarkedWallpapersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookmarkedWallpapers
     */
    select?: BookmarkedWallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookmarkedWallpapers
     */
    omit?: BookmarkedWallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkedWallpapersInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallpapers?: boolean | Categories$wallpapersArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallpapers?: boolean | Categories$wallpapersArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      wallpapers: Prisma.$WallpapersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallpapers<T extends Categories$wallpapersArgs<ExtArgs> = {}>(args?: Subset<T, Categories$wallpapersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WallpapersPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Categories model
   */ 
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.wallpapers
   */
  export type Categories$wallpapersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallpapers
     */
    select?: WallpapersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallpapers
     */
    omit?: WallpapersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WallpapersInclude<ExtArgs> | null
    where?: WallpapersWhereInput
    orderBy?: WallpapersOrderByWithRelationInput | WallpapersOrderByWithRelationInput[]
    cursor?: WallpapersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WallpapersScalarFieldEnum | WallpapersScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
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


  export const AdminsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    email: 'email',
    mobileNo: 'mobileNo',
    gender: 'gender',
    country: 'country',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const WallpapersScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageUrl: 'imageUrl',
    likes: 'likes',
    platform: 'platform',
    categoriesId: 'categoriesId',
    artistsId: 'artistsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WallpapersScalarFieldEnum = (typeof WallpapersScalarFieldEnum)[keyof typeof WallpapersScalarFieldEnum]


  export const LikedWallpapersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wallpaperId: 'wallpaperId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikedWallpapersScalarFieldEnum = (typeof LikedWallpapersScalarFieldEnum)[keyof typeof LikedWallpapersScalarFieldEnum]


  export const BookmarkedWallpapersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    wallpaperId: 'wallpaperId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookmarkedWallpapersScalarFieldEnum = (typeof BookmarkedWallpapersScalarFieldEnum)[keyof typeof BookmarkedWallpapersScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'Platform[]'
   */
  export type ListEnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform[]'>
    


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


  export type AdminsWhereInput = {
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    id?: StringFilter<"Admins"> | string
    name?: StringNullableFilter<"Admins"> | string | null
    email?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    createdAt?: DateTimeFilter<"Admins"> | Date | string
    updatedAt?: DateTimeFilter<"Admins"> | Date | string
  }

  export type AdminsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    name?: StringNullableFilter<"Admins"> | string | null
    password?: StringFilter<"Admins"> | string
    createdAt?: DateTimeFilter<"Admins"> | Date | string
    updatedAt?: DateTimeFilter<"Admins"> | Date | string
  }, "id" | "email">

  export type AdminsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminsCountOrderByAggregateInput
    _max?: AdminsMaxOrderByAggregateInput
    _min?: AdminsMinOrderByAggregateInput
  }

  export type AdminsScalarWhereWithAggregatesInput = {
    AND?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    OR?: AdminsScalarWhereWithAggregatesInput[]
    NOT?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admins"> | string
    name?: StringNullableWithAggregatesFilter<"Admins"> | string | null
    email?: StringWithAggregatesFilter<"Admins"> | string
    password?: StringWithAggregatesFilter<"Admins"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admins"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admins"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringNullableFilter<"Users"> | string | null
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    likedWallpapers?: LikedWallpapersListRelationFilter
    bookmarkedWallpapers?: BookmarkedWallpapersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likedWallpapers?: LikedWallpapersOrderByRelationAggregateInput
    bookmarkedWallpapers?: BookmarkedWallpapersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringNullableFilter<"Users"> | string | null
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    likedWallpapers?: LikedWallpapersListRelationFilter
    bookmarkedWallpapers?: BookmarkedWallpapersListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    id?: StringFilter<"Artists"> | string
    clerkId?: StringFilter<"Artists"> | string
    name?: StringNullableFilter<"Artists"> | string | null
    email?: StringFilter<"Artists"> | string
    mobileNo?: StringNullableFilter<"Artists"> | string | null
    gender?: EnumGenderNullableFilter<"Artists"> | $Enums.Gender | null
    country?: StringNullableFilter<"Artists"> | string | null
    isVerified?: BoolFilter<"Artists"> | boolean
    createdAt?: DateTimeFilter<"Artists"> | Date | string
    updatedAt?: DateTimeFilter<"Artists"> | Date | string
    wallpapers?: WallpapersListRelationFilter
  }

  export type ArtistsOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    mobileNo?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallpapers?: WallpapersOrderByRelationAggregateInput
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    mobileNo?: string
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    name?: StringNullableFilter<"Artists"> | string | null
    gender?: EnumGenderNullableFilter<"Artists"> | $Enums.Gender | null
    country?: StringNullableFilter<"Artists"> | string | null
    isVerified?: BoolFilter<"Artists"> | boolean
    createdAt?: DateTimeFilter<"Artists"> | Date | string
    updatedAt?: DateTimeFilter<"Artists"> | Date | string
    wallpapers?: WallpapersListRelationFilter
  }, "id" | "clerkId" | "email" | "mobileNo">

  export type ArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    mobileNo?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArtistsCountOrderByAggregateInput
    _max?: ArtistsMaxOrderByAggregateInput
    _min?: ArtistsMinOrderByAggregateInput
  }

  export type ArtistsScalarWhereWithAggregatesInput = {
    AND?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    OR?: ArtistsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artists"> | string
    clerkId?: StringWithAggregatesFilter<"Artists"> | string
    name?: StringNullableWithAggregatesFilter<"Artists"> | string | null
    email?: StringWithAggregatesFilter<"Artists"> | string
    mobileNo?: StringNullableWithAggregatesFilter<"Artists"> | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"Artists"> | $Enums.Gender | null
    country?: StringNullableWithAggregatesFilter<"Artists"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Artists"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Artists"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Artists"> | Date | string
  }

  export type WallpapersWhereInput = {
    AND?: WallpapersWhereInput | WallpapersWhereInput[]
    OR?: WallpapersWhereInput[]
    NOT?: WallpapersWhereInput | WallpapersWhereInput[]
    id?: StringFilter<"Wallpapers"> | string
    title?: StringNullableFilter<"Wallpapers"> | string | null
    imageUrl?: StringNullableFilter<"Wallpapers"> | string | null
    likes?: IntFilter<"Wallpapers"> | number
    platform?: EnumPlatformNullableFilter<"Wallpapers"> | $Enums.Platform | null
    categoriesId?: StringFilter<"Wallpapers"> | string
    artistsId?: StringFilter<"Wallpapers"> | string
    createdAt?: DateTimeFilter<"Wallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"Wallpapers"> | Date | string
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    artists?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
    likedWallpapers?: LikedWallpapersListRelationFilter
    bookmarkedWallpapers?: BookmarkedWallpapersListRelationFilter
  }

  export type WallpapersOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    likes?: SortOrder
    platform?: SortOrderInput | SortOrder
    categoriesId?: SortOrder
    artistsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: CategoriesOrderByWithRelationInput
    artists?: ArtistsOrderByWithRelationInput
    likedWallpapers?: LikedWallpapersOrderByRelationAggregateInput
    bookmarkedWallpapers?: BookmarkedWallpapersOrderByRelationAggregateInput
  }

  export type WallpapersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WallpapersWhereInput | WallpapersWhereInput[]
    OR?: WallpapersWhereInput[]
    NOT?: WallpapersWhereInput | WallpapersWhereInput[]
    title?: StringNullableFilter<"Wallpapers"> | string | null
    imageUrl?: StringNullableFilter<"Wallpapers"> | string | null
    likes?: IntFilter<"Wallpapers"> | number
    platform?: EnumPlatformNullableFilter<"Wallpapers"> | $Enums.Platform | null
    categoriesId?: StringFilter<"Wallpapers"> | string
    artistsId?: StringFilter<"Wallpapers"> | string
    createdAt?: DateTimeFilter<"Wallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"Wallpapers"> | Date | string
    categories?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    artists?: XOR<ArtistsScalarRelationFilter, ArtistsWhereInput>
    likedWallpapers?: LikedWallpapersListRelationFilter
    bookmarkedWallpapers?: BookmarkedWallpapersListRelationFilter
  }, "id">

  export type WallpapersOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    likes?: SortOrder
    platform?: SortOrderInput | SortOrder
    categoriesId?: SortOrder
    artistsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WallpapersCountOrderByAggregateInput
    _avg?: WallpapersAvgOrderByAggregateInput
    _max?: WallpapersMaxOrderByAggregateInput
    _min?: WallpapersMinOrderByAggregateInput
    _sum?: WallpapersSumOrderByAggregateInput
  }

  export type WallpapersScalarWhereWithAggregatesInput = {
    AND?: WallpapersScalarWhereWithAggregatesInput | WallpapersScalarWhereWithAggregatesInput[]
    OR?: WallpapersScalarWhereWithAggregatesInput[]
    NOT?: WallpapersScalarWhereWithAggregatesInput | WallpapersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallpapers"> | string
    title?: StringNullableWithAggregatesFilter<"Wallpapers"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Wallpapers"> | string | null
    likes?: IntWithAggregatesFilter<"Wallpapers"> | number
    platform?: EnumPlatformNullableWithAggregatesFilter<"Wallpapers"> | $Enums.Platform | null
    categoriesId?: StringWithAggregatesFilter<"Wallpapers"> | string
    artistsId?: StringWithAggregatesFilter<"Wallpapers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Wallpapers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallpapers"> | Date | string
  }

  export type LikedWallpapersWhereInput = {
    AND?: LikedWallpapersWhereInput | LikedWallpapersWhereInput[]
    OR?: LikedWallpapersWhereInput[]
    NOT?: LikedWallpapersWhereInput | LikedWallpapersWhereInput[]
    id?: StringFilter<"LikedWallpapers"> | string
    userId?: StringFilter<"LikedWallpapers"> | string
    wallpaperId?: StringFilter<"LikedWallpapers"> | string
    createdAt?: DateTimeFilter<"LikedWallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"LikedWallpapers"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    wallpapers?: XOR<WallpapersScalarRelationFilter, WallpapersWhereInput>
  }

  export type LikedWallpapersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
    wallpapers?: WallpapersOrderByWithRelationInput
  }

  export type LikedWallpapersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LikedWallpapersWhereInput | LikedWallpapersWhereInput[]
    OR?: LikedWallpapersWhereInput[]
    NOT?: LikedWallpapersWhereInput | LikedWallpapersWhereInput[]
    userId?: StringFilter<"LikedWallpapers"> | string
    wallpaperId?: StringFilter<"LikedWallpapers"> | string
    createdAt?: DateTimeFilter<"LikedWallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"LikedWallpapers"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    wallpapers?: XOR<WallpapersScalarRelationFilter, WallpapersWhereInput>
  }, "id">

  export type LikedWallpapersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LikedWallpapersCountOrderByAggregateInput
    _max?: LikedWallpapersMaxOrderByAggregateInput
    _min?: LikedWallpapersMinOrderByAggregateInput
  }

  export type LikedWallpapersScalarWhereWithAggregatesInput = {
    AND?: LikedWallpapersScalarWhereWithAggregatesInput | LikedWallpapersScalarWhereWithAggregatesInput[]
    OR?: LikedWallpapersScalarWhereWithAggregatesInput[]
    NOT?: LikedWallpapersScalarWhereWithAggregatesInput | LikedWallpapersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LikedWallpapers"> | string
    userId?: StringWithAggregatesFilter<"LikedWallpapers"> | string
    wallpaperId?: StringWithAggregatesFilter<"LikedWallpapers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LikedWallpapers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LikedWallpapers"> | Date | string
  }

  export type BookmarkedWallpapersWhereInput = {
    AND?: BookmarkedWallpapersWhereInput | BookmarkedWallpapersWhereInput[]
    OR?: BookmarkedWallpapersWhereInput[]
    NOT?: BookmarkedWallpapersWhereInput | BookmarkedWallpapersWhereInput[]
    id?: StringFilter<"BookmarkedWallpapers"> | string
    userId?: StringFilter<"BookmarkedWallpapers"> | string
    wallpaperId?: StringFilter<"BookmarkedWallpapers"> | string
    createdAt?: DateTimeFilter<"BookmarkedWallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"BookmarkedWallpapers"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    wallpapers?: XOR<WallpapersScalarRelationFilter, WallpapersWhereInput>
  }

  export type BookmarkedWallpapersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
    wallpapers?: WallpapersOrderByWithRelationInput
  }

  export type BookmarkedWallpapersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookmarkedWallpapersWhereInput | BookmarkedWallpapersWhereInput[]
    OR?: BookmarkedWallpapersWhereInput[]
    NOT?: BookmarkedWallpapersWhereInput | BookmarkedWallpapersWhereInput[]
    userId?: StringFilter<"BookmarkedWallpapers"> | string
    wallpaperId?: StringFilter<"BookmarkedWallpapers"> | string
    createdAt?: DateTimeFilter<"BookmarkedWallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"BookmarkedWallpapers"> | Date | string
    users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    wallpapers?: XOR<WallpapersScalarRelationFilter, WallpapersWhereInput>
  }, "id">

  export type BookmarkedWallpapersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookmarkedWallpapersCountOrderByAggregateInput
    _max?: BookmarkedWallpapersMaxOrderByAggregateInput
    _min?: BookmarkedWallpapersMinOrderByAggregateInput
  }

  export type BookmarkedWallpapersScalarWhereWithAggregatesInput = {
    AND?: BookmarkedWallpapersScalarWhereWithAggregatesInput | BookmarkedWallpapersScalarWhereWithAggregatesInput[]
    OR?: BookmarkedWallpapersScalarWhereWithAggregatesInput[]
    NOT?: BookmarkedWallpapersScalarWhereWithAggregatesInput | BookmarkedWallpapersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookmarkedWallpapers"> | string
    userId?: StringWithAggregatesFilter<"BookmarkedWallpapers"> | string
    wallpaperId?: StringWithAggregatesFilter<"BookmarkedWallpapers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BookmarkedWallpapers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookmarkedWallpapers"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    name?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    wallpapers?: WallpapersListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallpapers?: WallpapersOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringNullableFilter<"Categories"> | string | null
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    wallpapers?: WallpapersListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    name?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type AdminsCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminsUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersCreateNestedManyWithoutUsersInput
    bookmarkedWallpapers?: BookmarkedWallpapersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersUncheckedCreateNestedManyWithoutUsersInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUpdateManyWithoutUsersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUncheckedUpdateManyWithoutUsersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistsCreateInput = {
    id?: string
    clerkId: string
    name?: string | null
    email: string
    mobileNo?: string | null
    gender?: $Enums.Gender | null
    country?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallpapers?: WallpapersCreateNestedManyWithoutArtistsInput
  }

  export type ArtistsUncheckedCreateInput = {
    id?: string
    clerkId: string
    name?: string | null
    email: string
    mobileNo?: string | null
    gender?: $Enums.Gender | null
    country?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wallpapers?: WallpapersUncheckedCreateNestedManyWithoutArtistsInput
  }

  export type ArtistsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallpapers?: WallpapersUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallpapers?: WallpapersUncheckedUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistsCreateManyInput = {
    id?: string
    clerkId: string
    name?: string | null
    email: string
    mobileNo?: string | null
    gender?: $Enums.Gender | null
    country?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WallpapersCreateInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutWallpapersInput
    artists: ArtistsCreateNestedOneWithoutWallpapersInput
    likedWallpapers?: LikedWallpapersCreateNestedManyWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersUncheckedCreateInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    categoriesId: string
    artistsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutWallpapersNestedInput
    artists?: ArtistsUpdateOneRequiredWithoutWallpapersNestedInput
    likedWallpapers?: LikedWallpapersUpdateManyWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    categoriesId?: StringFieldUpdateOperationsInput | string
    artistsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersCreateManyInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    categoriesId: string
    artistsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WallpapersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WallpapersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    categoriesId?: StringFieldUpdateOperationsInput | string
    artistsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutLikedWallpapersInput
    wallpapers: WallpapersCreateNestedOneWithoutLikedWallpapersInput
  }

  export type LikedWallpapersUncheckedCreateInput = {
    id?: string
    userId: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedWallpapersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutLikedWallpapersNestedInput
    wallpapers?: WallpapersUpdateOneRequiredWithoutLikedWallpapersNestedInput
  }

  export type LikedWallpapersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersCreateManyInput = {
    id?: string
    userId: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedWallpapersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutBookmarkedWallpapersInput
    wallpapers: WallpapersCreateNestedOneWithoutBookmarkedWallpapersInput
  }

  export type BookmarkedWallpapersUncheckedCreateInput = {
    id?: string
    userId: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkedWallpapersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutBookmarkedWallpapersNestedInput
    wallpapers?: WallpapersUpdateOneRequiredWithoutBookmarkedWallpapersNestedInput
  }

  export type BookmarkedWallpapersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersCreateManyInput = {
    id?: string
    userId: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkedWallpapersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallpapers?: WallpapersCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallpapers?: WallpapersUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallpapers?: WallpapersUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallpapers?: WallpapersUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type LikedWallpapersListRelationFilter = {
    every?: LikedWallpapersWhereInput
    some?: LikedWallpapersWhereInput
    none?: LikedWallpapersWhereInput
  }

  export type BookmarkedWallpapersListRelationFilter = {
    every?: BookmarkedWallpapersWhereInput
    some?: BookmarkedWallpapersWhereInput
    none?: BookmarkedWallpapersWhereInput
  }

  export type LikedWallpapersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkedWallpapersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WallpapersListRelationFilter = {
    every?: WallpapersWhereInput
    some?: WallpapersWhereInput
    none?: WallpapersWhereInput
  }

  export type WallpapersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobileNo?: SortOrder
    gender?: SortOrder
    country?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlatformNullableFilter<$PrismaModel> | $Enums.Platform | null
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type ArtistsScalarRelationFilter = {
    is?: ArtistsWhereInput
    isNot?: ArtistsWhereInput
  }

  export type WallpapersCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    platform?: SortOrder
    categoriesId?: SortOrder
    artistsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WallpapersAvgOrderByAggregateInput = {
    likes?: SortOrder
  }

  export type WallpapersMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    platform?: SortOrder
    categoriesId?: SortOrder
    artistsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WallpapersMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    platform?: SortOrder
    categoriesId?: SortOrder
    artistsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WallpapersSumOrderByAggregateInput = {
    likes?: SortOrder
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

  export type EnumPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.Platform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumPlatformNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type WallpapersScalarRelationFilter = {
    is?: WallpapersWhereInput
    isNot?: WallpapersWhereInput
  }

  export type LikedWallpapersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedWallpapersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikedWallpapersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkedWallpapersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkedWallpapersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookmarkedWallpapersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    wallpaperId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LikedWallpapersCreateNestedManyWithoutUsersInput = {
    create?: XOR<LikedWallpapersCreateWithoutUsersInput, LikedWallpapersUncheckedCreateWithoutUsersInput> | LikedWallpapersCreateWithoutUsersInput[] | LikedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutUsersInput | LikedWallpapersCreateOrConnectWithoutUsersInput[]
    createMany?: LikedWallpapersCreateManyUsersInputEnvelope
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
  }

  export type BookmarkedWallpapersCreateNestedManyWithoutUsersInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutUsersInput, BookmarkedWallpapersUncheckedCreateWithoutUsersInput> | BookmarkedWallpapersCreateWithoutUsersInput[] | BookmarkedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutUsersInput | BookmarkedWallpapersCreateOrConnectWithoutUsersInput[]
    createMany?: BookmarkedWallpapersCreateManyUsersInputEnvelope
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
  }

  export type LikedWallpapersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<LikedWallpapersCreateWithoutUsersInput, LikedWallpapersUncheckedCreateWithoutUsersInput> | LikedWallpapersCreateWithoutUsersInput[] | LikedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutUsersInput | LikedWallpapersCreateOrConnectWithoutUsersInput[]
    createMany?: LikedWallpapersCreateManyUsersInputEnvelope
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
  }

  export type BookmarkedWallpapersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutUsersInput, BookmarkedWallpapersUncheckedCreateWithoutUsersInput> | BookmarkedWallpapersCreateWithoutUsersInput[] | BookmarkedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutUsersInput | BookmarkedWallpapersCreateOrConnectWithoutUsersInput[]
    createMany?: BookmarkedWallpapersCreateManyUsersInputEnvelope
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
  }

  export type LikedWallpapersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LikedWallpapersCreateWithoutUsersInput, LikedWallpapersUncheckedCreateWithoutUsersInput> | LikedWallpapersCreateWithoutUsersInput[] | LikedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutUsersInput | LikedWallpapersCreateOrConnectWithoutUsersInput[]
    upsert?: LikedWallpapersUpsertWithWhereUniqueWithoutUsersInput | LikedWallpapersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: LikedWallpapersCreateManyUsersInputEnvelope
    set?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    disconnect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    delete?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    update?: LikedWallpapersUpdateWithWhereUniqueWithoutUsersInput | LikedWallpapersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LikedWallpapersUpdateManyWithWhereWithoutUsersInput | LikedWallpapersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LikedWallpapersScalarWhereInput | LikedWallpapersScalarWhereInput[]
  }

  export type BookmarkedWallpapersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutUsersInput, BookmarkedWallpapersUncheckedCreateWithoutUsersInput> | BookmarkedWallpapersCreateWithoutUsersInput[] | BookmarkedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutUsersInput | BookmarkedWallpapersCreateOrConnectWithoutUsersInput[]
    upsert?: BookmarkedWallpapersUpsertWithWhereUniqueWithoutUsersInput | BookmarkedWallpapersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: BookmarkedWallpapersCreateManyUsersInputEnvelope
    set?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    disconnect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    delete?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    update?: BookmarkedWallpapersUpdateWithWhereUniqueWithoutUsersInput | BookmarkedWallpapersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: BookmarkedWallpapersUpdateManyWithWhereWithoutUsersInput | BookmarkedWallpapersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: BookmarkedWallpapersScalarWhereInput | BookmarkedWallpapersScalarWhereInput[]
  }

  export type LikedWallpapersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<LikedWallpapersCreateWithoutUsersInput, LikedWallpapersUncheckedCreateWithoutUsersInput> | LikedWallpapersCreateWithoutUsersInput[] | LikedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutUsersInput | LikedWallpapersCreateOrConnectWithoutUsersInput[]
    upsert?: LikedWallpapersUpsertWithWhereUniqueWithoutUsersInput | LikedWallpapersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: LikedWallpapersCreateManyUsersInputEnvelope
    set?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    disconnect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    delete?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    update?: LikedWallpapersUpdateWithWhereUniqueWithoutUsersInput | LikedWallpapersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: LikedWallpapersUpdateManyWithWhereWithoutUsersInput | LikedWallpapersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: LikedWallpapersScalarWhereInput | LikedWallpapersScalarWhereInput[]
  }

  export type BookmarkedWallpapersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutUsersInput, BookmarkedWallpapersUncheckedCreateWithoutUsersInput> | BookmarkedWallpapersCreateWithoutUsersInput[] | BookmarkedWallpapersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutUsersInput | BookmarkedWallpapersCreateOrConnectWithoutUsersInput[]
    upsert?: BookmarkedWallpapersUpsertWithWhereUniqueWithoutUsersInput | BookmarkedWallpapersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: BookmarkedWallpapersCreateManyUsersInputEnvelope
    set?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    disconnect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    delete?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    update?: BookmarkedWallpapersUpdateWithWhereUniqueWithoutUsersInput | BookmarkedWallpapersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: BookmarkedWallpapersUpdateManyWithWhereWithoutUsersInput | BookmarkedWallpapersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: BookmarkedWallpapersScalarWhereInput | BookmarkedWallpapersScalarWhereInput[]
  }

  export type WallpapersCreateNestedManyWithoutArtistsInput = {
    create?: XOR<WallpapersCreateWithoutArtistsInput, WallpapersUncheckedCreateWithoutArtistsInput> | WallpapersCreateWithoutArtistsInput[] | WallpapersUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutArtistsInput | WallpapersCreateOrConnectWithoutArtistsInput[]
    createMany?: WallpapersCreateManyArtistsInputEnvelope
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
  }

  export type WallpapersUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<WallpapersCreateWithoutArtistsInput, WallpapersUncheckedCreateWithoutArtistsInput> | WallpapersCreateWithoutArtistsInput[] | WallpapersUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutArtistsInput | WallpapersCreateOrConnectWithoutArtistsInput[]
    createMany?: WallpapersCreateManyArtistsInputEnvelope
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WallpapersUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<WallpapersCreateWithoutArtistsInput, WallpapersUncheckedCreateWithoutArtistsInput> | WallpapersCreateWithoutArtistsInput[] | WallpapersUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutArtistsInput | WallpapersCreateOrConnectWithoutArtistsInput[]
    upsert?: WallpapersUpsertWithWhereUniqueWithoutArtistsInput | WallpapersUpsertWithWhereUniqueWithoutArtistsInput[]
    createMany?: WallpapersCreateManyArtistsInputEnvelope
    set?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    disconnect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    delete?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    update?: WallpapersUpdateWithWhereUniqueWithoutArtistsInput | WallpapersUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: WallpapersUpdateManyWithWhereWithoutArtistsInput | WallpapersUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: WallpapersScalarWhereInput | WallpapersScalarWhereInput[]
  }

  export type WallpapersUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<WallpapersCreateWithoutArtistsInput, WallpapersUncheckedCreateWithoutArtistsInput> | WallpapersCreateWithoutArtistsInput[] | WallpapersUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutArtistsInput | WallpapersCreateOrConnectWithoutArtistsInput[]
    upsert?: WallpapersUpsertWithWhereUniqueWithoutArtistsInput | WallpapersUpsertWithWhereUniqueWithoutArtistsInput[]
    createMany?: WallpapersCreateManyArtistsInputEnvelope
    set?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    disconnect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    delete?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    update?: WallpapersUpdateWithWhereUniqueWithoutArtistsInput | WallpapersUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: WallpapersUpdateManyWithWhereWithoutArtistsInput | WallpapersUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: WallpapersScalarWhereInput | WallpapersScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutWallpapersInput = {
    create?: XOR<CategoriesCreateWithoutWallpapersInput, CategoriesUncheckedCreateWithoutWallpapersInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutWallpapersInput
    connect?: CategoriesWhereUniqueInput
  }

  export type ArtistsCreateNestedOneWithoutWallpapersInput = {
    create?: XOR<ArtistsCreateWithoutWallpapersInput, ArtistsUncheckedCreateWithoutWallpapersInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutWallpapersInput
    connect?: ArtistsWhereUniqueInput
  }

  export type LikedWallpapersCreateNestedManyWithoutWallpapersInput = {
    create?: XOR<LikedWallpapersCreateWithoutWallpapersInput, LikedWallpapersUncheckedCreateWithoutWallpapersInput> | LikedWallpapersCreateWithoutWallpapersInput[] | LikedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutWallpapersInput | LikedWallpapersCreateOrConnectWithoutWallpapersInput[]
    createMany?: LikedWallpapersCreateManyWallpapersInputEnvelope
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
  }

  export type BookmarkedWallpapersCreateNestedManyWithoutWallpapersInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutWallpapersInput, BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput> | BookmarkedWallpapersCreateWithoutWallpapersInput[] | BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput | BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput[]
    createMany?: BookmarkedWallpapersCreateManyWallpapersInputEnvelope
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
  }

  export type LikedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput = {
    create?: XOR<LikedWallpapersCreateWithoutWallpapersInput, LikedWallpapersUncheckedCreateWithoutWallpapersInput> | LikedWallpapersCreateWithoutWallpapersInput[] | LikedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutWallpapersInput | LikedWallpapersCreateOrConnectWithoutWallpapersInput[]
    createMany?: LikedWallpapersCreateManyWallpapersInputEnvelope
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
  }

  export type BookmarkedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutWallpapersInput, BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput> | BookmarkedWallpapersCreateWithoutWallpapersInput[] | BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput | BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput[]
    createMany?: BookmarkedWallpapersCreateManyWallpapersInputEnvelope
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform | null
  }

  export type CategoriesUpdateOneRequiredWithoutWallpapersNestedInput = {
    create?: XOR<CategoriesCreateWithoutWallpapersInput, CategoriesUncheckedCreateWithoutWallpapersInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutWallpapersInput
    upsert?: CategoriesUpsertWithoutWallpapersInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutWallpapersInput, CategoriesUpdateWithoutWallpapersInput>, CategoriesUncheckedUpdateWithoutWallpapersInput>
  }

  export type ArtistsUpdateOneRequiredWithoutWallpapersNestedInput = {
    create?: XOR<ArtistsCreateWithoutWallpapersInput, ArtistsUncheckedCreateWithoutWallpapersInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutWallpapersInput
    upsert?: ArtistsUpsertWithoutWallpapersInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutWallpapersInput, ArtistsUpdateWithoutWallpapersInput>, ArtistsUncheckedUpdateWithoutWallpapersInput>
  }

  export type LikedWallpapersUpdateManyWithoutWallpapersNestedInput = {
    create?: XOR<LikedWallpapersCreateWithoutWallpapersInput, LikedWallpapersUncheckedCreateWithoutWallpapersInput> | LikedWallpapersCreateWithoutWallpapersInput[] | LikedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutWallpapersInput | LikedWallpapersCreateOrConnectWithoutWallpapersInput[]
    upsert?: LikedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput | LikedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput[]
    createMany?: LikedWallpapersCreateManyWallpapersInputEnvelope
    set?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    disconnect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    delete?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    update?: LikedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput | LikedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput[]
    updateMany?: LikedWallpapersUpdateManyWithWhereWithoutWallpapersInput | LikedWallpapersUpdateManyWithWhereWithoutWallpapersInput[]
    deleteMany?: LikedWallpapersScalarWhereInput | LikedWallpapersScalarWhereInput[]
  }

  export type BookmarkedWallpapersUpdateManyWithoutWallpapersNestedInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutWallpapersInput, BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput> | BookmarkedWallpapersCreateWithoutWallpapersInput[] | BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput | BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput[]
    upsert?: BookmarkedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput | BookmarkedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput[]
    createMany?: BookmarkedWallpapersCreateManyWallpapersInputEnvelope
    set?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    disconnect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    delete?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    update?: BookmarkedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput | BookmarkedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput[]
    updateMany?: BookmarkedWallpapersUpdateManyWithWhereWithoutWallpapersInput | BookmarkedWallpapersUpdateManyWithWhereWithoutWallpapersInput[]
    deleteMany?: BookmarkedWallpapersScalarWhereInput | BookmarkedWallpapersScalarWhereInput[]
  }

  export type LikedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput = {
    create?: XOR<LikedWallpapersCreateWithoutWallpapersInput, LikedWallpapersUncheckedCreateWithoutWallpapersInput> | LikedWallpapersCreateWithoutWallpapersInput[] | LikedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: LikedWallpapersCreateOrConnectWithoutWallpapersInput | LikedWallpapersCreateOrConnectWithoutWallpapersInput[]
    upsert?: LikedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput | LikedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput[]
    createMany?: LikedWallpapersCreateManyWallpapersInputEnvelope
    set?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    disconnect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    delete?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    connect?: LikedWallpapersWhereUniqueInput | LikedWallpapersWhereUniqueInput[]
    update?: LikedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput | LikedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput[]
    updateMany?: LikedWallpapersUpdateManyWithWhereWithoutWallpapersInput | LikedWallpapersUpdateManyWithWhereWithoutWallpapersInput[]
    deleteMany?: LikedWallpapersScalarWhereInput | LikedWallpapersScalarWhereInput[]
  }

  export type BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput = {
    create?: XOR<BookmarkedWallpapersCreateWithoutWallpapersInput, BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput> | BookmarkedWallpapersCreateWithoutWallpapersInput[] | BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput[]
    connectOrCreate?: BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput | BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput[]
    upsert?: BookmarkedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput | BookmarkedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput[]
    createMany?: BookmarkedWallpapersCreateManyWallpapersInputEnvelope
    set?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    disconnect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    delete?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    connect?: BookmarkedWallpapersWhereUniqueInput | BookmarkedWallpapersWhereUniqueInput[]
    update?: BookmarkedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput | BookmarkedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput[]
    updateMany?: BookmarkedWallpapersUpdateManyWithWhereWithoutWallpapersInput | BookmarkedWallpapersUpdateManyWithWhereWithoutWallpapersInput[]
    deleteMany?: BookmarkedWallpapersScalarWhereInput | BookmarkedWallpapersScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutLikedWallpapersInput = {
    create?: XOR<UsersCreateWithoutLikedWallpapersInput, UsersUncheckedCreateWithoutLikedWallpapersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikedWallpapersInput
    connect?: UsersWhereUniqueInput
  }

  export type WallpapersCreateNestedOneWithoutLikedWallpapersInput = {
    create?: XOR<WallpapersCreateWithoutLikedWallpapersInput, WallpapersUncheckedCreateWithoutLikedWallpapersInput>
    connectOrCreate?: WallpapersCreateOrConnectWithoutLikedWallpapersInput
    connect?: WallpapersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutLikedWallpapersNestedInput = {
    create?: XOR<UsersCreateWithoutLikedWallpapersInput, UsersUncheckedCreateWithoutLikedWallpapersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutLikedWallpapersInput
    upsert?: UsersUpsertWithoutLikedWallpapersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutLikedWallpapersInput, UsersUpdateWithoutLikedWallpapersInput>, UsersUncheckedUpdateWithoutLikedWallpapersInput>
  }

  export type WallpapersUpdateOneRequiredWithoutLikedWallpapersNestedInput = {
    create?: XOR<WallpapersCreateWithoutLikedWallpapersInput, WallpapersUncheckedCreateWithoutLikedWallpapersInput>
    connectOrCreate?: WallpapersCreateOrConnectWithoutLikedWallpapersInput
    upsert?: WallpapersUpsertWithoutLikedWallpapersInput
    connect?: WallpapersWhereUniqueInput
    update?: XOR<XOR<WallpapersUpdateToOneWithWhereWithoutLikedWallpapersInput, WallpapersUpdateWithoutLikedWallpapersInput>, WallpapersUncheckedUpdateWithoutLikedWallpapersInput>
  }

  export type UsersCreateNestedOneWithoutBookmarkedWallpapersInput = {
    create?: XOR<UsersCreateWithoutBookmarkedWallpapersInput, UsersUncheckedCreateWithoutBookmarkedWallpapersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookmarkedWallpapersInput
    connect?: UsersWhereUniqueInput
  }

  export type WallpapersCreateNestedOneWithoutBookmarkedWallpapersInput = {
    create?: XOR<WallpapersCreateWithoutBookmarkedWallpapersInput, WallpapersUncheckedCreateWithoutBookmarkedWallpapersInput>
    connectOrCreate?: WallpapersCreateOrConnectWithoutBookmarkedWallpapersInput
    connect?: WallpapersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutBookmarkedWallpapersNestedInput = {
    create?: XOR<UsersCreateWithoutBookmarkedWallpapersInput, UsersUncheckedCreateWithoutBookmarkedWallpapersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookmarkedWallpapersInput
    upsert?: UsersUpsertWithoutBookmarkedWallpapersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookmarkedWallpapersInput, UsersUpdateWithoutBookmarkedWallpapersInput>, UsersUncheckedUpdateWithoutBookmarkedWallpapersInput>
  }

  export type WallpapersUpdateOneRequiredWithoutBookmarkedWallpapersNestedInput = {
    create?: XOR<WallpapersCreateWithoutBookmarkedWallpapersInput, WallpapersUncheckedCreateWithoutBookmarkedWallpapersInput>
    connectOrCreate?: WallpapersCreateOrConnectWithoutBookmarkedWallpapersInput
    upsert?: WallpapersUpsertWithoutBookmarkedWallpapersInput
    connect?: WallpapersWhereUniqueInput
    update?: XOR<XOR<WallpapersUpdateToOneWithWhereWithoutBookmarkedWallpapersInput, WallpapersUpdateWithoutBookmarkedWallpapersInput>, WallpapersUncheckedUpdateWithoutBookmarkedWallpapersInput>
  }

  export type WallpapersCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<WallpapersCreateWithoutCategoriesInput, WallpapersUncheckedCreateWithoutCategoriesInput> | WallpapersCreateWithoutCategoriesInput[] | WallpapersUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutCategoriesInput | WallpapersCreateOrConnectWithoutCategoriesInput[]
    createMany?: WallpapersCreateManyCategoriesInputEnvelope
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
  }

  export type WallpapersUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<WallpapersCreateWithoutCategoriesInput, WallpapersUncheckedCreateWithoutCategoriesInput> | WallpapersCreateWithoutCategoriesInput[] | WallpapersUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutCategoriesInput | WallpapersCreateOrConnectWithoutCategoriesInput[]
    createMany?: WallpapersCreateManyCategoriesInputEnvelope
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
  }

  export type WallpapersUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<WallpapersCreateWithoutCategoriesInput, WallpapersUncheckedCreateWithoutCategoriesInput> | WallpapersCreateWithoutCategoriesInput[] | WallpapersUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutCategoriesInput | WallpapersCreateOrConnectWithoutCategoriesInput[]
    upsert?: WallpapersUpsertWithWhereUniqueWithoutCategoriesInput | WallpapersUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: WallpapersCreateManyCategoriesInputEnvelope
    set?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    disconnect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    delete?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    update?: WallpapersUpdateWithWhereUniqueWithoutCategoriesInput | WallpapersUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: WallpapersUpdateManyWithWhereWithoutCategoriesInput | WallpapersUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: WallpapersScalarWhereInput | WallpapersScalarWhereInput[]
  }

  export type WallpapersUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<WallpapersCreateWithoutCategoriesInput, WallpapersUncheckedCreateWithoutCategoriesInput> | WallpapersCreateWithoutCategoriesInput[] | WallpapersUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: WallpapersCreateOrConnectWithoutCategoriesInput | WallpapersCreateOrConnectWithoutCategoriesInput[]
    upsert?: WallpapersUpsertWithWhereUniqueWithoutCategoriesInput | WallpapersUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: WallpapersCreateManyCategoriesInputEnvelope
    set?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    disconnect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    delete?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    connect?: WallpapersWhereUniqueInput | WallpapersWhereUniqueInput[]
    update?: WallpapersUpdateWithWhereUniqueWithoutCategoriesInput | WallpapersUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: WallpapersUpdateManyWithWhereWithoutCategoriesInput | WallpapersUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: WallpapersScalarWhereInput | WallpapersScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlatformNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlatformNullableFilter<$PrismaModel> | $Enums.Platform | null
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

  export type NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel> | null
    in?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Platform[] | ListEnumPlatformFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPlatformNullableWithAggregatesFilter<$PrismaModel> | $Enums.Platform | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPlatformNullableFilter<$PrismaModel>
    _max?: NestedEnumPlatformNullableFilter<$PrismaModel>
  }

  export type LikedWallpapersCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wallpapers: WallpapersCreateNestedOneWithoutLikedWallpapersInput
  }

  export type LikedWallpapersUncheckedCreateWithoutUsersInput = {
    id?: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedWallpapersCreateOrConnectWithoutUsersInput = {
    where: LikedWallpapersWhereUniqueInput
    create: XOR<LikedWallpapersCreateWithoutUsersInput, LikedWallpapersUncheckedCreateWithoutUsersInput>
  }

  export type LikedWallpapersCreateManyUsersInputEnvelope = {
    data: LikedWallpapersCreateManyUsersInput | LikedWallpapersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkedWallpapersCreateWithoutUsersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    wallpapers: WallpapersCreateNestedOneWithoutBookmarkedWallpapersInput
  }

  export type BookmarkedWallpapersUncheckedCreateWithoutUsersInput = {
    id?: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkedWallpapersCreateOrConnectWithoutUsersInput = {
    where: BookmarkedWallpapersWhereUniqueInput
    create: XOR<BookmarkedWallpapersCreateWithoutUsersInput, BookmarkedWallpapersUncheckedCreateWithoutUsersInput>
  }

  export type BookmarkedWallpapersCreateManyUsersInputEnvelope = {
    data: BookmarkedWallpapersCreateManyUsersInput | BookmarkedWallpapersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type LikedWallpapersUpsertWithWhereUniqueWithoutUsersInput = {
    where: LikedWallpapersWhereUniqueInput
    update: XOR<LikedWallpapersUpdateWithoutUsersInput, LikedWallpapersUncheckedUpdateWithoutUsersInput>
    create: XOR<LikedWallpapersCreateWithoutUsersInput, LikedWallpapersUncheckedCreateWithoutUsersInput>
  }

  export type LikedWallpapersUpdateWithWhereUniqueWithoutUsersInput = {
    where: LikedWallpapersWhereUniqueInput
    data: XOR<LikedWallpapersUpdateWithoutUsersInput, LikedWallpapersUncheckedUpdateWithoutUsersInput>
  }

  export type LikedWallpapersUpdateManyWithWhereWithoutUsersInput = {
    where: LikedWallpapersScalarWhereInput
    data: XOR<LikedWallpapersUpdateManyMutationInput, LikedWallpapersUncheckedUpdateManyWithoutUsersInput>
  }

  export type LikedWallpapersScalarWhereInput = {
    AND?: LikedWallpapersScalarWhereInput | LikedWallpapersScalarWhereInput[]
    OR?: LikedWallpapersScalarWhereInput[]
    NOT?: LikedWallpapersScalarWhereInput | LikedWallpapersScalarWhereInput[]
    id?: StringFilter<"LikedWallpapers"> | string
    userId?: StringFilter<"LikedWallpapers"> | string
    wallpaperId?: StringFilter<"LikedWallpapers"> | string
    createdAt?: DateTimeFilter<"LikedWallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"LikedWallpapers"> | Date | string
  }

  export type BookmarkedWallpapersUpsertWithWhereUniqueWithoutUsersInput = {
    where: BookmarkedWallpapersWhereUniqueInput
    update: XOR<BookmarkedWallpapersUpdateWithoutUsersInput, BookmarkedWallpapersUncheckedUpdateWithoutUsersInput>
    create: XOR<BookmarkedWallpapersCreateWithoutUsersInput, BookmarkedWallpapersUncheckedCreateWithoutUsersInput>
  }

  export type BookmarkedWallpapersUpdateWithWhereUniqueWithoutUsersInput = {
    where: BookmarkedWallpapersWhereUniqueInput
    data: XOR<BookmarkedWallpapersUpdateWithoutUsersInput, BookmarkedWallpapersUncheckedUpdateWithoutUsersInput>
  }

  export type BookmarkedWallpapersUpdateManyWithWhereWithoutUsersInput = {
    where: BookmarkedWallpapersScalarWhereInput
    data: XOR<BookmarkedWallpapersUpdateManyMutationInput, BookmarkedWallpapersUncheckedUpdateManyWithoutUsersInput>
  }

  export type BookmarkedWallpapersScalarWhereInput = {
    AND?: BookmarkedWallpapersScalarWhereInput | BookmarkedWallpapersScalarWhereInput[]
    OR?: BookmarkedWallpapersScalarWhereInput[]
    NOT?: BookmarkedWallpapersScalarWhereInput | BookmarkedWallpapersScalarWhereInput[]
    id?: StringFilter<"BookmarkedWallpapers"> | string
    userId?: StringFilter<"BookmarkedWallpapers"> | string
    wallpaperId?: StringFilter<"BookmarkedWallpapers"> | string
    createdAt?: DateTimeFilter<"BookmarkedWallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"BookmarkedWallpapers"> | Date | string
  }

  export type WallpapersCreateWithoutArtistsInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutWallpapersInput
    likedWallpapers?: LikedWallpapersCreateNestedManyWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersUncheckedCreateWithoutArtistsInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    categoriesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersCreateOrConnectWithoutArtistsInput = {
    where: WallpapersWhereUniqueInput
    create: XOR<WallpapersCreateWithoutArtistsInput, WallpapersUncheckedCreateWithoutArtistsInput>
  }

  export type WallpapersCreateManyArtistsInputEnvelope = {
    data: WallpapersCreateManyArtistsInput | WallpapersCreateManyArtistsInput[]
    skipDuplicates?: boolean
  }

  export type WallpapersUpsertWithWhereUniqueWithoutArtistsInput = {
    where: WallpapersWhereUniqueInput
    update: XOR<WallpapersUpdateWithoutArtistsInput, WallpapersUncheckedUpdateWithoutArtistsInput>
    create: XOR<WallpapersCreateWithoutArtistsInput, WallpapersUncheckedCreateWithoutArtistsInput>
  }

  export type WallpapersUpdateWithWhereUniqueWithoutArtistsInput = {
    where: WallpapersWhereUniqueInput
    data: XOR<WallpapersUpdateWithoutArtistsInput, WallpapersUncheckedUpdateWithoutArtistsInput>
  }

  export type WallpapersUpdateManyWithWhereWithoutArtistsInput = {
    where: WallpapersScalarWhereInput
    data: XOR<WallpapersUpdateManyMutationInput, WallpapersUncheckedUpdateManyWithoutArtistsInput>
  }

  export type WallpapersScalarWhereInput = {
    AND?: WallpapersScalarWhereInput | WallpapersScalarWhereInput[]
    OR?: WallpapersScalarWhereInput[]
    NOT?: WallpapersScalarWhereInput | WallpapersScalarWhereInput[]
    id?: StringFilter<"Wallpapers"> | string
    title?: StringNullableFilter<"Wallpapers"> | string | null
    imageUrl?: StringNullableFilter<"Wallpapers"> | string | null
    likes?: IntFilter<"Wallpapers"> | number
    platform?: EnumPlatformNullableFilter<"Wallpapers"> | $Enums.Platform | null
    categoriesId?: StringFilter<"Wallpapers"> | string
    artistsId?: StringFilter<"Wallpapers"> | string
    createdAt?: DateTimeFilter<"Wallpapers"> | Date | string
    updatedAt?: DateTimeFilter<"Wallpapers"> | Date | string
  }

  export type CategoriesCreateWithoutWallpapersInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutWallpapersInput = {
    id?: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutWallpapersInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutWallpapersInput, CategoriesUncheckedCreateWithoutWallpapersInput>
  }

  export type ArtistsCreateWithoutWallpapersInput = {
    id?: string
    clerkId: string
    name?: string | null
    email: string
    mobileNo?: string | null
    gender?: $Enums.Gender | null
    country?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistsUncheckedCreateWithoutWallpapersInput = {
    id?: string
    clerkId: string
    name?: string | null
    email: string
    mobileNo?: string | null
    gender?: $Enums.Gender | null
    country?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArtistsCreateOrConnectWithoutWallpapersInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutWallpapersInput, ArtistsUncheckedCreateWithoutWallpapersInput>
  }

  export type LikedWallpapersCreateWithoutWallpapersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutLikedWallpapersInput
  }

  export type LikedWallpapersUncheckedCreateWithoutWallpapersInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedWallpapersCreateOrConnectWithoutWallpapersInput = {
    where: LikedWallpapersWhereUniqueInput
    create: XOR<LikedWallpapersCreateWithoutWallpapersInput, LikedWallpapersUncheckedCreateWithoutWallpapersInput>
  }

  export type LikedWallpapersCreateManyWallpapersInputEnvelope = {
    data: LikedWallpapersCreateManyWallpapersInput | LikedWallpapersCreateManyWallpapersInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkedWallpapersCreateWithoutWallpapersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutBookmarkedWallpapersInput
  }

  export type BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkedWallpapersCreateOrConnectWithoutWallpapersInput = {
    where: BookmarkedWallpapersWhereUniqueInput
    create: XOR<BookmarkedWallpapersCreateWithoutWallpapersInput, BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput>
  }

  export type BookmarkedWallpapersCreateManyWallpapersInputEnvelope = {
    data: BookmarkedWallpapersCreateManyWallpapersInput | BookmarkedWallpapersCreateManyWallpapersInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutWallpapersInput = {
    update: XOR<CategoriesUpdateWithoutWallpapersInput, CategoriesUncheckedUpdateWithoutWallpapersInput>
    create: XOR<CategoriesCreateWithoutWallpapersInput, CategoriesUncheckedCreateWithoutWallpapersInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutWallpapersInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutWallpapersInput, CategoriesUncheckedUpdateWithoutWallpapersInput>
  }

  export type CategoriesUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistsUpsertWithoutWallpapersInput = {
    update: XOR<ArtistsUpdateWithoutWallpapersInput, ArtistsUncheckedUpdateWithoutWallpapersInput>
    create: XOR<ArtistsCreateWithoutWallpapersInput, ArtistsUncheckedCreateWithoutWallpapersInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutWallpapersInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutWallpapersInput, ArtistsUncheckedUpdateWithoutWallpapersInput>
  }

  export type ArtistsUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistsUncheckedUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    mobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput = {
    where: LikedWallpapersWhereUniqueInput
    update: XOR<LikedWallpapersUpdateWithoutWallpapersInput, LikedWallpapersUncheckedUpdateWithoutWallpapersInput>
    create: XOR<LikedWallpapersCreateWithoutWallpapersInput, LikedWallpapersUncheckedCreateWithoutWallpapersInput>
  }

  export type LikedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput = {
    where: LikedWallpapersWhereUniqueInput
    data: XOR<LikedWallpapersUpdateWithoutWallpapersInput, LikedWallpapersUncheckedUpdateWithoutWallpapersInput>
  }

  export type LikedWallpapersUpdateManyWithWhereWithoutWallpapersInput = {
    where: LikedWallpapersScalarWhereInput
    data: XOR<LikedWallpapersUpdateManyMutationInput, LikedWallpapersUncheckedUpdateManyWithoutWallpapersInput>
  }

  export type BookmarkedWallpapersUpsertWithWhereUniqueWithoutWallpapersInput = {
    where: BookmarkedWallpapersWhereUniqueInput
    update: XOR<BookmarkedWallpapersUpdateWithoutWallpapersInput, BookmarkedWallpapersUncheckedUpdateWithoutWallpapersInput>
    create: XOR<BookmarkedWallpapersCreateWithoutWallpapersInput, BookmarkedWallpapersUncheckedCreateWithoutWallpapersInput>
  }

  export type BookmarkedWallpapersUpdateWithWhereUniqueWithoutWallpapersInput = {
    where: BookmarkedWallpapersWhereUniqueInput
    data: XOR<BookmarkedWallpapersUpdateWithoutWallpapersInput, BookmarkedWallpapersUncheckedUpdateWithoutWallpapersInput>
  }

  export type BookmarkedWallpapersUpdateManyWithWhereWithoutWallpapersInput = {
    where: BookmarkedWallpapersScalarWhereInput
    data: XOR<BookmarkedWallpapersUpdateManyMutationInput, BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersInput>
  }

  export type UsersCreateWithoutLikedWallpapersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedWallpapers?: BookmarkedWallpapersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutLikedWallpapersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutLikedWallpapersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutLikedWallpapersInput, UsersUncheckedCreateWithoutLikedWallpapersInput>
  }

  export type WallpapersCreateWithoutLikedWallpapersInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutWallpapersInput
    artists: ArtistsCreateNestedOneWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersUncheckedCreateWithoutLikedWallpapersInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    categoriesId: string
    artistsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersCreateOrConnectWithoutLikedWallpapersInput = {
    where: WallpapersWhereUniqueInput
    create: XOR<WallpapersCreateWithoutLikedWallpapersInput, WallpapersUncheckedCreateWithoutLikedWallpapersInput>
  }

  export type UsersUpsertWithoutLikedWallpapersInput = {
    update: XOR<UsersUpdateWithoutLikedWallpapersInput, UsersUncheckedUpdateWithoutLikedWallpapersInput>
    create: XOR<UsersCreateWithoutLikedWallpapersInput, UsersUncheckedCreateWithoutLikedWallpapersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutLikedWallpapersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutLikedWallpapersInput, UsersUncheckedUpdateWithoutLikedWallpapersInput>
  }

  export type UsersUpdateWithoutLikedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedWallpapers?: BookmarkedWallpapersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutLikedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type WallpapersUpsertWithoutLikedWallpapersInput = {
    update: XOR<WallpapersUpdateWithoutLikedWallpapersInput, WallpapersUncheckedUpdateWithoutLikedWallpapersInput>
    create: XOR<WallpapersCreateWithoutLikedWallpapersInput, WallpapersUncheckedCreateWithoutLikedWallpapersInput>
    where?: WallpapersWhereInput
  }

  export type WallpapersUpdateToOneWithWhereWithoutLikedWallpapersInput = {
    where?: WallpapersWhereInput
    data: XOR<WallpapersUpdateWithoutLikedWallpapersInput, WallpapersUncheckedUpdateWithoutLikedWallpapersInput>
  }

  export type WallpapersUpdateWithoutLikedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutWallpapersNestedInput
    artists?: ArtistsUpdateOneRequiredWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateWithoutLikedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    categoriesId?: StringFieldUpdateOperationsInput | string
    artistsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
  }

  export type UsersCreateWithoutBookmarkedWallpapersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutBookmarkedWallpapersInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutBookmarkedWallpapersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookmarkedWallpapersInput, UsersUncheckedCreateWithoutBookmarkedWallpapersInput>
  }

  export type WallpapersCreateWithoutBookmarkedWallpapersInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categories: CategoriesCreateNestedOneWithoutWallpapersInput
    artists: ArtistsCreateNestedOneWithoutWallpapersInput
    likedWallpapers?: LikedWallpapersCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersUncheckedCreateWithoutBookmarkedWallpapersInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    categoriesId: string
    artistsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersCreateOrConnectWithoutBookmarkedWallpapersInput = {
    where: WallpapersWhereUniqueInput
    create: XOR<WallpapersCreateWithoutBookmarkedWallpapersInput, WallpapersUncheckedCreateWithoutBookmarkedWallpapersInput>
  }

  export type UsersUpsertWithoutBookmarkedWallpapersInput = {
    update: XOR<UsersUpdateWithoutBookmarkedWallpapersInput, UsersUncheckedUpdateWithoutBookmarkedWallpapersInput>
    create: XOR<UsersCreateWithoutBookmarkedWallpapersInput, UsersUncheckedCreateWithoutBookmarkedWallpapersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookmarkedWallpapersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookmarkedWallpapersInput, UsersUncheckedUpdateWithoutBookmarkedWallpapersInput>
  }

  export type UsersUpdateWithoutBookmarkedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutBookmarkedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type WallpapersUpsertWithoutBookmarkedWallpapersInput = {
    update: XOR<WallpapersUpdateWithoutBookmarkedWallpapersInput, WallpapersUncheckedUpdateWithoutBookmarkedWallpapersInput>
    create: XOR<WallpapersCreateWithoutBookmarkedWallpapersInput, WallpapersUncheckedCreateWithoutBookmarkedWallpapersInput>
    where?: WallpapersWhereInput
  }

  export type WallpapersUpdateToOneWithWhereWithoutBookmarkedWallpapersInput = {
    where?: WallpapersWhereInput
    data: XOR<WallpapersUpdateWithoutBookmarkedWallpapersInput, WallpapersUncheckedUpdateWithoutBookmarkedWallpapersInput>
  }

  export type WallpapersUpdateWithoutBookmarkedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutWallpapersNestedInput
    artists?: ArtistsUpdateOneRequiredWithoutWallpapersNestedInput
    likedWallpapers?: LikedWallpapersUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateWithoutBookmarkedWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    categoriesId?: StringFieldUpdateOperationsInput | string
    artistsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersCreateWithoutCategoriesInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    createdAt?: Date | string
    updatedAt?: Date | string
    artists: ArtistsCreateNestedOneWithoutWallpapersInput
    likedWallpapers?: LikedWallpapersCreateNestedManyWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersUncheckedCreateWithoutCategoriesInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    artistsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likedWallpapers?: LikedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedCreateNestedManyWithoutWallpapersInput
  }

  export type WallpapersCreateOrConnectWithoutCategoriesInput = {
    where: WallpapersWhereUniqueInput
    create: XOR<WallpapersCreateWithoutCategoriesInput, WallpapersUncheckedCreateWithoutCategoriesInput>
  }

  export type WallpapersCreateManyCategoriesInputEnvelope = {
    data: WallpapersCreateManyCategoriesInput | WallpapersCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type WallpapersUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: WallpapersWhereUniqueInput
    update: XOR<WallpapersUpdateWithoutCategoriesInput, WallpapersUncheckedUpdateWithoutCategoriesInput>
    create: XOR<WallpapersCreateWithoutCategoriesInput, WallpapersUncheckedCreateWithoutCategoriesInput>
  }

  export type WallpapersUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: WallpapersWhereUniqueInput
    data: XOR<WallpapersUpdateWithoutCategoriesInput, WallpapersUncheckedUpdateWithoutCategoriesInput>
  }

  export type WallpapersUpdateManyWithWhereWithoutCategoriesInput = {
    where: WallpapersScalarWhereInput
    data: XOR<WallpapersUpdateManyMutationInput, WallpapersUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type LikedWallpapersCreateManyUsersInput = {
    id?: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkedWallpapersCreateManyUsersInput = {
    id?: string
    wallpaperId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedWallpapersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallpapers?: WallpapersUpdateOneRequiredWithoutLikedWallpapersNestedInput
  }

  export type LikedWallpapersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallpapers?: WallpapersUpdateOneRequiredWithoutBookmarkedWallpapersNestedInput
  }

  export type BookmarkedWallpapersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallpaperId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WallpapersCreateManyArtistsInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    categoriesId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WallpapersUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesUpdateOneRequiredWithoutWallpapersNestedInput
    likedWallpapers?: LikedWallpapersUpdateManyWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    categoriesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateManyWithoutArtistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    categoriesId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersCreateManyWallpapersInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookmarkedWallpapersCreateManyWallpapersInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LikedWallpapersUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutLikedWallpapersNestedInput
  }

  export type LikedWallpapersUncheckedUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikedWallpapersUncheckedUpdateManyWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutBookmarkedWallpapersNestedInput
  }

  export type BookmarkedWallpapersUncheckedUpdateWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WallpapersCreateManyCategoriesInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    likes?: number
    platform?: $Enums.Platform | null
    artistsId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WallpapersUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artists?: ArtistsUpdateOneRequiredWithoutWallpapersNestedInput
    likedWallpapers?: LikedWallpapersUpdateManyWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    artistsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedWallpapers?: LikedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
    bookmarkedWallpapers?: BookmarkedWallpapersUncheckedUpdateManyWithoutWallpapersNestedInput
  }

  export type WallpapersUncheckedUpdateManyWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: IntFieldUpdateOperationsInput | number
    platform?: NullableEnumPlatformFieldUpdateOperationsInput | $Enums.Platform | null
    artistsId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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