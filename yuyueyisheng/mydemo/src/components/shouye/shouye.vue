<template>
    <div>
        <toubu></toubu>
        <liebiao></liebiao>
        <kswy></kswy>
    </div>
</template>
<script>
import toubu from "./toubu.vue"
import liebiao from "./liebiao.vue"
import kswy from "./kswy.vue"
export default {
    components:{
        "liebiao":liebiao,
        "toubu":toubu,
        "kswy":kswy
    }
}
</script>

