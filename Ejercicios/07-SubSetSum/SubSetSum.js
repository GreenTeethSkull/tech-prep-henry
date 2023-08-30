function subsetSum (nums, n) {
  // Your code here:
  function searchSum(ind, sum) {
    if (sum === n) {
      return true;
    }

    if (ind >= nums.length || sum > n) {
      return false;
    }

    return (
      searchSum(ind + 1, sum + nums[ind]) ||
      searchSum(ind + 1, sum)
    );
  }

  return searchSum(0, 0);
}

module.exports = subsetSum
