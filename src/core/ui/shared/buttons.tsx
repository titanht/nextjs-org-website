import clsx from 'clsx';
import Icons from '../utils/icons';

const ArrowedButton = ({
  label,
  onClick,
  className = '',
  arrowClassName = '',
}: {
  label: string;
  onClick: () => void;
  className?: string;
  arrowClassName?: string;
}) => (
  <button
    className={clsx(
      'btn hover:shadow-xl hover:-translate-y-1 transition duration-200',
      className
    )}
    onClick={onClick}
  >
    {label}
    <span
      className={clsx(
        'ml-[10px] h-[28px] w-[28px] rounded-full center bg-white text-red flex-shrink-0',
        arrowClassName
      )}
    >
      <Icons.ArrowRight className="w-4 h-4" />
    </span>
  </button>
);

const PaginationButtons = () => (
  <div className="w-full center gap-x-[14px] max-w-full overflow-x-auto">
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white font-barlow ">
      &#60;&#60;
    </button>
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
      1
    </button>
    <button className="bg-red w-[40px] h-[40px] rounded-[12px] center text-white">
      2
    </button>
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
      3
    </button>
    <button className="bg-dark-blue w-[40px] h-[40px] rounded-[12px] center text-white">
      &#62;&#62;
    </button>
  </div>
);

export { ArrowedButton, PaginationButtons };