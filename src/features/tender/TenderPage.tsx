import { useState } from 'react';
import usePattern from '../../core/hooks/usePattern';
import Layout from '../../core/ui/layout/Layout';
import { Modal } from '../../core/ui/shared';
import { TextHeading } from '../../core/ui/shared/heading';
import TenderApplicationForm from './components/TenderApplicationForm';
import TenderCard from './components/TenderCard';

const TenderPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { patterns } = usePattern(6);

  return (
    <>
      <Layout>
        <TextHeading
          title={<h1 className="mb-3">Tenders</h1>}
          description={
            <div className="mt-[20px] mb-[20px] max-w-[736px] sm:mt-[32px] sm:mb-[40px]">
              <p className="body1 text-center text-light-text">
                Maecenas suscipit in nulla tristique pretium. Praesent eget
                tellus nibh. Praesent mi orci, fringilla sed est ac, efficitur
                auctor velit. Fusce fermentum feugiat lacinia. Maecenas eleifend
                bibendum tellus ac pretium. Etiam odio arcu, vestibulum id
                mattis ut, gravida sed ante. Nam ut cursus m
              </p>
            </div>
          }
          crumbLinks={['Resource', 'Tenders']}
        />

        <div className="px-global w-full pt-[35px] pb-[60px] sm:pt-[72px] sm:pb-[136px] bg-white">
          <div className="max-w-global mx-auto flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[43px] mx-auto">
              {Array(6)
                .fill(null)
                .map((_, i) => (
                  <TenderCard
                    key={`tender-${i}`}
                    title="Accountant"
                    description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                ut enim vitae nisl cursus feugiat. Praesent condimentum velit
                vitae porta luctus. In hac habitasse platea dictumst. In lacus
                lacus, gravida vel lacus et, tristique faucibus dolor."
                    deadline="21 Aug, 2022"
                    type={patterns[i] === 0 ? 'plain' : 'brand'}
                    onShowTender={() => setShowModal(true)}
                  />
                ))}
            </div>
          </div>
        </div>
      </Layout>

      <Modal showModal={showModal} setHideModal={() => setShowModal(false)}>
        <TenderApplicationForm onCancel={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

export default TenderPage;
