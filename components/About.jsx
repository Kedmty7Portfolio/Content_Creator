import Image from "next/image";

export default function About() {
  return (
    <div className="w-full my-4 rounded-lg relative lg:h-[400px]">
      
      {/* ---------------- Background Section ---------------- */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-md">
        <Image
          src="/bg.png"
          alt="background"
          fill
          className="object-cover"
        />

        {/* Mask */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ---------------- Foreground Content ---------------- */}
      <div
        className="
          absolute inset-0
          flex flex-col md:flex-row-reverse
          justify-end items-center gap-10
          px-6
        "
      >
        {/* Profile Image */}
        <div
          className="
            w-[250px] h-[250px] 
            md:w-[300px] md:h-[300px] 
            relative rounded-full overflow-hidden
            flex justify-center items-center
            bg-white border-4 border-black/55 shrink-0
          "
        >
          <Image
            src="/saud.png"
            alt="my pic"
            width={300}
            height={300}
            className="object-cover mt-12"
          />
        </div>

        {/* Summary Text */}
        <div className="summry text-white">
          <h1 className="font-bold text-2xl mb-3">
            عبدالله القحطاني{" "}
            <span className="text-[#feb429]">كاتب محتوى</span>
          </h1>

          <p
            className="
              w-full lg:w-[500px] xl:w-[600px] 2xl:w-[700px]
              text-lg leading-10
            "
          >
            شغوف بابتكار نصوص جذابة وفعّالة تتواصل مباشرة مع الجمهور. أمتلك
            خبرة واسعة في كتابة المقالات، المحتوى التسويقي، ووسائل التواصل
            الاجتماعي، مع القدرة على تبسيط الأفكار المعقدة وتحويلها إلى محتوى
            سلس وواضح. أحب تطوير استراتيجيات المحتوى التي تزيد من التفاعل
            وتُعزز العلامة التجارية، وأسعى دائمًا لتقديم محتوى إبداعي يجمع
            بين الدقة والجاذبية.
          </p>
        </div>
      </div>
    </div>
  );
}
