var merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, write = m + n - 1;
  while (j >= 0) nums1[write--] = i >= 0 && nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  return nums1;
};
