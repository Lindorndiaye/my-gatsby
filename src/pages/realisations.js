// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const realisationsPage = () => {
  return (
    <Layout pageTitle="Realisations">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Services</title>;

// Step 3: Export your component
export default realisationsPage;
