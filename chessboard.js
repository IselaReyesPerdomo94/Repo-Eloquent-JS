//trying to make a chessboard with js 1st attempt

let solid = "#";
let whiteboard= "_";
let limit = 4;
let secondlimit = 3;

for(let i = 0; i < limit; i++){
  for(let square = 0; square <=secondlimit; square++)
  document.write(whiteboard + solid);
  document.write("<br>");
  for(let black = 0; black <=secondlimit; black++)
  document.write(solid + whiteboard);
document.write("<br>");}
