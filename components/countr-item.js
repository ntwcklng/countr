export default ({countr, inc, decr, del}) => (
  <div className='countr-item'>
    <div className='countr-item_decr-incr' onClick={decr}>-</div>
    <div className='countr-item_num' onClick={del}>{countr.n}<h6>{countr.name}</h6></div>
    <div className='countr-item_decr-incr' onClick={inc}>+</div>
  </div>
)
