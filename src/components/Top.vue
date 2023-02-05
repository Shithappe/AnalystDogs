<template>
  <div class="main">
    <img src="../assets/45.png" alt="">
    <div class="adding">
      <h1>#{{this.category}}</h1>

      <div className="sort_tool">
        <input className="inpSeach" v-model="seach" v-on:change="seching" type="text" placeholder="Seaching of projects...">
        <button v-on:click="sort_of_members">Members</button>
        <button>Hype</button>
      </div>
    </div>
    
    <Card v-for="(item, index) in this.sort_data" :key="index" :index="index" :data="item" :max_hype="max_hype"/>
  </div>
</template>

<script>
import axios from 'axios';
import Card from './Card.vue';

export default {
  name: 'Top',
  components: {
    Card
  },
  data() {
    return { 
      category: this.$route.params.category,
      seach: '',
      sort_data: [],
      data_api: {},
      max_hype: 0
    }
  },
  methods: {
    seching() {
      this.sort_data = this.data_api.filter(el => el.title.includes(this.seach));
    },
    sort_of_members() {
      this.sort_data = this.data_api.sort((a, b) => Number(a.members) < Number(b.members) ? 1 : -1)
    },
    arrayMax() {
      let hypes = [];
      this.sort_data.forEach(element => {
        hypes.push(Number(element.hype))
      });
      this.max_hype = Math.max.apply(Math, hypes);
    }
  },
  mounted() {
    axios.get(`https://analtics.cryto.men/api/get_projects_by_cat/${this.category.toLowerCase().replace(/ /g, "-")}`)
    .then((response) => {
      
      const data = response.data;
      console.log(response.data);
      this.data_api = data; 
      this.sort_data = data;
      this.arrayMax();
    })
    // .then(response => (console.log(response.data)))
    .catch(console.log)

    this.sort_data = this.data_api;
  }
}
</script>

<style>
.main{
  min-height: 78vh;
}
.main > img{
  height: 400px;
  position: fixed;
  top: 50vh;
  left: 80vw;
  opacity: .5;
  z-index: -2;
}
  .inpSeach{
    width: 15vw;
    border: none;
    outline: none;
    
    padding: 12px;
    border-radius: 10px;

    color: white;
    background-color: rgb(18, 93, 178, 0.2);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  .inpSeach::placeholder{
    color: rgb(227, 227, 227);
  }
  
  .sort_tool{
    display: flex;
    justify-content: center;
    
    gap: .5em;
  }
  .sort_tool button{
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    padding: 5px 10px;
    color: rgb(232, 239, 255);
    background-color: rgba(255, 255, 255, 0);
    font-size: 16px;
    font-weight: 500;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  .sort_tool button:hover{
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 8px;
    transition: .5s ease-in-out;
    background-color: rgba(54, 19, 128, 0.19);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }


  .adding{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 60vw;
    margin: 0 auto;
  }
  .adding h1{
    margin: auto 0;
  }
</style>
