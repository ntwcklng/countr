export default ({add, close, inputRef}) => (
  <div>
    <style jsx>{`
      .countr-input_add {
        width: 100%;
        background-color: #f2f2f2;
        border: 0;
        padding: 10px;
        font-size: 16px;
        font-family: Menlo, Monaco, Lucida Console, Courier New, monospace, serif;
      }
      .countr-modal_add {
        color: #067df7;
        float: left;
        font-size: 24px;
        font-weight: bold;
        margin: 12px auto;
        text-align: center;
      }
      .countr-modal_close {
        margin-bottom: 25px;
        font-size: 14px;
        color: red;
        float: right;
      }
    `}</style>
    <div className="countr-modal_close" onClick={close}>close</div>
    <div>
      <input type="text" placeholder="Description" ref={inputRef} className="countr-input_add"/>
      <div className="countr-modal_add" onClick={add}>add</div>
    </div>
  </div>
)