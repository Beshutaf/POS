<template>
  <v-container grid-list-md>
      <v-layout row>
        <v-flex xs6>
          <v-card
            color="red lighten-2"
            dark
          >
            <v-card-title class="headline red lighten-3">
              הוספת מוצרים לעגלה
            </v-card-title>
            <v-card-text>
              <v-autocomplete
                v-model="product"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                color="white"
                hide-no-data
                hide-selected
                item-text="Description"
                item-value="API"
                label="חיפוש מוצר"
                placeholder="הקלד שם מוצר"
                prepend-icon="mdi-search"
                return-object
              ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
              <v-list v-if="product" class="red lighten-3">
                <v-list-tile
                  v-for="(field, i) in fields"
                  :key="i"
                >
                  <v-list-tile-content>
                    <v-list-tile-title v-text="field.value"></v-list-tile-title>
                    <v-list-tile-sub-title v-text="field.key"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-expand-transition>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="product.length == 0"
                color="grey darken-3"
                @click="model = null"
              >
                מחיקה
                <v-icon right>mdi-close-circle</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card
            color="blue lighten-2"
            dark
          >
            <v-card-title class="headline blue lighten-3">
              עגלת קניות
            </v-card-title>
            <v-card-text>
              דשגכש
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
              <v-list v-if="cart" class="blue lighten-3">
                <v-list-tile
                  v-for="(field, i) in fields"
                  :key="i"
                >
                  <v-list-tile-content>
                    <v-list-tile-title v-text="field.value"></v-list-tile-title>
                    <v-list-tile-sub-title v-text="field.key"></v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-expand-transition>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!cart"
                color="grey darken-3"
                @click="cart = null"
              >
                מחיקה
                <v-icon right>mdi-close-circle</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        
      </v-layout>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<script>
export default {
  data() {
    return {
      product: "",
      cart: ""
    };
  }
}
</script>
