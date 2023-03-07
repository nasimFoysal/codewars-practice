let w='words';
function getMiddle(s)
{
  //Code goes here!
  const l = s.length;
  return l%2 === 0 ? s.slice(l/2-1,(l/2)+1):s.slice(l/2,(l/2)+1);
}

console.log(getMiddle(w));