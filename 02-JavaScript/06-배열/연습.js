const student = ['둘리', '도우너', '또치', '희동'];
const grade = [
    [78,89,96],
    [62,77,67],
    [54,90,80],
    [100,99,98],
];

let sum=0, avg=0;
var class_sum = 0;
var clss_avg = 0;

for(let i=0; i<grade.length; i++){
    sum = 0;

    for(let j=0; j<grade[i].length; j++){
        sum += grade[i][j];
    }

    avg = sum / grade[i].length

    class_sum += avg;
    avg = avg.toFixed(2);
    
    console.log(student[i] + "총점: " + sum + "점, 평균: "+ avg + "점");
}

class_avg = class_sum/student.length;
class_avg.toFixed(2);
console.log("반평균= "+class_avg +"점");