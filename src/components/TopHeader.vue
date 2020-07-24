<template>
    <a-layout-header>
        <img class="logo" :src="Logo" alt>
        <a-menu mode="horizontal" :style="{ lineHeight: '64px'}">
            <a-menu-item v-for="(item, index) in menus" :key="index">
                <router-link exact :to="item.path">{{ item.name }}</router-link>
            </a-menu-item>
            <a-menu-item key="search">
                <a-input-search placeholder="search..."/>
            </a-menu-item>
        </a-menu>
    </a-layout-header>
</template>

<script>
    import Logo from "./../assets/logo.png";
    import routes from "../router/routes";

    export default {
        data() {
            return {
                Logo
            };
        },
        created() {
            this.menus = routes;
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ant-menu-horizontal {
        border-bottom: none;
    }
    .ant-layout-header {
        background: #FFF;
        padding: 0;
    }

    .logo {
        width: 32px;
        float: left;
        margin: 16px 24px;
    }

    .search {
        float: right;
        width: 200px;
        margin: 16px 24px;
    }
</style>
