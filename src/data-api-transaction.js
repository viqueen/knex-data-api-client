/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

const Transaction = require('knex/lib/transaction');

module.exports = class DataAPITransaction extends (
  Transaction
) {
  // eslint-disable-next-line class-methods-use-this
  begin(connection) {
    return connection.beginTransaction().then((result) => {
      connection.__knexTxId = result.transactionId;
      connection.isTransaction = true;
      connection.rdsTransactionId = result.transactionId;

      return connection;
    });
  }
};
