function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp or FormApp.
  ui.createMenu('Email Personalizado ML')
      .addItem('Envio de email', 'envioEmailDoc')
      .addSeparator()
      .addToUi();
      
}


function envioEmailDoc() {
  var id = 'ID_SPREADSHEET';
  
  var url = 'https://docs.google.com/feeds/';
  var doc = UrlFetchApp.fetch(url+'download/documents/Export?exportFormat=html&format=html&id='+id,
                              googleOAuth_('docs',url)).getContentText();
  var emailAdress = Session.getEffectiveUser().getEmail();
  MailApp.sendEmail(emailAdress, 'Status Projetos - Logística', 'html only', {cc:"EMAIL_ENVIO",htmlBody:doc});
}

function googleOAuth_(name,scope) {
  var oAuthConfig = UrlFetchApp.addOAuthService(name);
  oAuthConfig.setRequestTokenUrl("https://www.google.com/accounts/OAuthGetRequestToken?scope="+scope);
  oAuthConfig.setAuthorizationUrl("https://www.google.com/accounts/OAuthAuthorizeToken");
  oAuthConfig.setAccessTokenUrl("https://www.google.com/accounts/OAuthGetAccessToken");
  oAuthConfig.setConsumerKey('anonymous');
  oAuthConfig.setConsumerSecret('anonymous');
  return {oAuthServiceName:name, oAuthUseToken:"always"};
}
