<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">
            <!-- { JSON.stringify(site.companyName) } -->
            <div class="company">
                <Content blocks={ site.companyName } />
            </div>
            <!-- { JSON.stringify(site) } -->
            <!-- <Content class="welcome" :blocks="greet()" /> -->
            <!-- <Content class="company" :blocks="site.companyName" /> -->
        </div>
    </h1>
    <div class="">
        <Overview assets={assets} />
    </div>
</div>


<script lang=ts>
import Content from '$lib/components/Content.svelte'
import Overview from '$lib/components/Overview.svelte'
import type { PageData } from './$types'
/** @type {import('./$types').PageData} */

export let data:PageData
let { site, assets } = data

$: ({ site, assets } = data)
// $: console.log("site",site)
// import { site } from '../lib/store'
  
</script>

<style lang="scss">
    .spacer {
        // height: 20vh;
        flex: 1;
    }

    // p {
    //         margin: 0;
    // }

    .front-container {
        position: relative;
        width: 60%;
        height: 90vh;
        margin-left: auto;
        margin-right: auto;
    }

    // .image-container {
    //     // transition: opacity 1s;
    //     // visibility: hidden;
    //     // opacity: 0;
    //     // max-height: 45vw;
    //     // max-width: 100vh;
    //     // width: 80vw;
    //     height: 65vh;
    //     // flex: 2;
    //     // @include fadein;
    // }

    // .front-grid {
    //     display: grid;
    //     grid-template-columns: 150px 2fr;
    //     grid-template-areas: "thumb text";
    //     gap: var(--gap-rel);
    // }
    .presentation {
        position: relative;
        display: flex;
        justify-content: center;
        // align-items: center;
        flex-direction: column;
        width: 100%;
        height: 90vh;
    }

    
    .welcome {
        // p {
        //     margin: 0;
        //     margin-block-start: 0!important;
        //     margin-block-end: 0!important;
        // }
        // display: inline;
        // flex: 0;
        // display: block;
        grid-area: text;
        font-size:32px;
        line-height:0px;
    }
    .company {
        overflow: visible;
        grid-area: text;
        
        white-space: nowrap;
        // p {
        //     margin-block-start: 0!important;
        //     margin-block-end: 0!important;
        //     margin-top: 0;
        // //     margin-block-start: 0;
        // //     margin-block-end: 0;
        // }
        // flex: 0;
        // display: inline;
        font-size:50px;
        line-height:50px;
    }

    .page-enter-active,
    .page-leave-active {
        transition: opacity 0.5s;
    }
    .page-enter,
    .page-leave-to {
        opacity: 0;
    }

    @media only screen and (orientation: portrait) and (max-width: 600px) {
        .image-container {
            position: relative;
            // height: 60%;
            width: 100%;
        }

        .image {
            width: 100%;
        }

        .welcome {
            font-size: 24px;
        }
        .company {
            font-size: 36px;
        }

        .front-container {
            width: 100%;
        }
    }

    @media only screen and (orientation: landscape) and (max-width: 700px) {
        // .image-container {
        //     width: 70%;
        // }

        // .welcome {
        //     // font-size: 14px;
        // }
    }
</style>