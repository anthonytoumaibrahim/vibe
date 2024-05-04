const VC = ({ balance }: { balance: number }) => {
  return (
    <div className="flex gap-2 items-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85 2.88675C88.094 1.10042 91.906 1.10042 95 2.88675L162.942 42.1132C166.036 43.8996 167.942 47.2008 167.942 50.7735V129.227C167.942 132.799 166.036 136.1 162.942 137.887L95 177.113C91.906 178.9 88.094 178.9 85 177.113L17.0577 137.887C13.9637 136.1 12.0577 132.799 12.0577 129.226V50.7735C12.0577 47.2008 13.9637 43.8996 17.0577 42.1132L85 2.88675Z"
          fill="url(#paint0_linear_98_6)"
        />
        <path
          d="M57.726 129.873C54.622 129.873 52.5203 128.45 51.421 125.605L26.686 61.488C27.3327 61.1647 28.2057 60.8737 29.305 60.615C30.4043 60.3563 31.3743 60.227 32.215 60.227C37.3237 60.227 40.6217 62.2963 42.109 66.435L57.047 108.242L54.719 114.45L55.786 114.838L73.246 66.435C74.798 62.2963 78.096 60.227 83.14 60.227C83.9807 60.227 84.9507 60.3563 86.05 60.615C87.1493 60.8737 88.0547 61.1647 88.766 61.488L64.031 125.605C63.5137 126.963 62.7053 128.03 61.606 128.806C60.5713 129.517 59.278 129.873 57.726 129.873ZM123.536 129.873C117.781 129.873 112.64 128.774 108.113 126.575C103.651 124.376 100.159 121.305 97.637 117.36C95.115 113.415 93.854 108.921 93.854 103.877V86.029C93.854 80.985 95.0826 76.523 97.54 72.643C100.062 68.6983 103.522 65.659 107.919 63.525C112.316 61.3263 117.36 60.227 123.051 60.227C128.742 60.227 133.786 61.1 138.183 62.846C142.645 64.5273 146.105 66.92 148.562 70.024C151.019 73.0633 152.248 76.5553 152.248 80.5C152.248 82.8927 151.44 84.8003 149.823 86.223C148.271 87.581 146.169 88.26 143.518 88.26C142.225 88.26 140.802 88.066 139.25 87.678C139.379 86.126 139.444 84.6063 139.444 83.119C139.444 79.6917 137.924 76.911 134.885 74.777C131.846 72.643 127.901 71.576 123.051 71.576C118.266 71.576 114.353 72.934 111.314 75.65C108.339 78.3013 106.852 81.761 106.852 86.029V103.877C106.852 108.21 108.404 111.734 111.508 114.45C114.612 117.166 118.621 118.524 123.536 118.524C128.386 118.524 132.331 117.457 135.37 115.323C138.409 113.189 139.929 110.441 139.929 107.078C139.929 105.526 139.864 104.039 139.735 102.616C141.352 102.293 142.71 102.131 143.809 102.131C146.525 102.131 148.691 102.842 150.308 104.265C151.925 105.688 152.733 107.628 152.733 110.085C152.733 113.9 151.504 117.328 149.047 120.367C146.59 123.342 143.13 125.67 138.668 127.351C134.271 129.032 129.227 129.873 123.536 129.873Z"
          fill="url(#paint1_linear_98_6)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_98_6"
            x1="147"
            y1="11"
            x2="26.5"
            y2="175.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#944ACE" />
            <stop offset="0.504654" stop-color="#953CD8" />
            <stop offset="1" stop-color="#270F39" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_98_6"
            x1="90"
            y1="5.5"
            x2="86.5"
            y2="156.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.47" stop-color="white" />
            <stop offset="1" stop-color="#9E26E8" />
          </linearGradient>
        </defs>
      </svg>
      <p className="font-bold text-primary-main">{balance}</p>
    </div>
  );
};

export default VC;
