<div class="about-container">
    <div class="about">
        <div class="title">{JSON.stringify(t('management'))}</div>
        <div class="people">
            {#each $siteData.about.management as p}
                <div>{p.name}</div>
            {/each}
        </div>
        <div class="title">Web Design</div>
        <div class="people">
            {#each $siteData.about.webDesign as p}
                <div>{p.name}</div>
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
    // import { get } from 'svelte/store'
    import { siteData, t } from '$lib/store'

    // const site = get(siteData)
</script>

<style lang="scss">
    p {
        // padding-top: 0px;
        padding: 0;
        margin: 0;
    }
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