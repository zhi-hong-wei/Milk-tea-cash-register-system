<template>
  <div id="app">
    <Pos></Pos>
    <router-view/>
  </div>
</template>

<script>
  import Pos from './components/Pos'
export default {
  name: 'App',
  components:{
    Pos
  },
  methods:{

  }
}
</script>

<style>
#app{
  height: 100%;
}
</style>
