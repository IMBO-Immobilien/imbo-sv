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