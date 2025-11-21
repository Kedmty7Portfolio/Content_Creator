export function Video() {
  return (
    <div className="my-10 p-5 flex justify-center items-center gap-10 flex-wrap">
      {[...Array(4)].map((_, i) => (
        <video
          key={i}
          className="w-full max-w-xs md:max-w-sm lg:max-w-md h-[220px] md:h-[300px]"
          controls
          preload="none"
        >
          <source src="/vid.mp4" type="video/mp4" />
          <track src="/vid.mp4" kind="subtitles" srcLang="ar" label="Arabic" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}
