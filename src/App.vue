<template>
  <nav>

    <NameCard @click="infoPop = !infoPop">
      <template v-slot:default="slotProps">
        {{ slotProps.firstName }} {{ slotProps.lastName }}
      </template>
    </NameCard>

    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="`/profile/${name}`">Profile</router-link>
    </div>

  </nav>
  <router-view> </router-view>

  <Teleport to="#my-info">
    <info-pop v-show="infoPop" @closeInfo="infoPop = false" />
  </Teleport>

</template>

<script>
import InfoPop from './components/InfoPop.vue';
import NameCard from './components/NameCard.vue';
export default {
  name: "App",

  components: {
    InfoPop, NameCard
  },

  data() {
    return {
      name: "dasarath",
      activePage: 'PageOne',
      infoPop: false
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}

.switch-page {
  display: flex;
  justify-content: center;
  margin-top: 20px;


}

.switch-page button {
  width: 100%;
  padding: 10px;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid black;
}
</style>
