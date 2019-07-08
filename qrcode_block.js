// ==UserScript==
// @name         拒绝二维码登录
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  出现二维码登录页面，使用账号密码登录。
// @author       Anonymous86x69ashe
// @match        *://*.baidu.com/*
// @match        *://*.douyu.com/*
// @match        *://passport.jd.com/*
// @match        *://login.taobao.com/*
// @match        *://login.tmall.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // pan.baidu.com
  if (location.hostname === 'pan.baidu.com' && location.href.indexOf('disk/home') === -1) {
    var auto = setInterval(function () {
      if (document.getElementById('login-middle') !== null && document.getElementById('login-middle').style.display === 'none') {
        console.log('aaa');
        document.getElementsByClassName("pass-link")[3].click();
        clearInterval(auto);
      }
      if (document.getElementById('passport-login-pop') !== null && document.getElementById('passport-login-pop-api').style.display === 'none') {
        document.getElementsByClassName("pass-link")[3].click();
        clearInterval(auto);
      }
    }, 50);
  }

  // www.baidu.com
  // tieba.baidu.com
  // passport.baidu.com
  if (location.hostname === 'www.baidu.com' || location.hostname === 'tieba.baidu.com' || location.hostname === 'passport.baidu.com') {
    var auto = setInterval(function () {
      if (document.getElementById('passport-login-pop') !== null || document.getElementsByClassName('tang-pass-qrcode')[0].style.display === 'block') {
        document.getElementsByClassName('tang-pass-footerBarULogin')[0].click();
        clearInterval(auto);
      }
    }, 50);
  }

  // douyu.com
  if (location.hostname === 'passport.douyu.com' || location.hostname === 'douyu.com') {
    var auto = setInterval(function () {
      if (document.getElementsByClassName('loginNormal')[0].className.indexOf('hide') !== -1) {
        document.getElementsByClassName('scanicon-toLogin')[0].click();
        clearInterval(auto);
      }
    }, 50);
  }

  // passport.jd.com
  if (location.hostname === 'passport.jd.com') {
    var auto = setInterval(function () {
      if (document.getElementsByClassName('login-box')[0].style.display === 'none') {
        document.getElementsByClassName('login-tab-r')[0].click();
        clearInterval(auto);
      }
    }, 50);
  }

  // login.taobao.com
  if (location.hostname === 'login.taobao.com') {
    var auto = setInterval(function () {
      if (window.getComputedStyle(document.getElementById('J_StaticForm')).display === 'none') {
        document.getElementById('J_Quick2Static').click();
        clearInterval(auto);
      }
    }, 50);
  }

  // login.tmall.com
  if (location.hostname === 'login.tmall.com') {
    var auto = setInterval(function () {
      if (window.getComputedStyle(document.getElementById('J_StaticForm')).display === 'none') {
        document.getElementById('J_Quick2Static').click();
        clearInterval(auto);
      }
    }, 50);
  }
})();