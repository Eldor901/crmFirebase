<template>
    <ul class="sidenav app-sidenav " :class="{open: value}">
        <router-link tag="li" active-class="active" :to="link.url"  v-for="link in links" :key="link.url" exact>
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>
    </ul>
</template>

<script>

    export default {
        props: ['value'],
        name: "SideBar",
        data: () => ({

            links: [
                {
                    title: 'Bill', url: '/'
                },
                {
                    title: 'History', url: '/history'
                },
                {
                    title: 'Planning', url: '/planning'
                },
                {
                    title: 'New Record', url: '/record'
                },
                {
                    title: 'Categories', url: '/categories'
                }
            ]

        }),

    }
</script>

<style scoped>

</style>
