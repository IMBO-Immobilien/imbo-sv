<h1>Home</h1>

<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
  
    console.log(data.sections); // [{ slug: 'profile', title: 'Profile' }, ...]
</script>