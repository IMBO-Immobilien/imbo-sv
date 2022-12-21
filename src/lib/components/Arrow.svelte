<div class="arrows">
    {#if dir === 'left'}
    <!-- <div class={nopad ? 'full-left': 'left'}> -->
    <div class={`arrow ${dir} ${cl}`}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-2 -2 94 94" 
        >
            <path class="arrow-svg-bg" d="M32,73 L1,45 L32,18 M1,45 L90,45 " stroke-width="3" stroke="white" stroke-opacity=".5" stroke-linecap="round" fill="none" stroke-linejoin="miter"></path>
            <path class="arrow-svg" d="M32,73 L1,45 L32,18 M1,45 L90,45 " stroke-width="1.5" stroke="black" fill="none" stroke-linejoin="miter"></path>
        </svg>
    </div>
    {/if}

    {#if dir === 'right'}
    <div class={`arrow ${dir} ${cl}`}>
    <!-- <div class="arrow" :class="nopad ? 'full-right': 'right'"> -->
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-2 -2 94 94" 
        >
            <path class="arrow-svg-bg" d="M58,18 L89,45 L58,73 M0,45 L89,45 " stroke-width="3" stroke="white" stroke-opacity=".7" stroke-linecap="round" fill="none" stroke-linejoin="miter"></path>
            <path class="arrow-svg" d="M58,18 L89,45 L58,73 M0,45 L89,45 " stroke-width="1.5" stroke="black" fill="none" stroke-linejoin="miter"></path>
        </svg>
    </div>
    {/if}
</div>

<script lang="ts">
    export let cl = ""
    export let dir = ""
</script>

<style lang="scss">
    svg { 
        height: 100%;
        width: 100%;

        // filter: drop-shadow(.5px .5px 0px white) drop-shadow(-.5px .5px 0px white) drop-shadow(.5px -.5px 0px white) drop-shadow(-.5px -.5px 0px white);
    }

    .arrow {
        // display: inline-block;
        width: 90px;
        height: 90px;

        z-index: 20;
        // color: black;

        &:hover {
            cursor: pointer;

            .arrow-svg {
                stroke-width: 2.5;
            }

            .arrow-svg-bg {
                stroke-width: 4;
            }
        }
    }

    .arrow-svg, .arrow-svg-bg {
        transition: stroke-width .3s;
    }

    .left, .right, .full-left, .full-right {
        position: absolute;
        margin-bottom: auto;
        margin-top: auto;
        top: 0;
        bottom: 0;
    }

    .full-left {
        left: 0px;
    }

    .full-right {
        right: 0px;
    }

    .left {
        // left: 0;
        left: 45px;
    }

    .right {
        // right: 0;
        right: 45px;
    }

    // @media only screen and (max-width: $site-large-brk) {
    //     // .full-left {
    //     //     left: -65px;
    //     // }

    //     // .full-right {
    //     //     right: -65px;
    //     // }
    // }

    // @media only screen and (max-width: $site-medium-brk) {
    //     // .full-left {
    //     //     left: -135px;
    //     // }

    //     // .full-right {
    //     //     right: -135px;
    //     // }
    // }

    // @media only screen and (max-width: $mobile-width) {

    // }
</style>