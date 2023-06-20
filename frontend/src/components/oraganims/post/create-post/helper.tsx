'use client';
//**HELPER FUNCTIONS */
export const previewPhotos = (photos: any) => {
  let imgUploads: string[] = [];
  if (photos) {
    Array.from(photos).forEach((photo: any) => {
      const imgUrl = URL.createObjectURL(photo);
      return imgUploads.push(imgUrl);
    });
  }
  return imgUploads;
};
