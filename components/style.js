const style = `
.countr-items {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.ReactModalPortal > div {
  opacity: 0;
}
.ReactModalPortal .ReactModal__Overlay {
  transition: opacity 200ms ease-in-out;
  background: rgba(0, 0, 0, 0.15);
}
.ReactModal__Overlay--after-open {
  opacity: 1;
}
.ReactModal__Overlay--before-close {
  opacity: 0;
}
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
.app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 35px;
  padding-bottom: 100px;
}
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
h1 {
  color: #067df7;
}
h2 {
  color: rgba(0,0,0,.2);
  margin: 60px auto;
  padding: 13px;
  font-size: 14px;
  text-align: center;
}
h6 {
  font-size: 16px;
  font-weight: normal;
  color: #067df7;
}
.countr-link {
  font-size: 13px;
  color: #bd10e0;
}
.countr-link:hover {
  text-decoration: underline;
}
`

export default style
