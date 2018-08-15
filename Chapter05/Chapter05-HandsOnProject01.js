"use strict";

document.getElementsByTagName("p")[0].innerHTML = "Web browser name: " + navigator.appName;
document.getElementsByTagName("p")[1].innerHTML = "Web browser version: " + navigator.appVersion;
document.getElementsByTagName("p")[2].innerHTML = "Operating platform: " + navigator.platform;
document.getElementsByTagName("p")[3].innerHTML = "User agent: " + navigator.userAgent;