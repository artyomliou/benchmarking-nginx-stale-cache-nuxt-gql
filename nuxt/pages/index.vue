<template>
  <div>
    <h3>Books</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.title }} <i>by {{ book.author }}</i>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBooks } from '~/apollo/queries/book.js';

export default {
  apollo: {
    books: {
      prefetch: true,
      query: getBooks
    }
  },
  head: {
    title: 'Books with Apollo'
  }
}
</script>

<style>
</style>
