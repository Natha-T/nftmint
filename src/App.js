
import React,  {  useState } from 'react';
import Card from './page/Card';
import Home from './page/Home';


function App() {

  const userCurrentTheme = JSON.parse(localStorage.getItem("isDark"));
  const [isDark, setisDark] = useState(userCurrentTheme || true);


  return (
    <main className={isDark ? "dark" : ""    }>
    <div className=' dark:bg-gray-800 pt-10 m px-8  h-screen'>
      <div settheme={setisDark} className='space-y-16 w-full h-full'>
<Home/>
<Card/>
      </div>

</div>
  </main>
   
  );
}

export default App;
