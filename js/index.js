console.log("Your index.js file is loaded weird");
const canvas = document.getElementById("cw");
const context = canvas.getContext("2d");
let mouseY = 0;
let mouseX = 0;
let isDragging = false;
let Mode = 'MOVE_LEFT_END'

function update(i, y_t0, y_t1, c, gam, l, dx, dt) {
    return 1 / (1/ (c*dt)**2 + gam/(2*dt))
     * (1/dx**2 * (y_t1[i+1] - 2*y_t1[i] + y_t1[i-1])
        - 1/(c*dt)**2 * (y_t0[i] - 2*y_t1[i])
        + gam/(2*dt) * y_t0[i] 
        - (l/ dx**2)**2 * (y_t1[i-2] - 4*y_t1[i-1] + 6*y_t1[i] -4*y_t1[i+1] + y_t1[i+2]))
}
class String {
    constructor(N) {
     this.N = N
     this.x = [...Array(this.N)].map((_, i) => i/this.N);
     this.y_t0 = this.x.map(ix => 0)
     this.y_t1 = structuredClone(this.y_t0);
     this.y_t2 = structuredClone(this.y_t0);
     this.gam = 200
     this.l = 0.002
     this.dx = this.x[1] - this.x[0]
     this.c = 1/100
     this.dt = 0.2
   }
   move() {
   };
   }

   function drawString(s, i) {
    context.beginPath();
    context.lineWidth = 5
    context.strokeStyle = "red";
    let{x_cnv: x_cnv0, y_cnv: y_cnv0} = strng2cnv_coords(s.x[i-1], s.y_t2[i-1])
    let{x_cnv: x_cnv1, y_cnv:y_cnv1} = strng2cnv_coords(s.x[i], s.y_t2[i])
    context.moveTo(x_cnv0, y_cnv0);
    context.lineTo(x_cnv1, y_cnv1);
    context.stroke();
   }

   function cnv2strng_coords(x_cnv , y_cnv) {
    return {x_str: x_cnv / canvas.width,
        y_str: (y_cnv - canvas.height/2) / canvas.width}
   }
   
   function strng2cnv_coords(x_str, y_str) {
    return{x_cnv: canvas.width * x_str,
           y_cnv: y_str*canvas.width + canvas.height/2} 
    }

addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
},
);

addEventListener("mousedown" , (e) =>{
    isDragging = true;
},
);

addEventListener("mouseup" , (e) =>{
    isDragging = false;
},
);

addEventListener("resize" , () => setSize());
function setSize() {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
}

s = new String(200)
s.move()