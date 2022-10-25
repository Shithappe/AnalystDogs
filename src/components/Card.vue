<template>
  <div className="card">
    <div>{{data.id}}</div>
    <div>{{data.name}}</div>
    <div>{{data.supply}}</div>
    <div>{{data.community}}</div>
    <div>{{data.hype}}</div>
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

    /* border: 1px solid rgba(71, 69, 69, 0.27); */
    border-radius: 15px;
    
    transition: .5s ease-in-out;
    background-color: #65cbfabe;;
  }
  .card:hover{
    box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
    transform: scale(1.02);
    background-color: rgba(92, 92, 92, 0.05);
 }
</style>