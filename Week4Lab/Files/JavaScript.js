﻿var x = 0; var y = 0; var z = 0; var ct = 0; var rt = 0; var mt = 0; var gt = 0; var stax = 0; var t = 0;
function Item1()
{
    x = x + 1;

    document.getElementById("coffee").innerText = x;

    ct = x * .99;

    document.getElementById("ctotal").innerText = ct.toFixed(2);
}
function Item2()
{
    y = y + 1;

    document.getElementById("redbull").innerText = y;

    rt = y * 2.49;

    document.getElementById("rtotal").innerText = rt.toFixed(2);
}
function Item3() {
    z = z + 1;

    document.getElementById("monster").innerText = z;

    mt = z * 2.99;

    document.getElementById("mtotal").innerText = mt.toFixed(2);
}
function CheckOut()
{
    t = ct + rt + mt;

    document.getElementById("checkout").innerText = t.toFixed(2);

    stax = t * .06;

    document.getElementById("tax").innerText = stax.toFixed(2);

    gt = stax + t;

    document.getElementById("grandTotal").innerText = gt.toFixed(2);
}