/* 
  Extend public suffix list by adding to this list.
  This can include any website that allows user-generated content such as medium.com, wordpress.com, gitbook.io, etc.
  Do not add real businesses that are using subdomains that are created by the company itself. You will enable false positives. 
  If you see a website that is not a hosting provider on this list, please remove it.
  If too many obscure hosting providers become a problem, we should reduce the tranco threshold from 200,000 to help filter these out.
*/
export const customTlds = [
  "gitbook.io",
  "mypinata.cloud",
  "fleek.co",
  "mystrikingly.com",
  "weebly.com",
  "wordpress.com",
  "surge.sh",
  "us.to",
  "typeform.com",
  "mooo.com",
  "netlify.com",
  "zendesk.com",
  "godaddysites.com",
  "line.pm",
  "000webhostapp.com",
  "work.gd",
  "finance.blog",
  "wuaze.com",
  "eth.limo",
  "myddns.me",
  "on-fleek.app",
  "42web.io",
  "tistory.com",
  "bravesites.com",
  "webcindario.com",
  "x10.mx",
  "ukit.me",
  "mypixieset.com",
  "w3spaces.com",
  "teachable.com",
  "mobirisesite.com",
  "gitpod.io",
  "onepage.website",
  "creatorlink.net",
  "flazio.com",
  "educatorpages.com",
  "dynamic-dns.net",
  "webhostbox.net",
  "xf.cz",
  "website3.me",
  "page.link",
  "hpage.com",
  "livejournal.com",
  "square.site",
  "uk.to",
  "run.place",
  "tiiny.site",
  "jimdosite.com",
  "cloudwaysapps.com",
  "my03.com",
  "stackstaging.com",
  "1gb.ru",
  "publicvm.com",
  "home.blog",
  "webz.cz",
  "rf.gd",
  "over-blog.com",
  "tilda.ws",
  "odoo.com",
  "company.site",
  "ic0.app",
  "x24hr.com",
  "mybluehost.me",
  "zyns.com",
  "zzux.com",
  "gr8.com",
  "icp0.io",
  "unaux.com",
  "medium.com",
  "tumblr.com",
  "gopeerclick.com",
  "preview-domain.com",
  "strangled.net",
  "wikidot.com",
  "nicepage.io",
  "edublogs.org",
  "ydns.eu",
  "kiln.fi",
  "great-site.net",
  "site123.me",
  "drv.tw",
  "imweb.me",
  "qhigh.com",
  "clickfunnels.com",
  "tiny.us",
  "mefound.com",
  "code.blog",
  "orderonline.id",
  "fartit.com",
  "easterndns.com",
  "ns01.us",
  "neocities.org",
  "wz.cz",
  "euweb.cz",
  "nichost.ru",
  "heliohost.org",
  "zzz.com.ua",
  "hstgr.cloud",
  "nxcli.io",
  "b-cdn.net",
  "codeanyapp.com",
  "tw1.ru",
  "fanlink.to",
  "alt.technology",
  "p2pify.com",
  "zebra.com",
  "railway.app",
  "unicornplatform.page",
  "arbitrum-internal.io",
  "4everproxy.com",
  "formstack.com",
  "xyro.io",
  "ulb.be",
  "onerpc.com",
  "newzenler.com",
  "rssing.com",
  "kr.com",
  "ghost.io",
  "voog.com",
  "beehiiv.com",
  "b4a.app",
  "rpcpool.com",
  "improd.pro",
  "dubya.net",
  "viewdns.net",
  "selcdn.ru",
  "cleansite.us",
  "longmusic.com",
  "jkub.com",
  "swanndvr.net",
  "dsmtp.com",
  "exponea.com",
  "ck.page",
  "1688.com",
  "authorizeddns.us",
  "multiscreensite.com",
  "iaasdns.com",
  "myftp.info",
  "onelink.me",
  "xxuz.com",
  "temporary.link",
  "yikj.work",
  "talentlms.com",
  "techcombank.com.vn",
  "weeblysite.com",
  "ignorelist.com",
  "dns04.com",
  "sci-hub.st",
  "awstrack.me",
  "faviconkit.com",
  "codefi.network",
  "serveusers.com",
  "crabdance.com",
  "dns05.com",
  "myddns.com",
  "fromsmash.com",
  "do.am",
  "slack.com",
  "swtest.ru",
  "joomla.com",
  "music.blog",
  "96.lt",
  "hol.es",
  "16mb.com",
  "com.com",
  "coolpage.biz",
  "at.ua",
  "ucoz.org",
  "unas.cz",
  "ezyro.com",
  "tekcities.com",
  "regruhosting.ru",
  "h1n.ru",
  "patientpop.com",
  "sendgrid.net",
  "bio.link",
  "hostingersite.com",
  "squarespace.com",
  "hostpapavps.net",
  "w3s.link",
  "substack.com",
  "filesusr.com",
  "googleusercontent.com",
  "contaboserver.net",
  "sendibt3.com",
  "systeme.io",
  "cdn36.com",
  "klclick3.com",
  "mrbonus.com",
  "gettrials.com",
  "conohawing.com",
  "ua.pt",
  "infinitypowersvip.com",
  "hosted-by-vdsina.ru",
  "sg-host.com",
  "lflink.com",
  "ezua.com",
  "timeweb.ru",
  "site.com",
  "myclickfunnels.com",
  "urlgeni.us",
  "bigmoney.biz",
  "ddnss.eu",
  "jigsy.com",
  "duda.co",
  "infura-ipfs.io",
  "shivtr.com",
  "creator-spring.com",
  "app.com",
  "splashthat.com",
  "000.pe",
  "free.nf",
  "elementfx.com",
  "had.su",
  "dorik.io",
  "linkpool.io",
  "univer.se",
  "codeanywhere.com",
  "4everland.io",
  "serveo.net",
  "site44.com",
  "cloudclusters.net",
  "fleek.cool",
  "serv00.net",
  "keenetic.pro",
  "epizy.com",
  "ampproject.org",
  "zohosites.com",
  "webador.com",
  "groovehq.com",
  "ns01.info",
  "kinsta.cloud",
  "app.link",
  "25u.com",
  "graphy.com",
  "dora.run",
];
