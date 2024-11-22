import cloudinary from "./cloudinary";

interface CloudinaryResult {
    height: number;
    public_id: string;
    secure_url: string;
    width: number;
    blurDataUrl?: string;
    label?: string;
  }

let cachedResults: CloudinaryResult[] | undefined;

export default async function getResults() {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "asc")
      .max_results(50)
      .execute();

    cachedResults = fetchedResults;
  }

  return cachedResults;
}
