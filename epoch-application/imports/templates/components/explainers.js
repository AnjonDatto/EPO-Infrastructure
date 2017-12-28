
Template['component_explainerBody'].events({
  'click .explainer': function(e) {
      epoElements.Modal.show('modals_explainer', {
        class: 'explainer-modal'
      });
  }
});
a