function slugify(str : string) {
  return str.toLowerCase().split(' ').join("-");
}

export default slugify;