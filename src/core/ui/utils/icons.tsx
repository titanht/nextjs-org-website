type IconProps = {
  className?: string;
};

const Menu = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const ChevronRight = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);

const ChevronDown = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

const CloseCircle = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    ></path>
  </svg>
);

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#fff"
      d="M24 12c0-6.63-5.375-12-12-12C5.37 0 0 5.37 0 12c0 5.988 4.387 10.953 10.125 11.852V15.47H7.078v-3.468h3.047V9.355c0-3.006 1.789-4.667 4.53-4.667 1.314 0 2.689.234 2.689.234v2.953h-1.516c-1.488 0-1.953.926-1.953 1.875V12h3.328l-.535 3.469h-2.793v8.383C19.609 22.952 24 17.986 24 11.999V12z"
    ></path>
  </svg>
);

const Twitter = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM16.686 9.91678C16.6908 10.0152 16.692 10.1136 16.692 10.2096C16.692 13.2096 14.4108 16.6668 10.2372 16.6668C9.00393 16.6688 7.79634 16.3146 6.75958 15.6468C6.93598 15.6684 7.11718 15.6768 7.30078 15.6768C8.36398 15.6768 9.34198 15.3156 10.1184 14.706C9.64524 14.6967 9.18679 14.54 8.80691 14.2578C8.42704 13.9756 8.14468 13.5819 7.99918 13.1316C8.33897 13.1962 8.689 13.1827 9.02278 13.092C8.50924 12.9881 8.04742 12.7099 7.71563 12.3044C7.38384 11.8989 7.20251 11.3911 7.20238 10.8672V10.8396C7.50838 11.0088 7.85878 11.112 8.23078 11.124C7.74934 10.8035 7.40852 10.3112 7.27803 9.74774C7.14755 9.18429 7.23724 8.59228 7.52878 8.09278C8.09873 8.79358 8.80949 9.36688 9.61506 9.77555C10.4206 10.1842 11.303 10.4192 12.2052 10.4652C12.0905 9.97835 12.1399 9.46727 12.3456 9.01139C12.5513 8.5555 12.9019 8.18037 13.3429 7.9443C13.7838 7.70823 14.2904 7.62445 14.7839 7.70599C15.2773 7.78753 15.73 8.02981 16.0716 8.39518C16.5794 8.29471 17.0664 8.10845 17.5116 7.84438C17.3423 8.37014 16.988 8.81659 16.5144 9.10078C16.9642 9.0466 17.4034 8.92567 17.8176 8.74198C17.5134 9.19785 17.1301 9.59571 16.686 9.91678Z"
      fill="white"
    />
  </svg>
);

const LinkedIn = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM9.17998 16.7748H6.84718V9.26758H9.17998V16.7748ZM7.99918 8.34598C7.26238 8.34598 6.78598 7.82398 6.78598 7.17838C6.78598 6.51958 7.27678 6.01318 8.02918 6.01318C8.78158 6.01318 9.24238 6.51958 9.25678 7.17838C9.25678 7.82398 8.78158 8.34598 7.99918 8.34598ZM17.7 16.7748H15.3672V12.6144C15.3672 11.646 15.0288 10.9884 14.1852 10.9884C13.5408 10.9884 13.158 11.4336 12.9888 11.862C12.9264 12.0144 12.9108 12.2304 12.9108 12.4452V16.7736H10.5768V11.6616C10.5768 10.7244 10.5468 9.94078 10.5156 9.26638H12.5424L12.6492 10.3092H12.696C13.0032 9.81958 13.7556 9.09718 15.0144 9.09718C16.5492 9.09718 17.7 10.1256 17.7 12.336V16.7748Z"
      fill="white"
    />
  </svg>
);

const Youtube = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9236 11.7996L11.2284 10.542C10.9932 10.4328 10.8 10.5552 10.8 10.8156V13.1844C10.8 13.4448 10.9932 13.5672 11.2284 13.458L13.9224 12.2004C14.1588 12.09 14.1588 11.91 13.9236 11.7996ZM12 0.47998C5.63758 0.47998 0.47998 5.63758 0.47998 12C0.47998 18.3624 5.63758 23.52 12 23.52C18.3624 23.52 23.52 18.3624 23.52 12C23.52 5.63758 18.3624 0.47998 12 0.47998ZM12 16.68C6.10318 16.68 5.99998 16.1484 5.99998 12C5.99998 7.85158 6.10318 7.31998 12 7.31998C17.8968 7.31998 18 7.85158 18 12C18 16.1484 17.8968 16.68 12 16.68Z"
      fill="white"
    />
  </svg>
);

const ArrowRight = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    ></path>
  </svg>
);

