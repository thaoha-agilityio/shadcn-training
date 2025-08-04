import { IMGBB_URL } from '@/constants';

export const uploadImageToImgbb = async (
  file: File,
): Promise<{
  image: string | null;
  error: string | null;
}> => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(IMGBB_URL, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    const {
      data: { url },
    } = await response.json();

    return { image: url, error: null };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred when uploading the image';

    return { image: null, error: errorMessage };
  }
};
