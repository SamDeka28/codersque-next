import SEO from '@components/seo';
import ServiceDetailsArea from '@components/extra-page/service-details';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import services_data from '@data/common_data/service-data';
import Wrapper from '@layout/wrapper';
import menu_data from '@data/menu-data';

const ServicesDetails = ({ id }) => {
  // const router = useRouter();
  // const id = router.query.id;
  const [service, setService] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setService(services_data.find(item => item.id == id)))

    return () => { };
  }, [id]);

  return (
    <Wrapper>
      <SEO pageTitle={`${service.title} | Codersque Technologies Pvt Ltd`}
        description={service?.description}
      />
      <ServiceDetailsArea item={service} />
    </Wrapper>
  );
};


export async function getStaticPaths() {

  // Get the paths we want to pre-render based on posts
  const paths = menu_data[1].submenus.map(link => ({
    params: {
      id: link.name
    }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  return {
    props: { id: params.id }
  }
}

export default ServicesDetails;