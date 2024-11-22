// TODO: use variables for name and description
//  type resources

export const metadata = {
  title: "Tears for Fears - Jeff Meleski",
};

import MediaGallery from "@/components/MediaGallery";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dwfhcqaat",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function GalleryPage() {
  const artistName = (
    <h1 className=" mb-0 text-3xl  uppercase tracking-widest lg:text-4xl xl:text-4xl">
      Tears <span className="text-xl tracking-normal">for</span> Fears
    </h1>
  );
  const results = (await cloudinary.search
    .expression(`resource_type:image AND folder=${"meleski_jeff"}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: any[] };

  return (
    <section>
      <div className="mx-auto max-w-[1960px] p-4 md:p-7 xl:p-10">
        <MediaGallery
          resources={results.resources}
          artistName={artistName}
          patronName="Jeff Meleski"
        />
      </div>
    </section>
  );
}
