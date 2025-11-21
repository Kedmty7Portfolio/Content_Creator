import Image from "next/image";
export default function About() {
  return (
    <div
      className={`w-full  my-4 rounded-lg p-(--main-padding)
      bg-[url('/bg1.jpg')] bg-cover bg-no-repeat
     relative z-10
    `}
    >
      <div className={`bgimg absolute left-0 top-0 w-full h-full bg-black/10  
        z-0
        `}>

      </div>
      <div
        className={`
    flex flex-col md:flex-row-reverse justify-end items-center gap-10
    `}
      >

        <div
          className={`img w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative overflow-hidden 
             rounded-full   flex justify-center items-center shrink-0
            bg-white border-4 border-black/55 
             `}
        >
          <Image
            src="/saud.png"
            alt="my pic"
            width={300}
            height={300}
           className="mt-12"
          />
    
        </div>
       
        <div className="summry">
          <h1 className="font-bold text-2xl">
            
             عبدالله القحطاني <span className="text-[#feb429] leading-16">محاسب</span>{" "}
          </h1>
          <p
            className={`w-full lg:w-[600px] 
            text-lg leading-10
            `}
          >   مرخّص من هيئة المحاسبين القانونيين
            السعودية (SOCPA)، أمتلك خبرة تتجاوز 10 سنوات في مجال المحاسبة
            والمالية. عملت خلال مسيرتي المهنية في شركات عالمية وبنوك مرموقة، مما
            منحني خبرة واسعة في إعداد التقارير المالية، التحليل المالي، وإدارة
            النظم المحاسبية وفق أعلى المعايير المهنية. طوال سنوات عملي، شاركت في
            تطوير العمليات والإجراءات المالية، وأسهمت في تحسين كفاءة التقارير
            وأنظمة الرقابة الداخلية. ومع تطور مسيرتي، تولّيت مهام متقدمة
            ومسؤوليات أكبر حتى وصلت لمنصب محاسب أول، مستندًا إلى سجل مهني قائم
            على الدقة، الالتزام، والاحترافية.
          </p>
        </div>
      </div>
    </div>
  );
}
