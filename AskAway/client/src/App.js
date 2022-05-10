import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { QuestionProvider } from './providers/QuestionProvider';
import ApplicationViews from './components/layout/ApplicationViews';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
        <QuestionProvider>
            <ApplicationViews />
            <Footer />
        </QuestionProvider>
    </Router>
  );
}

export default App;
