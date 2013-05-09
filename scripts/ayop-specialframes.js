/*jslint sloppy: true */
var specialframes = [52, 170, 175, 320, 403, 408, 414, 486, 487, 488, 490, 531, 537, 538, 562, 563,
                     564, 637, 638, 640, 641, 642, 659, 660, 661, 832, 833, 834, 835, 838, 855, 856,
                     857, 859, 860, 861, 862, 864, 865, 985, 1004, 1005, 1006, 1018, 1024, 1025,
                     1041, 1042, 1044, 1045, 1049, 1050, 1052, 1053, 1058, 1066, 1067, 1069, 1071,
                     1072, 1073, 1093, 1096, 1123, 1130, 1131, 1142, 1143, 1144, 1146, 1159, 1160,
                     1161, 1178, 1179, 1184];

// Thanks to jfriend00 on http://stackoverflow.com/questions/10264239/fastest-way-to-determine-if-an-element-is-in-a-sorted-array
function binary_search_iterative(a, value) {
    var lo = 0, hi = a.length - 1, mid;
    while (lo <= hi) {
        mid = Math.floor((lo + hi) / 2);
        if (a[mid] > value) {
            hi = mid - 1;
        } else if (a[mid] < value) {
            lo = mid + 1;
        } else {
            return mid;
        }
    }
    return null;
}

function isSpecial(frame) {
    return binary_search_iterative(specialframes, frame) != null;
}