panel.plugin("architecturelandinitiative/blocks", {
  blocks: {
    sectionblock: {
      template: `
        <div class="block">
          <div v-if="content.title" class="block-title">
              <h2>
                <k-input
                    v-bind="field('title')"
                    :value="content.title"
                    @input="update({ title: $event })">
                </k-input>
              </h2>
          </div>
          <div v-if="content.copy" class="block-text">
              <div v-if="content.subtitle" class="text-label">
                <p>
                  <k-input
                    v-bind="field('subtitle')"
                    :value="content.subtitle"
                    @input="update({ subtitle: $event })">
                  </k-input>
                </p>
              </div>
              <div class="text">
                <k-writer
                  v-bind="field('copy')"
                  :value="content.copy"
                  @input="update({ copy: $event })">
                </k-writer>
              </div>
          </div>
        </div>
      `
    },
    accordion: {
      computed: {
        placeholder() {
          return "Event ...";
        }
      },
      template: `
      <div class="accordion">
        <input
          type="text"
          :placeholder="placeholder"
          :value="content.header"
          @input="update({ header: $event.target.value })"
        />
        <div class="accordion-content">
          <p>
            <k-writer
              v-bind="field('body')"
              :value="content.body"
              @input="update({ body: $event })">
            </k-writer>
          </p>
        </div>
      </div>
      `
    },
  }
});