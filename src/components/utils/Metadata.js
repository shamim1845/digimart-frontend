import React from "react";
import { Helmet } from "react-helmet";

const Metadata = ({ title, description }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default Metadata;
