// 识别微信浏览器
export function isWeixinBrowser(){
    return /micromessenger/.test(navigator.userAgent.toLowerCase())
}