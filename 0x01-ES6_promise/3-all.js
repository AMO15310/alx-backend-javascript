import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promises = [uploadPhoto(), createUser()];
  Promise.all(promises)
    .then(([photo, user]) => {
      const { firstName, lastName } = user;
      console.log(`${photo.body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
