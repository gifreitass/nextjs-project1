import Layout from "@/components/Layout"
import '../styles/global.css'

interface iMyApp {
    Component: () => JSX.Element,
    pageProps: Record<string, string>
}

function MyApp({ Component, pageProps }: iMyApp) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp