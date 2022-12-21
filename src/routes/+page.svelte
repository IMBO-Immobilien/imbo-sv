<div id="content" class="front-container">
    <h1 class="presentation">
        <div class="front-grid">

            <div class="company">
                <Content blocks={ $siteData.companyName } />
            </div>

        </div>
    </h1>

    <div class="">
        <Overview />
    </div>
</div>


<script lang=ts>
import Content from '$lib/components/Content.svelte'
import Overview from '$lib/components/Overview.svelte'
import { siteData } from '$lib/store'
</script>

<style lang="scss">
    .spacer {
        // height: 20vh;
        flex: 1;
    }

    .front-container {
        position: relative;
        width: 60%;
        height: 90vh;
        margin-left: auto;
        margin-right: auto;
    }

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
        grid-area: text;
        font-size:32px;
        line-height:0px;
    }

    .company {
        overflow: visible;
        grid-area: text;
        
        white-space: nowrap;

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

    }
</style>