"use client";

import BgShapes from "@/components/bg-shapes";
import VerticalLines from "@/components/vertical-lines";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <VerticalLines /> */}
      <BgShapes />


      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
