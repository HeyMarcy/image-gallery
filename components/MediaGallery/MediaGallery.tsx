"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, X, Save } from "lucide-react";

import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { CldImage } from "next-cloudinary";
import type { ImageProps } from "@/utils/types";
import Logo from "../ui/logo";

interface CloudinaryResource {
  height: number;
  public_id: string;
  secure_url: string;
  width: number;
  blurDataUrl?: string;
  label?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}

interface MediaGalleryProps {
  resources: CloudinaryResource[];
  patronName?: string;
  artistName?: any;
}

const MediaGallery = ({
  resources,
  patronName,
  artistName,
}: MediaGalleryProps) => {




  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4 2xl:columns-5">
        <div className="after:content relative mb-5 flex h-[340px] flex-col items-center justify-center gap-5 overflow-hidden rounded-lg bg-white/10 px-6 pb-11 pt-6 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:h-[420px] lg:pt-1">
          <Logo />
          <h2 className="text-base  uppercase tracking-wide text-white/75">
            Icon Gallery <br></br>Viewing Room 
          </h2>
          {artistName && artistName}

          <p className="mt-2 max-w-[40ch] text-sm tracking-wide text-white/75 sm:max-w-[32ch]">
            {` Curated for ${patronName}`}
          </p>
        </div>
        {Array.isArray(resources:) && (
          <ul>
            {resources.map((resource) => {
              return (
                <li
                  key={resource.public_id}
                  className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                >
                  <Link href="#">
                    <CldImage
                      // width={resource.width}
                      // height={resource.height}
                      src={resource.public_id}
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 mb-5"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      alt=""
                      width={720}
                      height={480}
                      sizes="(max-width: 640px) 100vw,
                            (max-width: 1280px) 50vw,
                            (max-width: 1536px) 33vw,
                            25vw"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default MediaGallery;
