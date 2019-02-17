# 100 Days of Code
*Focusing on JavaScript with Vue.js and CSS with Tailwind.css*  
Please find each day's work in a [separate branch](https://github.com/DuaneCreates/100-days-of-code/branches)

### Log a day
Insert day's info file as **day_number.js** in *src/days/info* with this format
```javascript
// example for day 1
export default {
  day: 1,
  date: '2019-02-17',
  title: 'Something',
  post: `
  put some **markdown** up in here  
  `,
  tags: ['JS', 'Duane', 'Creates'],
};
```

Insert day's result file as **day_number.vue** in *src/days/results* as a normal Vue component
```vue
// example for day 1
<template>
  <h1>Day 1 hhehehe</h1>
</template>

<script>
export default {
  name: 'result-1',
};
</script>
```

### Clone This Project
```
npm install
npm run serve
```
