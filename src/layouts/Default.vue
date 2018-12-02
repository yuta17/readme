<template>
  <div class="layout">
    <header class="header">
      <h1 class="title">Hassan</h1>
      <nav class="nav">
        <g-link class="nav__link" :to="{ name: 'home' }">About</g-link>
        <g-link class="nav__link" :to="{ name: 'posts' }">Posts</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<style>
body {
  font-family: Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif;
  color: #484848;
  margin:0;
  padding:0;
  line-height: 1.5;
  background-color: #f6f5ed;
}

a {
  color: #d64854
}

p {
  font-size: .9rem;
}

.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  height: 70px;
}

.title {
  font-size: 1.5rem;
}

.nav__link {
  margin-left: 20px;
  color: black;
  text-decoration: none;
}
</style>
