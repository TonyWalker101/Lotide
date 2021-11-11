const flatten = require("../flatten");

// Should equal [1, 2, 3, 4, 5, 6]
flatten([1, 2, [3, 4], 5, [6]]); 