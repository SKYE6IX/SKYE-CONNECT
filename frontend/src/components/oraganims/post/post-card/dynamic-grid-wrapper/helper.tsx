export const checkImageOrientation = (
  imgUrl: string,
  callback: (orientation: string) => void
) => {
  const img = new Image();
  let orientation = 'unknown';
  img.onload = () => {
    if (img.naturalWidth > img.naturalHeight) {
      orientation = 'landscape';
    } else if (img.naturalWidth < img.naturalHeight) {
      orientation = 'portrait';
    } else {
      orientation = 'square';
    }
    callback(orientation);
  };
  img.src = imgUrl;
};
