import epoereum, { errors } from '/imports/lib/epoereum';

Template['layout_body'].onCreated(function(){
  epoereum.onStatusChange(status => {
    TemplateVar.set(this, 'networkError', false)
    TemplateVar.set(this, 'isReady', status.isReady)
    TemplateVar.set(this, 'description', status.description)
    if (status.theresAnError) {
      TemplateVar.set(this, 'theresAnError', status.theresAnError)
      if (status.description === errors.invalidNetwork) {
        TemplateVar.set(this, 'networkError', true)
      }
    }
    
  })
  epoereum.init();
});

Template['layout_body'].events({
  'click .retry': function() {
    epoereum.init();
  }
})


// CUSTOM ENS CONTRACT TEMPLATE
Template['useCustomContract'].events({
  'click .use-custom-contract .dapp-block-button': function() {
    const address = TemplateVar.getFrom('.ens-address', 'value');
    epoereum.setCustomContract(address)
    epoereum.init()
  }
}) 