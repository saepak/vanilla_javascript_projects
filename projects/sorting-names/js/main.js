

const bands = [
  'The Plot in You', 
  'The Devil Wears Prada', 
  'Pierce the Veil', 
  'Anywhere But Here',
  'Norma Jean', 
  'The Bled', 
  'Say Anything', 
  'We Came as Romans', 
  'Counterparts',
];

function strip(bandName) {
  return bandName.replace(/^(a |the |an)/i, '').trim()
  //대소문자 관계없이 a,the,an을 제거하고 공백을 제거
  //the, a, an을 제외하고 알파벳순으로 정렬
}

const sortedBands = bands.sort((a,b)=> strip(a) > strip(b) ? 1 : -1)
// 문자를 알파벳 순으로 정렬함

document.querySelector('#bands').innerHTML =
  sortedBands
    .map(band => `<li>${band}</li>`)
    .join('')

console.log(sortedBands)