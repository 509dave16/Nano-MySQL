import { NanoSQLStorageAdapter, DBKey, DBRow, _NanoSQLStorage } from "nano-sql/lib/database/storage";
import { DataModel, NanoSQLInstance } from "nano-sql/lib/index";
import { StdObject, hash, fastALL, fastCHAIN, deepFreeze, uuid, timeid, _assign, generateID, sortedInsert } from "nano-sql/lib/utilities";


export class SampleAdapter implements NanoSQLStorageAdapter {

    private _id: string;

    constructor() {

    }

    /**
     * The ID of the database provided by nanoSQL
     * 
     * @param {string} id 
     * @memberof SampleAdapter
     */
    public setID(id: string) {
        this._id = id;
    }

    /**
     * Async function to connect the database to it's backend.
     * 
     * Call complete() once a succesfull connection has been made, otherwise throw an error
     * 
     * @param {() => void} complete 
     * @memberof SampleAdapter
     */
    public connect(complete: () => void) {

    }

    /**
     * Called for every table the database needs to use.
     * Don't do any async work here, just save any details needed to perform the necessary async work in the connect() method.
     * 
     * @param {string} tableName 
     * @param {DataModel[]} dataModels 
     * @memberof SampleAdapter
     */
    public makeTable(tableName: string, dataModels: DataModel[]): void {

    }

    /**
     * When a write command is sent to the database, this is called.  A few different situations need to be handled.
     * 1. Primary key is provided but row doesn't exist (new row with provided primary key)
     * 2. Primary key is provided and row does exist (replace existing row)
     * 3. Primary key isn't provided and row doesn't exist.
     * 
     * All writes are a full replace of the whole row, partial updates will not be passed here.
     * 
     * @param {string} table 
     * @param {(DBKey | null)} pk Primary Key
     * @param {DBRow} newData 
     * @param {(row: DBRow) => void} complete 
     * @param {boolean} skipReadBeforeWrite 
     * @memberof SampleAdapter
     */
    public write(table: string, pk: DBKey | null, newData: DBRow, complete: (row: DBRow) => void): void {

    }

    /**
     * A table and primary key will be provided, call complete when the row is gone from the database
     * 
     * @param {string} table 
     * @param {DBKey} pk Primary Key
     * @param {() => void} complete 
     * @memberof SampleAdapter
     */
    public delete(table: string, pk: DBKey, complete: () => void): void {

    }

    /**
     * OPTIONAL METHOD
     * An array of primary keys is provided, return all the rows with those primary keys.
     * 
     * @param {string} table 
     * @param {DBKey[]} pks 
     * @param {(rows: any[]) => void} callback 
     * @memberof SampleAdapter
     */
    public batchRead(table: string, pks: DBKey[], callback: (rows: any[]) => void) {

    }

    /**
     * Return a single row given it's primary key
     * 
     * @param {string} table 
     * @param {DBKey} pk 
     * @param {(row: DBRow) => void} callback 
     * @memberof SampleAdapter
     */
    public read(table: string, pk: DBKey, callback: (row: DBRow) => void): void {

    }

    /**
     * This method is used to get a section of rows or all rows in a table.
     * For every row requested rowCallback() should be called, then nextRow() will be called by nanoSQL when it's ready for the next row.
     * 
     * No rows are passed into the complete() function, that's only called after the last row has been passed into rowCallback()
     * 
     * The method should support the following situations:
     * 1. from, to, and usePK are all undefined: return whole table.
     * 2. from and to are provided, usePK is false: return rows inside a given number range, for example return the 10th row to the 20th row (assuming primary keys are sorted).
     * 3. from and to are provided, usePK is true: return rows inside a range of primary keys
     * 
     * 
     * @param {string} table 
     * @param {(row: DBRow, idx: number, nextRow: () => void) => void} rowCallback 
     * @param {() => void} complete 
     * @param {*} [from] 
     * @param {*} [to] 
     * @param {boolean} [usePK] 
     * @memberof SampleAdapter
     */
    public rangeRead(table: string, rowCallback: (row: DBRow, idx: number, nextRow: () => void) => void, complete: () => void, from?: any, to?: any, usePK?: boolean): void {

    }

    /**
     * Delete every row in the given table
     * 
     * @param {string} table 
     * @param {() => void} callback 
     * @memberof SampleAdapter
     */
    public drop(table: string, callback: () => void): void {

    }

    /**
     * Get a copy of the database index or just the length of the database index.
     * 
     * @param {string} table 
     * @param {boolean} getLength 
     * @param {(index) => void} complete 
     * @memberof SampleAdapter
     */
    public getIndex(table: string, getLength: boolean, complete: (index) => void): void {

    }

    /**
     * Used only by the testing system, completely remove all tables and everything.
     * 
     * @param {() => void} complete 
     * @memberof SampleAdapter
     */
    public destroy(complete: () => void) {

    }

    /**
     * OPTIONAL METHOD
     * Provides the nano-sql instance this adapter is attached to.
     * 
     * @param {NanoSQLInstance} nsql 
     * @memberof SampleAdapter
     */
    public setNSQL(nsql: NanoSQLInstance) {

    }
}
