<template>
    <div>
      <header>Header Content</header>
      <slot />
      <footer>Footer Content</footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DefaultLayout',
  };
  </script>