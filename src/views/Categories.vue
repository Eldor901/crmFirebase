<template>
  <div>
    <div class="page-title">
      <h3>Categories</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Create</h4>
            </div>

            <form>
              <div class="input-field">
                <input id="name" type="text" />
                <label for="name">Название</label>
                <span class="helper-text invalid">write title</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number" />
                <label for="limit">Лимит</label>
                <span class="helper-text invalid">min size </span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Create
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
        <div class="col s12 m6">
          <div>
            <div class="page-subtitle">
              <h4>Edit</h4>
            </div>

            <form>
              <div class="input-field">
                <select>
                  <option>Category</option>
                </select>
                <label>Choose Category</label>
              </div>

              <div class="input-field">
                <input type="text" id="name" />
                <label for="name">Title</label>
                <span class="helper-text invalid">title</span>
              </div>

              <div class="input-field">
                <input id="limit" type="number" />
                <label for="limit">Limit</label>
                <span class="helper-text invalid">limit</span>
              </div>

              <button class="btn waves-effect waves-light" type="submit">
                Refresh
                <i class="material-icons right">send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Catigories"
};
</script>

<style scoped></style>
