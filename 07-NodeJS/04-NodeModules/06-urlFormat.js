import {urlFormat} from './helper/UtilHelper.js';

const url1 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: 'somepath'
})
console.log('url1:', url1);

const url2 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/somepath'
})
console.log('url2:', url2);

const url3 = urlFormat({
    protocol: 'https',
    hostname: 'example.com',
    pathname: '/somepath',
    port: 8080
})
console.log('url3:', url3);

const url4 = urlFormat({
    protocol: 'http',
    hostname: 'example.com',
    pathname: '/somepath',
    port: 8080
})
console.log('url4:', url4);

const url5 = urlFormat({
    protocol: 'https',
    hostname: 'john:abc@example.com',
    pathname: '/somepath',
    port: 8080,
    
    search: 'item=bike'
})
console.log('url5:', url5);