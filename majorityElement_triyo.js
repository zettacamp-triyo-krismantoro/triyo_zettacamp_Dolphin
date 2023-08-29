
/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
  // Your logic here
  let majority = 0;
  let counter = 0;
  let maximumCounter = 0;
  for (i in nums) {
    for (j in nums) {
      if (nums[i] == nums[j]) {
        counter += 1;
      }
    }
    if (maximumCounter < counter) {
      maximumCounter = counter;
      majority = nums[i];
      counter = 0;
    } 
  }
  return majority;
}

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 1, 2])); // Output: 2 
console.log(majorityElement([2,2,3,3,3,1,3])); // Output: 2 