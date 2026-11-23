// Problem 15: Merge Sorted Array

// আমাদের দুটি array দেওয়া আছে:
// nums1 = [1, 2, 3, 0, 0, 0]
// m = 3

// nums2 = [2, 5, 6]
// n = 3

// 2. কোন approach ব্যবহার করব?
// আমরা এখানে Three Pointers + Two Pointers technique ব্যবহার করব।

// আমাদের তিনটি pointer থাকবে:
// Pointer	কাজ
// i	nums1-এর শেষ valid element
// j	nums2-এর শেষ element
// k	nums1-এর শেষ position

// let i = m - 1;
// let j = n - 1;
// let k = m + n - 1;

var merge = function (nums1, m,nums2,n){
    let i= m-1;
    let j = n-1;
    let k = m+n-1;
   while (j>=0){
    if (i>=0 && nums1[i]){
        nums1[k] = nums1[i];
        i--;
    }else {
        nums1[k] = nums2[j];
        j--;
    }
    k--;
   } 
};