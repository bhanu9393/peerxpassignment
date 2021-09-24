const PostLength = (action) => {
  const shortRange = 250;
  const longRange = 1500;
  var shortPosts = [];
  var longPosts = [];
  var normalPosts = [];
  action?.posts?.map((element) => {
    const withoutTags = element.html.replace(/(<([^>]+)>)/gi, "");
    const words = withoutTags.trim().split(new RegExp("\\s+"));

    if (words.length < shortRange) {
      shortPosts.push(element);
    } else if (words.length > longRange) {
      longPosts.push(element);
    } else {
      normalPosts.push(element);
    }
  });

  return [shortPosts, longPosts, normalPosts];
};
export default PostLength;
