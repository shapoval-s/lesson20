

let displays = String ( prompt('Властивість display може отримувати: block; inline; flex; grid; none;  значень. введіть значення:', ''));
console.log( displays);

switch(displays)
{
 case displays = 'block':
    alert(`displey:`+ displays);
    break;
 case displays = 'inline':
    alert('displey:' + displays);
    break;
    case displays = 'flex':
      alert('displey:' + displays);
      break;
    case displays = 'grid':
      alert('displey:' + displays);
      break;
    case displays = 'none':
      alert('displey:' + displays);
      break;
    default:
     alert("set'displey:inline-block;'");
}
