import path from 'path'
export default ({hash}) => (
  <div style={{textAlign: 'center'}}>
    <a className="countr-link" href={`#${hash}`}>countr v{require('../package.json').version}</a>
    <span> | </span>
    <a className="countr-link" href="https://github.com/ntwcklng/countr">github</a>
    <style jsx>{`
      .countr-link {
        font-size: 13px;
        color: #bd10e0;
      }
      .countr-link:hover {
        text-decoration: underline;
      }
      `}</style>
  </div>
)