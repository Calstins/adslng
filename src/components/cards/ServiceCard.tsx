import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IoArrowUpSharp } from 'react-icons/io5';

interface IProps {
  id: number;
  titleTop: string;
  titleBottom: string;
  bg: string;
  details: string;
  image2: string;
  image3: string;
  titleBg: string;
  image: string;
  darkArrow?: boolean;
}

function ServiceCard({
  id,
  titleTop,
  titleBottom,
  bg,
  titleBg,
  image,
  darkArrow = true,
}: IProps) {
  return (
    <div
      className={cn(
        bg,
        'rounded-[45px] p-5 md:p-[30px] border-b-[6px] border-b-black flex flex-col gap-3'
      )}
    >
      <div className="flex justify-between gap-2">
        <div className="block w-[70%]">
          <div
            className={cn(
              ' bg-primary text-xl lg:text-2xl  rounded-[7px] p-2',
              titleBg
            )}
          >
            {titleTop}
          </div>
          <div
            className={cn(
              ' bg-primary text-xs md:text-sm rounded-[7px] inline-block px-3 p-2 2xl:text-xl',
              titleBg
            )}
          >
            {titleBottom}
          </div>
        </div>
        <div className="w-[30%]">
          <img src={image} alt="card icon" />
        </div>
      </div>
      <div>
        <Link
          className="flex gap-2 items-center group"
          href={`/services/${id}`}
        >
          <div>
            {darkArrow ? (
              <div className="bg-white rounded-full p-3">
                <IoArrowUpSharp className="text-primary text-2xl transform rotate-[30deg] group-hover:rotate-[90deg] transition-transform duration-300" />
              </div>
            ) : (
              <div className="bg-white rounded-full p-3">
                <IoArrowUpSharp className="text-secondary text-2xl transform rotate-[30deg] group-hover:rotate-[90deg] transition-transform duration-300" />
              </div>
            )}
          </div>
          <p className={cn('text-p', darkArrow ? 'text-black' : 'text-white')}>
            Learn more...
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
