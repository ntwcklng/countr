export default ({countr, inc, decr, del}) => (
  <div className='countr-item'>
    <style jsx>{`
      .countr-item {
        width: 100%;
        display: flex;
        justify-content: stretch;
        flex-direction: row;
        font-size: 28px;
        padding: 10px;
      }
      .countr-item_decr-incr {
        align-self: center;
        flex: 1;
        text-align: center;
        padding: 10px;
      }
      .countr-item_num {
        width: 100%;
        padding: 15px;
        text-align: center;
      }
    `}</style>
    <div className='countr-item_decr-incr' onClick={decr}>-</div>
    <div className='countr-item_num' onClick={del}>{countr.n}<h6>{countr.name}</h6></div>
    <div className='countr-item_decr-incr' onClick={inc}>+</div>
  </div>
)
