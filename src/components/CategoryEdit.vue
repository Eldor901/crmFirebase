<template>
    <div class="col s12 m6">
        <div>
            <div class="page-subtitle">
                <h4>Edit</h4>
            </div>

            <form @submit.prevent="submitHandler">
                <div class="input-field">
                    <select ref="select" v-model="current">
                        <option v-for="c of categories" :key="c.id" :value="c.id">{{c.title}}</option>
                    </select>
                    <label>Choose Category</label>
                </div>

                <div class="input-field">
                    <input id="name" type="text" v-model="title"  :class="{invalid: ($v.title.$dirty && !$v.title.required)}"/>
                    <label for="name">Title</label>
                    <span class="helper-text invalid" v-if="$v.title.$dirty && !$v.title.required">write title of Category</span>
                </div>

                <div class="input-field">
                    <input id="limit" type="number" v-model.number="limit"  :class="{invalid: ($v.title.$dirty && !$v.title.minValue)}"/>
                    <label for="limit">limit</label>
                    <span class="helper-text invalid" v-if="$v.limit.$dirty && !$v.limit.minValue">min value should be  {{$v.limit.$params.minValue.min}}</span>
                </div>

                <button class="btn waves-effect waves-light" type="submit">
                    Refresh
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import {minValue, required} from "vuelidate/lib/validators";
    import category from "../store/category";

    export default {
        props: {
            categories: {
                type: Array,
                required: true,
            }
        },
        name: "CategoryEdit",
        data: ()=> ({
            select: null,
            title: '',
            limit:  100,
            current: null,
        }),
        validations: {
            title: {required},
            limit: {minValue: minValue(100)}
        },

        watch: {
            current(id){
                const {title, limit} = this.categories.find(c => c.id === id);
                this.title = title;
                this.limit = limit;
            }
        },

        created() {
            const {id, title, limit} = this.categories[0];
            this.current = id;
            this.title = title;
            this.limit = limit;
        },

        mounted() {
           this.select =  M.FormSelect.init(this.$refs.select);
            M.updateTextFields();
        },
        destroyed() {
            if(this.select && this.select.destroy)
            {
                this.select.destroy();
            }
        },
        methods: {
            async submitHandler()
            {
                if (this.$v.$invalid)
                {
                    this.$v.$touch();
                    return;
                }
                
                try {
                    const categoryData = {
                        id: this.current,
                        title: this.title,
                        limit: this.limit
                    };
                    await this.$store.dispatch('updateCategory', categoryData);

                    this.$message("Category sucessfully edited");
                    this.$emit('updated', categoryData);
                }
                catch (e) {
                    
                }
            }
        }
    }
</script>

<style scoped>

</style>
