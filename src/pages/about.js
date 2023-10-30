// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";

// Step 2: Define your component
const aboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>About Me</title>;

// Step 3: Export your component
export default aboutPage;