const Calendar = ({ className = 'w-6 h-6' }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    className={className}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>
);

const Volunteer = () => (
  <svg
    width="94"
    height="85"
    viewBox="0 0 94 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M50.4824 5.2248C55.1062 1.89573 60.4697 0.231186 66.5267 0.231186C69.8558 0.231186 73.5086 1.10969 77.485 2.95918C81.4614 4.76243 84.6055 6.88934 86.9174 9.33991C91.6798 15.2583 93.668 22.1476 92.9744 30.0079C92.2346 37.8683 89.6454 44.0178 85.1603 48.3641L50.0663 83.4582C49.1878 84.3367 48.0781 84.7528 46.7835 84.7528C45.4888 84.7528 44.4254 84.3367 43.5469 83.4582C43.1198 83.0369 42.7844 82.532 42.5616 81.975C42.3388 81.4181 42.2335 80.8211 42.2522 80.2215C42.2522 78.9269 42.6684 77.8172 43.5469 76.9387L64.7697 55.7158C65.9257 54.6986 65.9257 53.6352 64.7697 52.4792C63.6138 51.3233 62.5504 51.3233 61.5331 52.4792L40.3103 73.7021C39.8823 74.1331 39.3696 74.4708 38.8046 74.6936C38.2395 74.9164 37.6344 75.0197 37.0274 74.9967C35.7328 74.9967 34.6693 74.5806 33.7908 73.7021C33.3638 73.2808 33.0283 72.7759 32.8056 72.219C32.5828 71.662 32.4775 71.0651 32.4962 70.4655C32.4962 69.1709 32.9123 68.0612 33.7908 67.1827L55.0137 45.9598C56.2621 44.8038 56.2621 43.6479 55.0137 42.492C53.9502 41.3361 52.933 41.3361 51.7771 42.492L30.5542 63.9461C30.1214 64.3705 29.6079 64.7037 29.044 64.9261C28.4801 65.1485 27.8773 65.2554 27.2714 65.2407C25.9767 65.2407 24.867 64.8246 23.896 63.9461C22.9713 63.0675 22.5089 62.0041 22.5089 60.7094C22.5089 59.4148 23.0175 58.2589 24.0348 57.2416L45.3039 35.9725C46.4598 34.8166 46.4598 33.7532 45.3039 32.7359C44.1479 31.7187 43.0382 31.7187 42.021 32.7359L20.567 54.0513C19.5497 54.976 18.4863 55.4846 17.3304 55.4846C16.0357 55.4846 14.926 55.0223 14.0938 54.0513C13.2153 53.1265 12.7529 52.0168 12.7529 50.7222C12.7529 49.4276 13.2153 48.3641 14.0938 47.4856C28.2423 33.2445 36.9812 24.6444 40.3103 21.4541L56.7707 37.7296C58.574 39.4403 60.6546 40.3188 63.1977 40.3188C66.4343 40.3188 68.9773 39.0242 70.873 36.4349C72.1677 34.5392 72.6301 32.4585 72.2602 30.1467C71.8903 27.8348 70.9193 25.8928 69.3472 24.2745L50.4824 5.2248ZM60.0073 34.493L40.3103 14.7497L7.57431 47.4856C3.69039 43.5554 1.471 37.5446 0.962392 29.3606C0.453783 21.2229 2.67317 14.1486 7.57431 8.23022C13.0765 2.77423 19.6422 0 27.2714 0C34.9467 0 41.4662 2.77423 46.7835 8.23022L66.5267 27.9735C67.4053 28.852 67.8214 29.9155 67.8214 31.2101C67.8214 32.5048 67.4053 33.6144 66.5267 34.493C65.6482 35.3252 64.5848 35.7876 63.1977 35.7876C61.9493 35.7876 60.8858 35.3252 60.0073 34.493Z"
      fill="white"
    />
  </svg>
);

