exports.JoiValidator = function (schema) {
  return (req, res, next) => {
    let isValid = true;
    let resObj = {};
    for (let key of Object.keys(schema)) {
      const { error } = schema[key].validate(req[key]);
      if (error) {
        isValid = false;
        const { details } = error;
        if (Array.isArray(details) && details.length && details[0].message) {
          resObj = {
            status: 400,
            message:
              "Sorry Some paramter are invalid. Please enter valid value",
            data: null,
            error: details[0].message.replace(/['"]/g, "") + "in " + key,
          };
        } else {
          resObj = {
            status: 400,
            message:
              "Sorry Some paramter are invalid. Please enter valid value",
            data: null,
            error: "Invalid " + key,
          };
        }
        break;
      }
    }
    if (isValid) {
      return next();
    } else {
      return res.status(422).json(resObj);
    }
  };
};
