<template>
    <div class="header">
        <router-link to="/news">News</router-link> |
        <router-link to="/ask">Ask</router-link> |
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
    font-size: 20px;
}
.header a.router-link-exact-active {
    color: #35495e;
    text-decoration: underline;
}
.header a {
    color: white;
    padding: 0 12px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;
}
.header a:hover {
    text-decoration: underline;
}
</style>