const Partner = () => (
  <svg
    width="107"
    height="85"
    viewBox="0 0 107 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M104.219 27.2265C106.643 28.6543 107.722 31.8916 106.145 34.4482C104.867 36.872 101.629 37.9511 99.0728 36.374L53.6842 11.3903L8.60097 36.374C6.03602 37.9511 2.80204 36.872 1.3768 34.4482C-0.0481169 31.8916 0.875926 28.6543 3.4412 27.2265L51.2603 0.668503C52.8541 -0.222834 54.8131 -0.222834 56.4068 0.668503L104.219 27.2265ZM47.0435 33.2031C47.0435 29.5341 50.1646 26.5625 53.6842 26.5625C57.5025 26.5625 60.3248 29.5341 60.3248 33.2031C60.3248 36.872 57.5025 39.8437 53.6842 39.8437C50.1646 39.8437 47.0435 36.872 47.0435 33.2031ZM17.8248 49.1406C17.8248 45.4716 20.9459 42.5 24.4654 42.5C28.2838 42.5 31.106 45.4716 31.106 49.1406C31.106 52.8095 28.2838 55.7812 24.4654 55.7812C20.9459 55.7812 17.8248 52.8095 17.8248 49.1406ZM89.5435 49.1406C89.5435 52.8095 86.7213 55.7812 82.9029 55.7812C79.3834 55.7812 76.2623 52.8095 76.2623 49.1406C76.2623 45.4716 79.3834 42.5 82.9029 42.5C86.7213 42.5 89.5435 45.4716 89.5435 49.1406ZM38.3775 81.58L33.7623 73.2959V79.6875C33.7623 82.6259 31.5377 85 28.4498 85H20.481C17.692 85 15.1685 82.6259 15.1685 79.6875V73.2959L10.8571 81.58C9.81288 83.5058 7.39735 84.2363 5.45995 83.1904C3.52255 82.1445 2.79706 79.7373 3.8413 77.7949L10.1283 66.124C12.6766 61.3925 17.6256 58.4375 22.9879 58.4375H26.2418C28.9478 58.4375 31.5377 59.1845 33.7789 60.5293L39.3404 50.1865C41.8971 45.455 46.8443 42.3505 52.2066 42.3505H55.4605C60.8228 42.3505 65.7701 45.455 68.3267 50.1865L73.8883 60.5293C76.1295 59.1845 78.7193 58.4375 81.4254 58.4375H84.6793C90.0416 58.4375 94.9889 61.3925 97.5455 66.124L103.821 77.7949C104.867 79.7373 104.136 82.1445 102.211 83.1904C100.268 84.2363 97.8609 83.5058 96.815 81.58L92.1998 73.2959V79.6875C92.1998 82.6259 89.9752 85 86.8873 85H78.9185C76.1295 85 73.606 82.6259 73.606 79.6875V73.2959L69.2896 81.58C68.2437 83.5058 65.8365 84.2363 63.8941 83.1904C61.8189 82.1445 61.2379 79.7373 62.2838 77.7949L68.3102 66.5888C68.0279 66.3232 67.7789 66.0078 67.5963 65.6425L62.981 57.3584V66.4062C62.981 69.3447 60.7564 71.7187 57.6685 71.7187H49.6998C46.9107 71.7187 44.3873 69.3447 44.3873 66.4062V57.3584L40.0709 65.6425C39.7389 66.0078 39.6392 66.3232 39.357 66.5888L45.3834 77.7949C46.4293 79.7373 45.6988 82.1445 43.773 83.1904C41.8307 84.2363 39.4234 83.5058 38.3775 81.58Z"
      fill="white"
    />
  </svg>
);

const Medical = () => (
  <svg
    width="97"
    height="85"
    viewBox="0 0 97 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.4215 29.2176H38.0461V39.8422C38.0461 40.5466 38.3259 41.2222 38.8241 41.7204C39.3222 42.2185 39.9978 42.4983 40.7023 42.4983H51.3268C52.0313 42.4983 52.7069 42.2185 53.205 41.7204C53.7031 41.2222 53.983 40.5466 53.983 39.8422V29.2176H64.6076C65.312 29.2176 65.9876 28.9378 66.4857 28.4396C66.9839 27.9415 67.2637 27.2659 67.2637 26.5615V15.9369C67.2637 15.2324 66.9839 14.5568 66.4857 14.0587C65.9876 13.5606 65.312 13.2807 64.6076 13.2807H53.983V2.65615C53.983 1.95169 53.7031 1.27609 53.205 0.777967C52.7069 0.279843 52.0313 0 51.3268 0H40.7023C39.9978 0 39.3222 0.279843 38.8241 0.777967C38.3259 1.27609 38.0461 1.95169 38.0461 2.65615V13.2807H27.4215C26.7171 13.2807 26.0415 13.5606 25.5433 14.0587C25.0452 14.5568 24.7654 15.2324 24.7654 15.9369V26.5615C24.7654 27.2659 25.0452 27.9415 25.5433 28.4396C26.0415 28.9378 26.7171 29.2176 27.4215 29.2176ZM95.1848 55.8305C94.6687 55.1269 94.0187 54.5322 93.2722 54.0805C92.5256 53.6288 91.6972 53.3291 90.8345 53.1984C89.9717 53.0678 89.0917 53.1088 88.2449 53.3192C87.3981 53.5296 86.6012 53.9052 85.8999 54.4244L66.0336 69.0631H46.0112C45.3068 69.0631 44.6312 68.7833 44.133 68.2851C43.6349 67.787 43.3551 67.1114 43.3551 66.407C43.3551 65.7025 43.6349 65.0269 44.133 64.5288C44.6312 64.0307 45.3068 63.7508 46.0112 63.7508H58.9998C61.6559 63.7508 64.1046 61.9463 64.5395 59.3333C64.6679 58.5703 64.6284 57.7885 64.4237 57.0423C64.2191 56.2962 63.8542 55.6036 63.3545 55.0129C62.8548 54.4221 62.2323 53.9475 61.5304 53.6219C60.8285 53.2964 60.064 53.1278 59.2903 53.1279H32.7288C28.249 53.127 23.9049 54.6655 20.4242 57.4856L12.7048 63.7508H3.51454C2.81157 63.7556 2.13874 64.037 1.64165 64.5341C1.14456 65.0312 0.863182 65.704 0.858398 66.407V82.3438C0.863182 83.0468 1.14456 83.7197 1.64165 84.2167C2.13874 84.7138 2.81157 84.9952 3.51454 85H61.1197C64.8041 84.9912 68.3907 83.813 71.3625 81.635L93.7787 65.1055C95.1935 64.0608 96.1361 62.4976 96.3997 60.7588C96.6634 59.0199 96.2264 57.2476 95.1848 55.8305Z"
      fill="white"
    />
  </svg>
);

