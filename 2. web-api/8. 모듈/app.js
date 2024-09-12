import { $btn as $button, $pText as $text } from './getDom.js';
import clickHandler from './event.js';
import {pow, add} from './operate.js';

// 임포트한 데이터를 별칠을 붙여서 사용할 시에는
// 동일한 이름의 변수를 선언하는 것을 피해 주세요.
const $btn = '123';
console.log(`$btn의 값: ${$btn}`);
console.log(`임포트한 btn: ${$button}`);


// $button.addEventListener('click', () => {
//   alert('버튼 클릭됨!');
// });

$button.addEventListener('click', clickHandler);