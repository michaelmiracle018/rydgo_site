import React from 'react'

import Layouts from './components/Layouts'  
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
		<div>
			<Navbar />
			<Layouts />
			<Footer />
		</div>
	);
}

export default App