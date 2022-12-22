<!-- <Menu /> -->
<nav>
    <div class="sidebar" id="sidebar">
        <div on:click={toggleSideBar} class="hamburger" on:keydown>
            <Hamburger  />
        </div>
        <div class="spacer" />
        <div class="menu"><Menu /></div>
        <div class="foot-element">
            <div class="menu-link" >
                <Lang />
            </div>
            <a class="menu-link" href="/contact">Kontakt</a>
            <a class="menu-link" href="/about">Impressum</a>
        </div>
    </div>
</nav>

<script lang="ts">
    import Menu from './Menu.svelte' 
    import { sideBarState, siteData } from '$lib/store'
    import Hamburger from './Hamburger.svelte'
    import Lang from './Lang.svelte'

    const toggleSideBar = () => {
        sideBarState.set(!$sideBarState)
    }

</script>

<style lang="scss">
    .hamburger {
        display: none;
        &:hover {
            cursor: pointer;
        }
    }
    // .privacy-link {
    //     a {
    //         display: block;
    //     }
    //     font-size: 12px;
    //     line-height: 12px;
    //     text-transform: uppercase;
    // }
    // .base {
    //     position: fixed;
    //     right: var(-gap);
    //     bottom: var(-gap);
    
    //     transform-origin: left;
    //     transform: rotate(90deg);
    
    //     font-size: 13px;
    //     transition: opacity .4s;
    // }
    
    // .address {
    //     display: inline-block;
    //     padding-top: 10px;
    // }
    .menu-link {
        font-size: 20px;
        line-height: 30px;
        text-transform: uppercase;
        display: block;
    }
    
    .spacer {
        flex: 1;
    }
    
    // .bold {
    //     font-weight: bold;
    // }
    // .regular {
    //     font-weight: normal;
    // }
    
    .sidebar {
        position: fixed;
        left: var(--gap);
        bottom: 0; 
        z-index: 8;
        // height: 95vh;
        display: flex;
        flex-direction: column;
        overflow-y: visible;
        white-space: nowrap;
        transition: left .4s;
    }
    
    .menu {
        flex: 0;
    }
    // .back {
    //     flex: 0;
    // }
    .foot-element {
        padding-top: 5em;
        flex: 0;
        padding-bottom: var(--gap);
    }
    
    // @media only screen and(orientation: portrait) and (max-width: $mobile) {
    @media only screen and (max-width: 600px) {
        .foot-element {
            // font-size: 16px;
            padding-top: 5em;
            flex: 0;
        }
        .menu-link {
            font-size: 16px;
            line-height: 24px;
        }
        .sidebar {
            position: fixed;
            
            left: calc(-36vw - 10px);
            background-color: rgba(255, 255, 255, 0.75);
            width: 36vw; 
            height: 100vh; 
    
            padding-left: 10px;
            padding-bottom: var(--gap-mob);
        }
    
        .hamburger {
            display: block;
            position: fixed;
            top: 10px;
            left: 10px;
        }
    
        // .open {
        //     left: 0;
        //     .base {
        //         opacity: 1;
        //     }
        // }
    
        // .copyright {
        //     padding-right: 10px;
        //     background-color: rgba(255, 255, 255, 0.95);
        // }
    
        // .base {
        //     opacity: 0;
        //     bottom: 0;
        //     left: 10px;
        // }
    }
</style>