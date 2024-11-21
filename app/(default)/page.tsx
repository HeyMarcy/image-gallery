import Logo from "@/components/ui/logo";

export const metadata = {
  title: "Home - Creative",
  description: "Page description",
};

export default function Home() {
  return (

      <div className="flex items-center justify-center h-full">
    
     
            <div style={{width: 300}} className=" after:content relative mb-5 flex h-[340px] flex-col items-center justify-center gap-5 overflow-hidden rounded-lg bg-white/10 px-6 pb-11 pt-6 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:h-[420px] lg:pt-1">
              <Logo />
              <h2 className="text-base  uppercase tracking-wide text-white/75">
                Icon Gallery <br></br>Viewing Room
              </h2>
          
  
        </div>
      </div>

  );
}
