import CriptoSearchForm from "./components/CriptoSearchForm"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App
