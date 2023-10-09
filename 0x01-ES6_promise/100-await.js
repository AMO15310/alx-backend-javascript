import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResp, userResp] = await Promise.all([
      uploadPhoto('guillaume.jpg'),
      createUser('Guillaume', 'Salva'),
    ]);

    return { photo: photoResp, user: userResp };
  } catch (error) {
    return { photo: null, user: null };
  }
}
