const inserData = (model, data) => {
    model
      .create(data)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw new Error("");
      });
  };