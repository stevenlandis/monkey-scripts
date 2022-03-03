// ==UserScript==
// @name        New script - twitch.tv
// @namespace   Violentmonkey Scripts
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.0
// @author      -
// @description 6/11/2021, 8:24:53 PM
// ==/UserScript==

function isShowingAd() {
  return (
    document.querySelectorAll('[data-a-target="video-ad-label"]').length > 0
  );
  // return document.getElementsByClassName('sc-AxirZ gPbYmL').length > 0;
}
function hideVideo() {
  document.getElementsByTagName("video")[0].muted = true;
  document.getElementsByClassName("video-player__overlay")[0].style.background =
    "white";
  // document.getElementsByClassName('sc-AxjAm brjlDm video-player__overlay')[0].style.background = 'white';
}
function showVideo() {
  document.getElementsByTagName("video")[0].muted = false;
  document.getElementsByClassName("video-player__overlay")[0].style.background =
    "none";
  // document.getElementsByClassName('sc-AxjAm brjlDm video-player__overlay')[0].style.background = 'none';
}

let hasAd = false;
setInterval(() => {
  if (isShowingAd()) {
    if (!hasAd) {
      hasAd = true;
      hideVideo();
    }
  } else {
    if (hasAd) {
      hasAd = false;
      showVideo();
    }
  }
}, 100);

/*
document.getElementsByClassName('sc-AxjAm brjlDm video-player__overlay')[0].style.background = 'white'
document.getElementsByClassName('sc-AxjAm brjlDm video-player__overlay')[0].style.background = 'none'
document.getElementsByTagName('video')[0].muted = true
*/
