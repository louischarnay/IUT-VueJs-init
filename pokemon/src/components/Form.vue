<script>
import { reactive } from 'vue'
export default {
    data: () => ({
        labelPosition: "top",
        types: [
            {
                label:"Normal",
                value:"normal"
            },
            {
                label:"Fire",
                value:"fire"
            },
            {
                label:"Water",
                value:"water"
            },
            {
                label:"Grass",
                value:"wrass"
            },
            {
                label:"Electric",
                value:"electric"
            },
            {
                label:"Ice",
                value:"ice"
            },
            {
                label:"Fighting",
                value:"fighting"
            },
            {
                label:"Poison",
                value:"poison"
            },
            {
                label:"Ground",
                value:"ground"
            },
            {
                label:"Flying",
                value:"flying"
            },
            {
                label:"Psychic",
                value:"psychic"
            },
            {
                label:"Bug",
                value:"bug"
            },
            {
                label:"Rock",
                value:"rock"
            },
            {
                label:"Ghost",
                value:"ghost"
            },
            {
                label:"Dark",
                value:"dark"
            },
            {
                label:"Dragon",
                value:"dragon"
            },
            {
                label:"Steel",
                value:"steel"
            },
            {
                label:"Fairy",
                value:"fairy"
            }
        ],
        form: reactive ({
            name: '',
            type: '',
            description: '',
            price: 0.00,
            path: '',
        })
    }),
    methods: {
        onSubmit() {
            console.log('submit!')
        }
    }
}

</script>

<template>
  <el-form 
  :model="form" 
  :label-position="labelPosition"
  label-width="120px"
  >
    <el-form-item label="Pokemon card name" required>
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Pokemon card type" required>
      <el-select v-model="form.type" placeholder="please select the type">
        <el-option v-for="(item, index) in types" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item label="Pokemon card description" required>
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="Pokemon card price" required>
      <el-input v-model="form.price" type="number" min="0.00" max="any" step="1.00" />
    </el-form-item>
    <el-form-item label="Pokemon card image" required>
      <el-input v-model="form.path" type="file"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>