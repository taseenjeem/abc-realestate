import { Helmet } from "react-helmet-async";

// eslint-disable-next-line react/prop-types
const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} - ABC Real Estate LLC</title>
    </Helmet>
  );
};

export default PageTitle;
