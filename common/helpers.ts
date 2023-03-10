import { isMobile, isTablet } from "react-device-detect";
import { pageNames } from "./pageNames";

export const groupByKey = (list, key, {omitKey=false}) => list.reduce((hash, {[key]:value, ...rest}) => ({...hash, [value]:( hash[value] || [] ).concat(omitKey ? {...rest} : {[key]:value, ...rest})} ), {})
export const classNames = (...classes) => classes.filter(Boolean).join(' ');
export const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const isMobileSmall = () => (isMobile && !isTablet);

export const generateUniqueId = () => {
  var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
  var d0 = Math.random()*0xffffffff|0;
  var d1 = Math.random()*0xffffffff|0;
  var d2 = Math.random()*0xffffffff|0;
  var d3 = Math.random()*0xffffffff|0;
  return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
  lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
  lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
  lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

export const getPageUrlByType = (type, slug) => {
  if(type === pageNames.PAGE.name || type === pageNames.ABOUT.name || type === pageNames.BLOG.name) {
    return `/${slug}`;
  }
  else if(!type) return '/';

  return `/${pageNames[type.toUpperCase()].plural}/${slug}`;
}

export const equalsFloat = (a: number|string, b: number|string) => {
  return Math.abs(parseFloat(typeof(a) === 'string' ? a : a.toString()) - parseFloat(typeof(b) === 'string' ? b : b.toString())) < 0.00001;
}

export const toFixedNumber = (digits: number | string, decimals: number) => {
  if(digits === '0.') return 0.0;
  const number = typeof(digits) === 'string' ? parseFloat(digits || '0') : isNaN(digits) ? 0 : digits;
  return parseFloat((number).toFixed(decimals));
}

export const ToReadableNumber = (number: number) => {
  if(number >= 1000000) return `${(number / 1000000).toFixed(2)}M`;
  if(number >= 1000) return `${(number / 1000).toFixed(2)}K`;
  return number.toString();
}