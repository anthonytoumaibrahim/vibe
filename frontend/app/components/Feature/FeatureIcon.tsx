const FeatureIcon = ({ children }: { children: any }) => {
  return (
    <div className="relative w-[80px] h-[91px] flex items-center justify-center">
      <svg
        width="80"
        height="91"
        viewBox="0 0 80 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 -z-10"
      >
        <path
          d="M37.4341 1.17854C39.0219 0.273811 40.9782 0.273811 42.5661 1.17859L77.434 21.0461C79.0218 21.9509 80 23.623 80 25.4326V65.1677C80 66.9769 79.0218 68.6488 77.434 69.5539L42.5661 89.4212C40.9782 90.3263 39.0219 90.3263 37.4341 89.4212L2.56601 69.5539C0.978161 68.6488 0 66.9769 0 65.1672V25.4321C0 23.623 0.978161 21.9509 2.56601 21.0461L37.4341 1.17854Z"
          className="fill-primary-main"
        />
      </svg>
      {children}
    </div>
  );
};

export default FeatureIcon;
