import Head from "next/head";
import Header from "./header/header";

export default function Layout({ children }) {
    return(
        <div>
            <Head>
                <title>NEXT Demo</title>
            </Head>
            <Header />
            <div className="mx-10">
                {children}
            </div>            
        </div>
    )
}