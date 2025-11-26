import "./Page.scss";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

import type { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Page;
