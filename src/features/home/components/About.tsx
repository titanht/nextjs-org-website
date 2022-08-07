import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ArrowedButton } from '../../../core/ui/shared/buttons';
import Icons from '../../../core/ui/utils/icons';

const About = () => {
  const CardItem = () => (
    <div className="flex h-full w-fit xs:min-w-[400px] flex-col overflow-hidden rounded-[20px] flex-shrink-0 ">
      <div
        className="flex-1 bg-cover"
        style={{
          backgroundImage: 'url("/imgs/home/talk.jpeg")',
        }}
      ></div>
      <div className="flex h-[110px] items-center justify-between bg-brand px-[18px] py-[16px] sm:px-[24px] sm:py-[20px]">
        <div className="flex flex-col text-white">
          <h3 className="mb-1">Lorem Ipsum</h3>
          <p className="body1 line-clamp-2">Praesent tincidunt neque id erat</p>
        </div>

        <div className="center h-[70px] w-[70px] rounded-full bg-white">
          <Icons.ArrowRight className="w-[24px] h-fit text-red" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="px-global bg-gray-bg">
        <div
          className="max-w-global relative mx-auto mb-[40px] h-[360px] w-full bg-white sm:mb-[84px]"
          style={{ boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.02)' }}
        >
          <div className="absolute top-[-72px] h-[373px] w-full justify-center px-2 md:px-[48px] mx-auto flex">
            <Swiper
              navigation={true}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                930: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1340: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="flex items-center justify-center max-w-global mx-auto "
            >
              {Array(3)
                .fill(null)
                .map((_, i) => (
                  <SwiperSlide key={`'about-card'-${i}`} className=" center">
                    <CardItem />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>

        <div className="max-w-global mx-auto flex flex-col md:flex-row">
          <div
            className="mr-0 md:mr-[50px] h-[400px] md:h-[734px] w-full md:w-[400px] flex-shrink-0 rounded-[36px] lg:mr-[103px] lg:w-[630px] relative bg-cover bg-center"
            style={{ backgroundImage: 'url("/imgs/home/about-speech.jpeg")' }}
          >
            <div className="px-[20px] md:px-[30px] py-[16px] md:py-[23px] bg-brand center w-fit absolute center rounded-[20px] top-[50%] left-0 -translate-y-[50%]">
              <div className="flex text-white items-center">
                <p className="mr-[12px] text-[50px] md:text-[72px] leading-[72px] tracking-tighter font-barlow">
                  17
                </p>
                <div className="flex flex-col">
                  <p className="subheading !font-barlow text-[#D2D2D2]">
                    Years
                  </p>
                  <p className="subheading !font-barlow text-[#D2D2D2]">
                    of experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 md:p-0">
            <p className="subheading mb-1 text-red">About CORHA</p>
            <h2 className="mb-[35px] max-w-[433px] text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="body1 mb-[54px] text-light-text">
              The Consortium of Reproductive Health Associations (CORHA) is a
              member driven umbrella organizations of 85 foreign and local
              NGOs/CSOs committed to the provision of comprehensive, integrated
              and sustainable Reproductive Health (RH) information and services
              in Ethiopia. Its ultimate goal is to contribute to improving the
              overall health status and quality of life for all Ethiopian
              people, thereby contributing to national development.
            </p>
            <div>
              <ArrowedButton label="Learn More" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
