const { getModelByTenant } = require('./util');
const { signatureSchema } = require('../models/signature');

exports.addSignature = async (signaturesBody, tenantId) => {
  console.info(`Add signature called with body ${signaturesBody}`);
  const Signature = getModelByTenant(tenantId, 'signature', signatureSchema);

  const op = await Signature.find();
  //   const s = new Signature(signaturesBody);
  //   const op = await s.save();
  //   console.info(`Signature created with response : ${response}`);
  return op;
};
