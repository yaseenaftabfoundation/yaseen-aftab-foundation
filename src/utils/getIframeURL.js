export const getIframeURL = (url) => {
  const srcMatch = url.match(/src="([^"]+)"/);
  return srcMatch ? srcMatch[1] : null;
};
