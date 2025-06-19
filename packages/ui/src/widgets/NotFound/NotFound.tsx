import Link from "next/link";
import { Typography, Button } from "../../atoms";
import { LostIcon } from "../../icons";

const NotFound = () => {
  return (
    <div className="bg-[#F4F7FB] overflow-hidden">
      {/* <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-24 py-12 pt-[165px]"> */}
      <div className="h-[calc(100vh-100px)] flex items-center justify-center px-4 md:px-24">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-16 flex flex-col items-center max-w-[762px] w-full">
          <div className="flex items-center justify-center mb-2">
            <Typography
              variant="h1"
              className="text-[96px] md:text-[120px] lg:text-[272px] font-nohemi font-normal text-black leading-none"
            >
              4
            </Typography>
            <LostIcon className="w-16 h-16 md:w-24 md:h-24 lg:w-full lg:h-full" />
            <Typography
              variant="h1"
              className="text-[96px] md:text-[120px] lg:text-[272px] font-nohemi font-normal text-black leading-none"
            >
              4
            </Typography>
          </div>
          <Typography
            variant="h2"
            className="font-nohemi text-2xl md:text-[24px] lg:text-[32px] font-normal mb-2 text-center"
          >
            Whoops! Looks like you have gotten lost…
          </Typography>
          <Typography
            variant="body"
            className="text-[#6F6C90] mb-8 text-center max-w-[444px]"
          >
            We can&apos;t find the page you&apos;re looking for, you may want to
            head back to the home page
          </Typography>
          <Link href="/" className="w-full flex justify-center">
            <Button
              variant="primary"
              size="lg"
              className="font-nohemi text-base w-full max-w-xs"
            >
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
