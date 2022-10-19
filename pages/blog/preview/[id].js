import client from "../../../src/apollo/client";
import Layout from "../../../src/components/layout";
import { GET_POST_BY_ID } from "../../../src/queries/posts/getPost";
import { getAuthToken } from "../../../src/utils/cookies";
import { Sanitize } from "../../../src/utils/miscellaneous";
import { getLoginPreviewRedirectUrl, handleRedirectsAndReturnData } from "../../../src/utils/slugs";

const PostPreview = ({ data }) => {
  return (
    <Layout data={data} isPost>
      <div
        dangerouslySetInnerHTML={{
          __html: Sanitize(data?.post?.content ?? {}),
        }}
      />
    </Layout>
  );
};

export default PostPreview;

export async function getServerSideProps(context) {
  const authToken = getAuthToken(context.req);

  const { params } = context || {};
  const { data, errors } = await client.query({
    query: GET_POST_BY_ID,
    variables: {
      id: Number(params?.id ?? ""),
    },
    context: {
      headers: {
        authorization: authToken ? `Bearer ${authToken}` : "",
      },
    },
  });
  const defaultProps = {
    props: {
      data: data || {},
    },
  };

  const loginRedirectURL = getLoginPreviewRedirectUrl("post", params?.id ?? "");

  return handleRedirectsAndReturnData(
    defaultProps,
    data,
    errors,
    "post",
    true,
    loginRedirectURL
  );
}
