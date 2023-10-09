export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    if (typeof filename === 'string') {
      reject(new Error(`${filename} cannot be processed`));
    }
  });
}
