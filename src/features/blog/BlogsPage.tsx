import Layout from '../../core/ui/layout/Layout';
import { PaginationButtons } from '../../core/ui/shared/buttons';
import { ImageHeading } from '../../core/ui/shared/hading';
import BlogCard from './components/BlogCard';

const BlogsPage = () => {
  return (
    <>
      <Layout>
        <ImageHeading
          title={<h1 className="mb-3 text-white">Blogs &amp; News</h1>}
          description={
            <div className="max-w-[736px] mx-auto flex flex-col text-center items-center">
              <p className="body1 text-white mt-[20px] xm:mt-[32px]">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>
          }
          crumbLinks={['Home', 'Blogs & News']}
          imgUrl="/imgs/blog/heading.jpeg"
        />

        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px]">
          <div className="max-w-global mx-auto flex flex-col items-center">
            <div className="xs:w-fit grid w-full grid-cols-1 place-items-center gap-[25px] sm:grid-cols-2 sm:gap-[35px] xl:grid-cols-3 xl:gap-[45px] mb-[25px] sm:mb-[50px]">
              {Array(10)
                .fill(null)
                .map((_, i) => (
                  <BlogCard
                    key={`blog-card-${i}`}
                    title="Lorem ipsum dolor sit amet, consectetur"
                    description="Maecenas suscipit in nulla tristique pretium. Praesent eget tellus nibh.
                  Praesent mi orci, fringilla sed est ac, efficitur auctor velit. Fusc"
                    tag="contraception"
                    date="12 July, 2022"
                    imgUrl="/imgs/home/talk.jpeg"
                  />
                ))}
            </div>

            <PaginationButtons />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogsPage;
