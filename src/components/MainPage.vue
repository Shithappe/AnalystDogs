<template>
  <div class="categories">
    <BigCard :dataEl="test_data" />

  </div>
</template>

<script>
import BigCard from './BigCard.vue';

export default {
    name: "MainPage",
    components: {
      BigCard
    },
    data() {
    return { 
      test_data: {
        category: "NFT",
        list: [
        {
          id: 0,
          name: 'awd1',
          supply: 1009,
          commynity: 'nameOfComm1',
          hype: 85
        },
        {
          id: 1,
          name: 'awd1',
          supply: 27,
          commynity: 'nameOfComm2',
          hype: 85
        },
        {
          id: 2,
          name: 'name tra tra tra',
          supply: 107,
          commynity: 'nameOfComm3',
          hype: 85
        },
        {
          id: 3,
          name: 'UlnraB',
          supply: 102,
          commynity: 'nameOfComm3',
          hype: 85
        },
        {
          id: 2,
          name: 'Z_Nfw',
          supply: 88,
          commynity: 'nameOfComm3',
          hype: 85
        }
      ]
      }
    }
  },

}
</script>

<style scoped>
  .categories{
    display: flex;
    justify-content: center;
  }
</style>