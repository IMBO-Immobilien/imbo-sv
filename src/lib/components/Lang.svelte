<div class="lang-container">
    { #each locales as l, idx }
        <div
            aria-label={ l.iso }
            tabindex={idx}
            role="button"
            class="lang-item { active == l.code ? 'is-active' : '' }"
            on:click={ () => switchLocale(l.code) }
            on:keydown
        >
            {l.iso}
        </div>
        { /each }
        <!-- to="#" -->
</div>


<script lang="ts">
    import { locales, browserLang, browserLangISO } from '$lib/store'
    let active = "en-US"

    const switchLocale = (l: string) => {
        // console.log("setting locale", l)
        active = l
        browserLang.set(l)
        console.log("set locale code", $browserLang)
        console.log("locale iso", $browserLangISO)
    }

    // const langClass = (l: string) => {
    //     console.log("locale code", $browserLang, l)
    //     // return l === $browserLang ? "is-active" : ""
    // }

    $: active

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
            color: black;
            // font-weight: bold;
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