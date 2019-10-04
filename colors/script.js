var date = new Date();
var m = date.getMonth() + 1;
var d = date.getDate();
document.write("<style>@media screen { tr:nth-of-type("+(m+1)+") td:nth-of-type("+(d+1)+"){ background-color: #ada; } }</style>")
