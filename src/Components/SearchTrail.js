var internalLinks = [];
var externalLinks = [];
export const trail = (posts) => {
  posts?.map((element) => container(element));

  // "canonical_url";
  // "url";
  // tags: [{
  //   canonical_url;
  //   url,
  // }]
  // authors:[ {
  //   url;
  // }]
  // primaryauthor: {
  //   website;
  //   url;
  // }
  // primary_tag: {
  //   canonical_url;
  //   url;
  // }

  return [internalLinks, externalLinks];
};

const container = (element) => {
  if (element.canonical_url?.includes("ghost")) {
    internalLinks.push(element.canonical_url);
  } else if (
    element.canonical_url?.includes("https://") &&
    !element.canonical_url?.includes("ghost")
  ) {
    externalLinks.push(element.canonical_url);
  }

  if (element.url.includes("ghost")) {
    internalLinks.push(element.url);
  } else if (
    element.url.includes("https://") &&
    !element.url.includes("ghost")
  ) {
    externalLinks.push(element.url);
  }

  element.tags.map((innerelement) => {
    if (innerelement.canonical_url?.includes("ghost")) {
      internalLinks.push(innerelement.canonical_url);
    } else if (
      innerelement.canonical_url?.includes("https://") &&
      !innerelement.canonical_url?.includes("ghost")
    ) {
      externalLinks.push(innerelement.canonical_url);
    }

    if (innerelement.url?.includes("ghost")) {
      internalLinks.push(innerelement.url);
    } else if (
      innerelement.url?.includes("https://") &&
      !innerelement.url?.includes("ghost")
    ) {
      externalLinks.push(innerelement.url);
    }
  });

  /////////////////////////
  element?.authors?.map((innerelement) => {
    if (innerelement.website?.includes("ghost")) {
      internalLinks.push(innerelement.website);
    } else if (
      innerelement.website?.includes("https://") &&
      !innerelement.website?.includes("ghost")
    ) {
      externalLinks.push(innerelement.website);
    }

    if (innerelement.url?.includes("ghost")) {
      internalLinks.push(innerelement.url);
    } else if (
      innerelement.url?.includes("https://") &&
      !innerelement.url?.includes("ghost")
    ) {
      externalLinks.push(innerelement.url);
    }
  });

  if (element.primary_author.website?.includes("ghost")) {
    internalLinks.push(element.primary_author.website);
  } else if (
    element.primary_author.website?.includes("https://") &&
    !element.primary_author.website?.includes("ghost")
  ) {
    externalLinks.push(element.primary_author.website);
  }

  if (element.primary_author.url?.includes("ghost")) {
    internalLinks.push(element.primary_author.url);
  } else if (
    element.primary_author.url?.includes("https://") &&
    !element.primary_author.url?.includes("ghost")
  ) {
    externalLinks.push(element.primary_author.url);
  }

  if (element.primary_tag?.website?.includes("ghost")) {
    internalLinks.push(element.primary_tag?.website);
  } else if (
    element.primary_tag?.website?.includes("https://") &&
    !element.primary_tag?.website?.includes("ghost")
  ) {
    externalLinks.push(element.primary_tag.website);
  }

  if (element?.primary_tag?.url?.includes("ghost")) {
    internalLinks.push(element.primary_tag.url);
  } else if (
    element?.primary_tag?.url?.includes("https://") &&
    !element?.primary_tag?.url?.includes("ghost")
  ) {
    externalLinks.push(element.primary_tag.url);
  }
};
