const CategorySerializer = {
  serialize: (category, options) => ({
    key: category.key,
    title: category.title,
    color: category.color,
  }),
}

export default CategorySerializer
