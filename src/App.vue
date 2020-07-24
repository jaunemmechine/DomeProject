<template>
  <div id="app">
    <TopHeader/>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
  import TopHeader from "./components/TopHeader";

  export default {
    name: "App",
    components: {
      TopHeader
    }
  };
</script>

