panel.plugin("architecturelandinitiative/blocks", {
  blocks: {
    // sectionblock: {
    //   template: `
    //   <div class="slider-block">
    //     <div class="slider-block-title">
    //         <h2>
    //           <k-input
    //               v-bind="field('title')"
    //               :value="content.title"
    //               @input="update({ title: $event })">
    //           </k-input>
    //         </h2>
    //     </div>
    //     <div v-for="item in content.blocks" class="slider-block-text">
    //         <div class="text-label">
    //           <p v-html="item.content.subtitle"></p>
    //         </div>
    //         <div class="text">
    //           <p v-html="item.content.copy"></p>
    //         </div>
    //     </div>
    //   </div>
    // `
    // },

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
    // sectiontext: {
    //   template: `
    //       <div class="slider-block-text">
    //       <div class="text-label">
    //           <k-input
    //             v-bind="field('subtitle')"
    //             :value="content.subtitle"
    //             @input="update({ subtitle: $event })">
    //           </k-input>
    //       </div>
    //       <div class="text">
    //           <k-writer
    //           v-bind="field('copy')"
    //           :value="content.copy"
    //           @input="update({ copy: $event })">
    //           </k-writer>
    //       </div>
    //       </div>
    //   `
    // },
    // sectiontitle: {
    //   computed: {
    //     placeholder() {
    //       return "Title ...";
    //     }
    //   },
    //   template: `
    //     <input
    //       type="text"
    //       :placeholder="placeholder"
    //       :value="content.title"
    //       @input="update({ title: $event.target.value })"
    //     />
    //   `
    // },



    // <p v-html="item.content.copy"></p>




    // subtext: {
    //   computed: {
    //     placeholder() {
    //       return "Testo secondario ...";
    //     }
    //   },
    //   template: `
    //     <div>
    //       <p>
    //         <k-writer
    //           v-bind="field('subtext')"
    //           :value="content.subtext"
    //           @input="update({ subtext: $event })">
    //         </k-writer>
    //       </p>
    //     </div>
    //   `
    // },

    // link: {
    //   computed: {
    //     placeholder() {
    //       return "Testo del pulsante ...";
    //     }
    //   },
    //   template: `
    //   <input
    //     type="text"
    //     :placeholder="placeholder"
    //     :value="content.text"
    //     @input="update({ text: $event.target.value })"
    //   />
    //   `
    // },
    // download: {
    //   computed: {
    //     placeholder() {
    //       return "Testo del pulsante ...";
    //     }
    //   },
    //   template: `
    //     <input
    //       type="text"
    //       :placeholder="placeholder"
    //       :value="content.text"
    //       @input="update({ text: $event.target.value })"
    //     />
    //   `
    // },
    // special: {
    //   computed: {
    //     placeholder() {
    //       return "Testo del pulsante ...";
    //     }
    //   },
    //   template: `
    //   <input
    //     type="text"
    //     :placeholder="placeholder"
    //     :value="content.text"
    //     @input="update({ text: $event.target.value })"
    //   />
    //   `
    // },
  }
});