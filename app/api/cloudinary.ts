import type { NextApiRequest, NextApiResponse } from 'next';
// import cloudinary from '@/utils/cloudinary';
import {v2 as cloudinary} from 'cloudinary';


async function getBase64ImageUrl(url: string): Promise<string> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString('base64');
  return `data:image/jpeg;base64,${base64}`;
}

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const results = await cloudinary.v2.search
//       .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//       .sort_by("public_id", "asc")
//       .execute();

//     const images = await Promise.all(
//       results.resources.map(async (resource: any) => ({
//         id: resource.public_id,
//         title: resource.public_id,
//         imageUrl: resource.secure_url,
//         blurDataUrl: await getBase64ImageUrl(resource.secure_url),
//       }))
//     );

//     res.status(200).json(images);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch images' });
//   }
// }

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  export async function fetchCloudinaryImages(folderName: string) {

    const results = await cloudinary.search
      .expression(`folder:${folderName}/*`)
      .sort_by("public_id", "asc")
      .execute();
  
    const images = results.resources.map((resource: any) => ({
      id: resource.public_id,
      title: resource.public_id,
      imageUrl: resource.secure_url,
    }));
  
    return images;
  }