import Head from "next/head";
import logo from "@assets/images/logo/logo.png"

const SEO = ({ pageTitle, description, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />


      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />

      <meta name="keywords" content="Software Development, Web Development, Mobile App Development, Custom Application Development, ERP Development, IT Solutions, Technology Services, Digital Transformation, Innovation, User-Centric Design, Responsive Design, User Experience (UX), User Interface (UI), Cutting-Edge Technology, Scalable Solutions, Business Growth, Client Satisfaction" />
      <meta name="author" content="Codersque Technologies Pvt Ltd" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.codersque.com/" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.codersque.com/" />
      <meta property="og:image" content={logo} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={logo} />



      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;