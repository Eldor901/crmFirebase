<template>
    <nav class="navbar orange lighten-1">
        <div class="nav-wrapper">
            <div class="navbar-left">
                <a href="#" @click.prevent="$emit('click')">
                    <i class="material-icons black-text">dehaze</i>
                </a>
                <span class="black-text">Eldor</span>
            </div>

            <ul class="right hide-on-small-and-down">
                <li>
                    <a
                            class="dropdown-trigger black-text"
                            href="#"
                            data-target="dropdown"
                            ref="dropdown"
                    >
                        {{name}}
                        <i class="material-icons right">arrow_drop_down</i>
                    </a>

                    <ul id='dropdown' class='dropdown-content'>
                        <li>
                            <router-link to="/profile" class="black-text">
                                <i class="material-icons">account_circle</i>Profile
                            </router-link>
                        </li>
                        <li class="divider" tabindex="-1"></li>
                        <li>
                            <a href="#" class="black-text" @click.prevent="logout">
                                <i class="material-icons">assignment_return</i>Exit
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        mounted() {
            M.Dropdown.init(this.$refs.dropdown, {
                constraintWidth: true,
            })
        },
        computed: {
            name() {
                return this.$store.getters.info.name
            }
        },
        methods: {
           async  logout() {
                await this.$store.dispatch('logout');
                await this.$router.push('/login?message=logout')
            }
        },
        name: "Navbar"
    }
</script>

<style scoped>

</style>
