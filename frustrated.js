const face = `
<style>
.frustrated {
    transition: height 1s ease;
}
.frustrated summary::-webkit-details-marker { 
    display:none;
}
details.frustrated > summary:first-of-type {
    list-style-type: none;
}
.frustrated .icon {
    -moz-osx-font-smoothing:grayscale;
    backface-visibility:hidden;
    transform:translateZ(0);
    transition:transform 0.25s ease-out;
}
.frustrated .icon:hover {
    transform: scale(1.2);
}
.frustrated[open] .icon:hover {
    transform:none;
}
.frustrated[open] .close {
    display: inline!important;
    float: right;
}
</style>
<details class="frustrated absolute right-1 bottom-1 right-2-ns bottom-2-ns fixed">
  <summary class="f1 icon pointer outline-0">😠<span class="close dn f2 o-40">❌</span></summary>
  <div class="f4 bg-black-80 pa3 br2">
    <div class="step1">
        <input type="button" value="Your service pisses me off."
            class="db bg-red white pa2 br2 bn grow"
            onclick="
                document.querySelector('.frustrated .step1').classList.add('dn');
                document.querySelector('.frustrated .step2').classList.remove('dn');
            "
        >
        <div class="f6 mt2">Your click tells us to do better</div>
    </div>
    
    <div class="step2 dn"> 
        <div class="red">✅ Got it, we'll get our act together soon, we hope.</div>

        <label class="mt3"><!--<div>If we may ask, tell us why:</div>-->
            <textarea placeholder="What's pissing you off?"
                class="h3 mt2 db w-100 pa1"
            ></textarea>
            <input type="button" value="Send" class="db mt2 bg-red white pv2 ph3 br2 bn"
                onclick="
                    document.querySelector('.step2 label').classList.add('dn');
                    document.querySelector('.step2 .recieved').classList.remove('dn');
                "
            >
            <div class="f6 mt2">Our engineers read every message</div>
        </label>
        <div class="recieved red dn mt3">
            ✅ 📨 We've gotten your message.
            <br>Our engineers will read it.
            <br>Thank you.
        </div>
    </div>
  <div>
</details>
`
document.querySelector('body').insertAdjacentHTML( 'beforeend', face );