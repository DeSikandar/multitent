const { mongodb } = require('../config');
// const codes = require('../../../codes.json');

/**
 * Creating New MongoDb Connection obect by Switching DB
 */
const getTenantDB = (tenantId, modelName, schema) => {
  const dbName = `brightlab_${tenantId}`;

  if (mongodb) {
    // useDb will return new connection
    // mongodb.mongodb.
    const db = mongodb.mongodb.useDb(dbName, { useCache: true });

    // const db = mongodb.mongodb.useDb(dbName, { useCache: true });
    console.info(`DB switched to ${dbName}`);

    db.model(modelName, schema);
    return db;
  }
  console.log('server eror');
};

/**
 * Return Model as per tenant
 */
exports.getModelByTenant = (tenantId, modelName, schema) => {
  console.info(`getModelByTenant tenantId : ${tenantId}.`);
  const tenantDb = getTenantDB(tenantId, modelName, schema);
  //   console.log(tenantDb);
  return tenantDb.model(modelName);
};
