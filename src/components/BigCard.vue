<template>
  <router-link :to="{ name: 'top', params: { category: this.dataEl.cat }}">
    <div className="category">
        <div className="ctext">
          <h1>{{this.dataEl.cat == 'nft' ? this.dataEl.cat.toUpperCase() : this.dataEl.cat[0].toUpperCase() + this.dataEl.cat.slice(1)}}</h1>
          <ol>
            <li v-for="(item, index) in this.dataEl[0]" :key="item.project_name">
              <span className="NumName">{{index+1 +'. ' + item.project_name}}</span> 
              <span>{{item.followers_count}}</span>
            </li>
          </ol>
          <!-- <span><router-link :to="{ name: 'top', params: { category: this.dataEl.cat }}">See more</router-link></span> -->
        </div>
        <!-- <span>{{this.data}}</span> -->
      </div>
    </router-link>
</template>

<script>
export default {
    name: "BigCard",
    props: {
      dataEl: Object
    }}
</script>

<style scoped>
  .category{    
    margin: 1em;
    width: 250px;
    padding: .4rem;
    position: relative;
    background: linear-gradient(0.1turn, purple, rgb(185, 27, 213), orange);
    border-radius: 20px;
    box-shadow: rgba(39, 40, 40, 0.5) 0px 8px 24px;
    background-size: 100% 200%;
    transition: all 1.2s ease;
    background-position: 0 0;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Chrome/Safari/Opera */
    -khtml-user-select: none;    /* Konqueror */
    -moz-user-select: none;      /* Firefox */
    -ms-user-select: none;       /* Internet Explorer/Edge */
    user-select: none;           

  }
  .category:hover{
    transform: scale(1.02);
    background-position: 0 100%;
    box-shadow: rgba(39, 40, 40, 0.9) 0px 8px 24px;
  }
  
  .ctext{
    border-radius: 20px;
    background: #6666667d;
    color: white;
    padding: 1rem;
    text-align: left;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    text-shadow: 1px 1px 5px rgb(41, 39, 39, 0.5);
  }
  .ctext h1{
    font-size: 48px;
    padding: 2rem 0 0 1rem;
  }

  a{
    text-decoration: none;
  }

li{
    color: rgb(243, 231, 255);
    padding: 5px 10px;
    transition: all .2s ease-in-out;
    border-radius: 6px;
  }
li:hover{
    background: #1f1d1d7d;
    transform: scale(1.01);
  }

  h1{
    margin-top: 0px;
  }
  li{
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
  }
  ol{
    padding-inline-start: 0px;
    padding-left: 0;
  }

  .NumName *{
    margin-left: 10px;
  }
</style>