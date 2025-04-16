export function formatAddress(address:string) {
    // 确保地址以 '0x' 开头且长度为42字符
    if (address && address.length === 42 && address.startsWith('0x')) {
        const start = address.slice(0, 6);   // 取前4个字符（0x和第一个字符）
        const end = address.slice(-4);        // 取最后4个字符
        return start + '***' + end;           // 中间部分用'***'替换
    }
    return 'Invalid address';               // 如果地址不符合规范，返回提示
}
