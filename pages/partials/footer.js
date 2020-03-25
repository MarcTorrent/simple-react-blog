export default () => {
  return (
    <footer className="footer">
      <div style={{ marginTop: 20 }}>
        <a href="http://www.iuriumconsulta.com" target="_blank" style={{ textDecoration: 'none' }}>
          Iurium Consulta
        </a>
      </div>
      <div className="copyright">
        &copy;&nbsp;&nbsp;{ new Date().getFullYear() } Iurium Consulta
      </div>
    </footer>
  )
}