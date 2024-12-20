
// TODO: use variables for name and description
//  type resources

export const metadata = {
  title: "Curated Gallery for David Lobato",
}

import MediaGallery from '@/components/MediaGallery';
import PageHeader from "@/components/page-header";
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: "dwfhcqaat",
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default async function GalleryPage() {
  const results = (await cloudinary.search
    .expression(`resource_type:image AND folder=${"david-lobato"}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: any[] };

  return (
    <section>

<div className='mx-auto max-w-[1960px] p-4 md:p-7 xl:p-10'>

        <MediaGallery resources={results.resources} patronName='David Lobato'  />
      </div>
    </section>
  );
}