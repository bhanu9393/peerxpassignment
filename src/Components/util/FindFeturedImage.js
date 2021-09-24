const findFeaturedImage = (action) => {
  var x = action?.posts?.filter(
    (element) =>
      element?.feature_image === "" && element?.feature_image === undefined
  );

  return x;
};
export default findFeaturedImage;
