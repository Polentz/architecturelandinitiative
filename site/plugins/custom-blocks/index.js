panel.plugin("architecturelandinitiative/blocks", {
  blocks: {
    sectionblock: {
      template: `
        <div class="block">
          <div v-if="content.title" class="block-title">
              <h2>
                <k-writer
                    v-bind="field('title')"
                    :inline="true"
                    :marks="false"
                    :nodes="false"
                    :value="content.title"
                    @input="update({ title: $event })">
                </k-writer>
              </h2>
          </div>
          <div v-if="content.copy" class="block-text">
              <div v-if="content.subtitle" class="text-label">
                <p>
                  <k-writer
                    v-bind="field('subtitle')"
                    :inline="true"
                    :marks="false"
                    :nodes="false"
                    :value="content.subtitle"
                    @input="update({ subtitle: $event })">
                  </k-writer>
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
    contactblock: {
      template: `
      <k-writer
        v-bind="field('copy')"
        :value="content.copy"
        @input="update({ copy: $event })">
      </k-writer>
      `
    },
    accordion: {
      template: `
      <div class="accordion-topbar">
        <p>
          <k-input
            v-bind="field('title')"
            :value="content.title"
            @input="update({ title: $event })">
          </k-input>
        </p>
        <p>
          <k-input
            v-bind="field('date')"
            :value="content.date"
            @input="update({ date: $event })">
          </k-input>
        </p>
      </div>
      `
    },
  }
});