<template>
  <div className="card">
    <div>{{data.id}}</div>
    <div>{{data.title}}</div>
    <!-- <div>{{data.supply}}</div>
    <div>{{data.community}}</div> -->
    <!-- <div>{{data.hype}}</div> -->
    <div>{{data.userId}}</div>
    <!-- {{data}} -->
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['data'],

}
</script>

<style scoped>
 .card{
    display: flex;
    justify-content: space-between;

    width: 60vw;
    margin: 1em auto;
    padding: 25px;

    border-radius: 15px;
    
    transition: all .2s ease-in-out;
    background-color: #65cbfa7f;
  }
  .card:hover{
    transform: scale(1.02);
    background-color: #65cbfa9c;
    box-shadow: rgba(78, 80, 81, 0.4) 0px 8px 24px;
 }
</style>