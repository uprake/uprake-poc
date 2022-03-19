// import { createRxDatabase } from 'rxdb';
// import { RxDatabase } from 'rxdb';
// import { PouchDB } from 'rxdb';
// import idb from 'pouchdb-adapter-idb';

// // because we use the PouchDB RxStorage, we have to add the indexeddb adapter first.
// import { getRxStoragePouch, addPouchPlugin } from 'rxdb/plugins/pouchdb';
// addPouchPlugin(idb);

// // export class RxDbService {
// //   private static _db = null;

// //   private constructor() {}

// //   init() {
// //     this.db();
// //   }

// //   async db() {
// //     RxDbService._db = await createRxDatabase({
// //       name: 'heroesdb', // <- name
// //       storage: getRxStoragePouch('idb'), // <- RxStorage
// //       password: 'myPassword', // <- password (optional)
// //       multiInstance: true, // <- multiInstance (optional, default: true)
// //       eventReduce: true, // <- eventReduce (optional, default: true)
// //     });
// //   }

// //   static getDB() {
// //     if (RxDbService._db == null) {
// //       this.db();
// //     } else {
// //     }
// //   }
// // }

// class RxDbService {
//   private static _instance: RxDbService;

//   private _db: RxDatabase | null = null;

//   private constructor() {
//     //...
//   }

//   async db() {
//     const db = await createRxDatabase({
//       name: 'uprakedb', // <- name
//       storage: getRxStoragePouch('idb'), // <- RxStorage
//       password: 'myPassword', // <- password (optional)
//       multiInstance: true, // <- multiInstance (optional, default: true)
//       eventReduce: true, // <- eventReduce (optional, default: true)
//     });

//     this._db = db;
//     return db;
//   }

//   public async getDb(): Promise<RxDatabase> {
//     if (this._db == null) {
//       const _db = await this.db();
//       return _db;
//     } else {
//       return this._db;
//     }
//   }

//   public static get Instance() {
//     // Do you need arguments? Make it a regular static method instead.
//     return this._instance || (this._instance = new this());
//   }
// }

// export default RxDbService.Instance;
