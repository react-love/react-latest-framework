
export function isWeixinBrowser(){
    return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

export function isStatEnable() {
    return STAT_ENABLE;
}