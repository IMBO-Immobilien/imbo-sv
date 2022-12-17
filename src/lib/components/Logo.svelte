<nav class="head-container fadein" >
    <a href="/">
        <img 
            alt={logo.alt} 
            class="logo" 
            src={logo.url} 
            loading="lazy"
            on:load={loaded}
            />
            <!-- width="100%"
            height="auto" -->
    </a>
</nav>

<script lang="ts">
    import type { IMG } from "$lib/types";
    export let logo = <IMG>{}

    const loaded = (e: any) => {
        console.log("logo loaded", e)
    }
</script>

<style lang="scss">
.logo {
    transform-box: fill-box;
    max-height: 40vh;
    height: 400px;
    // width: auto;
    // right: 0;
    transition: height .5s;
    transform-origin: top right;
}

.head-container {
    position: fixed;
    overflow: visible;
    width: auto;
    height: auto;
    top: var(--gap);
    right: var(--gap);
}

@media only screen and (max-width: 1300px) {
    .logo {
        height: 200px;
    }
}

@media only screen and (orientation: portrait) and (max-width: 600px) {
    .head-container {
        padding-top: 0;
        right: 4px;
        top: 8px;
    }
    .logo {
        height: 100px;
        width: 50px;
    }
}

@media only screen and (orientation: landscape) and (max-width: 700px) {
    .logo {
        // transform: rotate(90deg);
        // height: 200px;
        // width: 200px;
        // top: 0;
        // right: 0;
        float: right;
    }

    .head-container {
        padding-top: 0;
    }
}
</style>