<div class="lang-container">
    { #each locales as l, idx }
        <div
            aria-label={ l.iso }
            tabindex={idx}
            role="button"
            class="lang-item { langClass(l.code) }"
            on:click={ () => toggleLocale(l.iso) }
            on:keydown
            >
            {l.iso}
        </div>
        { /each }
        <!-- to="#" -->
</div>


<script lang="ts">
    const toggleLocale = (l: string) => {
        console.log("l",l)
        browserLang.set(l)
    }

    const langClass = (l: string):string => {
        return l === $browserLang ? "is-active" : ""
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