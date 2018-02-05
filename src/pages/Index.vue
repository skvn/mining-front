<template lang="pug">
  v-layout
    section(slot="content")
      .row
        .col(v-for="a in algos")
          .field
            label {{ a.name }}
            br
            input(v-model="algoHashrates[a.name]")
      .row(style="margin-top:20px;")
        .col
          button.btn.btn-primary(@click="calculate") Calculate

      .row(style="margin-top:20px;", v-if="coins.length")
        table.table.table-hover
          thead
            tr
              th(colspan="2") Coin
              th Current Diff./HR
              th 1/hour reward (current)
              th 24/hour reward (current)
          tbody
            tr(v-for="coin in coins")
              td
                img( :src="getImg(coin)", height="50")
              td
                b {{coin.name}} ({{coin.ticker}})
                br
                em {{coin.algo.name}}
              td {{ coin.current_diff }} / {{ (coin.current_hash_rate / 1000000000).toFixed(2) }}
              td {{ coin.rewards.current.hour.toFixed(4) }} coins
                div(v-for="ex in coin.exchanges")
                  hr
                  b {{ ex.name }}
                  | (price={{ex.pivot.last_price}}, vol={{ex.pivot.volume}} BTC)
                  br
                  b Income: {{(ex.pivot.last_price * coin.rewards.current.hour).toFixed(8)}} BTC


              td {{ coin.rewards.current.day.toFixed(4) }} coins
                div(v-for="ex in coin.exchanges")
                  hr
                  b {{ ex.name }}
                  | (price={{ex.pivot.last_price}}, vol={{ex.pivot.volume}} BTC)
                  br
                  b Income: {{(ex.pivot.last_price * coin.rewards.current.day).toFixed(8)}} BTC


</template>

<script>
  import VLayout from '@/layouts/Default';

  const images = require.context('../assets/img/', false, /\.png$/);

  export default {
    /**
     * The name of the page.
     */
    name: 'index',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        algos: [],
        algoHashrates: {},
        coins: [],
      };
    },

    /**
     * The methods the page can use.
     */
    methods: {
      async calculate() {
        const resp = await this.$http.get('/api/coins', {
          params: this.algoHashrates,
        });
        this.coins = resp.data;
      },
      getImg (coin) {
        console.log(images);
        return images('./' + coin.ticker + '.png');
      },

    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
    },
    async mounted() {
      const resp = await this.$http.get('/api/algos');
      this.algos = resp.data;
    },
  };
</script>
