// People photos for the Institute leadership
export const PEOPLE_PHOTOS = {
  gabrielSantana: '/gabriel-santana-president.jpg',
  gustavoRuas: '/gustavo-ruas-vice-president.jpg',
} as const;

export type PeoplePhotoKey = keyof typeof PEOPLE_PHOTOS;
