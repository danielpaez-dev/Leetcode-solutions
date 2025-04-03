var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    return [
        [...set1].filter(n => !set2.has(n)),
        [...set2].filter(n => !set1.has(n))
    ];
};