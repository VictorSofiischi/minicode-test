import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import { store } from "@/store";

//Fake-DB imports
import '@/@fake-db/axios'
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ToastContainer />
      </Provider>
    </>
  );
}
