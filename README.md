### VueJS

# Source:

> https://www.udemy.com/course/vuejs-2-the-complete-guide

# This git:

> https://github.com/samedan/2410_Vue

### Event Arguments 27

> test Vue
> <input type="text" v-on:input="setName($event, 'moreNames')" />

### Data, Events & Methods

> button v-on:click=""
> input v-on:input=""
> form v-on:submit.prevent=""
> p v-once

# Bind - Two-Way binding

> input v-bind:value=""
> input v-model"name" = v-bind:value + v-on:input

### Computed properties & Watchers

> data(), methods:, computed:, watch:

### v-bind v-on Shorthands

> v-bind:value= -> :value=
> v-on:click= -> @click=

### Watchers

> const that = this; in watch: {}

### dynamic Styles

> :style="{borderColor: boxASelected ? 'red': '#ccc'}"

### dynamic Classes

> <div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')">

# Class

> <div :class="['demo', boxAClasses]" @click="boxSelected('A')"></div>
> <div class="demo" :class="boxAClasses" @click="boxSelected('A')"></div>
