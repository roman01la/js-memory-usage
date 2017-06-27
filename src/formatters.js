export const formatSize = bytes => {
  if (bytes < 1024) {
    return `${bytes} Bytes`;
  } else {
    return `${Math.round(bytes / 1024)} KB`;
  }
};
