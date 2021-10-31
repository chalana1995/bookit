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

  filter() {
    const queryCopy = { ...this.queryStr };

    const removeField = ["location", "page"];
    removeField.forEach((el) => delete queryCopy(el));

    this.query = this.query.filter(queryCopy);
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    this.query = this.query.limit(currentPage).skip(skip);
    return this;
  }
}

export default ApiFeature;
