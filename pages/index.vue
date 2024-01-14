<template>
  <div
    class="indexStyle bg-[url('@/assets/images/side-login.jpg')] test w-full h-screen flex justify-center items-center"
  >
  <form class="indexStyle-form h-2/3 w-5/12 flex flex-col items-center  rounded-md p-10">
    <h4 class=""> login </h4>
      <div class="mt-10">
        <label for="email">email:</label>
        <input class="border-none outline-none bg-transparent focus:ring-0" type="email" id="email" >
      </div>

      <div class="mt-6">
        <label for="password">password:</label>
        <input class="border-none outline-none bg-transparent focus:ring-0" type="password" id="password" >
      </div>

      <button class="py-2 rounded-md mt-10" type="submit" >send</button>

      <span class="flex items-center justify-between mt-10 ">
        <NuxtLink to="/">forget password</NuxtLink>
        <NuxtLink to="/">sign up </NuxtLink>
      </span>

      <p class="mt-5">login with google</p>

  </form>
  
  </div>
</template>
