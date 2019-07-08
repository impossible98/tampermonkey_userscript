// ==UserScript==
// @name         自动展开
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动展开阅读
// @author       Anonymous86x69ashe
// @match        *://blog.csdn.net/*/article/details/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function () {
  'use strict';

  if (location.hostname === 'blog.csdn.net') {
    csdn.copyright.init('', '', '');
    localStorage.setItem('anonymousUserLimit', '');
    if (document.getElementsByClassName('btn-readmore')[0]) {
      document.getElementsByClassName('btn-readmore')[0].click();
    };
  }
})();