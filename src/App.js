import React from 'react';
import Layout from './Layout/Layout';
import Quiz from "./containers/Quiz/Quiz.jsx"

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Quiz/>
      </Layout>
    );
  }
}

export default App;
