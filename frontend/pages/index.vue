<template>
<section>
<h1>All monkeys</h1>
<div v-for="(monkey,i) in monkeys" v-bind:key="'monkey'+i">
  <h2>{{monkey.name}}</h2>
   <nuxt-link :to="'/monkey/'+monkey._id">read more</nuxt-link>
</div>
</section>
</template>

<script>
import { QUERY_ALL_MONKEYS } from "@/graphql/monkeys.js";
export default {
  components: {},
  data() {
    return {
      monkeys:[],
      query:QUERY_ALL_MONKEYS
    };
  },
  apollo: {
    monkeys:{
       query:QUERY_ALL_MONKEYS,
        //refreshes the query everytime
        fetchPolicy: 'network-only',
        variables(){},
        result({ data, loading, networkStatus }) {
          
        }
    }
  },
  computed: {},
};
</script>