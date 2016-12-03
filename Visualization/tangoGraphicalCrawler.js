var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem)
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
    //init data

    var response = {
    "searchType": "BFS",
    "https://stackoverflow.com/questions": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/questions?sort=newest",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/questions",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "http://chat.stackoverflow.com": {
        "children": [],
        "kw": false
    },
    "http://meta.stackoverflow.com": {
        "children": [
            "http://meta.stackoverflow.com",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "http://stackoverflow.blog",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "http://stackoverflow.com/company/about",
            "http://chat.stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/login?ssrc=site_switcher&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackexchange.com/sites",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackexchange.com/sites": {
        "children": [
            "https://stackexchange.com",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog"
        ],
        "kw": false
    },
    "http://stackoverflow.blog": {
        "children": [],
        "kw": false
    },
    "https://stackexchange.com": {
        "children": [
            "https://stackexchange.com",
            "https://stackexchange.com/sites",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog"
        ],
        "kw": false
    },
    "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2fquestions",
            "https://stackexchange.com/sites",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/tour": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/help",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/help": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/help",
            "https://stackoverflow.com/help",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help/badges",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://meta.stackoverflow.com": {
        "children": [
            "https://meta.stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "http://stackoverflow.com/company/about",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "http://stackoverflow.com/company/about": {
        "children": [
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "http://stackoverflow.blog",
            "http://stackoverflow.com/company/about",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "http://stackoverflow.com/company/about",
            "http://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "http://stackoverflow.com/company/about",
            "http://stackoverflow.blog",
            "http://stackoverflow.com/company/about",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com"
        ],
        "kw": false
    },
    "http://business.stackoverflow.com/?ref=topbar_help": {
        "children": [],
        "kw": false
    },
    "https://stackoverflow.com/": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/documentation": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/documentation",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/tags": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/users": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/help/badges": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/help",
            "https://stackoverflow.com/help/badges",
            "http://meta.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "http://chat.stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com/help/badges",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/questions/ask": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackexchange.com/sites",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/users/story/join": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    },
    "https://stackoverflow.com/questions?sort=newest": {
        "children": [
            "https://stackoverflow.com",
            "http://chat.stackoverflow.com",
            "https://stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com/users/signup?ssrc=site_switcher&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackexchange.com/sites",
            "http://stackoverflow.blog",
            "https://stackexchange.com",
            "https://stackoverflow.com/questions?sort=newest",
            "https://stackoverflow.com/questions?sort=newest",
            "https://stackoverflow.com/users/signup?ssrc=head&returnurl=%2fusers%2fstory%2fcurrent&utm_source=stackoverflow.com&utm_medium=dev-story&utm_campaign=signup-redirect",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/questions?sort=newest",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "https://meta.stackoverflow.com",
            "http://stackoverflow.com/company/about",
            "http://business.stackoverflow.com/?ref=topbar_help",
            "https://stackoverflow.com/",
            "https://stackoverflow.com/questions",
            "https://stackoverflow.com/jobs?med=site-ui&ref=jobs-tab",
            "https://stackoverflow.com/documentation",
            "https://stackoverflow.com/tags",
            "https://stackoverflow.com/users",
            "https://stackoverflow.com/help/badges",
            "https://stackoverflow.com/questions/ask",
            "https://stackoverflow.com/users/story/join",
            "https://stackoverflow.com/questions?sort=newest",
            "https://stackoverflow.com/questions?sort=newest",
            "https://stackoverflow.com/questions?sort=newest",
            "http://stackoverflow.com/company/about",
            "https://stackoverflow.com/tour",
            "https://stackoverflow.com/help",
            "http://chat.stackoverflow.com",
            "http://meta.stackoverflow.com",
            "https://stackoverflow.com"
        ],
        "kw": false
    }
}


var tempJSON =  Object.keys(response)[1];

var responseKeys = Object.keys(response);

console.log("These are the contents of responseKeys: " + JSON.stringify(responseKeys));

var json = {

    id: "0",
    name: "<a target='_blank' href = "+ JSON.stringify(tempJSON) +"><span title= "+JSON.stringify(tempJSON)+"><img src='./jack.png'></span></a>" + "Parent",
    children: [],
    data: {"$type" : "custom"}
}

console.log("This is the first node of json:" + JSON.stringify(json));

var count = Object.keys(response).length;

console.log("This is the count: "+ count);

// var test = response[responseKeys[1]].children;

// var testCount = Object.keys(test).length;

// console.log("This is testCount: " + testCount);

// console.log("This is the response keys: " + JSON.stringify(test));

// console.log("This is a test: " + JSON.stringify(test[0]));



var j = 0;

if(response.searchType == "BFS"){

    for(var i = 2; i < count; i++){
        
        console.log("This is the current count: " + i);

        // var test = response[responseKeys[i-1]].children;

        // var testCount = Object.keys(test).length;

        // console.log("This is testCount: " + testCount);

        // console.log("This is the response keys: " + JSON.stringify(test));

        // console.log("This is a test: " + JSON.stringify(test));

        json.children[i-2] = {
            id: String(i),
            name: "<a target='_blank' href = "+ JSON.stringify(responseKeys[i]) +"><span title= "+ JSON.stringify(responseKeys[i])+"><img src='./jack.png'></span></a>" + "Child",
            children: [],
            data: {"$type" : "custom"}
        }

      //  if(testCount > 0 ){

      //   console.log("json.children: " + JSON.stringify(json.children));

      //   var jsonChildArr = Object.keys(json.children)[];

      //   console.log("jsonChildArr: " + JSON.stringify(jsonChildArr));
        
      //   for(var l = 0; l < testCount; l++ ){
            
      //       // console.log("Testing loop" + l);

      //       jsonChildArr[i].children[l] = {
      //           id: String(j) + "_" + String(l),
      //           name: "<a target='_blank' href = "+ JSON.stringify(test[l]) +"><span title= "+ JSON.stringify(test[l])+"><img src='./jack.png'></span></a>" + "Child",
      //           children: [],
      //           data: {"$type" : "custom"}
      //       } 
      //   }
      // }

        j++;

        var childObj = response[responseKeys[i]];
        console.log("childObj: " + JSON.stringify(childObj));
        var childKeys = Object.keys(childObj);
        console.log("childKeys: " + JSON.stringify(childKeys));
        var childCount = childKeys.length;
        console.log("childCount: " + childCount);

        // for(var k = 0; k < childCount-1; k++){

            var grandChildObj = childObj[childKeys[0]];

            for(key in grandChildObj){

                console.log("This is the key for grandChildObj: " + key);
                console.log("grandChildObj index: " + key + " is " + grandChildObj[key]);

                var tempGrandchild = grandChildObj[key];

                console.log(JSON.stringify(tempGrandchild));
                console.log("This is i:" + i);
                console.log(JSON.stringify(json.children[i-2]));

                json.children[i-2].children[key] = {
                  id: String(key) + "_" + String(i) + "_" + String(j),
                  name: "<a target='_blank' href = "+ JSON.stringify(tempGrandchild)+"><span title= "+JSON.stringify(tempGrandchild)+"><img src='./jack.png'></span></a>" + "Child",
                  children: [],
                  data: {"$type" : "custom"}
                }
                console.log(json.children[i-2].children[key].id);

            }

            // console.log(json.children[i].children[k].id);
        // }


    }
}
else if(response.searchType == "DFS"){

    // for(var i = 1; i < count; i++){

    //     console.log("This is the responseKeys: " + JSON.stringify(responseKeys));

    //     json.children[i-1] = {
    //         id: String(j) + "_" + String(i),
    //         name: "<a target='_blank' href = "+ JSON.stringify(responseKeys[i+1]) +"><span title= "+ JSON.stringify(responseKeys[i+1])+"><img src='./jack.png'></span></a>" + "Child",
    //         children: [],
    //         data: {"$type" : "custom"}
    //       }
    // }

    dfsRecur(json, responseKeys, count-2, 2);


}

function dfsRecur(obj, obj2, countdown, place){

    var keys = Object.keys(obj2);
    console.log("obj keys: " + JSON.stringify(keys));


    if(countdown > 0){
        
        childObj = obj[keys[place]];

        obj.children[0] = {
            id: String(countdown) + "_" + String(place),
            name: "<a target='_blank' href = "+ JSON.stringify(obj2[place]) +"><span title= "+ JSON.stringify(obj2[place])+"><img src='./jack.png'></span></a>" + "Child",
            children: [],
            data: {"$type" : "custom"}
        }

        dfsRecur(obj.children[0], obj2, countdown-1, place+1);
    }

}

function countKeysPerLevel(store, level, obj) {
    var keys = Object.keys(obj);
    var count = keys.length;

    store[level] = (store[level] || 0) + count;

    for (var i = 0; i < count; i++) {
        var childObj = obj[keys[i]];
        if (typeof childObj === 'object') {
            countKeysPerLevel(store, level + 1, childObj);
        }
    }
}

var result = {};
countKeysPerLevel(result, 0, json);

console.log("These are the results:");
console.log(JSON.stringify(json));






//     var json = 
    // {
    //     "id": "347_0",
    //     "name": "<a target='_blank' href='http://www.nytimes.com/'><span title='http://www.nytimes.com/'><img src='/images/jack.png'></span></a> Parent",
    //     "children": [{
    //         "id": "126510_1",

    //         "name": "<a target='_blank' href='http://www.nytimes.com/content/help/site/ie9-support.html'><span title='http://www.nytimes.com/content/help/site/ie9-support.html'><img src='/images/jack.png'></span></a> Child",
    //         "data": { 
    //             "$type":"custom"
    //         },
    //         "children": []
    //     }, {
    //         "id": "126510_2",
    //         "name": "<a target='_blank' href='http://www.nytimes.com/#top-news'><span title='http://www.nytimes.com/#top-news'><img src='/images/jack.png'></span></a> Child",
    //         "data": { 
    //             "$type":"custom"
    //           },
    //         "children": []
    //     }, {
    //         "id": "126510_3",
    //         "name": "<a target='_blank' href='http://www.nytimes.com/#site-index-navigation'><span title='http://www.nytimes.com/#site-index-navigation'><img src='/images/jack.png'></span></a> Child",
    //         "data": { 
    //             "$type":"custom"
    //         },
    //         "children": []
    //     }, {
    //         "id": "126510_4",
    //         "name": "<a target='_blank' href='http://cn.nytimes.com'><span title='http://cn.nytimes.com'><img src='/images/jack.png'></span></a> Child",
    //         "data": { 
    //             "$type":"custom"
    //         },
    //         "children": []
    //     }, {
    //         "id": "126510_5",
    //         "name": "<a target='_blank' href='http://www.nytimes.com/es/'><span title='http://www.nytimes.com/es/'><img src='/images/jack.png'></span></a> Child",
    //         "data": { 
    //             "$type":"custom"

    //         },
    //         "children": []
    //     }],
    //     "data": []
    // };
    //end
    var infovis = document.getElementById('infovis');
// <<<<<<< HEAD
    var w = 2000, h = 2300;
    
// =======
    

// >>>>>>> origin/master
    //init Hypertree
    var ht = new $jit.Hypertree({
      //id of the visualization container
      injectInto: 'infovis',
      //canvas width and height
      width: 10000,
      height: 150000,
      //Change node and edge styles such as
      //color, width and dimensions.
      Node: {
          dim: 9,
          color: "#f00",
          type: "custom",
          height: 5,
          width: 15
      },
      Edge: {
          lineWidth: 5,
          color: "#088"
      },
      onBeforeCompute: function(node){
          Log.write("centering");
      },
      //Attach event handlers and add text to the
      //labels. This method is only triggered on label
      //creation
      onCreateLabel: function(domElement, node){
          domElement.innerHTML = node.name;
          $jit.util.addEvent(domElement, 'click', function () {
              ht.onClick(node.id, {
                  onComplete: function() {
                      ht.controller.onComplete();
                  }
              });
          });
      },
      //Change node styles when labels are placed
      //or moved.
      onPlaceLabel: function(domElement, node){
          var style = domElement.style;
          style.display = '';
          style.cursor = 'pointer';
          if (node._depth <= 1) {
              style.fontSize = "0.8em";
              style.color = "#ddd";

          } else if(node._depth == 2){
              style.fontSize = "0.7em";
              style.color = "#555";

          } else {
              style.display = 'none';
          }

          var left = parseInt(style.left);
          var w = domElement.offsetWidth;
          style.left = (left - w / 2) + 'px';
      },

      onComplete: function(){
          Log.write("done");

          //Build the right column relations list.
          //This is done by collecting the information (stored in the data property)
          //for all the nodes adjacent to the centered node.
          var node = ht.graph.getClosestNodeToOrigin("current");
          var html = "<h4>" + node.name + "</h4><b>Connections:</b>";
          html += "<ul>";
          node.eachAdjacency(function(adj){
              var child = adj.nodeTo;
              if (child.data) {
                  var rel = (child.data.band == node.name) ? child.data.relation : node.data.relation;
                  html += "<li>" + child.name + " " + "<div class=\"relation\">(relation: " + rel + ")</div></li>";
              }
          });
          html += "</ul>";
          $jit.id('inner-details').innerHTML = html;
      }
    });


    //load JSON data.
    ht.loadJSON(json);
    //compute positions and plot.
    ht.refresh();
    //end
    ht.controller.onComplete();


}

//Custom node
$jit.Hypertree.Plot.NodeTypes.implement({
  //// this node type is used for plotting resource types (web)
// <<<<<<< HEAD
//    'custom': 
//        { 'render': function(node, canvas) { 
//            var ctx = canvas.getCtx(); 
//            var img = new Image(); 
//            var pos = node.pos.getc(true); 
//            img.onload = function(){ 
//                ctx.drawImage(img,pos.x-25, pos.y-25); 
//            }; 
//            img.src = 'C:/Users/DarbyBeltran/Desktop/CS419/jack.png'; 
//           } 
//       } 
// });
// =======
   'custom':
       { 'render': function(node, canvas) {
           var ctx = canvas.getCtx();
           var img = new Image();
           var pos = node.pos.getc(true);
           img.onload = function(){
               ctx.drawImage(img,pos.x-15, pos.y-15);
           };
           img.src = './jack.png';
          }
      }
});
// >>>>>>> origin/master
