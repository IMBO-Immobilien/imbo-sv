<div class="wrapper">
    <div class="head"><Logo /></div>
    <div class="side-bar"><Sidebar /></div>
    <div class="copyright"><Copyright /></div>
</div>

<slot></slot>

<script lang=ts>
    import Logo from '$lib/components/Logo.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'
    import Copyright from '$lib/components/Copyright.svelte'
</script>

<style lang="scss">
.show-back {
    opacity: 1;
    pointer-events: all;
}
.hide-back {
    opacity: 0;
    pointer-events: none;
}
.back-arrow {
    position: absolute;
    z-index: 10;
    width: 50px;
    height: 50px;
    left: var(--gap);
    top: var(--gap);
}

.copyright {
    transform-origin: top right;
    transform: rotate(90deg);

    position: fixed;
    right: var(--gap);
    bottom: var(--gap);
}

.crumbs {
    position: fixed;
    left: var(--gap);

    white-space: nowrap;
    overflow: visible;
}

.background {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: fixed;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    opacity: 0;
    transition: opacity 1s;
}

.wrapper {
    width: calc(100vw - var(--gap) * 2);
    margin-left: var(--gap);
    margin-right: var(--gap);
}

.head {
    height: 100vh;
    overflow: hidden;
}

.main {
    margin-left: auto;
    margin-right: auto;
}

.side-bar {
    overflow-y: hidden;
    overflow-x: visible;
}
</style>