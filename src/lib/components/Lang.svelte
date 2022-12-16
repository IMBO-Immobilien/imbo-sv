<div class="lang-container">
    { #each locales as l, idx }
        <div
            aria-label={ l.iso }
            tabindex={idx}
            role="button"
            class="lang-item"
            on:click={ () => toggleLocale(l.iso) }
            >
            <!-- to="#" -->
        {l.iso}
        </div>
    { /each }
</div>


<script lang="ts">
    const toggleLocale = (l: string) => {
        console.log("l",l)
        browserLang.set(l)
    }

    import { locales, browserLang } from '$lib/store'
</script>

<style lang="scss" >
    .lang-container {
        display: inline-block;
    }
    
    .lang-item {
        text-transform: uppercase;
        transition: text-shadow 0.3s ease;
        display: inline-block;
    
        &:hover:not(.is-active) {
            cursor: pointer;
            font-weight: bold;
        }
    
        &:not(:first-child) {
            padding-left: 5px;
        }
    }
    
    // @media only screen and (max-width: $mobile) {
    //     .lang-item {
    //         font-size: smaller;
    //     }
    // }
</style>