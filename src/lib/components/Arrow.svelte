<div class="arrows">
    {#if dir==='left'}
    <!-- <div class={nopad ? 'full-left': 'left'}> -->
    <div class={`arrow ${cl}`}>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-2 -2 94 94" 
        >
            <path class="arrow-svg-bg" d="M32,73 L1,45 L32,18 M1,45 L90,45 " stroke-width="3" stroke="white" stroke-opacity=".5" stroke-linecap="round" fill="none" stroke-linejoin="miter"></path>
            <path class="arrow-svg" d="M32,73 L1,45 L32,18 M1,45 L90,45 " stroke-width="1.5" stroke="black" fill="none" stroke-linejoin="miter"></path>
        </svg>
    </div>
    {/if}

    {#if dir==='right'}
    <div class={`arrow ${cl}`}>
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