<div class="main">
    <Logo />
    <Sidebar />
    <Copyright />
</div>

<slot></slot>

<script lang="ts">
    import Logo from '$lib/components/Logo.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'
    import Copyright from '$lib/components/Copyright.svelte'
</script>