<template>
    <div className="category">
        <div className="ctext">
          <h2>{{this.category}}</h2>
          <span><router-link :to="{ name: 'top', params: { category: this.category }}">See more</router-link></span>
        </div>
      </div>
</template>

<script>
export default {
    name: "SmallCard",
    props: {
      category: String
    },
    created() {
      console.log(this.category);
    }

}
</script>

<style scoped>
  .category{    
    /* margin: 1em; */
    width: 180px;
    padding: .4rem;
    position: relative;
    background: linear-gradient(0.1turn, purple, rgb(185, 27, 213), orange);
    border-radius: 20px;
    box-shadow: rgba(39, 40, 40, 0.5) 0px 8px 24px;
    background-size: 100% 200%;
    transition: all 1.2s ease;
    background-position: 0 0;
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
    padding: .5rem;
    text-align: left;
    font-family: "Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    text-shadow: 1px 1px 5px rgb(41, 39, 39, 0.5);
  }
  .ctext h2{
    padding: 0 1rem;
  }

  a, li{
    color: rgb(243, 231, 255);
    padding: 5px 10px;
    transition: all .2s ease-in-out;
    border-radius: 6px;
  }
  a:hover, li:hover{
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