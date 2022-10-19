import client from "../src/apollo/client";
import Layout from "../src/components/layout";
import { GET_MENUS } from "../src/queries/getMenu";
import { GET_PAGE } from "../src/queries/pages/getPage";
import { handleRedirectsAndReturnData } from "../src/utils/slugs";

export default function Index({ data }) {
  return <Layout data={data}>content</Layout>;
}

//always returns an object
export async function getStaticProps() {
  const { data, errors } = await client.query({
    query: GET_MENUS,
    variables: { uri:"/" },
  });

  const defaultProps =  {
    props: {
      data: data || {}
    },
    /* Revalidate means that if a new request comes to server, then every 1 sec it will check
     * if the data is changed, if it is changed then it will update the
     * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
     */
    revalidate: 1,
  };

 return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}
