// userPhotos.js
// Add your image files to `public/assets/` with the filenames below.
// Example: public/assets/mem1.jpg, mem2.jpg, ...

const photos = [
  { src: new URL('../assets/mem1.jpg', import.meta.url).href, caption: "Family portrait — our early days together 🌸" },
  { src: new URL('../assets/mem2.jpg', import.meta.url).href, caption: "Goofy filters and endless giggles 😄" },
  { src: new URL('../assets/mem3.jpg', import.meta.url).href, caption: "Road-trip memories — windows down, smiles wide 🚗" },
  { src: new URL('../assets/mem4.jpg', import.meta.url).href, caption: "Grace and tradition — you wear joy so well ✨" },
  { src: new URL('../assets/mem5.jpg', import.meta.url).href, caption: "Proud moments together — shining side by side 💫" }
]

export default photos
