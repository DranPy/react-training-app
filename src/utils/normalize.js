export default product => {
  if (product.authors) {
    product.authors = product.authors.map(author => ({
      id: author.value,
      name: author.label,
    }));
  }

  if (product.categories) {
    product.categories = product.categories.map(category => ({
      id: category.value,
      name: category.label,
    }));
  }

  return product;
};
