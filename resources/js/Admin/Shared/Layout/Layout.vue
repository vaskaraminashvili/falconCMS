<template>
  <div>
    <input type="text" name="" id="" value="My App" />
    <Link :href="route('admin.index')" :class="{'active active-link': $page.component === '@.Welcome'}">Home</Link>
    <Link href='/admin/about'>About</Link>
    <Link href='/admin/contact'>Contaasd asd asct</Link>
    <slot/>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
