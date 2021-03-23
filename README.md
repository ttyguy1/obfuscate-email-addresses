# Obfuscate Email Addresses

Add javascript source script
`<script src="/path/to/email-obfuscator.js"></script>`

Insert where you want to obfuscate an email address:
`<a href="/" data-mail="box | domain | tld | subject"></a>`

Replace "box", "domain", "tld", and "subject" with your email parts. The subject is optional.
`<a href="/" data-mail="tyler | mail | com | This is Optional"></a>`

And that's it! The script will handle the rest of the work. When the link is hovered or in focus it will update the href with the opropriate mailto link.
