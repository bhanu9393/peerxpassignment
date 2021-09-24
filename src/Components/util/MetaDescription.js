const metaDescription = (action) => {
  let without = action?.posts?.filter(
    (element) =>
      element.meta_description == "" ||
      element.meta_description == undefined ||
      element.meta_description == null
  );

  let tooLong = action?.posts?.filter(
    (element) => element.meta_description?.length > 100
  );

  return [without, tooLong];
};
export default metaDescription;
