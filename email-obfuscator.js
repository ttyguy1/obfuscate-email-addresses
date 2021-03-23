//****************************************
// Email Obfuscator
// <a href="/" data-mail="box | domain | tld | subject"></a>
//****************************************

(function()
{
  var _mail_links = document.querySelectorAll('[data-mail]') || false;

  if(_mail_links)
  {
    _mail_links.forEach(function(link)
    {
      // Don't set address if link content is not empty
      if(link.innerHTML === '')
      {
        Mail_Set_Link_Content(link);
      }

      // Listen for link mouseover
      link.addEventListener('mouseover', function(e)
      {
        e.preventDefault();
        Mail_Set_HREF(this);
      }, {once: true});

      // Listen for link focus
      link.addEventListener('focus', function(e)
      {
        e.preventDefault();
        Mail_Set_HREF(this);
      }, {once: true});
    });
  }

  //****************************************
  // Set link content
  //****************************************

  function Mail_Set_Link_Content(link)
  {
    var mail = Mail_Format_String(link);

    if(mail.box && mail.dom && mail.tld)
    {
      link.innerHTML = mail.box + '@' + mail.dom + '.' + mail.tld;
    }
  }

  //****************************************
  // Set email href
  //****************************************

  function Mail_Set_HREF(link)
  {
    var mail = Mail_Format_String(link);

    if(mail.box && mail.dom && mail.tld)
    {
      link.href = 'mailto:' + mail.box + '@' + mail.dom + '.' + mail.tld + ((mail.sbj) ? '?subject=' + mail.sbj : '');
    }
  }

  //****************************************
  // Format mail string
  //****************************************

  function Mail_Format_String(link)
  {
    var mail = link.dataset.mail.split('|');

    var formatted_mail = {
      'box': ((mail.length > 0) ? mail[0].trim() : ''),
      'dom': ((mail.length > 1) ? mail[1].trim() : ''),
      'tld': ((mail.length > 2) ? mail[2].trim() : ''),
      'sbj': ((mail.length > 3) ? mail[3].trim() : '')
    };

    return formatted_mail;
  }

})();
