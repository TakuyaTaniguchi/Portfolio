import Entry from "entry";
import BrowserDetect from "modules/BrowserDetect";
import SmoothScroll from "modules/SmoothScroll";
import SpNavi from "modules/SpNavi";
import ToTop from "modules/ToTop";
import link_icon from "modules/link_icon";
import { TweenMax, TimelineMax, Elastic } from 'gsap'

/* ===============================================
bg Art
=============================================== */
// const bgArt = document.querySelector('.bg-art');
// const bodyWidth = document.body.clientWidth;
// const bodyHeight = document.body.clientHeight;
// console.log(bodyWidth, bodyHeight)

// const divs = Array.from({length: 6}, () => {
//       return document.createElement("div");
//       // return tempEl.textContent = 'aaaa';
//   })
// divs.forEach(div => {
//     TweenMax.set(div,{
//         position: "absolute",
//         x: `${Math.random() * bodyWidth}px`,
//         y: `${Math.random() * bodyHeight}px`,
//         fontSize: "140px"
//     })
//     div.textContent = 'A'
//     bgArt.appendChild(div)
// })



/* ===============================================
SP Navi
=============================================== */
//通常版
let param = {
  target: "#spnavi",
  trigger: ".btn_sp_navi",
  filter: "resposive_flg",
  speed: 200
};
const spnavi = new SpNavi(param);
spnavi.exec();
/* ===============================================
Smooth Scroll
=============================================== */
const sms = new SmoothScroll();
sms.exec();
/* ===============================================
To Top
show/hide toggle
=============================================== */
const totop = new ToTop("#totop", "#global_footer", 100, 400);
totop.exec();

if (module.hot) {
  module.hot.accept();
}

