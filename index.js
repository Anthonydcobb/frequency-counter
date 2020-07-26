//create a function called same that accepts two arrays,  should return true if every value in array has its corresponding value squared in the second array.



// THIS FUNCTION IS O(N^2) quadratic

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]**2)
    if (index === -1) {
      return false;
    }
    // this removes the num from arr2 so you cant reuse numbers
    arr2.splice(index,1)
  }
  return true;
}
  
const result = same([1,3,2],[1,4,9])
console.log(result)

//_______Same function refactored________//