const Support = () => (
  <svg
    width="96"
    height="85"
    viewBox="0 0 96 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75.0394 47.3167L57.4444 61.3889H33.8333V56.6667H53.0291C53.4562 56.6664 53.8752 56.5504 54.2416 56.3309C54.6079 56.1113 54.9078 55.7965 55.1094 55.42C55.311 55.0435 55.4067 54.6193 55.3863 54.1927C55.3659 53.7661 55.2302 53.3531 54.9935 52.9975L50.8002 46.7075C49.94 45.4127 48.7727 44.3509 47.4025 43.6168C46.0323 42.8826 44.5017 42.499 42.9472 42.5H5.49993C4.24752 42.5 3.04641 42.9975 2.16082 43.8831C1.27523 44.7687 0.77771 45.9698 0.77771 47.2222V75.5556C0.77771 78.0604 1.77275 80.4626 3.54392 82.2338C5.3151 84.005 7.71733 85 10.2222 85H55.7397C57.7589 85.0005 59.755 84.5693 61.594 83.7353C63.4329 82.9013 65.0724 81.6838 66.4024 80.1644L95.2222 47.2222L88.3655 44.9367C86.1222 44.1889 83.7273 44.0149 81.3995 44.4307C79.0717 44.8464 76.8851 45.8386 75.0394 47.3167ZM82.2738 20.7306C84.4035 18.5347 85.721 15.4983 85.721 12.1456C85.721 8.79278 84.4035 5.75639 82.2738 3.56056C81.1968 2.43656 79.9037 1.54179 78.4723 0.929937C77.0409 0.318086 75.5005 0.00177856 73.9438 3.04189e-07C73.9438 3.04189e-07 68.0694 -0.0141673 62.1666 6.07278C56.2638 -0.0141673 50.3894 3.04189e-07 50.3894 3.04189e-07C48.8331 0.00197939 47.2933 0.317914 45.862 0.928897C44.4306 1.53988 43.1373 2.43335 42.0594 3.55583C39.9297 5.75639 38.6122 8.78806 38.6122 12.1408C38.6122 15.4936 39.9297 18.5347 42.0594 20.7258L62.1666 42.5L82.2738 20.7306Z"
      fill="white"
    />
  </svg>
);

const Quote = () => (
  <svg
    width="64"
    height="56"
    viewBox="0 0 64 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M58 0H42C38.6875 0 36 2.6875 36 6V22C36 25.3125 38.6875 28 42 28H52V36C52 40.4125 48.4125 44 44 44H43C41.3375 44 40 45.3375 40 47V53C40 54.6625 41.3375 56 43 56H44C55.05 56 64 47.05 64 36V6C64 2.6875 61.3125 0 58 0ZM22 0H6C2.6875 0 0 2.6875 0 6V22C0 25.3125 2.6875 28 6 28H16V36C16 40.4125 12.4125 44 8 44H7C5.3375 44 4 45.3375 4 47V53C4 54.6625 5.3375 56 7 56H8C19.05 56 28 47.05 28 36V6C28 2.6875 25.3125 0 22 0Z"
      fill="#E80004"
      fillOpacity="0.2"
    />
  </svg>
);

const Icons = {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronRight,
  CloseCircle,
  Facebook,
  LinkedIn,
  Medical,
  Menu,
  Partner,
  Quote,
  Support,
  Twitter,
  Youtube,
  Volunteer,
};

export default Icons;
