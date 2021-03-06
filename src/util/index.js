
export default {
  /**
   * 消息消失框
   */
  toast (msg = '', time = 1500) {
    var toast = document.createElement('div')
    toast.className = 'common-toast common-toast-show'
    toast.innerHTML = msg
    document.body.appendChild(toast)
    toast.style.display = 'block'
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
    var timer = setTimeout(() => {
      toast.className = 'common-toast common-toast-hide'
      clearTimeout(timer)
      var timer2 = setTimeout(() => {
        document.body.removeChild(toast)
        clearTimeout(timer2)
      }, 200)
    }, time)
  },
  /*消息提示框2*/
  showMsg(msg){
    var showmsg = document.createElement("div")
    showmsg.className = 'showMsgTips2 common-toast-show'
    showmsg.innerHTML = msg
    document.body.appendChild(showmsg)
    showmsg.style.display = 'block'
    var timer = setTimeout(() => {
        showmsg.className = 'showMsgTips2 common-toast-hide'
        clearTimeout(timer)
        var timer2 = setTimeout(() => {
          document.body.removeChild(showmsg)
          clearTimeout(timer2)
        },200)
    },1500)
  }
}
