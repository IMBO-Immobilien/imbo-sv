<nav class="head-container fadein" >
    <a href="/">
        <img 
            alt="site.logo.caption" 
            class="logo" 
            src="imbo-logo.svg" 
            loading="lazy"
            width="100%"
            height="auto"
        />
    </a>
</nav>

<style lang="scss">
.logo {
    transform-box: fill-box;
    max-height: 40vh;
    // height: 400px;
    // width: auto;
    // right: 0;
    transition: height .5s;
    transform-origin: top right;
}

.head-container {
    position: fixed;
    overflow: visible;
    width: auto;
    height: auto;
    top: var(--gap);
    right: var(--gap);
}

</style>