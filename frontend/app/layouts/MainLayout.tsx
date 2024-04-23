import Footer from "@/components/Footer";
import Header from "@/components/Header";

const MainLayout = ({
  transparentHeader = false,
  showFooter = true,
  children,
}: Readonly<{
  transparentHeader?: boolean;
  showFooter?: boolean;
  children?: React.ReactNode;
}>) => {
  return (
    <>
      <Header
        className={
          transparentHeader
            ? "absolute top-0 left-0 text-white z-10"
            : "mb-4 shadow-lg"
        }
        logoColor={transparentHeader ? "#ffffff" : undefined}
      />
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default MainLayout;
