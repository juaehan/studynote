import path from 'path';

/** (2) 경로 합치기 */
// 파라미터의 제한이 없다
// 조합된 경로 문자열에 해당하는 path가 실제로 존재하는지는 상관 없다.
const currentPath = path.join('C:/User/hello/word', 'myphoto', '../photo.jpg');
console.group('path.join');
console.debug(currentPath);
console.groupEnd();