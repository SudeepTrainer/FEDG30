import React from 'react'
import ReactDOM from 'react-dom/client'

// Function Component

function Header(){
  return(
    <h1>Header</h1>
  )
}
function Content(){
  return(
    <body>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit at placeat aliquid excepturi repellat nam, praesentium consequuntur eos est! Voluptatibus cupiditate velit sunt nobis ex sed fugiat molestiae explicabo minima!</body>
  )
}
function Footer(){
  return(
    <small>2023 </small>
  )
}
function FirstPage(){
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<FirstPage />);