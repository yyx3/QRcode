// Cloudflare Workers 入口函数
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// 处理请求的函数
async function handleRequest(request) {
  const userAgent = request.headers.get('User-Agent').toLowerCase()

  // 判断是否为微信浏览器
  const isWeChat = userAgent.includes('micromessenger')

  // 如果是微信浏览器，返回警告页面
  if (isWeChat) {
    return new Response(getWeChatWarningPage(), {
      headers: { 'Content-Type': 'text/html' }
    })
  }

  // 如果不是微信浏览器，返回跳转页面
  return new Response(getRedirectPage(), {
    headers: { 'Content-Type': 'text/html' }
  })
}

// 微信浏览器警告页面的 HTML
function getWeChatWarningPage() {
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>禁止微信浏览器打开</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 0; }
        img { width: 100%; height: auto; }
      </style>
    </head>
    <body>
      <img src="https://dxfg.zeabur.app/img/162.jpg" alt="警告图片">
    </body>
    </html>
  `
}

// 非微信浏览器跳转页面的 HTML
function getRedirectPage() {
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>页面跳转</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; margin: 0; }
        .buttons { margin: 20px 0; }
        .button { display: inline-block; width: 180px; height: 50px; line-height: 50px; margin: 10px; font-size: 16px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; text-align: center; transition: background-color 0.3s; }
        .button:hover { background-color: #0056b3; }
      </style>
    </head>
    <body>
      <div class="buttons">
        <a href="https://www.payvpp.top/" class="button" target="_blank"><b>下单网站 ①</b></a>
        <a href="https://www.suxavpnonline.shop/" class="button" target="_blank"><b>下单网站 ②</b></a>
        <a href="https://vpp.fenguosuxiaonline.top/" class="button" target="_blank"><b>下单网站 ③</b></a>
        <a href="https://tawk.to/chat/67078bc702d78d1a30ef65d0/1i9qnk1me" class="button" target="_blank"><b>在线客服</b></a>
        <a href="https://qm.qq.com/q/yqhXwi231C" class="button" target="_blank"><b>QQ客服</b></a>
      </div>
    </body>
    </html>
  `
}
