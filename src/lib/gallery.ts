export const galleryImages = [
  { src: '/gallery/ash-01.jpeg', alt: 'Green Theory — manicured lawn and garden, Adelaide' },
  { src: '/gallery/ash-02.jpeg', alt: 'Green Theory — structured planting and turf detail' },
  { src: '/gallery/ash-03.jpeg', alt: 'Green Theory — residential outdoor presentation' },
  { src: '/gallery/ash-04.jpeg', alt: 'Green Theory — lawn and landscape care' },
  { src: '/gallery/ash-05.jpeg', alt: 'Green Theory — garden beds and turf' },
  { src: '/gallery/ash-06.jpeg', alt: 'Green Theory — commercial or strata grounds' },
  { src: '/gallery/ash-07.jpeg', alt: 'Green Theory — hedge and lawn finish' },
  { src: '/gallery/ash-08.jpeg', alt: 'Green Theory — outdoor space after care' },
  { src: '/gallery/ash-09.jpeg', alt: 'Green Theory — property presentation' },
  { src: '/gallery/ash-10.jpeg', alt: 'Green Theory — turf and garden project' },
] as const;

export type GalleryImage = (typeof galleryImages)[number];
