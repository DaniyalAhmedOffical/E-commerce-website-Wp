"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index=require("./index-1d07a497.js"),util=require("./util-efe303f1.js"),prestoActionBarControllerCss=":host{display:block}",PrestoActionBar=class{constructor(t){index.registerInstance(this,t),this.actionBarStateChange=index.createEvent(this,"actionBarStateChange",7),this.ended=void 0,this.config=void 0,this.currentTime=void 0,this.duration=void 0,this.direction=void 0,this.youtube=void 0,this.show=!1,this.youtubeRenderKey=1,this.percentagePassed=0}componentWillLoad(){this.handleDuration()}handleDuration(){this.handleTime()}handleEnded(t){var e;if(t){if(100!==(null===(e=null==this?void 0:this.config)||void 0===e?void 0:e.percentage_start))return;this.show=!0}}handlePercentagePassed(){this.percentagePassed=this.currentTime/this.duration*100}handleTime(){this.checkTime()}checkTime(){var t,e;(null===(t=null===window||void 0===window?void 0:window.wp)||void 0===t?void 0:t.blocks)?this.show=!0:this.show=util.timePassed({current:this.currentTime,duration:this.duration,showAfter:null===(e=this.config)||void 0===e?void 0:e.percentage_start})}handleButtonCountChange(t,e){(null==t?void 0:t.button_count)!==(null==e?void 0:e.button_count)&&this.youtubeRenderKey++,(null==t?void 0:t.enabled)&&this.handleDuration()}youtubeButton(){var t,e,o,n;if("youtube"===(null===(t=this.config)||void 0===t?void 0:t.button_type)&&(null===(e=this.youtube)||void 0===e?void 0:e.channelId))return index.h("presto-youtube-subscribe-button",{key:this.youtubeRenderKey,channel:null===(o=this.youtube)||void 0===o?void 0:o.channelId,showCount:null===(n=this.config)||void 0===n?void 0:n.button_count})}customButton(){var t,e,o,n,i,r,s,a,d,u,l;if("custom"===(null===(t=this.config)||void 0===t?void 0:t.button_type))return index.h("presto-player-button",{type:"primary",size:"small",href:null===(o=null===(e=this.config)||void 0===e?void 0:e.button_link)||void 0===o?void 0:o.url,target:(null===(i=null===(n=this.config)||void 0===n?void 0:n.button_link)||void 0===i?void 0:i.opensInNewTab)?"_blank":"_self",style:Object.assign(Object.assign({"--presto-player-button-border-radius":`${null===(r=this.config)||void 0===r?void 0:r.button_radius}px`},(null===(s=this.config)||void 0===s?void 0:s.button_color)?{"--presto-player-button-color":`${null===(a=this.config)||void 0===a?void 0:a.button_color}`}:{}),(null===(d=this.config)||void 0===d?void 0:d.button_text_color)?{"--presto-player-button-text":`${null===(u=this.config)||void 0===u?void 0:u.button_text_color}`}:{})},null===(l=this.config)||void 0===l?void 0:l.button_text)}handleCtaStateChange(t){this.actionBarStateChange.emit(t)}render(){var t,e;return index.h("presto-action-bar-ui",{open:this.show,style:{"--presto-action-bar-background":(null===(t=this.config)||void 0===t?void 0:t.background_color)||"#1d1d1d"}},null===(e=this.config)||void 0===e?void 0:e.text,index.h("div",{slot:"button"},this.youtubeButton(),this.customButton()))}get el(){return index.getElement(this)}static get watchers(){return{duration:["handleDuration","handlePercentagePassed"],ended:["handleEnded"],currentTime:["handlePercentagePassed","handleTime"],config:["handleButtonCountChange"],show:["handleCtaStateChange"]}}};PrestoActionBar.style=":host{display:block}";const prestoActionBarUiCss=":host{display:block;overflow:hidden}.bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;background:var(--presto-action-bar-background, #1d1d1d);color:#fff;padding:0 var(--presto-action-bar-padding, 6px);line-height:1em;font-size:16px;margin-top:-100%;transition:margin var(--presto-action-bar-animation-speed, 0.5s) ease-in-out;transform:translate3d(0);border-radius:0px 0px var(--presto-player-border-radius) var(--presto-player-border-radius)}.bar.bar--open{margin-top:0}.bar__button{margin:var(--presto-action-bar-padding, 6px);display:flex;align-items:center}.bar__content{margin:var(--presto-action-bar-padding, 6px);width:100%;text-align:center}@media screen and (min-width: 480px){.bar__content{width:auto}}",PrestoActionBarUi=class{constructor(t){index.registerInstance(this,t),this.open=void 0}render(){return index.h("div",{class:{bar:!0,"bar--open":this.open}},index.h("span",{part:"content",class:"bar__content"},index.h("slot",null)),index.h("span",{part:"button",class:"bar__button"},index.h("slot",{name:"button"})))}};PrestoActionBarUi.style=prestoActionBarUiCss;const prestoYoutubeSubscribeButtonCss=":host{display:block}",PrestoYoutubeSubscribeButton=class{constructor(t){index.registerInstance(this,t),this.channel=void 0,this.layout="default",this.showCount=void 0}waitForApi(t){var e=setInterval((function(){var o;(null===(o=null===window||void 0===window?void 0:window.gapi)||void 0===o?void 0:o.ytsubscribe)&&(clearInterval(e),t())}),50)}componentDidLoad(){const t=document.createElement("script");t.type="text/javascript",t.async=!1,t.src="https://apis.google.com/js/platform.js";const e=document.getElementsByTagName("script")[0];e&&e.parentNode.insertBefore(t,e),this.waitForApi((()=>{window.gapi.ytsubscribe.render(this.textInput,{channelId:this.channel,layout:this.layout,count:this.showCount?"default":"hidden"})}))}render(){return index.h("div",{class:"g-ytsubscribe",ref:t=>this.textInput=t})}};PrestoYoutubeSubscribeButton.style=":host{display:block}",exports.presto_action_bar_controller=PrestoActionBar,exports.presto_action_bar_ui=PrestoActionBarUi,exports.presto_youtube_subscribe_button=PrestoYoutubeSubscribeButton;