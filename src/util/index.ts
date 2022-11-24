export const generateNumber = (len: number) => Math.floor(Math.random() * len);


export const hasImageData = (image: ImageInterface | Asset | undefined) => Boolean(image?.fields?.file);

export const getImageUrls = (heroImage: ImageInterface, imageGallery: ImageInterface[]) =>
  [...(hasImageData(heroImage) ? [heroImage] : []), ...(imageGallery || [])].map(getImagePath);