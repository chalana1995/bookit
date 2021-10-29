class ApiFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $option: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...location });
    return this;
  }
}

export default ApiFeature;
