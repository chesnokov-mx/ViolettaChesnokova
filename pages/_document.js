import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com" />
                <link rel="stylesheet" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Jost:wght@100;400;700&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}