<template>
  <div class="main">
    <input className="inpSeach" v-model="seach" v-on:change="seching" type="text" placeholder="Seaching of projects...">

    <h2>#{{this.category}}</h2>
    <div className="sort_tool">
      <button>Name</button>
      <button>Members</button>
      <button>Hype</button>
    </div>
    <Card v-for="item in this.sort_data" :key="item.id" :data="item"/>
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
      data_api: {}
    }
  },
  methods: {
    seching() {
      console.log(this.seach);
      this.sort_data = this.data_api.filter(el => el.title.includes(this.seach));
    }
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {this.data_api = response.data; this.sort_data = response.data})
    // .then(response => (console.log(response.data)))
    .catch(console.log)

    this.sort_data = this.data_api;
  }
}
</script>

<style>
  .inpSeach{
    width: 15vw;
    position: absolute;
    top: 20px;
    left: 42.5vw;
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
</style>
