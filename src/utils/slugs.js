import _ from "lodash";

export const FALLBACK = "blocking";
export const PAGES_COUNT = 100;

const isCustomPageUri = (uri) => {
  const pagesToExclude = ["/"];
  return pagesToExclude.includes(uri);
};

export default isCustomPageUri;

export const handleRedirectsAndReturnData = (
  defaultProps,
  data,
  errors,
  field,
  isPreview = false,
  loginRedirectURL = ""
) => {
  // if (isPreview && null === data?.[field]) {
  //   return {
  //     redirect: {
  //       destination: loginRedirectURL || "/",
  //       statusCode: 307,
  //     },
  //   };
  // }

  if (_.isEmpty(data)) {
    return {
      redirect: {
        destination: "/503",
        statusCode: 301,
      },
    };
  }

  if (field && _.isEmpty(data?.[field])) {
    return {
      // returns the default 404 page with a status code of 404
      notFound: true,
    };
  }

  return defaultProps;
};
