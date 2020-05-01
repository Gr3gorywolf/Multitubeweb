import Library from '../../pages/Library.vue';
 
export const routes = [

    {path:"/library/:selectedType", name:"library",component:Library,props:true}
]