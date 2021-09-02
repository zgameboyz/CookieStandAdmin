// import Footer from '../components/footer.js'
// import Header from '../components/header.js'
import Form from './Form'
// import Head from '../components/head.js'
import { useState } from 'react'

function Home() {
 
  const[store, setStore] = useState("");

    const addStore = (newStore)=>{
    setStore(JSON.stringify(newStore, undefined, 2));
    }
  return (
    <>
    <body>
    <head>    
      <title>Cookie Stand Admin</title>
      <header>Cookie Stand Admin</header>
    </head>
    <main>
      <div id = "CookieForm">
      <Form onSubmit = {addStore}/>
      <p>
      Report Table Coming Soon...
    </p>
      <pre>{JSON.stringify(store, undefined, 2)}</pre>
      </div>
    </main>
   
    <p>Location: Barcelona, minCustomers: 2, maxCustomers:4, avgCookies:2.5</p>

      <footer>
<p>2021</p>

      </footer>
    </body>
    </>
)
}

export default Home