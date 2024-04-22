import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({
  transparentHeader = false,
  children,
}: Readonly<{ transparentHeader: boolean; children: React.ReactNode }>) => {
  return (
    <>
      <Header
        className={
          transparentHeader
            ? "absolute top-0 left-0 text-white z-10"
            : undefined
        }
        logoColor={transparentHeader ? "#ffffff" : undefined}
      />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
