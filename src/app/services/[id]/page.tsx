import { notFound } from 'next/navigation';
import { cn } from '@/lib/utils';
import { services } from '../../../serviceData';
import LetMakeThingsHappenSection from '@/components/sections/LetMakeThingsHappenSection';
import ContactUsSection from '@/components/sections/ContactUsSection';

interface Service {
  id: number;
  bg: string;
  titleTop: string;
  titleBottom: string;
  details: string;
  image2: string;
  image3: string;
  image: string;
}

const ServiceDetailPage = ({ params }: { params: { id: string } }) => {
  const serviceId = parseInt(params.id, 10);
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return notFound();
  }

  const { titleTop, titleBottom, details, image2, bg } = service;

  return (
    <section className="pt-[100px] flex flex-col gap-[100px] my-7 text-center md:text-left ">
      <div className="flex flex-col lg:flex-row lg:gap-8 flex-2 2xl:mx-[150px]">
        <div className="lg:w-[50%] 2xl:w-[60%] w-full">
          <h1 className="text-3xl font-bold mb-4 2xl:text-4xl">{titleTop}</h1>
          <h2 className="text-2xl mb-4 text-gray-700">{titleBottom}</h2>
          <p className="text-xl text-gray-900 mb-6">{details}</p>
        </div>
        <div className="lg:w-[50%] 2xl:w-[40%] w-full">
          <div className="flex lg:justify-end items-center justify-center">
            <div className="flex 2xl:w-[50%]">
              <div
                className={cn(
                  'flex justify-center items-center p-4 rounded-lg shadow-md ',
                  bg
                )}
              >
                <img
                  src={image2}
                  alt={`${titleTop} - Image 2`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LetMakeThingsHappenSection />
      <ContactUsSection />
    </section>
  );
};

export default ServiceDetailPage;
