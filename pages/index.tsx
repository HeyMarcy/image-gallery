import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Logo from "../components/Icons/Logo";
import Modal from "../components/Modal";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      document
        .querySelector(`#photo-${lastViewedPhoto}`)
        .scrollIntoView({ block: "center" });

      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);

  return (
    <>
      <Head>
        <title>Icon Gallery</title>
      </Head>
      <main className='mx-auto max-w-[1960px] p-4'>
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          <div className='after:pointer-events-non col-span-1 flex flex-col items-center  bg-white/10 p-16  text-center text-white shadow-highlight after:shadow-highlight '>
            {/* <div className='after:content relative col-span-1 flex flex-col items-center  overflow-hidden rounded-lg  text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight sm:col-span-2 lg:col-span-1 lg:pt-0'> */}
            <div className='-mt-2  flex h-full flex-col items-center justify-center gap-4'>
              <Logo />
              <h1 className='text-base  uppercase tracking-widest'>
                An Icon Gallery private collection
              </h1>
              {/* <p className='max-w-[40ch] font-light text-white/75 sm:max-w-[32ch]'>
              Curated for Joe Smith
            </p> */}
            </div>
          </div>
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/?photoId=${id}`}
              as={`/p/${id}`}
              id={`photo-${id}`}
              shallow
              className='after:content group relative flex cursor-zoom-in overflow-hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight'
            >
              <Image
                alt={public_id}
                className='m-auto transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110'
                placeholder='blur'
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes='(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw'
              />
            </Link>
          ))}
        </div>
      </main>
      <footer className='grid grid-cols-1 gap-2 p-6 text-center  sm:p-12 '>
        <p className='text-xl text-white/70  hover:text-white'>
          <a href='https://icongallery.com'>Visit the entire collection </a>
        </p>
        <p className='text-sm text-white/50 hover:text-white'>
          <a href='https://icongallery.com/copyright/' title='Copyright Notice'>
            ©2022 Icon Gallery LLC
          </a>
        </p>
      </footer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
