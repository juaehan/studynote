
const numOfApples = 123;
const bucketSize = 10;
const numBucket = numOfApples/bucketSize+(numOfApples%bucketSize>0 ? 1 : 0);
console.log(numBucket);