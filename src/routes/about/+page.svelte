<div class="about-container">
    { #await $siteData.about }

    <div>waiting</div>

    { :then abt } 

    {#if abt}
    <div class="about">
        <div class="title">Management</div>
        <div class="people">
            { #each abt.management as p }
                <div>{ p.name }</div>
            { /each }
        </div>
        <div class="title">Web Design</div>
        <div class="people">
            { #each abt.webDesign as p }
                <div>{ p.name }</div>
            { /each }
        </div>
    </div>
    {/if}
    { /await }
</div>

<script lang="ts">
    import { siteData } from '$lib/store'
</script>

<style lang="scss">
    // p {
    //     // padding-top: 0px;
    //     padding: 0;
    //     margin: 0;
    // }

    .about {
        margin: auto;
        width: 30vw;
    }

    .about-container {
        padding-top: 20vh;
        width: 90vw;
    }

    .people {
        padding-bottom: var(--gap);
        font-size: 24px;
    }

    .title {
        // margin:auto;
        padding-bottom: var(--gap);
        // width: 30vw;
        // height: 30vw;
        font-size: 50px;
        // font-weight: bold;
    }
</style>