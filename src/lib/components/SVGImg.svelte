<img 
    src={src}
    alt={alt}
    style={styl}
    loading={lazy}
    on:load|once={loaded}
    class="svg-image"
    width="100%"
    height="100%"
>
    <!-- fit="inside" -->

<script lang="ts">
    export let src = ""
    export let alt = ""
    export let styl = ""
    export let lazy = "lazy"

    const loaded = (e: any) => {

    }
</script>

<!-- <style lang="scss">
.svg-image {
    opacity: 0;
    transition: opacity 1s;
}
</style> -->