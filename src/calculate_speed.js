
function speedup(){
    if (blockspeed > -8)	
        blockspeed -= 0.005;
    if (blockspeed > -10 && blockspeed <= -8)
        blockspeed -= 0.004;
    if (blockspeed <= -10 && blockspeed > -12)
        blockspeed -= 0.003;
    if (blockspeed <= -12 && blockspeed > -13)
        blockspeed -= 0.002;
    if (blockspeed <= -13 && blockspeed > -18)
        blockspeed -= 0.0005;
    if (blockspeed <= -18)
        blockspeed -= 0.0001;
}