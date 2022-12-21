<div class="contact-container">
    <div class="contact">
        <div class="company-name">
            <Content blocks={site.companyName} />
        </div>
        <div class="street">{site.companyAddress?.street}</div>

        <div class="city">
            <span class="zip">{site.companyAddress?.zip}</span>
            <span class="city">{site.companyAddress?.city}</span>
        </div>

        <div class="country">{site.companyAddress?.country}</div>
        <div class="company-phone">Tel {site.companyAddress?.phone}</div>
        <!-- <div class="company-email"><a href="`mailto:${site.contactEmail}`">{site.contactEmail}</a></div> -->
        <!-- <div class="opening-hours">{getOpeningHours()}</div> -->
    </div>
</div>

<script lang="ts">
    import { siteData } from '$lib/store'
    import Content from '$lib/components/Content.svelte'
    import type { Site } from '$lib/types'

    export let site:Site

    siteData.subscribe((v: Site) => {
        console.log("v",v)
        site = v
    })

</script>

<style lang="scss">
    .opening-hours {
        padding-top: var(--gap);
        white-space: nowrap;
    }
    .country {
        font-weight: bold;
        padding-bottom: var(--gap);
    }
    
    .company-name {
        font-size: 50px;
        // overflow: hidden;
        white-space: nowrap;
    }
    
    .contact-container {
        // width: 90vw;
        padding-top: 20vh;
    }
    .contact {
        // @include font-large;
        font-size: 24px;
        margin: auto;
        width: 30vw;
    }
    
    @media only screen and (max-height: 600px) and (orientation: landscape) {
        .contact {
            // @include font-medium;
            margin: auto;
            width: 70vw;
        }
    }
    
    @media only screen and (max-width: 700px) {
        .company-name {
            font-size: 30px;
        }
    }
    
    @media only screen and (max-width: 600px) {
        .contact {
            // @include font-medium;
            margin: auto;
            width: 80vw;
        }
        .company-name {
            font-size: 30px;
        }
        .contact-container {
            width: 100vw;
            padding-top: 10em;
        }
    }
</style>